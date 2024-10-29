import { packetParser } from '../../utils/parser/packetParser.js';
import { config } from '../config/config.js';
import { PACKET_TYPE } from '../constants/header.js';
import { getHandlerById } from '../handlers/index.js';
import { getProtoMessages } from '../init/loadProto.js';
import { getUserBySocket } from '../session/user.sessions.js';

export const onData = (socket) => async (data) => {
  // 기존 버퍼에 데이터 추가
  socket.buffer = Buffer.concat([socket.buffer, data]);
  // 전체 헤더 길이 구하기
  const totalHeaderLength = config.packet.totalLength + config.packet.TypeLength;
  // 버퍼의 크기가 헤더의 길이보다 길거나 같을 때 실행
  while (socket.buffer.length >= totalHeaderLength) {
    const bufferTotalLength = socket.buffer.readUInt32BE(0);
    const packetType = socket.buffer.readUInt8(config.packet.totalLength);

    // 소켓 버퍼의 길이가 데이터 총 길이보다 길 때 추출
    if (socket.buffer.length >= bufferTotalLength) {
      const packet = socket.buffer.slice(totalHeaderLength, bufferTotalLength);
      socket.buffer = socket.buffer.slice(bufferTotalLength);

      switch (packetType) {
        case PACKET_TYPE.PONG:
          const protoMessages = getProtoMessages();
          const Ping = protoMessages.common.Ping;
          const pingMessage = Ping.decode(packet);
          const user = getUserBySocket(socket);
          if (!user) throw new Error('유저 못 찾음');
          user.Pong(pingMessage);
          console.log(user.latency);
          break;
        case PACKET_TYPE.NORMAL:
          const { handlerId, userId, payload } = await packetParser(packet);
          const handler = getHandlerById(handlerId);

          handler(socket, userId, payload);
      }
    } else {
      break;
    }
  }
};
