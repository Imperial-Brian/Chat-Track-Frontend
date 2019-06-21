<template>
  <div class="message">
    <h1>收支入頁面</h1>
    <h2>輸入 Line ID：讀取記帳訊息資訊</h2>
    <el-row>
      <el-col :span="8"><div class="grid-content bg-purple"><div></div></div></el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <el-input v-model="searchLineId" placeholder="ex: UX391829349173934349"></el-input>
          <el-button type="primary" v-on:click="getUserMessage">查詢</el-button>
        </div>

        
      </el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div><div></div></el-col>
    </el-row>

     <el-col :span="4"><div class="grid-content bg-purple"><div></div></div></el-col>
      <el-col :span="16">
       <el-table
        :data="userMessage"
        height="250"
        border
        style="width: 100%">
        <el-table-column
          prop="timestamp"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="lineid"
          label="line的ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="訊息內容">
        </el-table-column>
      </el-table>
        
      </el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div><div></div></el-col>
    </el-row>

  </div>
</template>

<script>

export default {
    data() {
      return {
        searchLineId: '',
        userMessage: '',
      }
    },
    methods: {
      getUserMessage: function() {
        console.log(this.searchLineId);
        //:lineId/contents
        let api = "http://127.0.0.1:8080/api/"+this.searchLineId+ "/contents";
        this.axios.get(api).then((response) => {
          console.log(response.data);
          this.userMessage = response.data;
        })

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
