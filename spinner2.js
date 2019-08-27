process.stdout.write('hello from spinner1.js... \rheyyy\n');

let time = 100;
let delay = 200;
const arr = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for ( let i = 0; i < arr.length; i++) {
  time += delay;
  setTimeout(() => {
    process.stdout.write('\r' + arr[i] + '   ');
  }, time);
};
