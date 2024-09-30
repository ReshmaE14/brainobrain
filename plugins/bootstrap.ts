// plugins/bootstrap.ts
import { defineNuxtPlugin } from '#app'
import { useHead } from '@vueuse/head'

export default defineNuxtPlugin(() => {
  useHead({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css',
        integrity: 'sha384-MFkAZ5d5mk4+GMRi8VvXO8kV/rnhnpEK+6J3jD9/JryvMSa+3tnsgI29EdvqljX7',
        crossorigin: 'anonymous'
      }
    ]
  })
})
