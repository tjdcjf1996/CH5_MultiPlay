import { HANDLER_IDS } from '../constants/handlerIds.js';

const handlers = {
  [HANDLER_IDS.INITIAL]: {
    protoType: 'initial.InitialPayload',
  },
};

export const getProtoTypeNameByHandlerId = (handlerId) => {
  if (!handlers[handlerId]) throw new Error('프로토타입 없음');
  return handlers[handlerId].protoType;
};
