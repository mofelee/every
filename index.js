const ms = require('ms');

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// every('1s', ()=>console.log('1s'))
async function every(time, func){
  while(true){ // eslint-disable-line
    await func();
    await wait(ms(time));
  }
}

module.exports = every;
