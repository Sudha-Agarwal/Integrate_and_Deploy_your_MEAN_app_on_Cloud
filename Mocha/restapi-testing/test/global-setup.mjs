//const mongoose = require('mongoose');
import mongoose from 'mongoose';

export async function mochaGlobalSetup(){
    console.log("Global Setup: connecting to database");
    // Use environment variable for MongoDB connection URI
    const mongoUri = process.env.MONGO_URL || 'mongodb://localhost:27017/testDB';

    await mongoose.connect(mongoUri);
    //global state or shared state
    global.globalData = {count:0}
}

export async function mochaGlobalTeardown(){
    console.log("Global TearDown: disconnecting to database");
    await mongoose.disconnect();
}
