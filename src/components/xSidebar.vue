<template>
  <aside class="w-64 bg-slate-900 h-full text-slate-300 hidden md:flex flex-col border-r border-slate-800">
    <div class="p-6 flex items-center gap-3">
      <div class="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">T</div>
      <span class="text-white font-bold text-xl tracking-tight">ThiagoStore</span>
    </div>

    <nav class="flex-1 px-4 space-y-2 mt-4">
      <router-link to="/"
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all text-sm font-medium">
        🏠 Dashboard
      </router-link>
      <router-link to="/product"
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all text-sm font-medium">
        📦 Produtos
      </router-link>
      <router-link to="/customer"
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all text-sm font-medium">
        👥 Clientes
      </router-link>
      <router-link to="/profile"
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all text-sm font-medium">
        👤 Perfil
      </router-link>
      <router-link to="/settings"
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all text-sm font-medium">
        ⚙️ Configurações
      </router-link>
      <router-link to="/contact"
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-all text-sm font-medium">
        ✉️ Suporte
      </router-link>
    </nav>

    <div class="p-4 border-t border-slate-800">
      <div class="bg-slate-800/50 p-4 rounded-2xl text-xs">
        <p class="text-slate-400">Logado como:</p>
        <p class="text-white font-medium">Thiago Canali</p>
      </div>
    </div>
  </aside>
</template>