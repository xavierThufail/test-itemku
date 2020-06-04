function solution(relation) {
  var answer = 0;
  let unique = []
  let notUnique
  let compare = []
  let attributes = [[],[],[],[]]
  // search duplicate value
  function searchDuplicate (arr) {
    let sortedArr = arr.slice().sort()
    let results = [];
    for (let i = 0; i < sortedArr.length - 1; i++) {
      if (sortedArr[i + 1] == sortedArr[i]) {
        results.push(sortedArr[i]);
      }
    }
    return results;
  }
  // chech attribute unique
  function searchUnique (arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < attributes.length; j++) {
        attributes[j].push(arr[i][j])
      }
      if (i === arr.length - 1) {
        for (let j = 0; j < attributes.length; j++) {
          if (attributes[j].length === [...new Set(attributes[j])].length) {
            answer++
            unique.push(j)
          } else {
            if (!notUnique) {
              notUnique = {[j]: searchDuplicate(attributes[j])}
            }
            attributes[j] = []
          }
        }
      }
    }
  }
  searchUnique(relation)
  // check attribute duplicate 
  for (const key in notUnique) {
    let j = Number(key)
    let count = 0
    for (let i = 0; i < relation.length; i++) {
      if (relation[i][j] === notUnique[key][0]) {
        for (let j = 0; j < unique.length; j++) {
          if (count < 1) {
            attributes.splice(unique[j], 1)
            count++
          }
          relation[i].splice(unique[j], 1)
        }
        compare.push(relation[i])
      }
    }
    // check minimality
    searchUnique(compare)
  }
  return answer;
}

console.log(solution([['100','ryan','music','2'],['200','apeach','math','2'],['300','tube','computer','3'],['400','con','computer','4'],['500','muzi','music','3'],['600','apeach','music','2']]))
