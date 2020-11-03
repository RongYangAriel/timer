var myArgs = process.argv.slice(2);
myArgs.sort((a, b) => a - b);
console.log(myArgs);
let index = 0;

const timer = (timeArr) => {
  setTimeout(() => {
    process.stdout.write('\x07');
    index ++;
    if(index < timeArr.length) timer(myArgs);
  }, timeArr[index] * 100)
}

process.stdout.write('\x07');
console.log('bell');
timer(myArgs);