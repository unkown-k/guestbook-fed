<template>
  <el-container>
    <el-header>
      <guestbook-top></guestbook-top>
    </el-header>
    <el-main>
      <guestbook-banner></guestbook-banner>
      <div class="content">
        <guestbook-notice @showModel="showModel"></guestbook-notice>
        <guestbook-content :contentA="content"></guestbook-content>
        <guestbook-add v-if="model" @hideModel="hideModel"></guestbook-add>
      </div>
    </el-main>
  </el-container>
</template>

<script>
// @ is an alias to /src
import GuestbookAdd from "@/components/GuestbookAdd.vue";
import GuestbookContent from "@/components/GuestbookContent.vue";
import GuestbookNotice from "@/components/GuestbookNotice.vue";
import GuestbookTop from "@/components/GuestbookTop.vue";
import GuestbookBanner from "@/components/GuestbookBanner.vue";
export default {
  name: "GuestbookIndex",
  components: {
    GuestbookTop,
    GuestbookBanner,
    GuestbookNotice,
    GuestbookContent,
    GuestbookAdd
  },
  data () {
    return {
      model:  false,
      content: [{
        avatar: 'https://thirdqq.qlogo.cn/g?b=oidb&k=4b4ricfQdA8VrFRYyzh2tibg&s=100',
        img: 'https://thirdqq.qlogo.cn/g?b=oidb&k=4b4ricfQdA8VrFRYyzh2tibg&s=100',
        name: '某柠檬管理员',
        time: '4月16日 22:58',
        content: 'Hello！欢迎来到某柠檬留言板！在这里你可以留言反馈、闲聊、参与活动话题、讨论每日“找点乐子”……<br />讨论须知：请不要在下方留言中发送其他网站链接、违法内容，在留言中带链接，将会被隐藏。分享有趣网站、网站自荐、友情链接等事务请邮件联系voosoom艾特foxmail.com'
      },{
        img: 'https://thirdqq.qlogo.cn/g?b=oidb&k=4b4ricfQdA8VrFRYyzh2tibg&s=100',
        name: '某柠檬管理员',
        time: '4月16日 22:58',
        content: 'Hello！欢迎来到某柠檬留言板！在这里你可以留言反馈、闲聊、参与活动话题、讨论每日“找点乐子”……<br />讨论须知：请不要在下方留言中发送其他网站链接、违法内容，在留言中带链接，将会被隐藏。分享有趣网站、网站自荐、友情链接等事务请邮件联系voosoom艾特foxmail.com'
      },{
        img: 'https://thirdqq.qlogo.cn/g?b=oidb&k=4b4ricfQdA8VrFRYyzh2tibg&s=100',
        name: '某柠檬管理员',
        time: '4月16日 22:58',
        content: 'Hello！欢迎来到某柠檬留言板！在这里你可以留言反馈、闲聊、参与活动话题、讨论每日“找点乐子”……<br />讨论须知：请不要在下方留言中发送其他网站链接、违法内容，在留言中带链接，将会被隐藏。分享有趣网站、网站自荐、友情链接等事务请邮件联系voosoom艾特foxmail.com'
      }
      ]
    }
  },
  methods: {
    showModel (e) {
      this.model = e
      let m = function(e){e.preventDefault();};
      document.body.style.overflow='hidden';
      document.addEventListener("touchmove",m,{ passive:false });//禁止页面滑动
    },
    hideModel (e) {
      this.model = e
      let m =function(e){e.preventDefault();};
      document.body.style.overflow='';//出现滚动条
      document.removeEventListener("touchmove",m,{ passive:true });
    }
  }
};
</script>
<style scoped>
.el-header,
.el-main {
  padding: 0;
  box-sizing: border-box;
  flex-shrink: 0;
}
.content {
  width: 1032px;
  margin: 0 auto;
}
</style>
