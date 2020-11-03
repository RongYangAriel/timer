var myArgs = process.argv.slice(2);

let index = 0;
myArgs.sort((a, b) => a - b);
console.log(myArgs);

const timer = (timeArr) => {
  if (timeArr[index] >= 0){
      setTimeout(() => {
      process.stdout.write('\x07');
      index ++;
      if(index < timeArr.length) timer(timeArr);
    }, timeArr[index] * 100)
  }else{
    index ++;
    timer(timeArr);
  }
}

timer(myArgs);