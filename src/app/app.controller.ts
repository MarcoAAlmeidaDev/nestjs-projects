import { Controller, Get } from '@nestjs/common';
import { AppService, Produto } from './app.service';

@Controller('produtos')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  listarProdutos(): Produto[] {
    return this.appService.getProdutos();
  }
}
