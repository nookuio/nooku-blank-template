<script setup lang="ts">
import type { NuxtError } from '#app';

interface Props {
  error: NuxtError;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-[4px] shadow-md text-center">
      <h1 class="text-4xl font-bold text-red-500 mb-4">
        Error {{ props.error?.statusCode || '500' }}
      </h1>
      <p class="text-lg text-gray-700 mb-4">
        {{
          props.error?.message ||
          'Something went wrong. Please try again later.'
        }}
      </p>
      <button
        class="pl-4 pr-4 pt-2 pb-2 bg-blue-500 text-white rounded-[4px] hover:bg-blue-600 focus:outline-none"
        @click="clearError({ redirect: '/' })"
      >
        Go back to Home
      </button>
    </div>
  </div>
</template>
