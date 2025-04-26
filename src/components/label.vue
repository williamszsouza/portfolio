
 

<template>
  <section class="rain-section">

  
  <RainBackground></RainBackground>
    <div id="container" class="">
      <h1>Skills</h1>
      <div id="sub-container">
        <div class="card">
          <div class="content front" id="content-laravel">
            <p>Laravel 8</p>
            <img src="../assets/laravel-svgrepo-com.svg" alt="">
          </div>
          <div class="content back">
            <p>Framework PHP moderno e robusto, uso frequente com API REST.</p>
          </div>
        </div>
  
        <div class="card">
          <div class="content front" id="content-vue">
            <p>Vue JS</p>
            <img src="../assets/Vue.js_Logo_2.svg" alt="">
          </div>
          <div class="content back">
            <p>Framework JavaScript progressivo para SPAs. Domínio em Vue 2 e 3.</p>
          </div>
        </div>
  
        <div class="card">
          <div class="content front" id="content-bootstrap">
            <p>Bootstrap</p>
            <img src="../assets/Bootstrap_logo.svg" alt="">
          </div>
          <div class="content back">
            <p>Framework CSS para layouts responsivos. Uso de grid e componentes.</p>
          </div>
        </div>
  
        <div class="card">
          <div class="content front" id="content-tailwind">
            <p>Tailwind</p>
            <img src="../assets/Tailwind_CSS_Logo.svg" alt="">
          </div>
          <div class="content back">
            <p>CSS utility-first. Desenvolvimento ágil e customizações eficientes.</p>
          </div>
        </div>
  
        <div class="card">
          <div class="content front" id="content-postman">
            <p>Postman</p>
            <img src="../assets/postman-icon-svgrepo-com.svg" alt="">
          </div>
          <div class="content back">
            <p>Testes de APIs RESTful. Automação de testes e coleções.</p>
          </div>
        </div>
        <div class="card">
          <div class="content front" id="content-postgre">
            <p>PostgreSQL</p>
            <img src="../assets/postgresql-logo-svgrepo-com.svg" alt="">
          </div>
          <div class="content back">
            <p>Gerenciador de banco de dados objeto relacional.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>

<style>

#container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}

h1 {
  font-size: 50px;
  color: white;
}

#sub-container {
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  gap: 50px;
  flex-wrap: wrap;
}

.card {
  width: 200px;
  height: 200px;
  perspective: 1000px;
  position: relative;
}

.content {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 10px black;
  transition: transform 0.6s ease-in-out;
}

.front {
  background-color: black;
  transform: rotateY(0deg);
}

.back {
  background-color: #1e1e1e;
  color: white;
  transform: rotateY(180deg);
  padding: 15px;
  font-size: 14px;
}


.card:hover .front {
  transform: rotateY(180deg);
}

.card:hover .back {
  transform: rotateY(360deg);
}


#content-laravel {
  color: red;
  font-weight: bold;
  font-size: 20px;
}

#content-vue {
  color: #41B883;
  font-weight: bold;
  font-size: 20px;
}

#content-bootstrap {
  color: #8B12FC;
  font-weight: bold;
  font-size: 20px;
}

#content-tailwind {
  color: #38BDF8;
  font-weight: bold;
  font-size: 20px;
}

#content-postman {
  color: #FF6C37;
  font-weight: bold;
  font-size: 20px;
}

#content-postgre{
  color:#336791;
  font-weight: bold;
  font-size: 20px;
}

.content img {
  width: 80px;
  margin-top: 10px;
}

</style>


<script>
import RainBackground from './rainBackground.vue';
export default{
  components:{
    RainBackground
  }
}



</script>