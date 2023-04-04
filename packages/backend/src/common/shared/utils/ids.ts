import { v1, v3 } from 'uuid';

const options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date('2011-11-01').getTime(),
  nsecs: 5678,
};

export const createRoomID = () => v1(options);
export const createUserID = () => v3('user', v1(options));
