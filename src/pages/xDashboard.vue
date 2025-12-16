<template>
  <div class="dashboard-page">

    <!-- Boas-vindas -->
    <header class="welcome">
      <h1>Bem-vindo de volta, <strong>{{ user.name }}</strong>!</h1>
      <p>Confira os destaques e estatísticas do dia.</p>
    </header>

    <!-- Estatísticas rápidas -->
    <section class="stats">
      <div class="stat-card" v-for="stat in stats" :key="stat.id">
        <h2>{{ stat.value }}</h2>
        <p>{{ stat.label }}</p>
      </div>
    </section>

    <!-- Produtos em destaque -->
    <section class="featured-products">
      <h2>Produtos em destaque</h2>
      <div class="products-grid">
        <div class="product-card" v-for="product in featuredProducts" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p class="price">R$ {{ product.price.toFixed(2) }}</p>
          <button @click="goToProduct(product.id)">Ver produto</button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref } from "vue"

const user = ref({
  name: "Carlos"
})

// Estatísticas rápidas
const stats = ref([
  { id: 1, label: "Pedidos Hoje", value: 34 },
  { id: 2, label: "Usuários Ativos", value: 128 },
  { id: 3, label: "Faturamento", value: "R$ 4.320,50" },
  { id: 4, label: "Produtos Cadastrados", value: 52 }
])

// Produtos em destaque
const featuredProducts = ref([
  { id: 1, name: "Tênis Air Max Pro", price: 599.9, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 2, name: "Camiseta Esportiva", price: 129.9, image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 3, name: "Mochila Adventure", price: 249.9, image: "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { id: 4, name: "Relógio Smart", price: 899.9, image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=400" }
])

// Função de navegação (exemplo)
const goToProduct = (id) => {
  alert(`Ir para a página do produto ID: ${id}`)
}
</script>

<style scoped>
.dashboard-page {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.welcome h1 {
  font-size: 2rem;
  margin-bottom: 0.3rem;
}

.welcome p {
  color: #555;
  margin-bottom: 2rem;
}

/* Estatísticas */
.stats {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.stat-card {
  flex: 1 1 200px;
  background: #3498db;
  color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.2s;
}

.stat-card:hover { transform: translateY(-5px); }

.stat-card h2 { font-size: 1.8rem; margin-bottom: 0.3rem; }

/* Produtos em destaque */
.featured-products h2 {
  margin-bottom: 1rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  text-align: center;
}

.product-card:hover { transform: translateY(-5px); }

.product-card img { width: 100%; height: 180px; object-fit: cover; }

.product-card h3 { margin: 0.5rem 0; font-size: 1.1rem; }

.product-card .price {
  font-weight: bold;
  color: #27ae60;
  margin-bottom: 0.8rem;
}

.product-card button {
  background: #3498db;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 1rem;
}

.product-card button:hover { background: #2980b9; }
</style>
