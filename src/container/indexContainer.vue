<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-light">
            <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router="true">
              <el-menu-item index="/login">管理登陆</el-menu-item>
              <el-menu-item index="/application">任务申请</el-menu-item>
              <el-menu-item index="/home">首页</el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
export default {
  name:"indexContainer",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      
    };
  },
  methods:{
  }
};
</script>

<style lang="scss">
.el-menu.el-menu--horizontal {
  padding-right: 30px;
}
.el-menu--horizontal > .el-menu-item {
  float: right;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
.el-menu.el-menu--horizontal {
  padding-right: 180px;
}
</style>


