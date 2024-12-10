import { Controller, Post, Body } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('oauth2')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @Post('token')
  generateToken(
    @Body('clientId') clientId: string,
    @Body('clientSecret') clientSecret: string,
  ) {
    console.log(clientId, clientSecret, 'clientId, clientSecret');
    return {
      access_token: this.tokenService.generateAccessToken(
        clientId,
        clientSecret,
      ),
      expires_in: 3600,
    };
  }
}
