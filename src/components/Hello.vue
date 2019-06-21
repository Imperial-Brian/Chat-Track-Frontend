<template>
  <div class="hello">
    <h1>一開始的畫面</h1>
  </div>
</template>

<script>

var checkLogin = function (loginInfo) {

}

var checkLoginaAccount = async function(loginInfo) {
  let status = await checkLogin(loginInfo)
}

export default {
  name: 'hello',
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

</style>
