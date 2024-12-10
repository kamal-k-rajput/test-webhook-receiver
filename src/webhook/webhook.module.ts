import { Module } from '@nestjs/common';
import { TokenModule } from '../token/token.module';
import { WebhookController } from './webhook.controller';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [TokenModule],
  controllers: [WebhookController],
  providers: [TokenService],
})
export class WebhookModule {}
