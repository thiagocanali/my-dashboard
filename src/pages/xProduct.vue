<template>
  <div class="product-page">

    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <span>Home</span> ›
      <span>Produtos</span> ›
      <strong>{{ product.name }}</strong>
    </nav>

    <!-- Conteúdo principal -->
    <div class="product-main">

      <!-- Galeria -->
      <div class="gallery">
        <div class="main-image-container">
          <img class="main-image" :src="selectedImage" />
        </div>

        <div class="thumbnails">
          <img
            v-for="(img, index) in product.images"
            :key="index"
            :src="img"
            :class="{ active: selectedImage === img }"
            @click="selectedImage = img"
          />
        </div>
      </div>

      <!-- Informações -->
      <div class="info">
        <h1>{{ product.name }}</h1>

        <!-- Avaliação -->
        <div class="rating">
          <span v-for="i in 5" :key="i" class="star">
            {{ i <= avgRating ? '★' : '☆' }}
          </span>
          <span>({{ product.reviews.length }} avaliações)</span>
        </div>

        <!-- Preço -->
        <div class="price">
          <span class="current">R$ {{ finalPrice }}</span>
          <span v-if="product.discount" class="old">R$ {{ product.price.toFixed(2) }}</span>
          <span v-if="product.discount" class="discount">-{{ product.discount }}%</span>
        </div>

        <!-- Descrição curta -->
        <p class="short-description">{{ product.shortDescription }}</p>

        <!-- Quantidade -->
        <div class="quantity">
          <label>Quantidade</label>
          <div class="qty-control">
            <button @click="decreaseQty">-</button>
            <input type="number" v-model="quantity" />
            <button @click="increaseQty">+</button>
          </div>
        </div>

        <!-- Ações -->
        <div class="actions">
          <button class="btn cart" @click="addToCart">Adicionar ao carrinho</button>
          <button class="btn wishlist">♥</button>
        </div>

        <!-- Estoque -->
        <p class="stock" :class="{ out: !product.inStock }">
          {{ product.inStock ? 'Em estoque' : 'Indisponível' }}
        </p>
      </div>
    </div>

    <!-- Abas -->
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="{ active: activeTab === tab }"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div class="tab-content">
      <div v-if="activeTab === 'Descrição'">
        <p>{{ product.description }}</p>
      </div>

      <div v-if="activeTab === 'Especificações'">
        <ul>
          <li v-for="(value, key) in product.specs" :key="key">
            <strong>{{ key }}:</strong> {{ value }}
          </li>
        </ul>
      </div>

      <div v-if="activeTab === 'Avaliações'">
        <div
          class="review"
          v-for="review in product.reviews"
          :key="review.id"
        >
          <strong>{{ review.user }}</strong>
          <span>{{ '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating) }}</span>
          <p>{{ review.comment }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const quantity = ref(1)
const selectedImage = ref("")
const tabs = ["Descrição", "Especificações", "Avaliações"]
const activeTab = ref("Descrição")

const product = ref({
  name: "Tênis Air Max Pro",
  price: 599.9,
  discount: 20,
  inStock: true,
  shortDescription: "Tênis esportivo premium, máximo conforto e estilo.",
  description: "Tênis desenvolvido com tecnologia de amortecimento avançado, ideal para treinos e uso diário.",
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
  ],
  specs: {
    Marca: "Nike",
    Material: "Mesh respirável",
    Solado: "Borracha antiderrapante",
    Peso: "320g"
  },
  reviews: [
    { id: 1, user: "Carlos", rating: 5, comment: "Excelente qualidade!" },
    { id: 2, user: "Mariana", rating: 4, comment: "Muito confortável." }
  ]
})

onMounted(() => {
  selectedImage.value = product.value.images[0]
})

const finalPrice = computed(() => {
  return product.value.discount
    ? (product.value.price * (1 - product.value.discount / 100)).toFixed(2)
    : product.value.price.toFixed(2)
})

const avgRating = computed(() => {
  if (!product.value.reviews.length) return 0
  const total = product.value.reviews.reduce((sum, r) => sum + r.rating, 0)
  return Math.round(total / product.value.reviews.length)
})

const increaseQty = () => quantity.value++
const decreaseQty = () => quantity.value > 1 && quantity.value--
const addToCart = () => alert(`Produto adicionado ao carrinho (Qtd: ${quantity.value})`)
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.breadcrumb { color: #777; margin-bottom: 1.5rem; }
.product-main { display: flex; gap: 3rem; flex-wrap: wrap; }

/* Galeria */
.gallery { flex: 1; }
.main-image-container { overflow: hidden; border-radius: 10px; margin-bottom: 1rem; }
.main-image { width: 100%; transition: transform 0.3s; }
.main-image:hover { transform: scale(1.2); }
.thumbnails { display: flex; gap: 0.5rem; }
.thumbnails img { width: 70px; cursor: pointer; border-radius: 6px; border: 2px solid transparent; }
.thumbnails img.active { border-color: #3498db; }

/* Informações */
.info { flex: 1; }
.rating { color: #f1c40f; margin-bottom: 0.5rem; }
.price { margin: 1rem 0; display: flex; gap: 1rem; align-items: center; }
.price .current { font-size: 2rem; font-weight: bold; color: #27ae60; }
.price .old { text-decoration: line-through; color: #999; }
.discount { background: #e74c3c; color: #fff; padding: 4px 8px; border-radius: 6px; font-size: 0.9rem; }
.qty-control { display: flex; gap: 0.4rem; }
.qty-control input { width: 60px; text-align: center; }
.actions { display: flex; gap: 1rem; margin-top: 1rem; }
.btn.cart { background: #3498db; color: white; padding: 0.9rem 1.6rem; border-radius: 8px; border: none; cursor: pointer; }
.btn.wishlist { background: #f1f1f1; border-radius: 8px; padding: 0 1rem; cursor: pointer; }
.stock.out { color: #e74c3c; }

/* Abas */
.tabs { display: flex; gap: 1rem; margin-top: 2rem; flex-wrap: wrap; }
.tabs button { border: none; background: none; padding-bottom: 0.3rem; font-weight: bold; cursor: pointer; }
.tabs button.active { border-bottom: 3px solid #3498db; }
.tab-content { margin-top: 1rem; }
.review { margin-bottom: 1rem; }
</style>
