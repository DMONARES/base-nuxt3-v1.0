<template>
  <header>
    <nuxt-link to="/about">About</nuxt-link>
    <NuxtLink to="/contacts">Contacts</NuxtLink>
    <g-button>Click Me!</g-button>
  </header>
  <main>
    <!-- В слот будут подставляться наши страницы -->
    <slot /> 
  </main>
</template>
