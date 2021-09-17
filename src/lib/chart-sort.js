const reducerFn = (acc, val) => {
  if(acc[val.key] === undefined) {
    acc[val.key] = {total: 0, data: []}
  } 
  acc[val.key]["data"].push(val)
  acc[val.key]["total"] += val.value
  return acc
}

const sortFn = (a, b) => {
    if(a.total === b.total) return 0
    if(a.total > b.total) {
      return -1
    } else {
      return 1
    }
  }

const sort = data => {
  const nestedObject = data.reduce(reducerFn, {})

  const nestedArray = Object.keys(nestedObject).map((key, index) => {
    return nestedObject[key]
  })

  const sortedArray = nestedArray.sort(sortFn)


  return sortedArray.map(x => x.data).flat()
}

export default sort;
