function pianist(arr) {
  let n=Number(arr.shift())
  let curPieceInfo={}
  let pieces=[]
  for(let i=0;i<n;i++){
    let currentLine=arr.shift().split("|")
    let piece=currentLine[0]
    let author=currentLine[1]
    let key=currentLine[2]
    curPieceInfo={piece,author,key}
    pieces.push(curPieceInfo)
  }
  let comand=arr.shift()
  while(comand!=="Stop"){
    let line=comand.split("|")
    if(line[0]==="Add"){
        let piece=line[1]
        let author=line[2]
        let key=line[3]
        let result=pieces.find(x=>x.piece===piece)
        if(result){
            console.log(`${piece} is already in the collection!`)
        }else{
            curPieceInfo={piece,author,key}
            pieces.push(curPieceInfo)
            console.log(`${piece} by ${author} in ${key} added to the collection!`)
        }
    }else if(line[0]==="Remove"){
        let piece=line[1]
        let result=pieces.find(x=>x.piece===piece)
        if(result){
            let index=pieces.indexOf(result)
            pieces.splice(index,1)
            console.log(`Successfully removed ${piece}!`)
        }else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }else if(line[0]==="ChangeKey"){
        let piece=line[1]
        let key=line[2]
        let result=pieces.find(x=>x.piece===piece)
        if(result){
            let index=pieces.indexOf(result)
            pieces[index].key=key
            console.log(`Changed the key of ${piece} to ${key}!`)
        }else{
            console.log(`Invalid operation! ${piece} does not exist in the collection.`)
        }
    }


    comand=arr.shift()
  }
  pieces.forEach(x=>console.log(`${x.piece} -> Composer: ${x.author}, Key: ${x.key}`))


}
pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ])