<template>
<div>
  <div class="item_inner" v-for="(item,index) in contentA" v-bind:key="index">
    <a target="_blank" class="user_avatar">
      <img
        class="avatar-img"
        :src="item.headPortrait"
        style="border: 1px solid rgba(0, 0, 0, 0.05);width: 42px;"
      />
    </a>
    <div class="item_content">
      <div class="user_info">
        <a
          href="javascript:void(0);"
          class="user_name admin"
          style="text-decoration:none;"
        >
          {{item.nickName}}
        </a>
        <a href="javascript:void(0);" class="change user_name admin" style="text-decoration:none;" v-if="item.edit === 1" @click="edit(item)">修改</a>
        <div class="public_time">
          {{item.creatTime}}
        </div>
      </div>
      <div class="desc_para">
       {{item.content}}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "GuestbookContent",
  props: {
    contentA: {
        type: Array,
        default: function () {
          return []
        }
    }
  },
  data () {
    return {
      avatar: localStorage.getItem('avatar')
    }
  },
  methods : {
    edit (e) {
      this.$emit('edit', e)
    }
  },
  mounted () {
    console.log(this.avatar)
  }
};
</script>
<style scoped>
.item_inner {
  padding: 24px;
  background-color: #fff;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
}
.user_avatar {
  display: block;
  width: 42px;
  height: 42px;
  border-radius: 3px;
  float: left;
  margin-right: -42px;
  overflow: hidden;
  border-radius: 58px;
}
.item_content {
  padding-left: 58px;
}
.user_info .user_name {
  font-size: 15px;
  color: #5a6d96;
  float: left;
  line-height: 22px;
  margin-right: 10px;
}
.user_info .public_time {
  font-size: 12px;
  color: #b2b2b2;
  float: left;
  line-height: 22px;
}
.desc_para {
  font-size: 15px;
  line-height: 24px;
  word-wrap: break-word;
  word-break: break-all;
}
.user_info {
  overflow: hidden;
  position: relative
}
.change{
  position: absolute;
  right: 0px;
}
</style>
