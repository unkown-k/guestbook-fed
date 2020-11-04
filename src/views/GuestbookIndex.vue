<template>
  <el-container>
    <el-header>
      <guestbook-top></guestbook-top>
    </el-header>
    <el-main>
      <guestbook-banner></guestbook-banner>
      <div class="content">
        <guestbook-notice></guestbook-notice>
        <guestbook-content></guestbook-content>
        <guestbook-add></guestbook-add>
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
