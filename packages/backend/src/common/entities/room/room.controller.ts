import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoomDto, JoinRoomDto } from './dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  @Post('create')
  async createRoom(@Body() body: CreateRoomDto) {
    const room = await this.roomService.createRoom(body);

    return room;
  }

  @Post('join')
  async joinRoom(@Body() body: JoinRoomDto) {
    const room = await this.roomService.joinRoom(body);

    return room;
  }

  @Post('rejoin')
  async rejoinRoom() {
    const room = await this.roomService.reJoinRoom({
      roomId: 1,
      name: 'test',
      userId: 1,
    });

    return room;
  }
}
