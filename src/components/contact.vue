<template>
<section class="rain-section">
<RainBackground></RainBackground>
<div id="container"">
    <h1>Gostou do que viu?<br>Entre em contato!</h1>
    <div id="form">
        <form @submit.prevent="EnviarEmail">
            <label  for="email">Email</label>
            <input v-model="form.email" type="email" name="" id="" placeholder="Digite seu email para contato">
            <label for="contato">Contato</label>
            <input type="text" v-model="form.nome" placeholder="Digite seu nome">
            <input type="text" v-model="form.assunto" placeholder="Digite o assunto">
            <textarea name="" v-model="form.mensagem" id="" style="resize: none;" placeholder="Digite sua mensagem"></textarea>
            <button type="submit">Enviar</button>
        </form>
    </div>
</div>
</section>
</template>


<style>
#container{
    height: 100vh;
    width: 100%;   
    color: #ba4bce;
    z-index: 111111111111111111111111111;
    background-color: black;
    display: flex;
    flex-direction: column;

}
.rain-section {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000000;
    color: white;
    text-align: center;
  }
#form{
    background-color: rgb(34, 33, 33);
    width: 400px;
    height: 350px;
    border-radius: 20px;
}


#form>form{
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: left;
    gap: 10px;
    justify-content: center;


}
form>input,textarea,button{
    padding: 5px;
    border-radius: 5px;
    background-color: #545151;
    width: 350px;
}

form>input:focus,textarea:focus,button:focus{
    border: 3px solid #ba4bce;
    outline: none;
}

button{
    color: white;
    transition: all ease-in-out 0.4s;
}

button:hover{
    background-color: #ba4bce;
    transition: all ease-in-out 0.4s;
}


</style>

<script>
import RainBackground from './rainBackground.vue';
  
  export default {
    components: {
      RainBackground

    },
    data(){
        return{
            form:{
                nome:'',
                email:'',
                mensagem:'',
                assunto:''
            }
        }
    },
    methods:{
    async EnviarEmail(){
        try{
            const res = await fetch('http://localhost:3000/enviar-email',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(this.form)
            });
            const data = await res.json();
            console.log(data.message);
        }
        catch (err){
            alert('erro ao enviar', err.message)
        };
        {

        }
    }
    }
  };


</script>