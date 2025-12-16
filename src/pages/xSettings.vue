<template>
  <div class="settings-page">
    <h1>Configurações</h1>

    <!-- Perfil -->
    <div class="settings-card">
      <h2>Perfil</h2>

      <div class="form-group">
        <label>Nome</label>
        <input v-model="settings.name" type="text" />
      </div>

      <div class="form-group">
        <label>Email</label>
        <input v-model="settings.email" type="email" />
      </div>
    </div>

    <!-- Segurança -->
    <div class="settings-card">
      <h2>Segurança</h2>

      <div class="form-group">
        <label>Senha atual</label>
        <input v-model="settings.currentPassword" type="password" />
      </div>

      <div class="form-group">
        <label>Nova senha</label>
        <input v-model="settings.newPassword" type="password" />
      </div>
    </div>

    <!-- Preferências -->
    <div class="settings-card">
      <h2>Preferências</h2>

      <div class="checkbox-group">
        <label>
          <input type="checkbox" v-model="settings.notifications" />
          Receber notificações por email
        </label>
      </div>

      <div class="form-group">
        <label>Tema</label>
        <select v-model="settings.theme">
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </select>
      </div>
    </div>

    <!-- Ações -->
    <div class="actions">
      <button class="btn save" @click="saveSettings">
        Salvar alterações
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"

const settings = reactive({
  name: "João Silva",
  email: "joao@email.com",
  currentPassword: "",
  newPassword: "",
  notifications: true,
  theme: "light"
})

const saveSettings = () => {
  alert("Configurações salvas com sucesso!");
  // Aqui você enviaria os dados para o backend
}
</script>

<style scoped>
.settings-page {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 2rem;
  color: #2c3e50;
}

.settings-card {
  background: #f9f9f9;
  padding: 1.8rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.settings-card h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.2rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.4rem;
}

input,
select {
  width: 100%;
  padding: 0.7rem;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.checkbox-group label {
  font-weight: normal;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.btn.save {
  padding: 0.8rem 1.6rem;
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}
</style>
