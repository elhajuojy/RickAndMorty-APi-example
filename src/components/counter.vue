<script setup>
    import {ref} from "vue"
    var num1 = 0;
    var num2 = 0;

    var res = ref(0);
    function add(){
        res.value = num1+num2;
        console.log(res);
    }
</script>



<template>
    <div>
        <input v-model="num1" type="number">
        <input v-model="num2" type="number">
        <button @click="add()">+</button>
        <h1>{{res}}</h1>
    </div>
</template>

<style scoped>

</style>