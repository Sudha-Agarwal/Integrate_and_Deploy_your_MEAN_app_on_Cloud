import { assert } from 'chai';


describe("math Functions - Test1", ()=>{
    before(()=>{
        console.log("initialization - Test1")
    });

    after(()=>{
        console.log("clean up - Test1")
    });

    describe('add function', ()=>{
        it('should add two numbers', ()=>{
            assert.equal(5,5);
        })
    })
})

/*Mocha Hooks:
1. before: runs once before all tests in a describe block
2. after: runs once after all tests
3. beforeEach: runs before each test
4. afterEach: runs after each test
*/