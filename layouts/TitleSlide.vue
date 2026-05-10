<template>
  <div class="h-full w-full flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
    <!-- Animated background elements -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
      <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s" />
    </div>

    <!-- Main content -->
    <div class="max-w-2xl px-8 text-center">
      <!-- Title -->
      <h1 class="text-7xl font-black mb-6 tracking-tight">
        <slot name="title" />
      </h1>

      <!-- Subtitle with accent line -->
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="w-12 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
        <p class="text-2xl text-gray-600 font-light">
          <slot name="subtitle" />
        </p>
        <div class="w-12 h-1 bg-gradient-to-l from-transparent to-emerald-500 rounded-full" />
      </div>
    </div>

    <!-- Social icons - bottom right -->
    <div class="abs-br m-6 text-2xl flex gap-3">
      <a href="https://www.youtube.com/@KareemKreates" target="_blank" class="slidev-icon-btn hover:scale-110 transition-transform">
        <carbon:logo-youtube />
      </a>
      <a href="https://github.com/KareimGazer" target="_blank" class="slidev-icon-btn hover:scale-110 transition-transform">
        <carbon:logo-github />
      </a>
      <a href="https://x.com/KareimGazer" target="_blank" class="slidev-icon-btn hover:scale-110 transition-transform">
        <carbon:logo-x />
      </a>
    </div>

    <!-- Date footer - bottom left -->
    <div class="abs-bl m-6 text-sm text-gray-500 font-mono">
      <div>Generated: {{ new Date().toLocaleDateString() }}</div>
      <div>{{ new Date().toLocaleTimeString() }}</div>
    </div>
  </div>
</template>

<script setup>
// Empty setup block for Vue 3 reactivity
</script>

<style scoped>
.abs-br {
  @apply absolute bottom-0 right-0;
}

.abs-bl {
  @apply absolute bottom-0 left-0;
}

.slidev-icon-btn {
  @apply inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:text-blue-600 transition-colors;
}

/* Smooth entrance */
@keyframes slide-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1, p {
  animation: slide-fade-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
</style>