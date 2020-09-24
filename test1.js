const { func } = require("prop-types")

function sum(a,b){return a+b}
function func1(a){return function (b){return sum(a,b)}}
const a=func1(1)//(2)
const sumval=a(2)
//console.log(sumval)


var obj=function(){
    this.i=0

    this.sum=function (j){
        this.i+=j
        return this
    }

    this.subtract=function(j){
        this.i-=j
        return this
    }
    this.print=function(){
        console.log(this.i)        
    }
    return this
}

var x= new obj();
//console.log(x)
x.sum(3).subtract(2).print()


var obj1=function(){
    var i=0

    var sum=function (j){
        i+=j
        return this
    }

    var subtract=function(j){
        i-=j
        return this
    }
    var print=function(){
        console.log(i)        
    }
    return {sum:sum,sub:subtract,pnt:print}
}

var y= new obj1()
y.sum(1).sub(2).pnt()
//console.log(y.i)

var obj= function(a){
        var b=10;
    function func1(c){
        var d=10
        return a+b+c+d
    }
    console.log(func1(10))
    //console.log(b+d)
    return func1
}

console.log(obj(10)(5))



