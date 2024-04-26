import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortcutService } from './shortcut.service';
import { CreateShortcutDto } from './dto/create-shortcut.dto';
import { UpdateShortcutDto } from './dto/update-shortcut.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('shortcut')
export class ShortcutController {
  constructor(private readonly shortcutService: ShortcutService) {}

  @Post()
  async create(
    @Body() { link, linkShort}: CreateShortcutDto,
  ) {
    return this.shortcutService.create({ link, linkShort});
  }

  @Get()
  findAll() {
    return this.shortcutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortcutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortcutDto: UpdateShortcutDto) {
    return this.shortcutService.update(+id, updateShortcutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortcutService.remove(+id);
  }
}
