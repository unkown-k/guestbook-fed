<template>
  <el-container>
    <el-header>
      <guestbook-top/>
    </el-header>
    <el-main>
      <guestbook-banner/>
      <div class="content">
        <guestbook-notice @showModel="showModel"/>
        <guestbook-content :contentA="content" @edit="edit"/>
        <guestbook-add v-if="model" @hideModel="hideModel" :edit="editContent"/>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Identicon from 'identicon.js'
import md5 from 'blueimp-md5'
import {getRandomName} from '@/plugins/getRandomName.js'
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
      content: [],
      timeStamp: '',
      editContent: ''
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
      this.getContent()
    },
    edit(e) {
      this.showModel(true)
      this.editContent = JSON.stringify(e)
    },
    getContent () {
      this.axios.get('/guestbook',
        {
          headers:{uid:localStorage.getItem('uid')}
        },
        ).then((res)=>{
        if (res.code === 0) {
          this.content = res.data
          this.content.map(e => {
            if (e.headPortrait !== '' && typeof e.headPortrait !== "undefined") {
              e.avatar = e.headPortrait
              e.headPortrait = 'data:image/png;base64,' + new Identicon(e.headPortrait).toString()
            } else {
              e.headPortrait = 'https://thirdqq.qlogo.cn/g?b=oidb&k=4b4ricfQdA8VrFRYyzh2tibg&s=100'
              e.avatar = e.headPortrait
            }
          })
        }
      })
    }
  },
  mounted () {
    if (!localStorage.getItem('uid')) {
      var time = new Date().valueOf();
      var md = md5(Math.random() || 0);
      localStorage.setItem('uid', time + md)
      localStorage.setItem('avatar',md)
      localStorage.setItem('userName',getRandomName(Math.floor(Math.random() * (6 - 2) + 2)))
    }
    this.getContent()
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
