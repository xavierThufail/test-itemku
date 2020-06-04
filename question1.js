function solution(record) {
  var answer = [];
  for (let i = 0; i < record.length; i++) {
    let type = record[i].split(' ')[0]
    let name = record[i].split(' ')[2]
    let Id = record[i].split(' ')[1]
    let founds = []
    switch (type) {
      case 'Enter':
        // search if the Id has been loggin before
        for (let j = i - 1; j >= 0; j--) {
          if (Id === record[j].split(' ')[1]) founds.push(j)
        }
        // conditional to change name or not
        if (founds.length > 0) {
          founds.forEach(i => {
            let temp = answer[i].split(' ')
            temp[0] = name
            answer[i] = temp.join(' ')
          });
        }
        answer.push(`${name} came in.`)
        break;
      case 'Leave':
        answer.push(`${name} has left.`)
        break;
      case 'Change':
        // Change Name
        for (let j = i - 1; j >= 0; j--) {
          if (Id === record[j].split(' ')[1]) founds.push(j)
        }
        founds.forEach(i => {
          let temp = answer[i].split(' ')
          temp[0] = name
          answer[i] = temp.join(' ')
        });
        break;
      default:
        break;
    }
  }
  return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]))
