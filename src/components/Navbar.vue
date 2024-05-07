<script setup>
    import Login from '../views/Login.vue';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand me-2">
                <img src="../assets/e-logo.png" height="32" alt="MDB Logo" loading="lazy" style="margin-top: -1px;">
            </a>
            <button data-mdb-collapse-init class="navbar-toggler" type="button" data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarButtonsExample">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Início</a>
                    </li>
                </ul>
                <div class="d-flex align-items-center">
                    <button data-mdb-ripple-init type="button" class="btn">Politícas</button>
                    <button data-mdb-ripple-init type="button" class="btn">Sobre</button>
                    <router-link class="btn-login" aria-current="page" to="/login">Entrar</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>
