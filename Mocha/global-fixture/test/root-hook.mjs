import mongoose from 'mongoose';
//root hook
before(async()=>{
    /*mongoose.connection.collections.users.drop(()=>{
        done();
    })*/

    console.log("Global Setup: connecting to database - Root hook");

    await mongoose.connect('mongodb://localhost:27017/testDB');

    //global state or shared state
    global.globalData = {count:0}

})

after(async()=>{
    console.log("Global TearDown: disconnecting to database");
    await mongoose.disconnect();

});
