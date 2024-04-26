import { Injectable } from '@nestjs/common';
import { CreateShortcutDto } from './dto/create-shortcut.dto';
import { UpdateShortcutDto } from './dto/update-shortcut.dto';

@Injectable()
export class ShortcutService {
  create(createShortcutDto: CreateShortcutDto) {
    return 'This action adds a new shortcut';
  }

  findAll() {
    return `This action returns all shortcut`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortcut`;
  }

  update(id: number, updateShortcutDto: UpdateShortcutDto) {
    return `This action updates a #${id} shortcut`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortcut`;
  }
}
