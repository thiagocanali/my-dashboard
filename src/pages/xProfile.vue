<template>
  <div class="user-page">
    <!-- Cabeçalho -->
    <div class="user-header">
      <img
        class="avatar"
        :src="user.avatar"
        alt="Foto do usuário"
      />

      <div class="user-info">
        <h1>{{ user.name }}</h1>
        <p class="username">@{{ user.username }}</p>
        <span class="status">{{ user.status }}</span>
      </div>
    </div>

    <!-- Informações -->
    <div class="user-card">
      <h2>Informações pessoais</h2>

      <ul>
        <li><strong>Email:</strong> {{ user.email }}</li>
        <li><strong>Telefone:</strong> {{ user.phone }}</li>
        <li><strong>Localização:</strong> {{ user.location }}</li>
        <li><strong>Nascimento:</strong> {{ user.birthDate }}</li>
      </ul>
    </div>

    <!-- Estatísticas -->
    <div class="user-card stats">
      <h2>Estatísticas</h2>

      <div class="stat">
        <span class="number">{{ user.stats.posts }}</span>
        <span class="label">Posts</span>
      </div>

      <div class="stat">
        <span class="number">{{ user.stats.comments }}</span>
        <span class="label">Comentários</span>
      </div>

      <div class="stat">
        <span class="number">{{ user.stats.followers }}</span>
        <span class="label">Seguidores</span>
      </div>
    </div>

    <!-- Ações -->
    <div class="user-actions">
      <button class="btn primary">Editar perfil</button>
      <button class="btn danger">Sair</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"

const user = reactive({
  name: "João Silva",
  username: "joaosilva",
  email: "joao@email.com",
  phone: "(11) 99999-9999",
  location: "São Paulo - SP",
  birthDate: "10/04/1995",
  status: "Usuário ativo",
  avatar: "https://i.pravatar.cc/150?img=3",
  stats: {
    posts: 34,
    comments: 128,
    followers: 560
  }
})
</script>

<style scoped>
.user-page {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

.user-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.username {
  color: #666;
}

.status {
  background: #e0f7e9;
  color: #1e824c;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.9rem;
}

.user-card {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.user-card ul {
  list-style: none;
  padding: 0;
}

.user-card li {
  margin-bottom: 8px;
}

.stats {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.stat .number {
  font-size: 1.5rem;
  font-weight: bold;
}

.user-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.btn {
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.primary {
  background: #3498db;
  color: #fff;
}

.danger {
  background: #e74c3c;
  color: #fff;
}
</style>
