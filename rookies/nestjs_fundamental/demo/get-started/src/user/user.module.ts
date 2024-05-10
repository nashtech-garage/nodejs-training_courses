import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/db/prisma.service';
import { RoleResolver } from './role.resolver';

@Module({
  providers: [UserResolver, RoleResolver, UserService, PrismaService],
})
export class UserModule {}
