<template>
    <section class="rain-section">
      <RainBackground></RainBackground>
      <div class="container" id="projects">
        <h1>Projetos</h1>
        <div class="sub-container">
          <div class="project">
            <div class="top">
              <img src="../assets/image.png" alt="">
            </div>
            <div class="bottom">
              <h1>Dev BarberShop</h1>
              <p>Criador/Gerenciador de pedidos de uma barbearia</p>
            </div>
          </div>
          <div class="project">
            <div class="top">
            </div>
            <div class="bottom">
              <h1>EM BREVE</h1>
            </div>
          </div>
          <div class="project">
            <div class="top">

            </div>
            <div class="bottom">
              <h1>EM BREVE</h1>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import RainBackground from './rainBackground.vue';
  export default {
    components: {
      RainBackground
    }
  };
  </script>
  
  <style scoped>
  .rain-section {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000000;
    color: white;
    text-align: center;
  }

  .sub-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;  
    padding-left: 100px;
    padding-right: 100px;


  }

  .project{
    background-color: #ba4bce;
    width: 300px;
    height: 300px;
    margin: 50px;
    border-radius: 20px;
    z-index: 111111111;
  }

  .container  {
    padding-top: 20px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    flex-direction: column;
    height: 100vh;
  }

  .bottom{
    height: 50%;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px ;
    align-items: center;
  }

  .bottom>h1,p{
    color: white;
    font-size: smaller;
  }

  .bottom>p{
    font-size: 16px;
  }

  .top{
    object-fit: cover;
    padding: 20px 20px 10px;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top>img{
    height: 150px;
    width:  100%;
    border-radius: 10px;
  }

  </style>
  