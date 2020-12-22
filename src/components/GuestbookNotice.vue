<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>公告栏</span>
      <div @click="showModel">
        <el-button style="float: right; padding: 3px 0" type="text">
          留言
        </el-button>
      </div>
    </div>
    <div class="text item">
      {{content}}
    </div>
  </el-card>
</template>

<script>
export default {
  name: "GuestbookNotice",
  data () {
    return {
      content: ''
    }
  },
  methods: {
    showModel () {
      this.$emit('showModel',true)
    },
    getNotice () {
      this.axios.get('notice/1',{}).then((res)=>{
        if (res.code === 0) {
          this.content = res.model.content
        }
      })
    }
  },
  mounted () {
    this.getNotice()
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  margin-bottom: 12px;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06) !important;
}
</style>
