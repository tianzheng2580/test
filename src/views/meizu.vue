<template>
    <div class="nav">
        <div :class="{nav1:flag,nav3:!flag}" >
            <el-button @click="qeihuan">点击</el-button>
        </div>
        <div class="nav2" ></div>
    </div>

</template>

<script>
    export default {
        name: "meizu",
        data(){
            return{
                flag:true
            }

        },
        methods:{
            qeihuan(){
                this.flag = !this.flag;
            }
    }

    }
</script>

<style scoped>
    .nav{
        flex: 1;
        display:flex;

    }
    .nav1{
        width: 100px;
        background-color: cyan;
        position:relative;
        animation:mymove2 5s;

    }
    .nav2{
        flex:1;
        background-color: red;
    }
    .nav3{
        width: 200px;
        background-color: cyan;
        position:relative;
        animation:mymove 5s;
    }
    @keyframes mymove
    {
        0%{
            width: 100px;
        }
        100%{
            width: 200px;
        }

    }
    @keyframes mymove2
    {
        0%{
            width: 200px;
        }
        100%{
            width: 100px;
        }

    }

</style>