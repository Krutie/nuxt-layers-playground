<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div class="bg-primary-100">
    <h1 class="text-3xl font-bold p-4 text-primary-500"  title="heading 1"> 
      {{ myLayer.name }}
    </h1>
  </div>
</template>
