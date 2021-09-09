<template>
    <div>
我是about
        <div id="chart" style="width: 100%; height: 100%" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "About",
        data () {
            return {
                chart: null
            }
        }, //图表实例
        mounted () {
            this.init()
        },
        methods: {
            init () {
                console.log(this.$Echarts)
                //2.初始化
                this.chart = this.$Echarts.init(this.$refs.chart)
                //3.配置数据
                let option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    }, //X轴
                    yAxis: { type: 'value' }, //Y轴
                    series: [
                        {
                            data: [120, 200, 150, 80, 70, 110, 130],
                            type: 'bar',
                        }], //配置项
                }
                // 4.传入数据
                this.chart.setOption(option)
            },

        },
    }

</script>

<style scoped>

</style>