import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3000;
//MongoDB model
const itemSchema = new mongoose.Schema({
    name:String
});

const Item = mongoose.model('Item', itemSchema);

app.use(express.json());

//Routes
app.get('/api/items', async(req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    }
    catch(err){
        res.status(500).json({message:'Error fetching items'});
    }    
});

app.post('/api/items', async(req,res)=>{
    try{
        const item = new Item(req.body);
        await item.save();
        res.status(201).json({id:item._id, name:item.name});
    }
    catch(err){
        res.status(500).json({message: 'Error creating item'})
    }
})


app.get('/api/items/get', async(req,res)=>{
    try{
        //const item = new Item(req.body);
        //await item.save();
        res.status(201).json({message: 'success'})
        //res.status(201).json({id:item._id, name:item.name});
    }
    catch(err){
        res.status(500).json({message: 'Error creating item'})
    }
})

app.listen(port,()=>{
    console.log('server running');
})

export default app;
