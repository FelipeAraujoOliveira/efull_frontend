<template>
  <div>
    <h1>Lista de Entregas</h1>
    <ul>
      <li v-for="entrega in entregas" :key="entrega.id">
        ID: {{ entrega.id }}, Status: {{ entrega.status }}, Data de Entrega: {{ entrega.dataEntrega }}, Distância: {{ entrega.distancia }} km
        <!-- Link para a página do mapa preenchido com endereços -->
        <router-link :to="{ path: '/mapa', query: { destinatario: entrega.enderecoDestinatario, remetente: entrega.enderecoRemetente } }">Ir para o mapa</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      entregas: []
    };
  },
  mounted() {
    // Carrega as entregas da API ao montar o componente
    this.carregarEntregasDaAPI();
  },
  methods: {
    carregarEntregasDaAPI() {
      // Faz uma solicitação GET à sua API para obter as entregas
      axios.get('https://localhost:7044/api/Entregas')
        .then(response => {
          // Atualiza as entregas com os dados retornados pela API
          this.entregas = response.data;
        })
        .catch(error => {
          console.error('Erro ao carregar as entregas:', error);
        });
    }
  }
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
