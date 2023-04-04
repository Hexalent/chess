import { IsInt, IsString, Length, Max, Min } from 'class-validator';

export class CreateRoomDto {
  @IsString()
  @Length(1, 25)
  name: string;

  @IsInt()
  @Min(1)
  @Max(5)
  capacity: number;
}
