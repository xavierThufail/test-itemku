function solution(N, users) {
  var answer = [];
  for (let i = 0; i < N; i++) {
    let level = i + 1
    let totalPlayer = users.filter(num => num >= level).length
    let totalFailurePlayer = users.filter(num => num === level).length
    let failureRate = totalFailurePlayer / totalPlayer
    answer.push({level, failureRate})
  }
  answer = answer.sort((a, b) => b.failureRate - a.failureRate).map(el => el = el.level)
  return answer;
}

console.log(solution(5, [2,1,2,6,2,4,3,3]))
console.log(solution(7, [4,4,4,4,4]))