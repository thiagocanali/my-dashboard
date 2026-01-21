<template>
  <div class="flex h-screen overflow-hidden">
    <xSidebar />

    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <xHeader />

      <main class="p-6 lg:p-10">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import xSidebar from './components/xSidebar.vue'
import xHeader from './components/xHeader.vue'
</script>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>