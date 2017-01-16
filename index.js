function theBeatlesPlay(musicians, instruments) {
  var array = []
  for ( let i = 0; i < musicians.length; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  var new_array = []
  for ( let i = 0; i < array.length; i++ ) {
    new_array.push(array[i] + "!!!")
  }
  return new_array
}

function iLoveTheBeatles(n) {
  var result = []
  do {
    result.push("I love the Beatles!")
    n++
  } while ( n < 15 )
  return result
}
