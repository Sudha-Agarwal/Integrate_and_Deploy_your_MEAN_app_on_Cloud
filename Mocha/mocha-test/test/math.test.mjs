//const {assert} = require('chai').assert; //commonJS import

import {assert} from 'chai'; //ES module import

function add(a,b){
    return a + b;
}

describe('Math Function Test Suite', ()=>{
    it('should add two numbers', ()=>{
        const result = add(2,3);
        assert.equal(result,5);
    });

    it('should subtract two numbers', ()=>{

    })


})
