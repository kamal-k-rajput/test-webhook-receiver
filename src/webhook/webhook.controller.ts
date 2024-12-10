import {
  Controller,
  Post,
  Headers,
  UnauthorizedException,
  Body,
} from '@nestjs/common';
import { TokenService } from '../token/token.service';

@Controller('ctg')
export class WebhookController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('webhook')
  handleWebhook(
    @Headers('authorization') authToken: string,
    @Body() body: any,
  ) {
    if (!authToken || !this.tokenService.validateToken(authToken)) {
      throw new UnauthorizedException('Invalid token');
    }
    console.log(body, 'payload');
    return {
      status: 'success',
      message: 'Webhook received successfully',
    };
  }
}
