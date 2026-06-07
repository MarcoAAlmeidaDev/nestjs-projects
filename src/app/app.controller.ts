import { Controller, Get } from '@nestjs/common';
// import { AppService, Produto } from './app.service';

@Controller('produtos')
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get('listas')
  listarProdutos(): string {
    return 'Lista de produtos';
  }

  @Get('exemplo')
  exemplo(): string {
    return 'Exemplo de endpoint';
  }
}
