import { Injectable, HttpStatus, HttpException, ConflictException} from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PessoasService {
  constructor(@InjectRepository(Pessoa) private pessoaRepository: Repository<Pessoa>) {}

  async create(createPessoaDto: CreatePessoaDto) {
    try {
        const dadosPessoa = {
        nome: createPessoaDto.nome,
        passwordHash: createPessoaDto.password,
        email: createPessoaDto.email
      }

        const novaPessoa = this.pessoaRepository.create(dadosPessoa);
        await this.pessoaRepository.save(novaPessoa);
        return novaPessoa;
    } catch (error: any) { 
      if (error.code === '23505') {
        throw new ConflictException('Email já existe');
      }

      throw error;
   }
  }

  findAll() {
    return `This action returns all pessoas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoa`;
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return `This action updates a #${id} pessoa`;
  }

  async remove(id: number): Promise<Pessoa> {
    const pessoa = await this.pessoaRepository.findOne( {
      where: {id: id},
    });

    if (!pessoa) {
      throw new HttpException('Pessoa não encontrada', HttpStatus.NOT_FOUND);
    }

    return this.pessoaRepository.remove(pessoa);
  }
}
