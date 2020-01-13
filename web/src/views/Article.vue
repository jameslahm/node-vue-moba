<template>
  <div class="page-article">
    <div class="d-flex py-2 px-1">
      <div class="iconfont icon-back"></div>
      <strong class="text-left flex-1">{{model.title}}</strong>
      <div class="text-grey fs-xs">2019-6-19</div>
    </div>
    <div v-html="model.body"></div>
    <div class="px-3 py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <strong class="fs-sm ml-1">相关资讯</strong>
      </div>
      <div class="pt-2">
        <router-link tag="div" 
				class="py-1"
					:to="`/articles/${item._id}`" v-for="(item,i) in model.related" :key="i">
					{{item.title}}
				</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: { type: String, required: true }
  },
  data() {
    return {
      model: {}
    };
	},
	watch:{
		id:'fetch'
	},
  methods: {
    async fetch() {
      const res = await this.$http.get(`/articles/${this.id}`);
      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

