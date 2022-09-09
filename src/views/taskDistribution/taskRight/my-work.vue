<template>
  <div class="my-work">
    <h3 class="h3-title">我的任务</h3>
    <div class="table-main">
      <el-table :data="tableData" border class="table-work">
        <el-table-column fixed prop="taskName" label="任务名称">
        </el-table-column>
        <el-table-column fixed prop="creationTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="designatePerson" label="指派人">
        </el-table-column>
        <el-table-column prop="designatedPerson" label="被指派人">
        </el-table-column>
        <el-table-column prop="startTime" label="开始时间">
        </el-table-column>
        <el-table-column prop="endTime" label="截止时间">
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="150px">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="delClick(scope.row)" style="color: red;">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="pageSizes"
        :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total"
        class="el-page-footer">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
        {
          taskName: "任务一",
          creationTime: "2022-09-05",
          designatePerson: "指派人",
          designatedPerson: "被指派人",
          startTime: "2022-09-06",
          endTime: "2022-09-07",
        },
      ],
      pageSize: 7,//每页的数据量
      currentPage: 1, //当前页
      total: 8, //数据总量
      pageSizes: [5, 7, 10], //每页数量
    }
  },
  methods: {
    handleClick(row) { //查看
      console.log(row)
    },
    delClick(row) { //删除
      console.log(row)
    },
    handleCurrentChange(val) {
      console.log(val)
    },
  },
}
</script>

<style lang="scss" scoped>
.my-work {
  padding: 15px 20px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .table-main {
    padding: 20px 0;
    flex: 1;
    overflow: hidden;
  }
}
</style>
<style lang="scss">
.el-page-footer{
  position: absolute;
  right: 10px;
  bottom: 20px;
  text-align: right;
}
</style>