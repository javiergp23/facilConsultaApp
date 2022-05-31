<template>
  <div class="hello">
    <div class="container row">
      <div class="imgContainer">
        <img src="../assets/img4-removebg-preview.png" alt="imgFinal" class="imgFinal">
      </div>
      <div class="textContainer">
          <h2 class="titleFinal">¡Success!</h2>
          <h2 class="textFinal">Seu cadastro foi criado com sucesso!</h2>
      </div>
      <div class="buttonContainer">
        <router-link to="/"><button class="btn">Terminar</button></router-link>
      </div>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello{ 
  height: 665px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe766;
}

.container{ 
  background: #ffffff;
  width: 700px;
  height: 550px;
  padding: 5px;
  border-radius: 20px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
  box-shadow: 0px 3px 5px #8a8a8a;
}

.imgContainer{ 
   display: flex;
   justify-content: center;
   margin: 2px 2px 2px 2px;
}

.imgFinal{  
    width: 300px;
    height: 300px;
}

.buttonContainer{  
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 30px 0px;
}


.titleFinal{
    text-align: center;
    color: #483698;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 40px;
    padding: 0px 0px 20px 0px;
}

.textFinal{  
    text-align: center;
    color: #483698;
    font-family: 'Comfortaa', cursive;
    font-size: 30px;
}

.btn{ 
    border-radius: 20px;
    background: #483698;
    color: #f9f9f9;
    text-decoration: none;
    box-shadow: none;
}

/*---------- MEDIA QUERiES ----------*/

@media only screen and (max-width: 480px) {
  .hello{ 
    height: 740px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffe766;
    }

  .container{ 
    background: #ffffff;
    width: 340px;
    height: 585px;
    padding: 0px;
    border-radius: 20px;
    box-shadow: 0px 3px 5px #8a8a8a;
  }

  .imgFinal{  
    width: 245px;
    height: 245px;
  }

  .titleFinal{
    text-align: center;
    color: #483698;
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: 35px;
    padding: 0px 0px 20px 0px;
  } 

  .textFinal{  
    text-align: center;
    color: #483698;
    font-family: 'Comfortaa', cursive;
    font-size: 25px;
  }

  .btn{ 
    border-radius: 20px;
    background: #483698;
    color: #f9f9f9;
    text-decoration: none;
    box-shadow: none;
    width: 150px;
  }


}

</style>