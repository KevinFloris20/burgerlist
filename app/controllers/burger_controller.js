const router = require("express").Router();
const burger = require("../models/burger.js");

router.get("/api/burgers", (rec, res)=>{
    const burgers = burger.selectAll();
    res.json(burgers);
});

router.post("/api/burgers", (rec,res)=>{
    const burger = burger.insertOne(col, rec.body, function(){
        res.json(burger)
    });
});

router.put("/api/burgers/:id", (rec,res)=>{
    const burger = burger.updateOne(col, rec.body, function(){
        res.json(burger)
    });
});