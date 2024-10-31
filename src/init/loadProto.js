import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import protobuf from 'protobufjs';
import { packetNames } from '../protobuf/packetNames.js';
import { formatDate } from '../../utils/dateFormatter.js';

// 현재 파일의 경로와 디렉토리를 가져옴
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const protoDir = path.join(__dirname, '../protobuf'); // .proto 파일들이 있는 디렉토리 경로 설정

// 주어진 디렉토리에서 .proto 파일을 재귀적으로 검색하여 파일 목록 반환
const getAllProto = (dir, fileList = []) => {
  const files = fs.readdirSync(dir); // 주어진 디렉토리 내 모든 파일과 폴더 목록 읽기
  files.forEach((file) => {
    const filePath = path.join(dir, file);

    // 하위 디렉토리가 있으면 재귀적으로 호출하여 .proto 파일 검색
    if (fs.statSync(filePath).isDirectory()) {
      getAllProto(filePath, fileList);
    } else if (path.extname(file) === '.proto') {
      fileList.push(filePath); // .proto 파일 경로를 fileList 배열에 추가
    }
  });

  return fileList; // 모든 .proto 파일의 경로 목록 반환
};

// .proto 파일 목록 가져오기
const protoFiles = getAllProto(protoDir);

// .proto 메시지 객체를 저장할 객체
const protoMessages = {};

// 모든 .proto 파일을 비동기적으로 로드하여 메시지를 protoMessages 객체에 저장
export const loadProtos = async () => {
  try {
    const root = new protobuf.Root(); // 프로토콜 버퍼의 루트 객체 생성

    // 모든 .proto 파일을 로드하여 병합
    await Promise.all(protoFiles.map((file) => root.load(file)));

    // packetNames에서 각 패키지 이름과 타입을 기반으로 protoMessages에 저장
    for (const [packageName, types] of Object.entries(packetNames)) {
      protoMessages[packageName] = {};
      for (const [type, typeName] of Object.entries(types)) {
        protoMessages[packageName][type] = root.lookupType(typeName); // .proto 타입을 찾아 저장
      }
    }

    const date = new Date();
    console.log(`[${formatDate(date)} - LOAD] Success to load protobuf files`);
  } catch (err) {
    const date = new Date();
    console.error(`[${formatDate(date)} - FAIL] Fail to load protobuf files`);
  }
};

// protoMessages 객체 얕은복사 후 반환
export const getProtoMessages = () => {
  return { ...protoMessages };
};
