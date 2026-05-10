<template>
  <div class="hero-gray-bg h-full w-full flex flex-col justify-center items-center relative overflow-hidden">
    <!-- Main content -->
    <div class="max-w-4xl px-8 text-center z-10">
      <!-- Title with gradient highlight -->
      <h1 class="text-7xl font-black mb-8 tracking-tight">
        <span class="highlight-gray">
          <slot name="title" />
        </span>
      </h1>

      <!-- Subtitle with accent line -->
      <div class="flex items-center justify-center gap-4 mb-12">
        <div class="w-12 h-1 bg-gradient-to-r from-transparent to-slate-400 rounded-full" />
        <p class="text-2xl text-slate-300 font-light">
          <slot name="subtitle" />
        </p>
        <div class="w-12 h-1 bg-gradient-to-l from-transparent to-slate-400 rounded-full" />
      </div>

      <!-- Author -->
      <div class="text-slate-400 text-sm mb-8">
        <slot name="author" />
      </div>
    </div>

    <!-- CTA buttons - bottom right (small icons) -->
    <div class="abs-br m-6 text-2xl flex gap-3">
      <a href="#" target="_blank" rel="noopener noreferrer" class="slidev-icon-btn" title="Personal Website">
        <carbon:link />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="slidev-icon-btn" title="GitHub Profile">
        <carbon:logo-github />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" class="slidev-icon-btn" title="Download PDF">
        <carbon:document-download />
      </a>
    </div>

    <!-- Date footer - bottom left -->
    <div class="abs-bl m-6 text-xs text-slate-400 font-mono">
      <div>{{ new Date().toLocaleDateString() }}</div>
      <div>{{ new Date().toLocaleTimeString() }}</div>
    </div>
  </div>
</template>

<script setup>
// Empty setup block for Vue 3 reactivity
</script>

<style scoped>
/* Hero Gray Background */
.hero-gray-bg {
  position: relative;
  overflow: hidden;
  background: radial-gradient(
      circle at 20% 20%,
      rgba(255, 255, 255, 0.06),
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(148, 163, 184, 0.12),
      transparent 45%
    ),
    linear-gradient(
      135deg,
      #0f172a,
      #111827,
      #0b1220
    );

  animation: gray-shift 18s ease infinite;
  background-size: 200% 200%;
}

@keyframes gray-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Highlight gradient for text */
.highlight-gray {
  background: linear-gradient(90deg, #e2e8f0, #94a3b8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.abs-br {
  @apply absolute bottom-0 right-0;
}

.abs-bl {
  @apply absolute bottom-0 left-0;
}

.slidev-icon-btn {
  @apply inline-flex items-center justify-center w-10 h-10 text-slate-300 hover:text-slate-100 transition-colors hover:scale-110;
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