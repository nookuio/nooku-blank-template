<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
  error: NuxtError;
}

const props = withDefaults(defineProps<Props>(), {
  error: {
    statusCode: 500,
    message: 'Something went wrong.',
  },
});
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="p-8 rounded-[4px] text-center text-sm text-neutral-950">
      <span class="text-blue-500 font-medium text-base">{{
        props.error?.statusCode || '500'
      }}</span>
      <h1
        class="text-4xl font-bold text-neutral-950 mb-10 mt-5 max-md:text-[28px]"
      >
        {{ props.error?.message || 'Something went wrong.' }}
      </h1>
      <div
        class="flex justify-center gap-x-3 gap-y-3 max-sm:flex-col max-sm:items-stretch"
      >
        <button
          class="block pl-2.5 pr-2.5 text-center text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[8px] shadow-md transition-all duration-300 ease-in-out min-h-[30px]"
          @click="clearError({ redirect: '/' })"
        >
          Go to homepage
        </button>
        <NuxtLink
          class="flex items-center font-medium pl-2 pr-2 rounded-[8px] justify-center hover:bg-neutral-100"
          to="/contact-us"
          >Contact support →</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
