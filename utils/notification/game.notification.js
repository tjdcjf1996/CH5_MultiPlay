import { config } from '../../src/config/config.js';
import { PACKET_TYPE } from '../../src/constants/header.js';
import { getProtoMessages } from '../../src/init/loadProto.js';

const makeNotification = (message, type) => {
  const packetTotalLength = Buffer.alloc(config.packet.totalLength);
  packetTotalLength.writeUInt32BE(
    message.length + config.packet.totalLength + config.packet.TypeLength,
    0,
  );

  const packetType = Buffer.alloc(config.packet.TypeLength);
  packetType.writeUInt8(type, 0);

  return Buffer.concat([packetTotalLength, packetType, message]);
};

export const createLocationPacket = (users) => {
  const protoMessages = getProtoMessages();
  const Location = protoMessages.locationResponse.LocationUpdate;

  const payload = { users };
  const message = Location.create(payload);
  const locationPacket = Location.encode(message).finish();
  return makeNotification(locationPacket, PACKET_TYPE.LOCATION);
};
