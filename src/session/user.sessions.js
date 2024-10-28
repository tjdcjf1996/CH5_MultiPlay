import User from '../classes/user.class.js';
import { userSessions } from './sessions.js';
import { v4 as uuidV4 } from 'uuid';

export const addUser = (socket, uuid, latency) => {
  if (!uuid) uuid = uuidV4();
  const user = new User(socket, uuid, latency);
  userSessions.push(user);
  console.log(user);
  return user;
};

export const removeUser = (socket) => {
  const idx = userSessions.findIndex((user) => user.socket === socket);
  if (idx != -1) return userSessions.splice(idx, 1)[0];
};

export const getNextSequence = (uuid) => {
  const user = getUserById(uuid);
  if (user) {
    return user.getNextSequence();
  }
};

export const getUserById = (uuid) => {
  return userSessions.find((user) => user.id === uuid);
};

export const getUserBySocket = (socket) => {
  return userSessions.find((user) => user.socket === socket);
};
