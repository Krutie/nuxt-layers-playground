import { ColorPalette } from './types'

export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer',
    theme: {
      primary: {
        '50': '#fcffe5',
        '100': '#f6ffc7',
        '200': '#ecff95',
        '300': '#d6ff42',
        '400': '#c6f625',
        '500': '#a7dd05',
        '600': '#81b100',
        '700': '#618605',
        '800': '#4e690b',
        '900': '#41590e',
        '950': '#213201',
      },
      secondary: {
        '50': '#ebfffd',
        '100': '#cdfffd',
        '200': '#a1ffff',
        '300': '#42fcff',
        '400': '#1aeff6',
        '500': '#00d2dc',
        '600': '#01a8b9',
        '700': '#098595',
        '800': '#116a79',
        '900': '#135766',
        '950': '#063a46',
      }
    }
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string,
      theme?: {
        primary?: ColorPalette,
        secondary?: ColorPalette
      }
    }
  }
}
