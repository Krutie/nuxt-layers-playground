<template>
    <div class="flex bg-primary-50 h-screen font-bold justify-center items-center">
        <!-- <div class="text-2xl text-secondary-500">
            Product Listing Page
        </div> -->
        <div class="p-10 bg-white rounded-lg">
            <Input v-model="search"
                   search
                   label="Product Listing: Search"
                   icon="mdi:document"
                   helpText="Enter search term.">
            <template #trailing>
                <button>
                    <Icon icon="mdi:search"
                          class="h-6 w-6" />
                </button>
            </template>
            </Input>
        </div>

    </div>
</template>
<script setup lang="ts">
import { Icon } from "@iconify/vue"

const search = ref('')
</script>