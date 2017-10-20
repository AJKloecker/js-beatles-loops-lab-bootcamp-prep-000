function theBeatlesPlay(musicians, instruments){
  var temp = [];
  var i = 0
  for(i; i < musicians.length; ++i){
    temp.push(`${musicians[i]} plays ${musicians[i]} `)
  }
  return temp
}

function johnLennonFacts(facts){
  var i = 0
  var temp = [];
  while(i < musicians.length){
    temp = `${facts[i]}!`
    ++i
  }
  return temp
}

function iLoveTheBeatles(n){
  var temp = [];
  var i = 0
  do{
    temp.push("I love the Beatles!")
  }while(i < n);
  return temp
}
