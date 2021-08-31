export const banParser = function(log, fun) {
  const data = log
    .split('\n')
    .map(x => x.split('-'))
    .filter(x => x.length == 10)
    .map(x => x.pop())
    .map(x => x.trim())
    .reduce((acc, val) => {
      if(acc[val] === undefined) {
        acc[val] = 0
      }
      acc[val] += 1
      return acc
    }, {})
  return fun(data)
}

export const kickParser = function(log, fun) {
  const data = log
    .split('\n')
    .map(x => x.split('-'))
    .filter(x => x.length == 4)
    .map(x => x.pop())
    .map(x => x.trim())
    .reduce((acc, val) => {
      if(acc[val] === undefined) {
        acc[val] = 0
      }
      acc[val] += 1
      return acc
    }, {})
  return fun(data)
} 
