let greet = (name,timeOfDay) => {
    console.log('Good ${timeOfDay}, ${name}!');
};
greet('MinhDuy','Evening');

let square = num => {
    return num*num;
};
console.log(square(4));

let sayHello = () => {
    console.log("Hello there!");
};

let person = {
    name : 'Minh Duy',
    age :21,
    greet: function() {
        console.log('Hello,my name is ${name}, I am ${age} years old');
    }
};