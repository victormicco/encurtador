import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortcutModule } from './shortcut/shortcut.module';

@Module({
  imports: [ShortcutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
