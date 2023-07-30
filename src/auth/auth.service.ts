import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash,
      },
    });
    return user;
  }
  // async signup(dto: AuthDto) {
  //   const hash = await argon.hash(dto.password);
  //   const user = await this.prisma.user.create({
  //     data: {
  //       email: dto.email,
  //       hash,
  //     },
  //   });
  //   return user;
  // }
}
