<template>
  <el-container>
    <el-header>
      <el-row :gutter="12">
        <el-col :span="8">
          <el-card shadow="hover">
            <p>
              <i class="el-icon-edit" style="font-size:25px">已通过申请数量:</i>
              <font style="color:#67C23A;font-size:30px">{{acApplication}}</font>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <p>
              <i class="el-icon-edit" style="font-size:25px">未处理申请数量:</i>
              <font style="color:#E6A23C;font-size:30px">{{waitApplication}}</font>
            </p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card shadow="hover">
            <p>
              <i class="el-icon-edit" style="font-size:25px">未通过申请数量:</i>
              <font style="color:#F56C6C;font-size:30px">{{reApplication}}</font>
            </p>
          </el-card>
        </el-col>
      </el-row>
    </el-header>
    <el-main >
      <div>
        <div style="width: 100%;height: 500px; solid rgb(180,180,180)" id="echartss"></div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import echarts from "echarts";
export default {
  mounted: function() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("echartss"));
    // 绘制图表，this.echarts1_option是数据
    myChart.setOption(this.echarts1_option);
  },
  data() {
    return {
      acApplication: 12,
      reApplication: 12,
      waitApplication: 22,
      echarts1_option:{ tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['网络部','新闻部','摄影部','美工部','新宣部']
    },
    series: [
        {
            name:'申请任务数量',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:1, name:'网络部'},
                {value:2, name:'摄影部'},
                {value:3, name:'新闻部'},
                {value:4, name:'美工部'},
                {value:5, name:'新宣部'}
            ]
        }
    ]}
    };
  }
};
</script>

<style lang="scss">
.el-main {
   margin-top: 40px;
  }
</style>

