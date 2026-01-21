<template>
  <div class="max-w-4xl mx-auto">
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800">Configurações</h1>
      <p class="text-slate-500 text-sm">Personalize o comportamento do seu painel administrativo.</p>
    </header>

    <div class="space-y-6">
      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div class="p-6 border-b border-slate-50">
          <h3 class="font-bold text-slate-800">Notificações por E-mail</h3>
          <p class="text-xs text-slate-500">Escolha o que você deseja receber na sua caixa de entrada.</p>
        </div>
        <div class="p-6 space-y-4">
          <div v-for="item in ['Novas vendas', 'Relatórios semanais', 'Alertas de estoque baixo']" :key="item" 
            class="flex items-center justify-between">
            <span class="text-sm font-medium text-slate-700">{{ item }}</span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" checked class="sr-only peer">
              <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
        <h3 class="font-bold text-slate-800 mb-4">Aparência do Painel</h3>
        <div class="grid grid-cols-3 gap-4">
          <button class="border-2 border-indigo-500 p-4 rounded-xl bg-slate-50">
            <div class="w-full h-12 bg-white border border-slate-200 rounded mb-2"></div>
            <span class="text-xs font-bold text-indigo-600">Claro</span>
          </button>
          <button class="border border-slate-100 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div class="w-full h-12 bg-slate-900 rounded mb-2"></div>
            <span class="text-xs font-medium text-slate-600">Escuro</span>
          </button>
          <button class="border border-slate-100 p-4 rounded-xl hover:bg-slate-50 transition-colors">
            <div class="w-full h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded mb-2"></div>
            <span class="text-xs font-medium text-slate-600">Gradiente</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>