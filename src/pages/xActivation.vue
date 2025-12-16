<template>
  <div class="activation-page">
    <div class="activation-card">
      <h1>Ativação de Conta</h1>
      <p class="subtitle">
        Insira o código de ativação enviado para o seu email.
      </p>

      <!-- Status -->
      <div v-if="status" :class="['status-box', status]">
        {{ statusMessage }}
      </div>

      <!-- Formulário -->
      <form @submit.prevent="activateAccount">
        <div class="form-group">
          <label for="code">Código de Ativação</label>
          <input
            id="code"
            type="text"
            v-model="activationCode"
            placeholder="Ex: ABCD-1234"
            required
          />
        </div>

        <button
          class="btn activate"
          type="submit"
          :disabled="loading"
        >
          {{ loading ? "Ativando..." : "Ativar Conta" }}
        </button>
      </form>

      <!-- Reenviar código -->
      <div class="resend">
        <span>Não recebeu o código?</span>
        <button @click="resendCode" :disabled="loading">
          Reenviar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const activationCode = ref("")
const loading = ref(false)
const status = ref("") // success | error
const statusMessage = ref("")

const activateAccount = async () => {
  loading.value = true
  status.value = ""
  statusMessage.value = ""

  // Simulação de chamada API
  setTimeout(() => {
    if (activationCode.value === "1234-ABCD") {
      status.value = "success"
      statusMessage.value = "Conta ativada com sucesso! 🎉"
    } else {
      status.value = "error"
      statusMessage.value = "Código inválido. Tente novamente."
    }
    loading.value = false
  }, 1500)
}

const resendCode = () => {
  alert("Um novo código de ativação foi enviado para seu email.")
}
</script>

<style scoped>
.activation-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f4f8;
  font-family: Arial, sans-serif;
}

.activation-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 10px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.4rem;
}

input {
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

.status-box {
  padding: 0.8rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: bold;
}

.status-box.success {
  background: #e0f7e9;
  color: #1e824c;
}

.status-box.error {
  background: #fdecea;
  color: #c0392b;
}

.btn.activate {
  width: 100%;
  padding: 0.9rem;
  background: #3498db;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn.activate:disabled {
  background: #b0cbe9;
  cursor: not-allowed;
}

.resend {
  margin-top: 1.5rem;
  text-align: center;
}

.resend button {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  font-weight: bold;
}
</style>
