import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateShortcutDto } from './dto/create-shortcut.dto';
import { UpdateShortcutDto } from './dto/update-shortcut.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ShortcutService {
  constructor(private readonly prisma: PrismaService) {}
  async create({link, linkShort}: CreateShortcutDto) {
    return this.prisma.domain.create({
      data: {
        link,
        linkShort
      }
    })
  }

  findAll() {
    return  this.prisma.domain.findMany()
  }

  async findOne(id: number) {
    if (!(await this.prisma.domain.findUnique({ where: { id } }))) {
      throw new NotFoundException('ID not found');
    }
    return this.prisma.domain.findUnique({
      where: {
        id
      }
    })
  }

  update(id: number, updateShortcutDto: UpdateShortcutDto) {
    return `This action updates a #${id} shortcut`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortcut`;
  }
}
