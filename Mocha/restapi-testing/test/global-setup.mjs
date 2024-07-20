//const mongoose = require('mongoose');
import mongoose from 'mongoose';


export async function mochaGlobalSetup(){
    console.log("Global Setup: connecting to database");

    await mongoose.connect('mongodb://localhost:27017/testDB');
    //global state or shared state
    global.globalData = {count:0}
}

export async function mochaGlobalTeardown(){
    console.log("Global TearDown: disconnecting to database");
    await mongoose.disconnect();
}
