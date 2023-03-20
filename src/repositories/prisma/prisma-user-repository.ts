import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/config/prisma';
import { User } from "@prisma/client";
import { UserRepository } from "../user-repository";

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) { }

  async findMany(): Promise<User[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }
}