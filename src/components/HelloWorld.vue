<template>
    <div id="content">
        <div>
            <router-link to="/item/100">11</router-link>
            <router-link to="/item/200">22</router-link>
            <router-link to="/item/300">33</router-link>
        </div>
    </div>

</template>

<script>

    export default {

        props: ["message"],
        name: "hello",
    }
</script>

<style>

</style>