import { config } from '../../src/config/config.js';
import { PACKET_TYPE } from '../../src/constants/header.js';
import { getProtoMessages } from '../../src/init/loadProto.js';
import { getNextSequence } from '../../src/session/user.sessions.js';

export const createResponse = (handlerId, responseCode, data = null, userId) => {
  const protoMessages = getProtoMessages();
  const Response = protoMessages.response.Response;

  const responsePayload = {
    handlerId,
    responseCode,
    timestamp: Date.now(),
    data: data ? Buffer.from(JSON.stringify(data)) : null,
    sequence: userId ? getNextSequence(userId) : 0,
  };

  const buffer = Response.encode(responsePayload).finish();
  const packetTotalLength = Buffer.alloc(config.packet.totalLength);
  packetTotalLength.writeUInt32BE(
    config.packet.totalLength + config.packet.TypeLength + buffer.length,
    0,
  );
  const typeLength = Buffer.alloc(config.packet.TypeLength);
  typeLength.writeUInt8(PACKET_TYPE.NORMAL, 0);

  return Buffer.concat([packetTotalLength, typeLength, buffer]);
};
