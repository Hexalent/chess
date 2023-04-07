import { IsNumber, IsString, Length } from 'class-validator';

export class JoinRoomDto {
  @IsNumber()
  roomId: number;

  @IsString()
  @Length(1, 25)
  name: string;
}
