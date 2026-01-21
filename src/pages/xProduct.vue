<template>
  <div>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-2xl font-bold text-slate-800">Produtos</h1>
        <p class="text-slate-500 text-sm">Gerencie seu estoque e preços de forma simples.</p>
      </div>
      <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
        <span class="text-xl">+</span> Novo Produto
      </button>
    </div>

    <div class="flex gap-2 mb-6 overflow-x-auto pb-2">
      <button v-for="cat in ['Todos', 'Tênis', 'Acessórios', 'Promoção']" :key="cat"
        class="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors whitespace-nowrap">
        {{ cat }}
      </button>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="n in 5" :key="n" class="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div class="relative h-56 bg-slate-100 overflow-hidden">
          <img 
            :src="`/my-dashboard/src/assets/products/tenis/img${n}.jpg`" 
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            alt="Produto"
          />
          <div class="absolute top-3 right-3">
            <span class="bg-white/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold text-slate-700 shadow-sm">
              Estoque: 12
            </span>
          </div>
        </div>

        <div class="p-5">
          <p class="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">Calçados</p>
          <h3 class="font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">Tênis Performance Ultra {{ n }}</h3>
          
          <div class="flex items-center justify-between mt-4">
            <span class="text-xl font-black text-slate-900">R$ 299,90</span>
            <div class="flex gap-2">
              <button class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>