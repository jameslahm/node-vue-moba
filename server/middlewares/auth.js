module.exports=options=>{
	const assert = require('http-assert')
	const jwt = require('jsonwebtoken')
	const AdminUser = require('../models/AdminUser')
	return async (req, res, next) => {
		const token = (req.headers.authorization || '').split(' ').pop()
		assert(token, 401, "请提供JWT Token")
		const { id } = jwt.verify(token, req.app.get('secret'))
		assert(id, 401, '无效的token')
		const user = await AdminUser.findById(id)
		assert(user, 401, '请先登录')
		await next()
	}
}