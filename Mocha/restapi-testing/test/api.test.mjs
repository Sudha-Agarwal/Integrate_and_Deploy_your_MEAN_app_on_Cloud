import { expect } from 'chai';
import request from supertest;

describe('API Tests', function(){
    describe('GET /api/items', ()=>{
        it('should return a list of items', (done)=>{
            request(app)
            .get('/api/items')
            .expect(200)
            .end((err,res)=>{
                if(err) done(err);
                expect(res.body).to.be.an('array');
                done();
                //assert.isNotNull(val);
                //expect(val).to.not.be.null;
            })
        })
    })
})