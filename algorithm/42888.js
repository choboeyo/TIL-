//  function solution(record) {
//          let splitRecord = record.map(el => el.split(' '));
//          let chatRoom = [];

//       for(let i = 0; i < splitRecord.length; i ++) {
//           let type = splitRecord[i][0];
//           let id = splitRecord[i][1];
//           let nickName = splitRecord[i][2];
//           let findChatRoom = chatRoom.filter(el => el[0]  ===  id);
//           let findeIndex = chatRoom.indexOf(findChatRoom[0]);
//           let findeIndex2 = chatRoom.indexOf(findChatRoom[1]);

//         if(type === 'Enter') {
//             chatRoom.push([id, nickName,'님이 들어왔습니다.']);
//             if(findChatRoom.length > 0) {
//                 if(findeIndex2 !== -1) {
//                     chatRoom[findeIndex][1] = nickName;
//                     chatRoom[findeIndex2][1] = nickName;
//                 } else {
//                     chatRoom[findeIndex][1] = nickName;
//                 }
//             }
//         } else if(type === 'Leave') {
//             let findRecord = splitRecord.find(el => el[1]  ===  id);
//             chatRoom.push([findRecord[1], findRecord[2],'님이 나갔습니다.'])
//         } else if(type === 'Change') {
//             chatRoom[findeIndex][1] = nickName;
//         }
//       }
//     return chatRoom.map(el => `${el[1]}${el[2]}`);
// }

function solution(record) {
  let last = {};
  for (let i = 0; i < record.length; i++) {
    let id = record[i].split(" ")[1];
    let nick = record[i].split(" ")[2];
    if (nick) {
      last[id] = nick;
    }
  }
  console.log(last);

  let records = [];

  for (let i = 0; i < record.length; i++) {
    let action = record[i].split(" ")[0];
    console.log(records);
    if (action === "Enter") {
      records.push(`${last[record[i].split(" ")[1]]}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      records.push(`${last[record[i].split(" ")[1]]}님이 나갔습니다.`);
    }
  }

  return records;
}

// 실행한 결괏값 ["Prodo님이 들어왔습니다.","Ryan님이 들어왔습니다.","Iyan님이 들어왔습니다.","Prodo님이 들어왔습니다.","Prodo님이 나갔습니다.","Prodo님이 들어왔습니다."]이
// 기댓값 ["Prodo님이 들어왔습니다.","Ryan님이 들어왔습니다.","Iyan님이 나갔습니다.","Prodo님이 들어왔습니다."]과 다릅니다.
//     // ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo",
//  "Change uid4567 Ryan"]
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// uid1234 Prodo님이 들어왔습니다.
// uid4567 Ryan님이 들어왔습니다.
// uid1234 Prodo님이 나갔습니다."
// uid1234 Prodo님이 들어왔습니다.

// 만약 Enter일때 push -> 공백기준으로 split(' ')
// 만약 Leave일때 push -> find해서 닉네임 찾기
// 만약 change일때 그부분 변경 -> push한 곳에서 findindex 후 그곳 배열 바꿔 주기.
