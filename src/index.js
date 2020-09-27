
exports.min = function min (array) {
  if (Array.isArray(array)) {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
    min = min>array[i] ?array[i]: min

    }
    return array.length >0 ?  min : 0
  }
 return 0
}

exports.max = function max (array) {
  if (Array.isArray(array)) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
  max = max<array[i] ?array[i]: max

  }
    return array.length >0 ?  max : 0
}
return 0

}

exports.avg = function avg (array) {
  if (Array.isArray(array)) {
  return  array.length >0 ?  array.reduce((a,b)=>a+b)/array.length : 0
  }
  return 0
}
