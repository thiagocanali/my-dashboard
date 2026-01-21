<template>
  <div class="max-w-2xl mx-auto">
    <div class="bg-indigo-900 rounded-3xl p-8 mb-8 text-center text-white relative overflow-hidden">
      <div class="relative z-10">
        <h1 class="text-3xl font-bold mb-2">Precisa de ajuda?</h1>
        <p class="text-indigo-200">Nossa equipe de suporte está pronta para te atender.</p>
      </div>
      <div class="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full"></div>
    </div>

    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
      <form @submit.prevent class="space-y-4">
        <div>
          <label class="text-sm font-medium text-slate-700 block mb-1">Assunto</label>
          <select class="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Dúvida Técnica</option>
            <option>Sugestão de Funcionalidade</option>
            <option>Erro no Sistema (Bug)</option>
            <option>Financeiro</option>
          </select>
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700 block mb-1">Mensagem</label>
          <textarea rows="5" placeholder="Descreva como podemos ajudar..." class="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
        </div>
        <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-indigo-100">
          Enviar Mensagem
        </button>
      </form>
    </div>
  </div>
</template>