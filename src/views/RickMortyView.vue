<script setup>
import Card from "../components/Card.vue"
import axios from "axios";
import { watch,ref,onMounted } from "vue";

var data = ref() ;



async function initData() {
    
}

var input = ref("");

watch(input,async()=>{
    const respone = await axios.get("https://rickandmortyapi.com/api/character?name="+input.value);
    data.value=  await respone.data.results;
})


onMounted(async() => {
    const respone = await axios.get("https://rickandmortyapi.com/api/character");
    data.value=  await respone.data.results;
    console.log(data);
});

</script>
<template>
    <main>
        <header>
            <h1>The Rick and Morty API</h1>
            <Transition name="fade">
                <p>{{input}}</p>
            </Transition>
            
            <div class="input" >
                <input type="text" placeholder="search ..." v-model="input">
            </div>
        </header>
        <section class="container">
            <div class="cards">
                <Card v-for="item in data" :key="item.id" :item="item"/>
            </div>
        </section>
    </main>
</template>

<style scoped>


input[type=text] {
    width: 400px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
.cards{
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 10px;
}
@media (max-width:800px ) {
    h1{
        font-size: 1.4rem;
    }
    .cards{
        grid-template-columns: 1fr ;
    }
}



header{
    width: 100%;
    height: 20vh;
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: rgb(22, 20, 20);
    color: whitesmoke;
    font-size: 1.5rem;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>