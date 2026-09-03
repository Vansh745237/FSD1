function greet(name){
    console.log('Hello ' + name);
}
function processuser(callback){
    let name = "vansh";
    callback(name);
}
processuser(greet);