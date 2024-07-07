import {assert} from 'https://unpkg.com/chai/chai.js';

describe("Test suite", ()=>{
    it('should match 2 with 2', ()=>{
        assert.strictEqual(2,2);
    })

    it('should not match 2 with 3', ()=>{
        assert.strictEqual(2,3);
    })
})