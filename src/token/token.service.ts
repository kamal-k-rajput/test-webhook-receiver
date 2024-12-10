import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class TokenService {
  private readonly validClientId = 'abc';
  private readonly validClientSecret = '123';
  private storedAccessToken = 'generated_token';

  generateAccessToken(clientId: string, clientSecret: string): string {
    if (
      clientId === this.validClientId &&
      clientSecret === this.validClientSecret
    ) {
      // Generate a token based on the current 5-minute interval
      //   const timeSlot = Math.floor(Date.now() / (5 * 60 * 1000));
      //   const tokenBase = `${this.validClientId}_${timeSlot}`;
      //   const token = Buffer.from(tokenBase).toString('base64');

      return this.storedAccessToken;
    }
    throw new UnauthorizedException('Invalid client credentials');
  }

  validateToken(token: string): boolean {
    // Remove 'Bearer ' prefix if present
    console.log(token, 'token');
    const cleanToken = token.replace(/^Bearer\s+/i, '');
    // Compare with the stored/generated token
    console.log(cleanToken, 'cleanToken');
    console.log(this.storedAccessToken, 'storedAccessToken');

    return cleanToken === this.storedAccessToken;
  }
}
