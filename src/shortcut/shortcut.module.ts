import { Module } from '@nestjs/common';
import { ShortcutService } from './shortcut.service';
import { ShortcutController } from './shortcut.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ShortcutController],
  providers: [ShortcutService],
})
export class ShortcutModule {}
