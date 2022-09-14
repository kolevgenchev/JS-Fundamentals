function bomb(arr1, arr2) {
  let sequance = arr1.slice(0);
  let bombNum = Number(arr2[0]);
  let power = Number(arr2[1]);
    
  for (let i = 0; i < sequance.length; i++) {
    let currentNum = sequance[i];
    if (currentNum === bombNum && i != 0&& i!== sequance.length - 1 ) {
        if(power*2+1>sequance.length){
            console.log(0)
            return;
        }
      let index = sequance.indexOf(currentNum);
      sequance.splice(index - power, power);
      sequance.splice(index - power, power + 1);
      i = 0;
    } else if (i === 0 && currentNum === bombNum) {
      sequance.splice(0, power + 1);
      
    } else if (i === sequance.length - 1 && currentNum === bombNum) {
      sequance.splice(-(power + 1));
      
    }
  }
  let sum = 0;
  for (let i = 0; i < sequance.length; i++) {
    let current = sequance[i];
    sum += current;
  }
  console.log(sum);
}
bomb([2, 4, 5,6,7], [2, 3]);
