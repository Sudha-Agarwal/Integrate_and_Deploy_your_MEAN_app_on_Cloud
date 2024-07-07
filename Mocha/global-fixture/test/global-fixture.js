// test.js
exports.mochaHooks = {
    beforeAll: async () => {
        console.log("Global Setup: connecting to database (using mochaHooks)");
        await mongoose.connect('mongodb://localhost:27017/testDB');
    }
};