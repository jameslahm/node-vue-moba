<template>
	<div>
		<h1>分类列表</h1>
		<el-table :data="items">
			<el-table-column prop='_id' label="ID" width="230"></el-table-column>
			<el-table-column prop='name' label="物品名称"></el-table-column>
			<el-table-column prop='icon' label="物品图标">
				<template slot-scope="scope">
					<img :src="scope.row.icon" style="height:3rem">
				</template>
			</el-table-column>
			<el-table-column fixed='right' label="操作" width="180">
				<template slot-scope="scope">
					<el-button type="text" size="medium" 
						@click="$router.push(`/items/edit/${scope.row._id}`)">
						编辑</el-button>
					<el-button type="text" size="medium"
						@click="remove(scope.row)">
						删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	data(){
		return {
			items:[]
		}
	},
	methods:{
		async fetch(){
			const res=await this.$http.get('/rest/items')
			this.items=res.data
		},
		async remove(row){
			this.$confirm('确定删除物品?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '删除',
				type: 'warning'
			}).then(async () => {
				await this.$http.delete(`/rest/items/${row._id}`)
				this.$message({
					type:'success',
					message:"删除成功"
				})
				this.fetch()
			}).catch(() => {
				this.$message({
					type:'info',
					message:'已取消删除'
				})
			});
		}
	},
	created(){
		this.fetch()
	}
}
</script>