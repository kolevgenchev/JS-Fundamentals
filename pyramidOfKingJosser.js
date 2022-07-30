function pyramidOfJosser (base,increment){
    let stone =0
    let marble=0
    let lapisLazuli=0
    let gold=0
    let stepCount=0
    while(base>=1){
        stepCount++
        if(base!==2&&base!==1){
            stone+=(base-2)*(base-2)*increment
        }
        
        if(stepCount%5!==0&&base!==1&&base!==2){
            marble+=((4*base)-4)*increment
            
        }else if(stepCount%5===0&&base!==1&&base!==2){
            lapisLazuli+=((4*base)-4)*increment
        }
        if(base===2||base===1){
            gold=base*base*increment
        }
        
        base-=2
    }
    console.log(`Stone required: ${Math.ceil(stone)}`)
    console.log(`Marble required: ${Math.ceil(marble)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`)
    console.log(`Gold required: ${Math.ceil(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(stepCount*increment)}`)
}
pyramidOfJosser(12,1)