<template>
  <div class="content">
    <div class="mask"  @touchmove.prevent></div>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-close" @click="hideModel">
          <svg class="tcIcon tcIcon_shut" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.333 62.107c1.812 1.816 3.588 1.776 5.325-.12L39.72 45.165 56.782 61.99c1.737 1.892 3.513 1.932 5.325.12 1.816-1.816 1.776-3.592-.12-5.329L45.165 39.72l16.822-17.062c1.896-1.737 1.936-3.513.12-5.325-1.812-1.816-3.588-1.776-5.325.12L39.72 34.275 22.658 17.453c-1.737-1.896-3.513-1.936-5.325-.12-1.816 1.812-1.776 3.588.12 5.325L34.275 39.72 17.453 56.782c-1.896 1.737-1.936 3.513-.12 5.325z" fill-rule="evenodd"></path>
          </svg>
        </div>
        <div class="post_pop_ups">
          <div class="banner">
            <img class="avatar-img" @click="changeAvatar(1)" style="-webkit-user-select: none;" :src="url">
            <div>
              <input class="text_area_name" contenteditable="true" placeholder="输入你的昵称" v-model="name" @blur="saveName">
            </div>
            <!-- <img class="avatar-img" src="https://thirdqq.qlogo.cn/g?b=oidb&amp;k=WpxPq9qX4p9A6Dv2VECtLw&amp;s=100&amp;t=1602833389" style="border: 1px solid rgba(0, 0, 0, 0.05);"> -->
          </div>
          <div class="post_form">
            <div class="post_form_userEnter">
              <div class="user_enter_form user_enter_pc">
                <!-- <div class="text_name">
                  <div class="text_area_name" contenteditable="true" placeholder="输入你的昵称">
                  </div>
                </div> -->
                <div class="text_outline">
                  <textarea class="text_area_inp" contenteditable="true" placeholder="友善、描述精准的问题，更快得到解答" v-model="content"></textarea>
                </div>
                <div class="text_func">
                  <div class="text_func_btn" @click="submit">
                    发布
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Identicon from 'identicon.js'
import md5 from 'blueimp-md5'
import { getRandomName } from '@/plugins/getRandomName.js'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "GuestbookAdd",
  data () {
    return {
      url: '',
      name: '',
      thisAvatar: '',
      content: ''
    }
  },
  computed:{
    ...mapGetters(['myAvatar', 'username'])
  },
  methods: {
    ...mapActions(['saveUserName','saveAvatar']),
    hideModel () {
      this.$emit('hideModel',false)
    },
    changeAvatar (e) {
      if (this.myAvatar === '' || e === 1) {
        this.thisAvatar = new Identicon(md5(Math.random() || 0), 400).toString()
        this.saveAvatar(this.thisAvatar)
      }
      this.url = 'data:image/png;base64,' + this.myAvatar
    },
    changeName () {
      if (this.username === '') {
        this.name = getRandomName(Math.floor(Math.random() * (6 - 2) + 2))
      } else {
        this.name = this.username
      }
    },
    submit () {
      this.saveName()
      this.axios.post('testInsert',{
          nick_name:this.name,
          content:this.content
        }).then((res)=>{
          console.log(res)
        })
      // this.axios.post('/user/login',{
      //   username: 'cjh',
      //   password: 'cjh'
      // }).then((res)=>{
      //     console.log(res)
      //   })
    },
    saveName () {
      this.saveUserName(this.name)
    }
  },
  mounted () {
    this.changeAvatar()
    this.changeName()
  }
}
</script>
<style scoped>
@media screen and (max-height: 1200px) {
  .modal {
      overflow-y: scroll;
  }
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
}
.mask, .modal {
  z-index: 1000;
}
.modal-content {
  position: relative;
  top: 200px;
  display: inline-block;
  vertical-align: middle;
  text-align: left;
  background: #fff;
  -webkit-box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.21);
  box-shadow: 0 2px 11px 0 rgba(0, 0, 0, 0.21);
  border-radius: 6px;
  -webkit-animation: onShow 0.3s ease-in-out;
  animation: onShow 0.3s ease-in-out;
}
.modal-close {
  position: absolute;
  top: -4px;
  right: -40px;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
}
.modal .tcIcon_shut {
  vertical-align: middle;
  display: inline-block;
  width: 36px;
  height: 36px;
  fill: #fff;
}
svg:not(:root) {
  overflow: hidden;
}
.post_pop_ups {
  width: 640px;
  min-height: 200px;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
}
.post_pop_ups .banner {
  height: 80px;
  background: url(data:image/png;base64,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);
  text-align: left;
}
.post_pop_ups .banner .avatar-img {
  width: 55px;
  height: 55px;
  -o-object-fit: cover;
  object-fit: cover;
  margin: 13px 0 0 40px;
  border-radius: 50%;
}
.post_pop_ups .post_form {
  padding: 38px;
  padding-bottom: 70px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.post_pop_ups .post_form_userEnter {
  margin-bottom: 16px;
  position: relative;
}
.user_enter_form.user_enter_pc {
  width: 100%;
  min-height: 144px;
  border: none;
  overflow: hidden;
}
.user_enter_form.user_enter_pc .text_name {
  max-height: 20px;
  margin-bottom: 10px;
}
.user_enter_form.user_enter_pc .text_outline {
  min-height: 144px;
}
.user_enter_form .text_outline {
  border-radius: 3px;
  /* border: 1px solid #dcdce0; */
  /* padding: 7px 10px; */
}
.user_enter_form .text_name {
  border-radius: 3px;
  border: 1px solid #dcdce0;
  padding: 7px 10px;
}
.post_pop_ups .post_form_userEnter .text_area_maxH {
  min-height: 120px;
}
.user_enter_form .text_area.text_area_maxH {
  max-height: calc(100vh - 465px);
  overflow-y: auto;
  overflow-x: hidden;
}
.user_enter_form .text_area {
  min-height: 52px;
  outline: none;
  position: relative;
}
.text_area_name {
  min-height: 52px;
  outline: none;
  position: absolute;
  top: 15px;
  font-size: 17px;
  left: 140px;
  width: 100px;
  text-decoration:underline;
  background-color: transparent;
  border: 0;
}
.post_pop_ups .post_form_userEnter .text_func {
  position: absolute;
  top: calc(100% + 16px);
  left: -5px;
}
.user_enter_form.user_enter_pc .text_func .text_func_btn {
  width: 90px;
  height: 32px;
  position: absolute;
  top: 0;
  right: -570px;
  text-align: center;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.text_area_name:empty:not(:focus)::before {
  content: attr(placeholder);
  position: absolute;
  color: #b2b2b2;
  font-size: 15px;
  pointer-events: none;
}
.user_enter_form .text_area:empty:not(:focus)::before {
  content: attr(placeholder);
  position: absolute;
  color: #b2b2b2;
  font-size: 15px;
  pointer-events: none;
}
.user_enter_form .text_func_btn {
    float: right;
    width: 74px;
    height: 32px;
    background: #3e8dff;
    border-radius: 3px;
    border: 1px solid #2f7ceb;
    line-height: 32px;
    color: #fff;
    cursor: pointer;
}
.text_area_inp{
    width: 99%;
    height: 100%;
    min-height: 144px;
    border: 1px solid #dcdce0;
    border-radius: 3px;
    outline: none;
}
.text_area_inp:empty:not(:focus)::before {
  content: attr(placeholder);
  position: absolute;
  color: #b2b2b2;
  font-size: 15px;
  pointer-events: none;
}
</style>
