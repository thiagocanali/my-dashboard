<template>
  <div class="customer-page">
    <h1>Clientes</h1>

    <!-- Lista de Clientes -->
    <div class="customer-list">
      <div
        class="customer-card"
        v-for="customer in customers"
        :key="customer.id"
      >
        <img
          class="avatar"
          :src="customer.avatar"
          alt="Avatar do cliente"
        />

        <div class="customer-info">
          <h2>{{ customer.name }}</h2>
          <p>{{ customer.email }}</p>
          <span class="status" :class="customer.status">
            {{ customer.status }}
          </span>
        </div>

        <div class="customer-actions">
          <button class="btn view">Ver</button>
          <button class="btn edit">Editar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

// Lista de clientes (mock)
const customers = ref([
  {
    id: 1,
    name: "Maria Oliveira",
    email: "maria@email.com",
    status: "ativo",
    avatar: "https://i.pravatar.cc/100?img=5"
  },
  {
    id: 2,
    name: "Carlos Santos",
    email: "carlos@email.com",
    status: "inativo",
    avatar: "https://i.pravatar.cc/100?img=8"
  },
  {
    id: 3,
    name: "Ana Pereira",
    email: "ana@email.com",
    status: "ativo",
    avatar: "https://i.pravatar.cc/100?img=12"
  }
])
</script>

<style scoped>
.customer-page {
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
}

.customer-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.customer-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f9f9f9;
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

.avatar {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.customer-info {
  flex: 1;
  margin-left: 1.5rem;
}

.customer-info h2 {
  margin: 0;
  font-size: 1.2rem;
}

.customer-info p {
  margin: 4px 0;
  color: #666;
}

.status {
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.85rem;
  text-transform: capitalize;
}

.status.ativo {
  background: #e0f7e9;
  color: #1e824c;
}

.status.inativo {
  background: #fdecea;
  color: #c0392b;
}

.customer-actions {
  display: flex;
  gap: 0.6rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn.view {
  background: #3498db;
  color: #fff;
}

.btn.edit {
  background: #f1c40f;
  color: #fff;
}
</style>
