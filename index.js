const katzDeliLine = [];

function takeANumber(katzDeliLine, people){
  katzDeliLine.push(people)
  return `Welcome, ${people}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`
    } else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(katzDeliLine){
  var line = []
  
  k = 0
  if(katzDeliLine.length > 0){
    for(let l = 1; i < katzDeliLine.length +1; i++){
      line.push(l)
    }return `The line is currently: ${line}`
  }else{ 
    return `The line is currently empty.`
  }
}


//function currentLine(katzDeliLine){
//  if(katzDeliLine.length !== 0){
//    var line = []
//    var i = 1
//    do {line.push(i++)} while (katzDeliLine.length !== 0)
//    return `${line}`
//  }else{
//     return `The line is currently empty.`
//   }
}