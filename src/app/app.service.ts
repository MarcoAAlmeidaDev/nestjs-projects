import { Injectable } from '@nestjs/common';

export interface Produto {
  id: number;
  nome: string;
  preco: number;
}

@Injectable()
export class AppService {
  getProdutos(): Produto[] {
    return [
      { id: 1, nome: 'Produto A', preco: 10.99 },
      { id: 2, nome: 'Produto B', preco: 19.99 },
      { id: 3, nome: 'Produto C', preco: 5.49 },
    ];
  }
}
