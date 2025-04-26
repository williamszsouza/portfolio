 <template>
   <div id="header"> 
        <ul>
            <li><a href="#content-main">Home</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#container">Skills</a></li>
            <li><a href="#container">Entre em contato</a></li>
        </ul>
    </div>
 </template>

<style>


a{
    text-decoration: none;
    font-weight: bold;
    color: white;
    font-size: large;
    
}

li:hover{
    transform:scale(1.1);
    transition: all ease-in 0.2s;
}

ul{
    display: flex;
    gap: 50px;
    list-style:none;

}

#header{
    width: 100%;
    padding: 20px;
    background-color: black;

}

</style>

