import { Test, TestingModule } from '@nestjs/testing';
import { ShortcutController } from './shortcut.controller';
import { ShortcutService } from './shortcut.service';

describe('ShortcutController', () => {
  let controller: ShortcutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortcutController],
      providers: [ShortcutService],
    }).compile();

    controller = module.get<ShortcutController>(ShortcutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
