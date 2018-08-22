function sayHello(name){
    console.log('Hello ' + name );
}
sayHello('Jashan');


// console.log(window);  There is no window object in node

var message = 'Good Morning';  //This variable has scope to this class only because of module wrapper
console.log(global.message);    //Node global object is node 


console.log(module);   //module object of class, see in function bound