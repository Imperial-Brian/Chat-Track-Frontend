<template>
  <div class="hello">
    <h1>個人頁面</h1>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Here is counter page.',
      total: 0,
      count: 0,
    }
  },
  // bug發生在這邊設成computed
  methods: {
      increase: function() {
          this.total += parseInt(this.count);
      },
      decrease: function() {
          this.total -= this.count;
      },
      setButtonZero: function() {
          this.count = 0;
      },
      multiply: function() {
          this.total *= this.count;
      },
      setZero: function() {
        this.total = 0;
      }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>