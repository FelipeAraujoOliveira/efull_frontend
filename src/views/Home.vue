<script setup>
    import Navbar from '@/components/Navbar.vue';
    import Footer from '@/components/Footer.vue';
</script>

<template>
    <Navbar/>
    <div class="container-sm">
        <div class="text-box">
            <h1 class="title-gradient">Otimizamos sua logística, você cresce.</h1>
            <h1>Juntos, vamos mais longe.</h1>
            <p style="max-width: 700px; font-size: 1.4rem;">Juntos, vamos mais longe. Otimize sua logística e alcance o próximo nível de sucesso.</p>
            <a href=""><b>Saiba mais</b></a>
        </div>
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/banner.png" class="d-block w-100" alt="...">
              </div>
            </div>
          </div>
          
      
            <div class="branding">
              <img src="../assets/notebook.png" alt="monitor">
              <div class="b-box">
                <h1>A dashboard que inova a logística </h1>
                <p>Use as estatísticas ao seu favor, Cresça junto com elas. A dashboard logística inovadora aproveita dados para insights valiosos. Com análises precisas, identifica padrões, otimiza rotas e reduz custos.</p>
                <router-link class="btn-login" aria-current="page" to="/dash">Entrar</router-link>
              </div>
            </div>
            <div class="aviso">
              <i class="bi bi-shield-fill-exclamation"></i>
              <h6>Seus dados são processados por uma equipe altamente qualificada e comprometida com a ética e a confidencialidade. Apenas informações relevantes para o desenvolvimento da EFULL são analisadas.</h6>
            </div>
    </div>
    <Footer/>
        
</template>
    