<template>
    <div class="container">
        <div class="menu"></div>
        <div class="menu" style="position: fixed;">
            <div class="brand">
                <img src="../assets/e-logo.png" alt="">
                <p>Efull Dashboard</p>
            </div>
            <div class="line"></div>
            <div class="menu-itens">
                <div class="menu-item-2">
                    <div class="icon-2">
                        <i class="bi bi-house-fill"></i>
                    </div>
                    <a href="dashboard.html">Dashboard</a>
                </div>
                <div class="menu-item">
                    <div class="icon">
                        <i class="bi bi-truck"></i>
                    </div>
                    <p>Entregas</p>
                </div>
                <div class="menu-item-2">
                    <div class="icon-2">
                        <i class="bi bi-people-fill"></i>
                    </div>
                    <p>Equipe</p>
                </div>
                <div class="menu-item-2">
                    <div class="icon-2">
                        <i class="bi bi-bar-chart-fill"></i>
                    </div>
                    <p>Desempenho</p>
                </div>
                <div class="menu-item-2">
                    <div class="icon-2">
                        <i class="bi bi-file-earmark-fill"></i>
                    </div>
                    <p>Relatórios</p>
                </div>
                <div class="menu-item-2">
                    <div class="icon-2">
                        <i class="bi bi-geo-alt-fill"></i>
                    </div>
                    <p>Rastreamento</p>
                </div>
            </div>
        </div>

        <div class="dashboard">
            <div class="bar">
                <div class="pages">
                    <div class="q-pages">
                        <p class="pag">Páginas</p>
                        <p>/</p>
                        <p>Entregas</p>
                    </div>
                    <h1>Entregas</h1>
                </div>
                <h1>VJR Logística</h1>
                <p id="data"></p>
                <div class="nav">
                    <nav>
                        <ul>
                            <li><a href=""><i class="bi bi-gear-fill"></i></a></li>
                            <li><a href=""><i class="bi bi-bell-fill"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </div> 
            <div class="table">

                <ul class="responsive-table">
                 <li class="table-header">
                    <div class="col col-1"><h2>Entrega ID</h2></div>
                    <div class="icon-3"><i class="bi bi-upc"></i></div>
                    <div class="col col-2"><h2>Destinatário</h2></div>
                    <div class="icon-3"><i class="bi bi-person-fill"></i></div>
                    <div class="col col-3"><h2>Endereço</h2></div>
                    <div class="icon-3"><i class="bi bi-geo-alt-fill"></i></div>
                    <div class="col col-4"><h2>Data de Saida</h2></div>
                    <div class="icon-3"><i class="bi bi-calendar-check-fill"></i></div>
                    <div class="col col-5"><h2>Status</h2></div>
                    <div class="icon-3"><i class="bi bi-info-circle-fill"></i></div>
                  </li> 
                  <li class="table-row active">
                    <div class="col col-1" data-label="shipping Id">42235</div>
                    <div class="col col-2" data-label="Customer Name">Enrico Vinicus</div>
                    <div class="col col-3" data-label="Endress">Rua Christian Aráujo Costa, 1442</div>
                    <div class="col col-4" data-label="Amount">14/04/2024</div>
                    <div class="col col-5 yellow" data-label="Payment Status">Pendente</div>
                  </li>
                  <li class="table-row ">
                    <div class="col col-1" data-label="Job Id">42442</div>
                    <div class="col col-2" data-label="Customer Name">Evoly LTDA</div>
                    <div class="col col-3" data-label="Endress">Rua Alves de Souza, 365</div>
                    <div class="col col-3" data-label="Amount">13/04/2024</div>
                    <div class="col col-4 yellow" data-label="Payment Status">Pendente</div>
                  </li>
                  <li class="table-row active">
                    <div class="col col-1" data-label="Job Id">42257</div>
                    <div class="col col-2" data-label="Customer Name">Felipe Cauê</div>
                    <div class="col col-3" data-label="Endress">Rua Valdir Junior Pererira, 25</div>
                    <div class="col col-3" data-label="Amount">12/04/2024</div>
                    <div class="col col-4 red" data-label="Payment Status">devolvida</div>
                  </li>
                  <li class="table-row">
                    <div class="col col-1" data-label="Job Id">42311</div>
                    <div class="col col-2" data-label="Customer Name">Caio Sartunino</div>
                    <div class="col col-3" data-label="Endress">Rua Felipe Humilde Araujo, 777</div>
                    <div class="col col-3" data-label="Amount">11/04/2024</div>
                    <div class="col col-4 green" data-label="Payment Status">Entregue</div>
                  </li>
                </ul>
              </div>
            </div>
        </div>
</template>

<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

* {
    padding: 0;
    margin: 0;
    font-family: "Raleway", sans-serif;
}



body {
  background: #f1f1f1;
}

.carousel-inner img {
  border-radius: 32px;
}

.carousel-inner {
  width: auto;
  height: auto;
  border-radius: 32px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#carouselExampleSlidesOnly {
  margin-bottom: 10%;
}

.btn-login {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-image: linear-gradient( to right, #FF0000, #FFC000);
    border: none;
    color: rgb(255, 255, 255);
    padding: 4px 20px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-left: 10px;
    transition: 500ms;
}

.btn-login:hover {
    opacity: 0.5;
}

.btn:hover  {
    color: #b40000;
}

.title-gradient {
    background-image: linear-gradient(to right, #FF0000, #FF8000, #FFC000);
    background-clip: text;  
    -webkit-text-fill-color: transparent; 
    color: transparent;    
}
.text-box {
    margin: 10% 0 7% 0;
    display: flex;
    flex-direction: column;
}

.text-box h1 {
    font-size: 3.3em; 
    font-weight: 800;
}

.card {
    overflow: hidden;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 64px;
    overflow: hidden;
    background-color: #f8f9fa;
}

.bg-1 {

    background-color: #212529;
}

  .container-sm {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .card img {
    max-width: 100px;
  }



.aviso {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-top: 10%;
    width: 100%;
    padding: 15px;
    border-radius: 32px;
    gap: 20px;
}

.aviso h7 {
    max-width: 800px;
}

.aviso i {
    font-size: 3rem;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10%;
    display: flex;
    padding: 10% 0% 5% 0%;
    background-color: #f8f9fa;
    border-top: 1px solid #e5e5e5;
  }
  
  .footer > * {
    flex:  1 100%;
  }
  
  .footer__addr {
    width: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2em;
  }


  .footer img {
    max-width: 90px;
    margin-bottom: 30px;
  }
  
  .footer__addr h2 {
    margin-top: 1.3em;
    font-size: 15px;
    font-weight: 400;
  }
  
  .nav__title {
    font-weight: bold;
    font-size: 15px;
  }
  
  .footer address {
    font-style: normal;
  }
  
  .footer ul {
    list-style: none;
    padding-left: 0;
  }
  
  .footer li {
    line-height: 2em;
  }
  
  .footer a {
    text-decoration: none;
  }
  
  .footer__nav {
    display: flex;
    justify-content: space-between;
  }
  
  .footer__nav > * {
    flex: 1 50%;
    margin-right: 1.25em;
  }
  
  .nav__ul a {
    color: #212529;
  }
  
  .nav__ul--extra {
    column-count: 2;
    column-gap: 1.25em;
  }
  
  .copy {
    gap: 30px;
    background-color: #f8f9fa;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }
    
 
  
  .heart {
    color: #2f2f2f;
  }
  
  @media screen and (min-width: 24.375em) {
    .legal .legal__links {
      margin-left: auto;
    }
  }
  
  @media screen and (min-width: 40.375em) {
    .footer__nav > * {
      flex: 1;
    }
    
    .nav__item--extra {
      flex-grow: 2;
    }
    
    .footer__addr {
      flex: 1 0px;
    }
    
    .footer__nav {
      flex: 2 0px;
    }
  }

  .branding {
    max-width: 100%;
    display: flex;
    align-items: center;
    gap: 100px;
  }
  
  .branding img {
    max-width: 500px;
  }



  .text-box a {
    color: #212529;
    font-size: 20px;
    text-decoration: none;
    transition: 1s;
  }

.text-box a:hover {
  color: #929394;
  text-decoration: underline;
}

  .branding  h1 {
    margin-left: 10px;
    font-size: 52px;
    font-weight: 800;
    max-width: 600px;
  }

  .branding p {
    margin-left: 10px;
    max-width:450px;
  }


  
</style>