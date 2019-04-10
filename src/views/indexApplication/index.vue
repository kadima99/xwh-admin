<template>
  <el-form ref="form" :model="form" label-width="80px" style="padding:50px 150px 50px 150px">
    <el-form-item label="申请人">
      <el-col :span="8">
        <el-input v-model="form.a_name" size="30%"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="所属部门">
      <el-col :span="8">
        <el-input v-model="form.a_department" size="30%"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-col :span="8">
        <el-input v-model="form.phone" size="30%"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="活动地点">
      <el-col :span="8">
        <el-input v-model="form.a_place" size="30%"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="8">
        <el-date-picker
          type="datetime"
          placeholder="选择日期"
          value-format="yyyy-MM-dd HH:mm"
          v-model="form.a_targetDate"
          style="width: 100%;"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="申请部门">
      <el-checkbox-group v-model="form.n_department">
        <el-checkbox v-for="i in options" :label="i.value" :key="i.value">{{i.label}}</el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="活动描述">
      <el-input type="textarea" v-model="form.a_describe"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(form)">提交申请</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  
  data() {
    return {
      options: [
        {
          value: "1",
          label: "网络部"
        },
        {
          value: "2",
          label: "摄影部"
        },
        {
          value: "3",
          label: "新闻部"
        },
        {
          value: "4",
          label: "美工部"
        },
        {
          value: "5",
          label: "新宣部"
        }
      ],
      form: {
        a_name: "",
        a_department: "",
        phone: "",
        a_describe: "",
        a_place: "",
        a_targetDate: "",
        n_department: []
      }
    };
  },
  methods : {
      onSubmit(form){
      this.$confirm("确认申请?", "提示", {})
        .then(() => {
          console.log(this.form);
          this.$notify({
            title: "成功",
            message: "成功提交",
            type: "success"
          });
        })
        .catch(() => {});
    }
  }
  
};
</script>

<style lang="scss">
</style>
