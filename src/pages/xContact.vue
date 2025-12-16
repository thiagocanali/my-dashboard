<template>
  <div class="contact-page">
    <h1>Fale Conosco</h1>
    
    <!-- Informações de Contato -->
    <div class="contact-info">
      <p>Entre em contato conosco pelo formulário abaixo ou pelos seguintes canais:</p>
      <ul>
        <li><strong>Email:</strong> contato@empresa.com</li>
        <li><strong>Telefone:</strong> (11) 4002-8922</li>
        <li><strong>WhatsApp:</strong> (11) 99999-9999</li>
      </ul>
    </div>

    <!-- Formulário de Contato -->
    <div class="contact-form">
      <h2>Envie uma mensagem</h2>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Seu Nome</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Seu Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            placeholder="Digite seu email"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Sua Mensagem</label>
          <textarea
            id="message"
            v-model="form.message"
            placeholder="Escreva sua mensagem"
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" class="btn submit">Enviar Mensagem</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue"

// Dados do formulário de contato
const form = reactive({
  name: "",
  email: "",
  message: ""
})

const handleSubmit = () => {
  if (form.name && form.email && form.message) {
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    // Aqui você pode integrar com uma API ou backend para enviar a mensagem.
    // Exemplo: axios.post('/api/contact', form)
    form.name = "";
    form.email = "";
    form.message = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}
</script>

<style scoped>
.contact-page {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
}

.contact-info {
  margin-bottom: 3rem;
  text-align: center;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.contact-form {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

button.submit {
  width: 100%;
  padding: 1rem;
  background-color: #3498db;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.submit:hover {
  background-color: #2980b9;
}
</style>
