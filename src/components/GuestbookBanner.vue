<template>
  <div class="banner"></div>
</template>

<script>
export default {
  name: "GuestbookBanner"
};
</script>

<style scoped>
.banner {
  height: 250px;
  position: relative;
  text-align: center;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto 100%;
  background-image: url("~@/assets/banner.jpg");
  margin-bottom: 12px;
}
</style>
