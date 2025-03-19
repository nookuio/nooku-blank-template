<script setup lang="ts">
let features = [
  {
    icon: 'oui:vis-builder',
    title: 'Visual Editor',
    description: 'Design your UI with our intuitive editor',
    color: 'cyan',
  },
  {
    icon: 'pepicons-pencil:paint-pallet',
    title: 'Tailwind CSS',
    description: 'Style and Customize with Tailwind CSS',
    color: 'purple',
  },
  {
    icon: 'carbon:flow',
    title: 'Workflow Builder',
    description: 'Add logic with the visual workflow builder',
    color: 'pink',
  },
  {
    icon: 'carbon:app-connectivity',
    title: 'Connectivity',
    description: 'Connect to any database, services and APIs',
    color: 'amber',
  },
];
</script>

<template>
  <main
    class="min-h-[1000px] relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
  >
    <div
      class="w-full flex items-center justify-center bg-gradient-to-br transition-colors duration-300 from-blue-50/50 to-pink-50/50 flex-col h-[1000px] dark:from-slate-950 dark:to-blue-950"
    >
      <div class="text-center mb-12">
        <div class="flex justify-center mb-8">
          <img
            class="h-20 w-auto rounded-xl shadow-lg duration-300 hover:scale-105 transform transition-transform"
            src="https://nooku.io/favicon.ico"
            alt="Nooku Logo"
          />
        </div>
        <h1
          class="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 text-transparent mb-4 sm:text-5xl dark:from-blue-400 dark:to-violet-400 bg-clip-text"
        >
          Welcome to Nooku
        </h1>
        <p class="text-lg text-slate-400 mx-auto max-w-2xl">
          The next-generation low-code IDE for building modern web applications
          with ease and flexibility
        </p>
      </div>
      <div class="grid gap-6 w-full mb-12 grid-cols-1 md:grid-cols-2 max-w-4xl">
        <div
          class="p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 bg-white/5 border-white/10 hover:border-white/20 group"
          v-for="(feature, currentIndex) in features"
          :key="feature.title"
        >
          <div class="flex items-center space-x-4">
            <div
              :class="`flex items-center justify-center w-12 h-12 rounded-xl bg-${feature.color}-500/20 text-${feature.color}-400 group-hover:scale-110 transition-transform duration-300`"
            >
              <Icon class="text-neutral-300" :name="feature.icon" size="24" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-white mb-1">
                {{ feature.title }}
              </h3>
              <p class="text-slate-400">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center gap-6 w-full max-w-md">
        <a
          class="w-full py-4 px-8 text-center text-white font-semibold bg-blue-500/80 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 border border-white/20 hover:bg-blue-500/90 hover:shadow-xl transform hover:-translate-y-1"
          href="https://discord.com/invite/SswP243maG"
          target="_blank"
        >
          Join Our Community
        </a>
        <div class="flex items-center gap-2 text-sm text-slate-400">
          <span>Powered by</span
          ><span class="inline-flex items-center gap-2"
            ><Icon class="h-4" name="logos:vue" /><Icon
              class="h-4"
              name="logos:nuxt-icon" /><Icon
              class="h-4"
              name="logos:tailwindcss-icon" /></span
          ><span class="inline-flex items-center gap-2" v-if="false"
            ><Icon class="h-4" name="logos:vue" /><Icon
              class="h-4"
              name="logos:nuxt-icon" /><Icon
              class="h-4"
              name="logos:tailwindcss-icon"
          /></span>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>
