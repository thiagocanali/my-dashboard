<template>
  <header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-10 px-6 lg:px-10 flex items-center justify-between">
    <div class="relative w-full max-w-md hidden sm:block">
      <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
      <input 
        type="text" 
        placeholder="Pesquisar no painel..." 
        class="w-full bg-slate-100 border-none rounded-xl py-2.5 pl-10 focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
      />
    </div>

    <div class="flex items-center gap-4 ml-auto">
      <button class="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
        <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
      
      <div class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border border-indigo-200">
        TC
      </div>
    </div>
  </header>
</template>