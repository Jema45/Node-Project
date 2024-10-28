const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1,num2)=>{
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1,2);

class person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

let pedro = new person('Pedro');
let christina = new person('Christina');
christina.on('name', ()=>{
    console.log('my name is '+ christina.name);
});
pedro.on('name',()=>{
    console.log('my name is '+ pedro.name);
});

pedro.emit('name');
christina.emit('name');