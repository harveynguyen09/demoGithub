var chalk = require('chalk')
function dog(){
    this.stomach= [];
    this.die = true;
}
dog.prototype.sayHi = function(name){
    console.log('hi'+chalk.red(name));
}
module.exports = dog;