<p align="center">
    <img src="https://teamsparta.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F83c75a39-3aba-4ba4-a792-7aefe4b07895%2F0fc84f35-a558-4a5c-a19b-f038d8c4bb6d%2FUntitled.png?table=block&id=d55aaf8b-d1f5-4c00-9ac3-04699d0877f6&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=960&userId=&cache=v2" align="center" width="30%">
</p>
<p align="center"><h1 align="center">CH5_MULTIPLAY</h1></p>
<br>
## Project Structure

```sh
└── CH5_MultiPlay/
    ├── README.md
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── classes
    │   ├── config
    │   ├── constants
    │   ├── events
    │   ├── handlers
    │   ├── init
    │   ├── managers
    │   ├── models
    │   ├── mysql
    │   ├── protobuf
    │   ├── server.js
    │   └── session
    └── utils
        ├── dateFormatter.js
        ├── notification
        ├── parser
        └── response
```

### Project Index

<details open>
	<summary><b><code>CH5_MULTIPLAY/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ </code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/package.json'>package.json</a></b></td>
				<td><code>❯ </code></td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- src Submodule -->
		<summary><b>src</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/server.js'>server.js</a></b></td>
				<td><code>❯ </code></td>
			</tr>
			</table>
			<details>
				<summary><b>session</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/session/user.sessions.js'>user.sessions.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/session/game.session.js'>game.session.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/session/sessions.js'>sessions.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>handlers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/handlers/locationUpdate.handler.js'>locationUpdate.handler.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/handlers/init.handler.js'>init.handler.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/handlers/game.handler.js'>game.handler.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/handlers/index.js'>index.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>init</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/init/loadProto.js'>loadProto.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/init/initServer.js'>initServer.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/config/config.js'>config.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>events</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/events/onError.js'>onError.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/events/onData.js'>onData.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/events/onConnection.js'>onConnection.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/events/onEnd.js'>onEnd.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>mysql</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/mysql/testDataBase.js'>testDataBase.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/mysql/createPool.js'>createPool.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>constants</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/constants/env.js'>env.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/constants/sessions.js'>sessions.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/constants/handlerIds.js'>handlerIds.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/constants/header.js'>header.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/constants/frame.js'>frame.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>protobuf</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/protobuf/packetNames.js'>packetNames.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
					<details>
						<summary><b>init</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/protobuf/init/initial.proto'>initial.proto</a></b></td>
								<td><code>❯ </code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>response</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/protobuf/response/response.proto'>response.proto</a></b></td>
								<td><code>❯ </code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>notification</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/protobuf/notification/locationResponse.proto'>locationResponse.proto</a></b></td>
								<td><code>❯ </code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>request</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/protobuf/request/common.proto'>common.proto</a></b></td>
								<td><code>❯ </code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/protobuf/request/game.proto'>game.proto</a></b></td>
								<td><code>❯ </code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/protobuf/request/locationRequest.proto'>locationRequest.proto</a></b></td>
								<td><code>❯ </code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>classes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/classes/game.class.js'>game.class.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/classes/user.class.js'>user.class.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>models</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/models/user.model.js'>user.model.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>managers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/managers/base.manager.js'>base.manager.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/managers/interval.manager.js'>interval.manager.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- utils Submodule -->
		<summary><b>utils</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/utils/dateFormatter.js'>dateFormatter.js</a></b></td>
				<td><code>❯ </code></td>
			</tr>
			</table>
			<details>
				<summary><b>response</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/utils/response/createResponse.js'>createResponse.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>parser</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/utils/parser/packetParser.js'>packetParser.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>notification</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/utils/notification/game.notification.js'>game.notification.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

### Implement

<details open>
<summary><b>헤더 및 패킷구조 설계 </b></summary>
<blockquote>

<details>
<summary><b> 헤더 </b></summary>
<blockquote>
<table>
    <thead>
        <tr>
            <th>타입</th>
            <th>번호</th>
            <th>설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>PONG</td>
            <td>string</td>
            <td>핑 패킷용</td>
        </tr>
        <tr>
            <td>NORMAL</td>
            <td>string</td>
            <td>일반 패킷용</td>
        </tr>
        <tr>
            <td>LOCATION</td>
            <td>number</td>
            <td>위치 보고 패킷용</td>
        </tr>
    </tbody>
</table>

</blockquote>
</details>

<details>
<summary><b> 공통패킷 </b></summary>
<blockquote>
<table>
    <thead>
        <tr>
            <th>타입</th>
            <th>패킷명</th>
            <th>설명</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>uint32</td>
            <td>handlerId</td>
            <td>핑 패킷용</td>
        </tr>
        <tr>
            <td>string</td>
            <td>userId</td>
            <td>일반 패킷용</td>
        </tr>
        <tr>
            <td>string</td>
            <td>version</td>
            <td>위치 보고 패킷용</td>
        </tr>
        <tr>
            <td>bytes</td>
            <td>payload</td>
            <td>위치 보고 패킷용</td>
        </tr>
    </tbody>
</table>

</blockquote>
</details>

</blockquote>
</details>

<details open>
<summary><b> protoBuf 적용 </b></summary>
<blockquote>

<details>
<summary><b> initial </b></summary>
<blockquote>
  <pre><code>
message InitialPayload{
    string deviceId = 1;
    uint32 playerId = 2;
    float latency =3;
}
  </code></pre>
</blockquote>
</details>

<details>
<summary><b> locationResponse </b></summary>
<blockquote>
  <pre><code>
message LocationUpdate {
  repeated UserLocation users = 1;

message UserLocation {
string id = 1;
uint32 playerId = 2;
float x = 3;
float y = 4;
}
}
</code></pre>

</blockquote>
</details>

<details>
<summary><b> common </b></summary>
<blockquote>
  <pre><code>
message CommonPacket{
    uint32 handlerId = 1;
    string userId = 2;
    string version = 3;
    bytes payload = 4;
}
  </code></pre>
</blockquote>
</details>

<details>
<summary><b> ping </b></summary>
<blockquote>
  <pre><code>
message Ping {
    int64 timestamp = 1;
}
  </code></pre>
</blockquote>
</details>

<details>
<summary><b> LocationRequest </b></summary>
<blockquote>
  <pre><code>
message LocationUpdatePayload {

    float x = 1;
    float y = 2;

}
</code></pre>

</blockquote>
</details>

<details>
<summary><b> response </b></summary>
<blockquote>
  <pre><code>
message Response {
    uint32 handlerId = 1;
    uint32 responseCode = 2;
    int64 timestamp = 3;
    bytes data = 4;
}

</code></pre>

</blockquote>
</details>

</blockquote>
</details>

<details open>
<summary><b> DB 연동 </b></summary>
<blockquote>

![image](https://github.com/user-attachments/assets/d9f88560-a87f-426e-80b8-506f5c6f74ef)

이 프로젝트는 데이터 저장소로 MySQL을 사용합니다. 사용자 마지막 위치정보를 MySQL에 저장하며, 서버와의 데이터 동기화를 통해 게임 상태를 유지합니다.

#### USER_DB

---

<table>
    <thead>
        <tr>
            <th>Column</th>
            <th>Data Type</th>
            <th>Attributes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>CHAR</td>
            <td>PRIMARY KEY</td>
        </tr>
        <tr>
            <td>device_id</td>
            <td>CHAR</td>
            <td>UNIQUE</td>
        </tr>
        <tr>
            <td>last_login</td>
            <td>TIMESTAMP</td>
            <td>DEFAULT NOW()</td>
        </tr>
        <tr>
            <td>x</td>
            <td>FLOAT</td>
            <td></td>
        </tr>
        <tr>
            <td>y</td>
            <td>FLOAT</td>
            <td></td>
        </tr>
    </tbody>
</table>

---

</blockquote>
</details>

<details open>
<summary><b> Latency 측정 및 추측항법 </b></summary>

이 프로젝트는 인터벌 매니저를 통한 1000ms당 PING 측정으로 각 유저의
RTT를 체크하고 각 인스턴스에 기록합니다.

게임 세션은 참가되어 있는 유저들의 Latency 중 최대치를 기준으로 설정됩니다.

레이턴시 및 명령어 처리 기반 시간을 측정하여 예상 거리를 예측하여 위치패킷을 반환합니다.

![image](https://github.com/user-attachments/assets/1ffb5ab9-fa28-409d-9773-bfc9384ff9a1)

<details>
				<summary><b>managers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/managers/base.manager.js'>base.manager.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/tjdcjf1996/CH5_MultiPlay/blob/master/src/managers/interval.manager.js'>interval.manager.js</a></b></td>
						<td><code>❯ </code></td>
					</tr>
					</table>
				</blockquote>
			</details>

</details>

<details open>
<summary><b> 게임세션 자동 증감 </b></summary>

![image](https://github.com/user-attachments/assets/0ff69fc9-4ed4-4f8c-a31f-9d755d3837d7)

이 프로젝트는 게임 세션이 유저 수에 따라 자동 증가, 감소합니다.
세션 당 인원이 많을수록 위치 패킷이 증가하여 사용자 경험이 저하될 수 있습니다.

src/constans/session.js 에서 세션 당 허용 인원을 설정할 수 있고,
현재는 세션당 최대 인원은 3명입니다.

유저는 처음 들어왔을 때 생성된 세션 중 가장 인원이 적은 곳으로 배치됩니다.
생성된 세션이 없거나, 모든 세션이 최대 인원일 경우 자동으로 세션을 생성 후
배치합니다.

유저가 해당 세션을 떠날 때 세션에 남아있는 유저가 없다면, 해당 세션을
삭제합니다.

</details>

<details open>
<summary><b> 게임세션 인터벌 레이턴시 유지 </b></summary>

게임 세션이 정해진 시간(현재 1000ms)마다 세션 내 유저의 레이턴시를 종합하여
최고 레이턴시 기준으로 세션 레이턴시를 할당합니다.

</details>
