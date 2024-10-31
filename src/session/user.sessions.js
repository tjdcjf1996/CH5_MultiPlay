import User from '../classes/user.class.js';
import { loadUser, saveUser } from '../models/user.model.js';
import { userSessions } from './sessions.js';
import { v4 as uuidV4 } from 'uuid';

// 새로운 사용자를 추가하고, 기존 데이터가 있으면 마지막 위치 정보를 반환
export const addUser = async (socket, uuid, latency) => {
  if (!uuid) uuid = uuidV4(); // UUID가 없으면 새 UUID 생성
  const savedInfo = await loadUser(uuid); // 기존 사용자 데이터 로드
  const user = new User(socket, uuid, latency); // 새 사용자 인스턴스 생성
  if (savedInfo.length !== 0) {
    user.x = savedInfo.x;
    user.y = savedInfo.y; // 기존 위치 정보가 있을 경우 위치 복원
    userSessions.push(user); // 세션에 사용자 추가
    return { user, lastX: savedInfo.x, lastY: savedInfo.y }; // 사용자 객체와 마지막 위치 반환
  }
  userSessions.push(user);
  return { user }; // 위치 정보 없이 사용자 객체만 반환
};

// 사용자를 세션에서 제거하고, 제거된 사용자 정보 반환
export const removeUser = (socket) => {
  const user = getUserBySocket(socket); // 소켓으로 사용자 검색
  saveUser(user.id, user.x, user.y); // 현재 위치를 저장
  const idx = userSessions.findIndex((user) => user.socket === socket);
  if (idx != -1) return userSessions.splice(idx, 1)[0]; // 사용자 세션에서 제거 후 반환
};

// 특정 사용자의 다음 시퀀스를 가져옴
export const getNextSequence = (uuid) => {
  const user = getUserById(uuid);
  if (user) {
    return user.getNextSequence();
  }
};

// UUID로 사용자를 검색하여 반환
export const getUserById = (uuid) => {
  return userSessions.find((user) => user.id === uuid);
};

// 소켓으로 사용자를 검색하여 반환
export const getUserBySocket = (socket) => {
  return userSessions.find((user) => user.socket === socket);
};
