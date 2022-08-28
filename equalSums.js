function equalSums(arr){
    let bool=false
   if(arr.length===1){
    console.log(0)
   }else{
    for(let i=0;i<arr.length;i++){
        let firstSum=0
        let secondSum=0
        let currentNum=arr[i];
        for(let k=i+1;k<arr.length;k++){
            firstSum+=arr[k]
        }
        for(let z=0;z<i;z++){
            secondSum+=arr[z]
        }
        if(firstSum===secondSum){
            console.log(i)
            bool=true
        }


    }

   }
   if(bool===false&&arr.length>1){
    console.log("no")
   }
}equalSums([1])