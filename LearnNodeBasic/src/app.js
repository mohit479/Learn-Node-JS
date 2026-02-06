//  Server ko create krna

const express=require('express');
const noteModel =require("./models/note.modules")

const app =express();

app.use(express.json());

const notes=[];

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.post('/notes',(req,res)=>{
    notes.push(req.body);
    res.status(201).json({
        message:"note created successflly"
    })
})

app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"notes featched sucessfully",
        notes:notes
    })
})

app.delete('/notes/:index',(req ,res)=>{
    const index =req.params.index;

    delete notes[index]

    res.status(200).json({
        message:"note deleted successfully"
    })
})


app.patch('/notes/:index',(req ,res)=>{
    const index =req.params.index;
    const des= req.body.description;

    notes[index].description= des;

    res.status(200).json({
        message:"note updated sucessfully"
    })
})

module.exports =app;