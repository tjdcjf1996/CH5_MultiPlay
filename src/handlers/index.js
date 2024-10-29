import { HANDLER_IDS } from '../constants/handlerIds.js';
import { initHandler } from './init.handler.js';
import locationUpdateHandler from './locationUpdate.handler.js';
import { pingHandler } from './ping.handler.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    protoType: 'initial.InitialPayload',
    handler: initHandler,
  },
  [HANDLER_IDS.PONG]: {
    protoType: 'common.Ping',
    handler: pingHandler,
  },
  [HANDLER_IDS.LOCATION_UPDATE]: {
    protoType: 'locationRequest.LocationUpdatePayload',
    handler: locationUpdateHandler,
  },
};

export const getHandlerById = (handlerId) => {
  if (!handlers[handlerId]) {
    console.error('핸들러 아이디를 찾을 수 없습니다.');
  }
  return handlers[handlerId].handler;
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) throw new Error('프로토타입 없음');
  return handlers[handlerId].protoType;
};
