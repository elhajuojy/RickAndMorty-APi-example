<script setup>
import { RouterView,RouterLink } from 'vue-router';

</script>


<template>
  <main>
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/About">About</RouterLink> -->
    <Suspense>
      <template #default>
        <RouterView/>
      </template>
      <template #fallback>
          <div class="div">
              <p>Loading ...</p>
          </div>
      </template>
  </Suspense>
    
  </main>
</template>

<style scoped>
*{
  font-family: 'Courier New', Courier, monospace;
}


  h1{
    font-size: 3rem;
    text-align: center;
  }

</style>
