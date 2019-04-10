<template>
  <div class="app">
    <el-container>
      <el-aside
        class="app-side app-side-left"
        :class="isCollapse ? 'app-side-collapsed' : 'app-side-expanded'"
      >
        <div class="app-side-logo">
          <!-- <img src="@/assets/logo.png" :width="isCollapse ? '60' : '60'" height="60"> -->
        </div>
        <div>
          <!-- 我是样例菜单 -->
          <el-menu
            router
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            :default-active="$route.path"
          >
            <el-menu-item index="/admin/home">
              <i class="el-icon-menu"></i>
              <span slot="title">管理首页</span>
            </el-menu-item>
            <el-menu-item index="/admin/news">
              <i class="el-icon-menu"></i>
              <span slot="title">新闻列表</span>
            </el-menu-item>
            <el-menu-item index="/admin/activities">
              <i class="el-icon-menu"></i>
              <span slot="title">活动列表</span>
            </el-menu-item>
            <el-menu-item index="/admin/application">
              <i class="el-icon-menu"></i>
              <span slot="title">申请列表</span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="app-header">
          <div style="width: 60px; cursor: pointer;" @click.prevent="toggleSideBar">
            <i v-show="!isCollapse" class="el-icon-d-arrow-left"></i>
            <i v-show="isCollapse" class="el-icon-d-arrow-right"></i>
          </div>
          <div class="app-header-userinfo">
            <el-dropdown trigger="hover" :hide-on-click="false">
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <el-main class="app-body">
          <template>
            <router-view/>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      username: "kadima",
      isCollapse: false
    };
  },
  methods: {
    toggleSideBar() {
      this.isCollapse = !this.isCollapse;
    },
    logout: function() {
      this.$confirm("确认退出?", "提示", {})
        .then(() => {
          sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(() => {});
    }
  },
  mounted() {}
};
</script>

<style>
</style>