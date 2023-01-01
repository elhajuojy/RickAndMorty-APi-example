<script setup>

var props = defineProps(['item'])
</script>


<template>
    <transition name="cardAn" >
    <div class="card">
        <div class="card-left">
            <img :src="props.item.image" alt="">
        </div>
        <div class="card-right">
            <h3>{{props.item.name}}</h3>
            <div class="status">
                <div class="circle">
                </div>
                <p> Unknow - Human</p>
            </div>
            <div class="location">
                <p>Last known location:</p>
                <p>Earth (Replacement Dimension)</p>
            </div>
            <!-- 
            <div class="desc">
                <p>First seen in:</p>
                <p>Close Rick-counters of the Rick Kind</p>
            </div> -->
        </div>
    </div>
    </transition>

</template>

<style scoped>

.cardAn-enter-from{
    opacity: 1;
    background-color: yellow;
}

.cardAn-enter-active{
    transition: all 0.2s ease;
    position: absolute;
}

.cardAn-enter-to{
    opacity: 0;
    background-color: blue;
}

.cardAn-leave-from{
    opacity: 0;
    background-color: yellow;
}

.cardAn-leave-active{
    transition: all 0.2s ease;
    position: absolute;
    
}

.cardAn-leave-to{
    opacity: 1;
    background-color: blue;
}


.card-left img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

}
.card-left{
    max-width: 250px;
}


.card{
    background-color: rgb(42, 33, 33);
    display: flex;
    color: white;
    gap: 20px;
    padding: 0;
    max-width: 700px;
    border-radius: 10px;
    
}

h3{
    color: yellowgreen;
    text-decoration: underline;
    margin-bottom: 2rem;
    font-family: 1rem;
}

.card-right{
    align-self: center;
}
</style>