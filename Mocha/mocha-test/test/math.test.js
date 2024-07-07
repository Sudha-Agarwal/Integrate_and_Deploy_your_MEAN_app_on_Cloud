const assert = require('assert'); //inbuilt assert
function add(a, b){
    return a+b;
}

describe('Math Function Test Suite', ()=>{
    it('should add two numbers', ()=>{
        const result = add(2,3);
        assert.strictEqual(result,5);
    });

    it('should subtract two numbers', ()=>{

    })


})