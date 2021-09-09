<template>
    <div class="denglu">
        <input type="text" v-model="name">
        <input type="password" v-model="pwd">
        <input type="button" value="登录" @click="jump">
        <p>111</p>
    </div>
</template>

<script>
    export default {
        name: "hell",
        data(){
            return{
                name:'',
                pwd:'',
                meta: {
                    auth: false
                }

            }

        },
        methods:{
            jump(){
                localStorage.setItem('user',{name:this,pwd:this.pwd});
                console.log('yaodenglul ');
                console.log(this.$route.path);
                this.$router.push({
                    path:'/about',
                });
                console.log(this.$route.path);



            }
        }
    }

</script>

<style scoped>

</style>