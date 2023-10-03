<template>
    <div class="flex h-screen w-screen font-bold justify-center items-center">
        <!-- <div class="text-2xl text-secondary-500">
            Product Listing Page
        </div> -->

        <Input v-model="search"
               search
               label="Product Listing: Search"
               icon="mdi:document"
               helpText="Enter searc value without decimals.">
        <template #trailing>
            <button>
                <Icon icon="mdi:search"
                      class="h-6 w-6" />
            </button>
        </template>
        </Input>

    </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue"

const search = ref('')
</script>