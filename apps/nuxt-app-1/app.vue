<template>
  <div>
    <div class="text-xs">
      <!-- GraphQL Data:
      <pre>
  {{ data }}
  </pre> -->

    </div>
    <!-- <NuxtWelcome /> -->
    <HelloWorld />

    <!-- <div class="p-10">
       <Input v-model="amount"
             label="Amount"
             icon="mdi:dollar"
             helpText="Enter dollar value without decimals."
             :validation="validationRules.amount">
      <template #trailing>
        AUD
      </template>
      </Input> 
    </div> -->

    <NuxtPage />

  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
// INPUT FIELD
const amount = ref('')
const validationRules = {
  amount: {
    numeric: {
      errorMessage: 'Amount must be a numeric value.'
    }
  }
}

// GRAPHQL QUERY

const query = gql`
  query greeting {
    hello
  }
`

const { data } = await useAsyncQuery(query)

</script>
