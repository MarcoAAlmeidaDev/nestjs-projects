import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Recado } from './entities/recado.entity';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecadosService {
  constructor(@InjectRepository(Recado) private readonly recadoRepository: Repository<Recado>) {}
  

  async findAll(): Promise<Recado[]> {
    const recados = await this.recadoRepository.find();
    return recados;
  }

  async findOne(id: number): Promise<Recado> {

    const recado = await this.recadoRepository.findOne({
      where: {id: id}
    });

    if (!recado) {
      throw new HttpException('Recado não encontrado', HttpStatus.NOT_FOUND);
    }

    return recado;
 }

  create(createRecadoDto: CreateRecadoDto): Promise<Recado> {
    
    const novoRecado = {
      ...createRecadoDto,
      lido: false,
      data: new Date()
    };

    const recado =  this.recadoRepository.create(novoRecado);
    return this.recadoRepository.save(recado);
 }

 async update(updateRecadoDto: UpdateRecadoDto, id: number) {
    const recado = await this.recadoRepository.preload({
      id,
      ...updateRecadoDto
    });

    if(!recado) {
      throw new HttpException('Recado não encontrado', HttpStatus.NOT_FOUND);
    };

    return this.recadoRepository.save(recado);
 }

  async remove(id: number): Promise<Recado> {
      const recado = await this.recadoRepository.findOne({
        where: {id: id}
      });

      if (!recado) {
        throw new HttpException('Este Recado Não Existe', HttpStatus.NOT_FOUND);
      }

      return this.recadoRepository.remove(recado);
  }
}