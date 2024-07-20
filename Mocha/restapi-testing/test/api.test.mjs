import { expect, assert } from 'chai';
import request from 'supertest';
import app from '../app.mjs';


describe1('API Tests', function(){
    describe('GET /api/items', ()=>{
        it('should return a list of items', (done)=>{
            request(app)
            .get('/api/items')
            .expect(200)
            .end((err,res)=>{
                if(err) done(err);
                expect(res.body).to.be.an('array').that.is.not.empty;
                //expect(res.body).to.have.property('name','Item1');
                //assert.strictEqual(res.body.name, 'Item1');

                const item = res.body.find(item=> item.name === "Item1");
                assert.isDefined(item,'item exist');
                assert.strictEqual(item.name,'Item1');

                //assert.isArray(res.body,'is response an array')
                done();
                //assert.isNotNull(val);
                //expect(val).to.not.be.null;
            })
        })
    });

    describe('POST /api/items', ()=>{
        it('should create a new Items', (done)=>{
            const newItem = {name:'Item2'};
            request(app)
            .post('/api/items')
            .send(newItem)
            .end((err,res)=>{
                if(err) return done(err);
                expect(res.body).to.have.property('id');
                expect(res.body).to.have.property('name');
                done();
            })
        })

    })
})
