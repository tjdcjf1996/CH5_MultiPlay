import { HANDLER_IDS } from '../constants/handlerIds.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    protoType: 'initial.InitialPayload',
  },
};

export const getHandlerById = (handlerId) => {
  if (!handlers[handlerId]) {
    console.error('핸들러 아이디를 찾을 수 없습니다.');
  }
  return handlers[handlerId];
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) throw new Error('프로토타입 없음');
  return handlers[handlerId].protoType;
};
