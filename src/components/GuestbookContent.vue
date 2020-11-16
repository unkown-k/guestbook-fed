<template>
  <div class="item_inner">
    <a href="/products/56706/profile/1/" target="_blank" class="user_avatar">
      <img
        class="avatar-img"
        src="https://thirdqq.qlogo.cn/g?b=oidb&amp;k=4b4ricfQdA8VrFRYyzh2tibg&amp;s=100"
        style="border: 1px solid rgba(0, 0, 0, 0.05);"
      />
    </a>
    <div class="item_content">
      <div class="user_info">
        <a
          href="/products/56706/profile/1/"
          target="_blank"
          class="user_name admin"
        >
          某柠檬管理员
        </a>
        <div class="public_time">
          4月16日 22:58
        </div>
      </div>
      <div class="desc_para">
        Hello！欢迎来到某柠檬留言板！<br />
        在这里你可以留言反馈、闲聊、参与活动话题、讨论每日“找点乐子”……<br />
        讨论须知：<br />
        请不要在下方留言中发送其他网站链接、违法内容，在留言中带链接，将会被隐藏。<br />
        分享有趣网站、网站自荐、友情链接等事务请邮件联系voosoom艾特foxmail.com
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestbookContent"
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
}
</style>
