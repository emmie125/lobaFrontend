<template>
  <b-row class="flex-wrap-reverse">
    <b-col class="d-flex align-items-center justify-content-center"><span>LOBA</span></b-col>
    <b-col class="d-md-flex"><b-img
              rounded="circle"
              width="60"
              heigth="60"
              :src="require('@/assets/violence-victime.jpg')"
              alt="Center image"
            ></b-img></b-col>
  </b-row>
</template>

<script>
export default {
  name: "Logo",
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
@import "./logo.scss";
</style>
