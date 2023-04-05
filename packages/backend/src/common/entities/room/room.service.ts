import { Injectable } from '@nestjs/common';
import {
  CreateRoomFields,
  JoinRoomFields,
  ReJoinRoomFields,
} from './room.types';
import { createRoomID, createUserID } from '../../shared/utils';

@Injectable()
export class RoomService {
  async createRoom(fields: CreateRoomFields) {
    const roomId = createRoomID();
    const userId = createUserID();

    return {
      ...fields,
      roomId,
      userId,
    };
  }

  async joinRoom(fields: JoinRoomFields) {
    const userId = createUserID();

    return {
      ...fields,
      userId,
    };
  }

  async reJoinRoom(fields: ReJoinRoomFields) {
    return fields;
  }
}
