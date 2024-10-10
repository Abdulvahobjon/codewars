function descendingOrder(n){
   return String(n).split("").map(item => Number(item)).sort().reverse().join("")*1
    
}

console.log(descendingOrder(1278435));

  
  