<template>
  <button class="d-button">
    <slot />
  </button>
</template>

<style scoped>
.d-button {
  @apply bg-red-700 py-1.5 px-3 rounded-md outline-none border-none shadow-lg text-white;
}
</style>
