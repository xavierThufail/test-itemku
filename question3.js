function solution(relation) {
  var answer = 0;
  let attributes = {}
  let duplicate = [];
  let compare = [];
  let count = 2

  // filter attribute
  relation.forEach((el, x) => {
    for (let i = 0; i < el.length; i++) {
        if (x === 0) attributes[i] = []
        attributes[i].push(el[i])
    }
  });

  // check unique attribute
  for(const key in attributes) {
    if (attributes[key].length === [...new Set(attributes[key])].length) {
      answer++
      delete attributes[key]
    } else {
      duplicate.push(attributes[key])
    }
  }

  // minimality
  while (count <= relation[0].length && count <= duplicate.length) {
    for (let i = 0; i < duplicate.length; i++) {
      compare = []
      for (let j = 0; j < duplicate[i].length; j++) {
        switch (count) {
          case 2:
            if (i === duplicate.length - 1) compare.push(duplicate[0][j] + duplicate[i][j])
            else compare.push(duplicate[i][j] + duplicate[i + 1][j])
            break;
          case 3:
            if (duplicate.length === 3) compare.push(duplicate[0][j] + duplicate[1][j] + duplicate[2][j])
            else {
              if (i === 2) {
                compare.push(duplicate[i][j] + duplicate[i + 1][j] + duplicate[0][j])
              } else if (i === 3) {
                compare.push(duplicate[i][j] + duplicate[0][j] + duplicate[1][j])
              } else {
                compare.push(duplicate[i][j] + duplicate[i + 1][j] + duplicate[i + 2][j])
              }
            }
            break;
          case 4:
            if (i === 0) compare.push(duplicate[i][j] + duplicate[i + 1][j] + duplicate[i + 2][j] + duplicate[i + 3][j])
          default:
            break;
        }
      }
      if (compare.length > 0 && compare.length === [...new Set(compare)].length) {
        answer++
        if (i === duplicate.length - 1) duplicate.splice(i, 1)
        else {
          duplicate.splice(i , 1)
          i--
        }
      }
    }
    count++
  }

  return answer;
}

console.log(solution([['100','ryan','music','2'],['200','apeach','math','2'],['300','tube','computer','3'],['400','con','computer','4'],['500','muzi','music','3'],['600','apeach','music','2']]))
