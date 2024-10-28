import User from '../classes/user.class.js';
import { loadUser, saveUser } from '../models/user.model.js';
import { userSessions } from './sessions.js';
import { v4 as uuidV4 } from 'uuid';

export const addUser = async (socket, uuid, latency) => {
  if (!uuid) uuid = uuidV4();
  const savedInfo = await loadUser(uuid);
  const user = new User(socket, uuid, latency);
  if (savedInfo.length !== 0) {
    user.x = savedInfo.x;
    user.y = savedInfo.y;
    userSessions.push(user);
    return { user, lastX: savedInfo.x, lastY: savedInfo.y };
  }
  userSessions.push(user);
  return { user };
};

export const removeUser = (socket) => {
  const user = getUserBySocket(socket);
  saveUser(user.id, user.x, user.y);
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
