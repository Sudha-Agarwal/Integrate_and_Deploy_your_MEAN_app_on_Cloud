const assert = require('assert');
const fetchData = require('../src/asyncFunction');

describe("asynchronous Operations", ()=>{
    it('should fetch user data', (done)=>{
        fetchData((err, data) =>{
            if(err){
                return done(err);
            }
            try{
                assert.strictEqual(data.name,'sudha');
                done();//signal completion of test
            }
            catch(assetionError){
                done(assetionError);
            }
        })

    });
})
