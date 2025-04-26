<template>
<section class="rain-section">
  <RainBackground></rainBackground>
<div id="content-main">
    <div id="esquerda">
        <p id="titulo">SOBRE MIM</p>
        <p id="text">Meu nome é William, 19 anos <br>Atualmente estudante de ADS <br>Desenvolvedor de software Estagiario na K8 fintech</p>
    </div>

    <div id="direita">  
        <img src='../assets/23186791_6735958.svg' alt="" class="bounce-top">
        
    </div>
</div>

</section>
</template>


<style>

.rain-section {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000000;
    color: white;
    text-align: center;
  }

p{
  color: white;
}

#content-main{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: black;
}


#esquerda{
    flex-direction: column;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}


#esquerda>#titulo{
    font-weight: bold;
    font-size: 50px;
    color: #ba4bce;
}

#esquerda>#text{
    font-size: 25px;
    font-weight: 800;
    text-align: center;
}

#direita{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    
}

#direita>img{
    width: 450px;
    height: auto;
    transition: all ease-in-out 0.4s;
    z-index: 1;
  }
#direita>img:hover{
    filter: drop-shadow(5px 5px 10px #ba4bce);
    width: 450px;
    height: auto;
    transition: all ease-in 0.4s;
}

.bounce-top {
	animation: bounce-top 40s infinite both;
}



@keyframes bounce-top {
  0% {
    transform: translateY(-45px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
  24% {
    opacity: 1;
  }
  40% {
    transform: translateY(-34px);
    animation-timing-function: ease-in;
  }
  65% {
    transform: translateY(-12px);
    animation-timing-function: ease-in;
  }
  82% {
    transform: translateY(-6px);
    animation-timing-function: ease-in;
  }
  93% {
    transform: translateY(-4px);
    animation-timing-function: ease-in;
  }
  25%,
  55%,
  75%,
  87% {
    transform: translateY(20px);
    animation-timing-function: ease-out;
  }
  100% {
    transform: translateY(30px);
    animation-timing-function: ease-out;
    opacity: 1;
  }
}

</style>

<script>
  import RainBackground from './rainBackground.vue';
  
  export default {
    components: {
      RainBackground
    }
  };
  </script>