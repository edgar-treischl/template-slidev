<template>
  <div class="h-full flex flex-col justify-center items-center text-center">
    <h1 class="text-5xl font-bold mb-4">
      <slot name="title" />
    </h1>
    <p class="text-xl opacity-70">
      <slot name="subtitle" />
    </p>
  </div>
</template>