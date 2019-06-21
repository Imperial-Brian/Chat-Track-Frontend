<template>
<div class="app">
  <mt-header fixed title="">
    <mt-button slot="right" @click="openPersonal">
      <img src="http://fakeimg.pl/300/" height="20" width="20" slot="icon">
        這裡放個人icon
    </mt-button>
    <mt-button slot="right" @click="openPersonal">
       <img src="http://fakeimg.pl/300/" height="20" width="20" slot="icon">
        這裡放動態消息icon
    </mt-button>
  </mt-header>

  <div class="container">

    <div class="content">
      <router-view></router-view>
    </div>

    <div class="footer">
        <div class="page-actionsheet">
          <div class="page-actionsheet-wrapper">
            <mt-button @click.native="sheetVisible = true" size="large">選單列表</mt-button>
          </div>
          <mt-actionsheet :actions="actions" v-model="sheetVisible"></mt-actionsheet>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      sheetVisible: false,
      cancelText: '取消',
      actions: [],
    }
  },
  methods: {
    main() {
      console.log('main menu');
      this.$router.push('/');
    },
    records() {
      console.log('opening a ledger');
      this.$router.push('/ledger');
    },
    charts() {
      //history.go(-1);
      console.log('show charts');
      this.$router.push('/chart');
    },
    robotSetting() {
      console.log('show i-track setting');
      this.$router.push('/robot');
    },
    openPersonal() {
      console.log('show personal page');
      this.$router.push('/personal')
    }
  },
  mounted() {
    this.actions = [{
      name: '主畫面',
      method: this.main
    }, {
      name: '收支紀錄',
      method: this.records
    }, {
      name: '統計圖表',
      method: this.charts
    }, {
      name: 'i-Track設定',
      method: this.robotSetting
    }];
  }
}
</script>

<style>
body {    
    margin: 0 !important;
    padding: 0 !important;
}

.app {
  width:100%;
}

.header {
  position: relative;
  width: 100%;
  height: 60px;
  background-color: black;
  top:0;
}

.container {
  width: 100%;
  height: 100%;
}

.content {
  display: inline-block;
  width: 100%;
  height: 100%;
  right: 0;
  top: 5%;
  position: absolute;
  background-color:white;
}

.footer {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  background-color: white;

}

</style>
