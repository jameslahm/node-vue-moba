module.exports = app => {
	const express = require('express')
	const assert = require('http-assert')
	const jwt = require('jsonwebtoken')
	const AdminUser = require('../../models/AdminUser')

	const authMiddleware=require('../../middlewares/auth')
	const resourceMiddleware=require('../../middlewares/resource')

	const router = express.Router({
		mergeParams: true
	})
	router.post('/', async (req, res) => {
		const model = await req.Model.create(req.body)
		res.send(model)
	})
	router.put('/:id', async (req, res) => {
		const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
		console.log(model)
		res.send(model)
	})
	router.get('/', async (req, res) => {
		const queryOptions = {}
		if (req.Model.modelName === 'Category') {
			queryOptions.populate = 'parent'
		}
		const items = await req.Model.find().populate('parent').limit(10)
		res.send(items)
	})
	router.get('/:id', async (req, res) => {
		const model = await req.Model.findById(req.params.id)
		res.send(model)
	})
	router.delete('/:id', async (req, res) => {
		const model = await req.Model.findByIdAndDelete(req.params.id)
		res.send(model)
	})
	app.use('/admin/api/rest/:resource', authMiddleware(),resourceMiddleware(),router)

	const multer = require('multer')
	const upload = multer({ dest: __dirname + '/../../uploads' })
	app.post('/admin/api/upload',authMiddleware(), upload.single('file'), async (req, res) => {
		const file = req.file
		file.url = 'http://localhost:3000/uploads/' + file.filename
		res.send(file)
	})

	app.post('/admin/api/login', async (req, res) => {
		const { username, password } = req.body
		const user = await AdminUser.findOne({ username }).select('+password')
		assert(user, 422, "用户名不存在")
		const isValid = require('bcryptjs').compareSync(password, user.password)
		assert(isValid, 422, "密码错误")
		const token = jwt.sign({ id: user._id }, app.get('secret'))
		res.send({ token })
	})

	app.use(async (err, req, res, next) => {
		res.status(err.statusCode || 500).send({
			message: err.message
		})
	})

}