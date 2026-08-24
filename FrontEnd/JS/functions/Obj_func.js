const calculator={
    add : function(a,b){
        return a+b;
    },

    sub : function(a,b){
        return(a-b);
    },

    mul : function(a,b){
        return a*b;
    },

    div(a,b){               //! Short hand for function in objects
        return a/b;
    }
};

console.log(calculator.add(10,20));
console.log(calculator.sub(10, 20));
console.log(calculator.mul(10, 20));
console.log(calculator.div(10, 20));