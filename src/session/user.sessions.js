import User from '../classes/user.class.js';
import { userSessions } from './sessions.js';

export const addUser = (socket, uuid) => {
  const user = new User(uuid, socket);
  userSessions.push(user);
  return user;
};

export const removeUser = (socket) => {
  const idx = userSessions.findIndex((user) => user.socket === socket);
  if (idx != -1) return userSessions.splice(index, 1)[0];
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
