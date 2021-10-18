
function forEach(array, callback){
    for(let i = 0; i < array.length; i++){
    let element = array[i]
    callback(element)}
    }
    
    forEach([ 1, 2, 3 ], function(number){
    console.log('iteration', number)
    })
    
    2. 
    
    let rectangle = {
    width: 100,
    height: 100,
    area: function(){
    return this.width * this.height // <-- Replace null
    }
    }
    
    console.log(rectangle.area())
    
    3.
    
    function forEach(callback){
    for( let i = 0; i < this.length; i++){
    let element = this[i]
    callback(element)}
    
    }
    
    4.
    
    Array.prototype.forEach = function(callback){
    for( let i = 0; i < this.length; i++){
    callback(this[i])
    }
    }
    
   