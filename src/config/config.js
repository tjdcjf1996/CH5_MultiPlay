import { HOST, PORT } from '../constants/env.js';
import { PACKET_TOTAL_LENGTH, PACKET_TYPE_LENGTH } from '../constants/header.js';

export const config = {
  server: {
    PORT: PORT,
    HOST: HOST,
  },
  client: {
    version: '1.0.0',
  },
  packet: {
    totalLength: PACKET_TOTAL_LENGTH,
    TypeLength: PACKET_TYPE_LENGTH,
  },
};
