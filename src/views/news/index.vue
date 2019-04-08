<template>
  <el-container>
    <el-header>
      <el-button type="success" @click="showEditAdd">添加新闻</el-button>
    </el-header>
    <el-main>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="新闻标题" prop="title"></el-table-column>
        <el-table-column label="发布日期" prop="date" sortable></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.state===1">已发布</el-tag>
            <el-tag type="warning" v-if="scope.row.state===0">待审核</el-tag>
            <el-tag type="danger" v-if="scope.row.state===-1">已下架</el-tag>
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
    </el-main>
    <el-dialog title="修改" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="100px" ref="editForm">
        <el-form-item label="新闻标题">
          <el-input v-model="editForm.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="发布日期">
          <el-date-picker
            type="datetime"
            placeholder="选择日期"
            v-model="editForm.date"
            value-format="yyyy-MM-dd HH:mm"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="新闻内容">
          <el-input
            v-model="editForm.content"
            auto-complete="off"
            type="textarea"
            :autosize="{ minRows: 10}"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDo">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加" :visible.sync="addDialogFormVisible" :close-on-click-modal="false">
      <el-form :model="addForm" label-width="100px" ref="addForm">
        <el-form-item label="新闻标题">
          <el-input v-model="addForm.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="发布日期">
          <el-date-picker
            type="datetime"
            placeholder="选择日期"
            v-model="addForm.date"
            value-format="yyyy-MM-dd HH:mm"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="新闻内容">
          <el-input
            v-model="addForm.content"
            auto-complete="off"
            type="textarea"
            :autosize="{ minRows: 10}"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="editAdd">确 定</el-button>
      </div>
    </el-dialog>
  </el-container>
</template>
  
<script>
export default {
  data() {
    return {
      editForm: {
        id: "",
        title: "",
        content: "",
        date: "",
        state: ""
      },
      addForm: {
        id: "",
        title: "",
        content: "",
        date: "",
        state: ""
      },
      search: "",
      dialogFormVisible: false,
      addDialogFormVisible: false,
      tableData: [
        {
          id: 1,
          title: "宣传网站首发新闻",
          content:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2019-4-1 16:30",
          state: 1
        },
        {
          id: 2,
          title: "宣传网站首发新闻",
          content:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2019-4-1 16:30",
          state: 1
        },
        {
          id: 3,
          title: "宣传网站首发新闻",
          content:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2019-4-1 16:30",
          state: 0
        },
        {
          id: 4,
          title: "宣传网站首发新闻",
          content:
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          date: "2019-4-1 16:30",
          state: -1
        }
      ]
    };
  },
  methods: {
    accept: function(id) {
      this.$confirm("确认发布?", "提示", {})
        .then(() => {
          console.log(id);
          this.$notify({
            title: "成功",
            message: "新闻成功发布",
            type: "success"
          });
        })
        .catch(() => {});
    },
    refuse: function(id) {
      this.$confirm("确认下架?", "提示", {})
        .then(() => {
          console.log(id);
          this.$notify({
            title: "可惜",
            message: "新闻已经下架",
            type: "warning"
          });
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
    showEditAdd() {
      //显示弹窗
      this.addDialogFormVisible = true;
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
    editAdd() {
      this.$notify({
        title: "成功",
        message: "添加成功",
        type: "success"
      });
      this.addDialogFormVisible = false;
      console.log(this.dialogFormVisible);
    }
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
</style>