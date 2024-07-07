//const mongoose = require('mongoose');
import mongoose from 'mongoose';
import assert from 'assert';


export async function mochaGlobalSetup(){
    console.log("Global Setup: connecting to database - global setup");

    await mongoose.connect('mongodb://localhost:27017/testDB');
    //global state or shared state
    global.globalData = {count:0}
}

export async function mochaGlobalTeardown(){
    console.log("Global TearDown: disconnecting to database");
    await mongoose.disconnect();
}
/*
mochaGlobalSetup();

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
*/