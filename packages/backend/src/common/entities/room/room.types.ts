export type CreateRoomFields = {
  name: string;
  maxNumPlayers: number;
};

export type JoinRoomFields = {
  roomId: number;
  name: string;
};

export type ReJoinRoomFields = {
  roomId: number;
  userId: number;
  name: string;
};
