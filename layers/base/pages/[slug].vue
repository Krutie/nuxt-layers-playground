<template>
    <div class="h-screen">
        {{ route.params }}

        <component :is="componentName" />
    </div>
</template>
<script setup lang="ts">

const route = useRoute()

const componentName = ref('')

if (route.params.slug === 'pdp') {
    componentName.value = 'ProductDetail'
} else if (route.params.slug === 'plp') {
    componentName.value = 'ProductListing'
}


</script>