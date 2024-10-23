import { config } from '../../src/config/config.js';
import { getProtoMessages } from '../../src/init/loadProto.js';

export const packetParser = (data) => {
  const protoMessages = getProtoMessages();
  // 공통 패킷
  const Packet = protoMessages.common.CommonPacket;
  let packet;
  try {
    packet = Packet.decode(data);
  } catch (err) {
    console.error('디코딩 실패', err);
  }

  const { handlerId, userId, version, payload } = packet;

  if (version !== config.client.version) {
    throw new Error('버전 관리해라');
  }
  return { handlerId, userId, payload };
};
