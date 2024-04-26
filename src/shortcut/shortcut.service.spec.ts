import { Test, TestingModule } from '@nestjs/testing';
import { ShortcutService } from './shortcut.service';

describe('ShortcutService', () => {
  let service: ShortcutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortcutService],
    }).compile();

    service = module.get<ShortcutService>(ShortcutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
