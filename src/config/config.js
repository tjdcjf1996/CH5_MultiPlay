import {
  DB1_HOST,
  DB1_NAME,
  DB1_PASSWORD,
  DB1_PORT,
  DB1_USER,
  HOST,
  PORT,
} from '../constants/env.js';
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
  database: {
    USER_DB: {
      name: DB1_NAME,
      user: DB1_USER,
      password: DB1_PASSWORD,
      host: DB1_HOST,
      port: DB1_PORT,
    },
  },
};
