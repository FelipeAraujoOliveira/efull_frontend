<template>
  <div>
    <h1>Lista de Entregas</h1>
    <ul>
      <li v-for="entrega in entregas" :key="entrega.id">
        ID: {{ entrega.id }}, Status: {{ entrega.status }}, Data de Entrega: {{ entrega.dataEntrega }}, Distância: {{ entrega.distancia }} km
        <!-- Link para a página do mapa preenchido com endereços -->
        <router-link :to="{ path: '/mapa-view-entrega', query: { id: entrega.id, destinatario: entrega.enderecoDestinatario, remetente: entrega.enderecoRemetente } }">Ir para o mapa</router-link>
        <!-- Botão para atualizar o status da entrega -->
        <button @click="atualizarStatus(entrega.id)" v-if="entrega.status === 'Pendente'">Finalizar Entrega</button>
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
    },
    atualizarStatus(entregaId) {
      // Dados a serem enviados na solicitação PUT
      const dadosAtualizacao = { status: 'Finalizada' };

      // Faz uma solicitação PUT à sua API para atualizar o status da entrega
      axios.put(`https://localhost:7044/api/Entregas/${entregaId}`, dadosAtualizacao)
        .then(response => {
          const entrega = this.entregas.find(e => e.id === entregaId);
          if (entrega) {
            entrega.status = 'Finalizada';
          }
        })
        .catch(error => {
          console.error('Erro ao atualizar o status da entrega:', error);
        });
    }
  }
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
