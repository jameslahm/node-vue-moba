module.exports = app => {
	const express = require('express')
	const router = express.Router({
		mergeParams:true
	})
	router.post('/', async (req,res)=>{
		const modelName=require('inflection').classify(req.params.resource)
		const Model=require(`../../models/${modelName}`)
		const model=await Model.create(req.body)
		res.send(model)
	})
	router.put('/:id',async(req,res)=>{
		const modelName=require('inflection').classify(req.params.resource)
		const Model=require(`../../models/${modelName}`)
		const model=await Model.findByIdAndUpdate(req.params.id,req.body)
		console.log(model)
		res.send(model)
	})
	router.get('/',async(req,res)=>{
		const modelName=require('inflection').classify(req.params.resource)
		const Model=require(`../../models/${modelName}`)
		const items=await Model.find().populate('parent').limit(10)
		res.send(items)
	})
	router.get('/:id',async(req,res)=>{
		const modelName=require('inflection').classify(req.params.resource)
		const Model=require(`../../models/${modelName}`)
		const model=await Model.findById(req.params.id)
		res.send(model)
	})
	router.delete('/:id',async(req,res)=>{
		const modelName=require('inflection').classify(req.params.resource)
		const Model=require(`../../models/${modelName}`)
		const model=await Model.findByIdAndDelete(req.params.id)
		res.send(model)
	})
	app.use('/admin/api/rest/:resource',router)
}