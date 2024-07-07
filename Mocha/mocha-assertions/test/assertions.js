const assert = require('assert');

const obj1 = {foo:'bar', baz:{nested:'object'}};
const obj2 = {foo:'bar', baz:{nested:'object'}};

describe("Assertion Example", ()=>{
    it('should check equality', ()=>{
        //assert.equal('2'+2,22); //will pass
        //assert.strictEqual('2'+2,22); //will fail

        //assert.notEqual('5',5); //will fail
        assert.notStrictEqual('5',5) //will pass

    })

    it('should check deep euqlity', ()=>{
        assert.deepEqual({a:[{b:{c:1,d:2}},2]}, {a:[{b:{c:1,d:2}},2]});
        assert.notDeepEqual({a:[{b:{c:1,d:2}},2]}, {a:[{b:{c:3,d:2}},2]});
        assert.deepEqual(obj1,obj2);
    })

    //Truthiness Assertions
    it('should check truthiness', ()=>{
        let val = null;
        assert.ok('','val is not truthy');
    });

    //Inclusion Assertions
    it('should check inclusion', ()=>{
        assert.ok([1,2,3].includes(2));
        
        assert.ok('Hello World'.toLowerCase().includes("hello".toLowerCase()));
    });

    //Satisfaction Assertions
    it('should check satisfaction', ()=>{
        assert.ok('5' === 5 ); //fail
    })
})