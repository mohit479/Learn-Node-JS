//  Server ko create krna

const express=require('express');
const noteModel =require("./models/note.modules")

const app =express();

app.use(express.json());

const notes=[];

app.get('/',(req,res)=>{
    res.send("hello world");
})  

 app.post('/notes',async(req,res)=>{

    const data = req.body 
    await noteModel.create({
        title :data.title,
        description: data.description
    })
    // notes.push(req.body);
    res.status(201).json({
        message:"note created successflly"
    })
})

app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"notes featched sucessfully",
        notes:notes
    })
})

app.delete('/notes/:id',async(req ,res)=>{
    const id =req.params.id;

    await noteModel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({
        message:"note deleted successfully"
    })
})


app.patch('/notes/:id',async(req ,res)=>{
    const id =req.params.id;
    const des= req.body.description;

    await noteModel.findOneAndUpdate({
        _id:id
    },{
        description:des
    })

    res.status(200).json({
        message:"note updated sucessfully"
    })
})

module.exports =app;