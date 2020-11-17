<template>
  <div class="header">
    <div class="header-main">
      留言板
    </div>
  </div>
</template>

<script>
export default {
  name: "GuestbookTop"
};
</script>

<style scoped>
.header {
  background-color: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(85, 85, 85, 0.1);
  box-shadow: 0 2px 4px 0 rgba(85, 85, 85, 0.1);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
  line-height: 60px;
}
.header-main {
  width: 1032px;
  margin: 0 auto;
}
</style>
