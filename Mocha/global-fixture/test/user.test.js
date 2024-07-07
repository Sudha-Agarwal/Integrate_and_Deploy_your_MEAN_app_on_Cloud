const assert  = require('assert');
const User = require('../models/user');
const mongoose = require('mongoose');

describe('User CRUD Operations', ()=>{
    it('should create a new user', async()=>{
        const newUser = new User({name:'sudha'});
        const savedUser = await newUser.save();
        assert.strictEqual(savedUser.name, 'sudha');   
        assert.strictEqual(global.globalData.count,0);
        global.globalData.count++;
        console.log(global.globalData.count);
        //assert.equal(2,2)     
    });

    //rest test cases can be written similarly
    it('should read a user', async()=>{
        assert(global.globalData.count, 1);
        console.log(global.globalData.count)

    })
})