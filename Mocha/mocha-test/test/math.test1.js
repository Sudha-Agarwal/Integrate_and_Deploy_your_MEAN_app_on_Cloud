function add(a,b){
    return a + b;
}

describe('Math Function Test Suite', ()=>{
    let assert;

    it('should add two numbers', async()=>{
        let chai = await import('chai');//dynamic import
        assert = chai.assert;
        
        const result = add(2,3);
        assert.equal(result,5);
    });

    it('should subtract two numbers', ()=>{

    })


})
