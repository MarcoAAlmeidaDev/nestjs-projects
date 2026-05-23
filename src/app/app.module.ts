import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceitoManualModule } from '../conceitos-manual/conceito-manual.module';
import { ConceitosAutomaticosModule } from '../conceitos-automaticos/conceitos-automaticos.module';

@Module({
  imports: [ConceitoManualModule, ConceitosAutomaticosModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}