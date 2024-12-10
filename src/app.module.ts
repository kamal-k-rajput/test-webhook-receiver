import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TokenModule } from './token/token.module';
import { WebhookModule } from './webhook/webhook.module';

@Module({
  imports: [TokenModule, WebhookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
