<template>
  <div class="job-manager">
    <h3 class="h3-title">职位管理</h3>
    <div class="job-manager-main">
      <el-table :data="tableData" border class="table-work">
        <el-table-column fixed prop="name" label="姓名">
        </el-table-column>
        <el-table-column fixed prop="posts" label="职位">
        </el-table-column>
        <el-table-column prop="taskNum" label="剩余任务量">
        </el-table-column>
        <el-table-column prop="task_ok" label="完成任务量">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button type="text" size="small" @click="delClick(scope.row)" style="color: red;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes"
        :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total" class="el-page-footer">
      </el-pagination>
    </div>
    <posts-select @closeDialog="closeDialog" :dialogValue="dialogValue"></posts-select>
  </div>
</template>

<script>
  import postsSelect from './dialogAll/postsSelect.vue'
export default {
  components: {
    postsSelect,
  },
  data() {
    return {
      tableData: [
        {
          name: "张三",
          posts: "主管",
          taskNum: 5,
          task_ok: 9
        },
        {
          name: "张三",
          posts: "主管",
          taskNum: 5,
          task_ok: 9
        },
        {
          name: "张三",
          posts: "主管",
          taskNum: 5,
          task_ok: 9
        },
        {
          name: "张三",
          posts: "主管",
          taskNum: 5,
          task_ok: 9
        },
        {
          name: "张三",
          posts: "主管",
          taskNum: 5,
          task_ok: 9
        },
      ],
      pageSize: 7,//每页的数据量
      currentPage: 1, //当前页
      total: 8, //数据总量
      pageSizes: [5, 7, 10], //每页数量
      dialogValue: false,
    }
  },
  methods: {
    handleClick(row) { //编辑
      this.dialogValue = true
    },
    delClick(row) { //删除
      console.log(row)
    },
    handleCurrentChange(val) {
      // console.log(val)
    },
    closeDialog() {
      this.dialogValue = false
    },
  },
}
</script>

<style lang="scss" scoped>
.job-manager {
  padding: 15px 20px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .job-manager-main {
    padding: 20px 0;
    flex: 1;
    overflow: hidden;
    position: relative;
  }
}
</style>
<style lang="scss">
table.el-table__body {
  .cell {
    white-space: nowrap !important;
  }
}
.el-page-footer{
  position: absolute;
  right: 10px;
  bottom: 20px;
  text-align: right;
}
</style>