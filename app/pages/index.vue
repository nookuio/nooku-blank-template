<template>
  <div
    class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-pink-50"
  >
    <div
      class="relative pl-4 pr-4 pt-10 pb-10 bg-white shadow-2xl shadow-neutral-200 sm:rounded-3xl sm:p-20"
    >
      <div class="ml-auto mr-auto max-w-md">
        <div class="flex justify-center mb-8">
          <img
            class="h-16 w-auto rounded-lg"
            src="https://nooku.io/favicon.ico"
            alt="Nooku Logo"
          />
        </div>
        <h1 class="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Welcome to Nooku
        </h1>
        <div class="divide-y divide-gray-200">
          <div
            class="pb-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7 space-y-4"
          >
            <p class="text-center italic text-gray-600">
              The low-code IDE for building modern web applications
            </p>
            <ul class="text-base space-y-4">
              <li class="flex items-center duration-300 ease-in-out">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-cyan-100 rounded-full text-blue-700 flex-shrink-0"
                  ><Icon name="oui:vis-builder" size="18"
                /></span>
                <p class="ml-4">Design your UI with our intuitive editor</p>
              </li>
              <li class="flex items-center duration-300 ease-in-out">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-purple-100 rounded-full text-purple-800 flex-shrink-0"
                  ><Icon name="pepicons-pencil:paint-pallet" size="18"
                /></span>
                <p class="ml-4">Style and Customize with Tailwind CSS</p>
              </li>
              <li class="flex items-center duration-300 ease-in-out">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-pink-100 rounded-full text-red-400 flex-shrink-0"
                  ><Icon name="carbon:flow" size="18"
                /></span>
                <p class="ml-4">Add logic with the visual workflow builder</p>
              </li>
              <li class="flex items-center duration-300 ease-in-out">
                <span
                  class="flex items-center justify-center w-8 h-8 bg-yellow-100 rounded-full text-yellow-500 flex-shrink-0"
                  ><Icon name="carbon:app-connectivity" size="18"
                /></span>
                <p class="ml-4">Connect to any database, services and APIs.</p>
              </li>
            </ul>
          </div>
          <div
            class="pt-6 text-base leading-6 font-bold flex flex-col gap-y-5 sm:text-lg sm:leading-7"
          >
            <a
              class="block w-full pt-3 pb-3 pl-6 pr-6 text-center text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              href="https://discord.com/invite/SswP243maG"
              target="_blank"
              >Join Community</a
            >
            <p class="font-normal text-sm text-center text-neutral-500">
              Powered by Vue 3, Nuxt, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
