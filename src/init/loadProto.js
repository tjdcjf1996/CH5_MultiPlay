import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import protobuf from 'protobufjs';
import { packetNames } from '../protobuf/packetNames.js';
import { formatDate } from '../../utils/dateFormatter.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const protoDir = path.join(__dirname, '../protobuf');

const getAllProto = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      getAllProto(filePath, fileList);
    } else if (path.extname(file) === '.proto') {
      fileList.push(filePath);
    }
  });

  return fileList;
};

const protoFiles = getAllProto(protoDir);

const protoMessages = {};

export const loadProtos = async () => {
  try {
    const root = new protobuf.Root();

    await Promise.all(protoFiles.map((file) => root.load(file)));

    for (const [packageName, types] of Object.entries(packetNames)) {
      protoMessages[packageName] = {};
      for (const [type, typeName] of Object.entries(types)) {
        protoMessages[packageName][type] = root.lookupType(typeName);
      }
    }
    const date = new Date();
    console.log(`[${formatDate(date)} - LOAD] Success to load protobuf files`);
  } catch (err) {
    const date = new Date();
    console.error(`[${formatDate(date)} - FAIL] Fail to load protobuf files`);
  }
};

export const getProtoMessages = () => {
  return { ...protoMessages };
};
