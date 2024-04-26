import { Module } from '@nestjs/common';
import { ShortcutService } from './shortcut.service';
import { ShortcutController } from './shortcut.controller';

@Module({
  controllers: [ShortcutController],
  providers: [ShortcutService],
})
export class ShortcutModule {}
