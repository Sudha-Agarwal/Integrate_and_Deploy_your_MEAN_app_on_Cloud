import {expect, should} from 'chai';
should(); //enable should syntax
//const {expect} = require('chai');

const obj1 = {foo:'bar', baz:{nested:'object'}};
const obj2 = {foo:'bar', baz:{nested:'object'}};

describe('Chai Matchers Example', ()=>{
    it('should assert strict equality', ()=>{
        expect(obj1).to.deep.equal(obj2);

        expect([1,2,3]).to.not.deep.equal([1,2,3,4]);
        expect({}).to.be.an('object');//pass

        //expect({}).to.be.an('object').that.is.not.empty; //fail
        expect([1,2,3]).to.be.an('array').that.includes(2);

        expect([1,2,3]).to.have.lengthOf(3);

        expect(obj1).to.have.property('foo');
        expect(obj1).to.have.nested.property('baz.nested');

        expect(0.1 + 0.2).to.be.closeTo(0.31,0.1); //approximate value with delta

        expect(true).to.be.true;


    })

    it.only('should assertion', ()=>{
        obj1.should.deep.equal(obj2);
        obj1.should.be.an('object');
    })
})