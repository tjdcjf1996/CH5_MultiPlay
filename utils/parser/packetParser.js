import { config } from '../../src/config/config.js';
import { getProtoMessages } from '../../src/init/loadProto.js';
import { getProtoTypeNameByHandlerId } from '../../src/handlers/index.js';

export const packetParser = async (data) => {
  const protoMessages = getProtoMessages();
  // 공통 패킷
  const Packet = protoMessages.common.CommonPacket;
  let packet;
  try {
    packet = Packet.decode(data);
  } catch (err) {
    console.error('디코딩 실패', err);
  }

  const { handlerId, userId, version } = packet;

  if (version !== config.client.version) {
    throw new Error('버전 관리해라');
  }

  const protoTypeName = getProtoTypeNameByHandlerId(handlerId);

  const [namespace, typeName] = protoTypeName.split('.');
  const payloadType = protoMessages[namespace][typeName];
  let payload;
  try {
    payload = payloadType.decode(packet.payload);
  } catch (err) {
    console.error(err);
  }
  const expectedFields = Object.keys(payloadType.fields);
  const actualFields = Object.keys(payload);
  const missingFields = expectedFields.filter((field) => !actualFields.includes(field));

  if (missingFields.length > 0) {
    throw new Error('뭔가 하나 빠짐');
  }

  return { handlerId, userId, payload };
};
