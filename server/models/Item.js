const mongoose=require('mongoose') 

const schema=new mongoose.Schema({
	name:{type:String},
	icon:{tyep:String}
})

module.exports=mongoose.model('Item',schema)