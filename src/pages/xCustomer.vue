<template>
  <div>
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 class="text-2xl font-bold text-slate-800">Clientes</h1>
        <p class="text-slate-500 text-sm">Visualize e gira a base de dados dos seus compradores.</p>
      </div>
      <div class="flex gap-3">
        <button class="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2 text-sm">
          Exportar CSV
        </button>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-indigo-100 text-sm">
          + Novo Cliente
        </button>
      </div>
    </div>

    <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50/50 border-b border-slate-100">
              <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Cliente</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Gasto</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Última Compra</th>
              <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Ações</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-50">
            <tr v-for="(customer, index) in customers" :key="index" class="hover:bg-slate-50/50 transition-colors">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-indigo-600 text-xs border border-slate-200">
                    {{ customer.initials }}
                  </div>
                  <div>
                    <p class="text-sm font-bold text-slate-800">{{ customer.name }}</p>
                    <p class="text-xs text-slate-500">{{ customer.email }}</p>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span :class="customer.active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'" 
                  class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">
                  {{ customer.active ? 'Ativo' : 'Inativo' }}
                </span>
              </td>
              <td class="px-6 py-4 text-sm text-slate-700 font-medium">
                {{ customer.totalSpent }}
              </td>
              <td class="px-6 py-4 text-sm text-slate-500">
                {{ customer.lastPurchase }}
              </td>
              <td class="px-6 py-4 text-right">
                <button class="text-slate-400 hover:text-indigo-600 p-2 rounded-lg transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-4 bg-slate-50/30 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span>A mostrar 5 de 150 clientes</span>
        <div class="flex gap-2">
          <button class="px-3 py-1 bg-white border border-slate-200 rounded-md hover:bg-slate-50">Anterior</button>
          <button class="px-3 py-1 bg-white border border-slate-200 rounded-md hover:bg-slate-50">Próximo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const customers = [
  { name: 'Ana Oliveira', initials: 'AO', email: 'ana.o@email.com', active: true, totalSpent: 'R$ 1.250,00', lastPurchase: 'Há 2 dias' },
  { name: 'Bruno Silva', initials: 'BS', email: 'bruno.s@email.com', active: true, totalSpent: 'R$ 450,00', lastPurchase: 'Ontem' },
  { name: 'Carla Souza', initials: 'CS', email: 'carla.souza@email.com', active: false, totalSpent: 'R$ 0,00', lastPurchase: 'Nunca' },
  { name: 'Daniel Santos', initials: 'DS', email: 'dan.santos@email.com', active: true, totalSpent: 'R$ 3.890,00', lastPurchase: 'Há 1 hora' },
  { name: 'Eduarda Lima', initials: 'EL', email: 'eduarda@email.com', active: true, totalSpent: 'R$ 820,00', lastPurchase: 'Há 5 dias' },
]
</script>