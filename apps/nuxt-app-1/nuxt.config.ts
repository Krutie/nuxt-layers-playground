// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  extends: [

    // packaged layers
    "@kru/nuxt-ui-layer",
    "@kru/nuxt-data-layer",

    // local layers
    "../../layers/base",
    "../../layers/pdp",
    "../../layers/plp"
  ]
})
