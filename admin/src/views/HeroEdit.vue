<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}英雄</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-tabs type="border-card">
        <el-tab-pane label="基本信息">
          <el-form-item label="名称">
            <el-input v-model="model.name" placeholder></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title" placeholder></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" placeholder multiple>
              <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.difficult"
              placeholder
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.skill"
              placeholder
            ></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.attack"
              placeholder
            ></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate
              style="margin-top:0.6rem"
              :max="9"
              show-score
              v-model="model.scores.survive"
              placeholder
            ></el-rate>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL+'/upLoad'"
              :show-file-list="false"
              :on-success="afterUpload"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" placeholder multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" placeholder multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input v-model="model.usageTips" type="textarea" placeholder></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input v-model="model.battleTips" type="textarea" placeholder></el-input>
          </el-form-item>
          <el-form-item label="团队思路">
            <el-input v-model="model.teamTips" type="textarea" placeholder></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能">
          <el-button type="text" @click="model.skills.push({})">
            添加技能
            <i class="el-icon-plus"></i>
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,i) in model.skills" :key="i">
              <el-form-item label="名称">
                <el-input v-model="item.name" placeholder></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL+'/upload'"
                  :show-file-list="false"
                  :on-success="res=> $set(item,'icon',res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea" placeholder></el-input>
              </el-form-item>
							<el-form-item label="小技巧">
								<el-input v-model="item.tips" placeholder=""></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="danger" size="small" @click="model.skills.splice(i,1)">删除</el-button>
							</el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button style="margin-top:1rem" type="primary" native-type="submit" size="medium">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        scores: {},
        skills: []
      },
      categories: [],
      items: []
    };
  },
  methods: {
    afterUpload(res) {
      // eslint-disable-next-line no-console
      this.$set(this.model, "avatar", res.url);
    },
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/heroes/${this.id}`, this.model);
      } else {
        await this.$http.post(`/rest/heroes`, this.model);
      }
      this.$router.push(`/heroes/list`);
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get("/rest/categories");
      this.categories = res.data;
    },
    async fetchItems() {
      const res = await this.$http.get("/rest/items");
      this.items = res.data;
    }
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
    this.id && this.fetch();
  }
};
</script>

<style>
</style>