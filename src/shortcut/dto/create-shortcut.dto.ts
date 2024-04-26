import { IsString } from "class-validator";

export class CreateShortcutDto {
@IsString()
link: string

@IsString()
linkShort: string
}
