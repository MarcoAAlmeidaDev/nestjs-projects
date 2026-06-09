import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecadosModule } from '../recados/recados.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from '../pessoas/pessoas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      database: 'postgres',
      password: 'Marco142536',
      autoLoadEntities: true, // Carrega entidades sem precisar especifica-las manualmente
      synchronize: true, // Sincroniza o banco de dados com as entidades (Não use em produção)
    }),
    RecadosModule,
    PessoasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
