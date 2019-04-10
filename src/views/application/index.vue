<template>
  <el-container>
    <el-header>
      <el-row :inline="true">
        <el-select v-model="search" placeholder="申请部门">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="申请人名字">
                <span>{{ props.row.a_name }}</span>
              </el-form-item>
              <el-form-item label="申请人部门">
                <span>{{ props.row.a_department }}</span>
              </el-form-item>
              <el-form-item label="联系方式">
                <span>{{ props.row.a_phone }}</span>
              </el-form-item>
              <el-form-item label="任务描述">
                <span>{{ props.row.a_describe }}</span>
              </el-form-item>
              <el-form-item label="任务地点">
                <span>{{ props.row.a_place }}</span>
              </el-form-item>
              <el-form-item label="任务日期">
                <span>{{ props.row.a_targetDate }}</span>
              </el-form-item>
              <el-form-item label="申请日期">
                <span>{{ props.row.a_date }}</span>
              </el-form-item>
              <el-form-item label="申请部门">
                <span>{{ props.row.n_department }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="申请人" prop="a_name"></el-table-column>
        <el-table-column label="任务日期" prop="a_targetDate" sortable></el-table-column>
        <el-table-column label="申请日期" prop="a_date" sortable></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.state===1">已通过</el-tag>
            <el-tag type="warning" v-if="scope.row.state===0">待审核</el-tag>
            <el-tag type="danger" v-if="scope.row.state===-1">未通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="showEdit(scope.row,scope.$index)"
            ></el-button>
            <el-button type="success" icon="el-icon-check" circle @click="accept(scope.row.id)"></el-button>
            <el-button type="danger" icon="el-icon-close" circle @click="refuse(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="sizePage"
          layout="total, prev, pager, next"
          :total="totalPage"
        ></el-pagination>
      </div>
    </el-main>
    <el-dialog title="修改" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="100px" ref="editForm">
        <el-form-item label="申请人名字">
          <el-input v-model="editForm.a_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请人部门">
          <el-input v-model="editForm.a_department" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="editForm.a_phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input v-model="editForm.a_describe" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="任务地点">
          <el-input v-model="editForm.a_place" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="任务日期">
          <el-date-picker
            type="datetime"
            placeholder="选择日期"
            v-model="editForm.a_targetDate"
            value-format="yyyy-MM-dd HH:mm"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="申请部门">
          <el-input v-model="editForm.n_department" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDo">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>
  
<script>
export default {
  data() {
    return {
      editForm: {
        id: 0,
        a_name: "",
        a_department: "",
        a_describe: "",
        a_place: "",
        a_targetDate: "",
        a_date: "",
        n_department: "",
        a_phone: "",
        state: ""
      },
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
      search: "",
      dialogFormVisible: false,
      currentPage: 1,
      totalPage: 1000,
      sizePage: 100,
      tableData: [
        {
          id: 1,
          a_name: "周启铭",
          a_department: "网络部",
          a_describe: "制作it文化节视频",
          a_phone: "18476318110",
          a_place: "无",
          a_targetDate: "2019-4-1 16:30",
          a_date: "2019-3-8",
          n_department: "网络部",
          state: 1
        },
        {
          id: 2,
          a_name: "周启铭",
          a_department: "网络部",
          a_describe: "制作it文化节视频",
          a_phone: "18476318110",
          a_place: "无",
          a_targetDate: "2019-3-1 16:30",
          a_date: "2019-3-8",
          n_department: "网络部,新闻部",
          state: 1
        },
        {
          id: 3,
          a_name: "周启铭",
          a_department: "网络部",
          a_describe: "制作it文化节视频",
          a_phone: "18476318110",
          a_place: "无",
          a_targetDate: "2019-5-1 16:30",
          a_date: "2019-3-8",
          n_department: "新闻部",
          state: 0
        },
        {
          id: 4,
          a_name: "周启铭",
          a_department: "网络部",
          a_describe: "制作it文化节视频",
          a_phone: "18476318110",
          a_place: "无",
          a_targetDate: "2019-5-1 16:30",
          a_date: "2019-3-8",
          n_department: "摄影部",
          state: -1
        }
      ]
    };
  },
  methods: {
    accept: function(id) {
      this.$confirm("确认通过?", "提示", {})
        .then(() => {
          console.log(id);
          if (this.tableData[id - 1].state == 1)
            this.$notify({
              title: "失败",
              message: "申请已经通过",
              type: "warning"
            });
          else {
            this.tableData[id - 1].state = 1;
            this.$notify({
              title: "成功",
              message: "申请成功通过",
              type: "success"
            })
          }
        })
        .catch(() => {});
    },
    refuse: function(id) {
      this.$confirm("确认拒绝?", "提示", {})
        .then(() => {
         console.log(id);
          if (this.tableData[id - 1].state == -1)
            this.$notify({
              title: "失败",
              message: "申请已经拒绝",
              type: "warning"
            });
          else {
            this.tableData[id - 1].state = -1;
            this.$notify({
              title: "成功",
              message: "申请成功拒绝",
              type: "success"
            })
          }
          
        })
        .catch(() => {});
    },
    showEdit(row, _index) {
      //记录索引
      this.listIndex = _index;
      //记录数据
      this.editForm = row;
      console.log(this.editForm.id);
      //显示弹窗
      this.dialogFormVisible = true;
      console.log(this.dialogFormVisible);
    },
    editDo() {
      this.$notify({
        title: "成功",
        message: "修改成功",
        type: "success"
      });
      this.dialogFormVisible = false;
      console.log(this.dialogFormVisible);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    get() {}
  }
};
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.block {
  text-align: center;
  margin-top: 20px;
}
</style>