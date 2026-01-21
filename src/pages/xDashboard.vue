<template>
  <div>
    <header class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800">Visão Geral</h1>
      <p class="text-slate-500 text-sm">Bem-vindo de volta ao seu painel de controle.</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div v-for="i in 3" :key="i" class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <p class="text-slate-400 text-sm font-medium uppercase tracking-wider">Vendas Totais</p>
        <h3 class="text-3xl font-bold mt-2 text-slate-800">R$ 12.450,00</h3>
        <span class="text-emerald-500 text-xs font-bold">+12% vs mês passado</span>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div class="p-6 border-b border-slate-50">
        <h2 class="font-bold text-slate-800">Vendas Recentes</h2>
      </div>
      <div class="p-20 text-center text-slate-400">
        Nenhuma venda registrada hoje.
      </div>
    </div>
  </div>
</template>