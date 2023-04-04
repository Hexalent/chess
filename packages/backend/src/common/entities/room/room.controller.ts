import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoomDto, JoinRoomDto } from './dto';

@Controller('room')
export class RoomController {
  @Post('create')
  async createRoom(@Body() body: CreateRoomDto) {
    // TODO: Implement create room logic
    return body;
  }

  @Post('join')
  async joinRoom(@Body() body: JoinRoomDto) {
    // TODO: Implement join room logic
    return body;
  }

  @Post('rejoin')
  async rejoinRoom(@Body() body: any) {
    // TODO: Implement rejoin room logic
    return 'Rejoined room';
  }
}
