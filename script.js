//1
function factorialize(k) {
  var j = 1;
  for(var i = 1; i <= k; i++){
    j *= i;
  }
  return j;
}
//2
function factorialize_recurse(k) {
  if(k <= 1){
    return 1;
  }
  return k * factorialize_recurse(k - 1);
}
