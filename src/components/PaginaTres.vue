<template>
<div class="hello row">
  <div class="returnIcon">
    <router-link to="/PaginaDosViews"><img src="../assets/arrow.png" alt="returnIcon" class="buttonReturn"></router-link>
  </div>
  <div class="container row">
      <div class="row">
        <h1 class="titleUno">Revisão do cadastro  </h1>
        <div class="col-6 divUno">
          <form>
            <div class="mb-3 row">
              <label for="exampleInputEmail1" class="form-label">Nome completo</label>
              <label>Fabricio Rodrigues de Oliveira</label>
            </div>
            <div class="mb-3 row">
              <label for="exampleInputPassword1" class="form-label">CPF</label>
              <label>485.628.337-89</label>
            </div>
            <div class="mb-3 row">
              <label for="exampleInputEmail1" class="form-label">Número de celular ou telefone</label>
              <label> (53) 88620847</label>
            </div>
            <div class="mb-3 row">
              <label for="exampleInputPassword1" class="form-label">Estado/Cidade</label>
              <label>Rio Grande do Sul - Pelotas</label>
            </div>
            <div class="mb-3 row">
              <label for="exampleInputEmail1" class="form-label">Especialidade principal</label>
              <label>Cardiologia</label>
            </div>
            <div class="mb-3 row">
              <label for="exampleInputPassword1" class="form-label">Preço da consulta</label>
              <label>R$ 200.00</label>
            </div>
            <div class="mb-3 row">
              <label for="exampleInputEmail1" class="form-label">Formas de pagamento da consulta</label>
              <label>Cartao de credito - parcelamento em 2x sem juros</label>
            </div>
          </form>
          <router-link to="/PaginaFinalViews">
            <ButtonCadastro :morado="false" cadastro="CADASTRAR PROFISSIONAL"/>
          </router-link>
          <div>
            <router-link to="/">
              <h4 class="editarCadastro">Editar cadastro</h4>
            </router-link>
          </div>
        </div>
        <div class="col-6 imgUno">
          <img src="../assets/desktop-pagina-3.png" alt="img1" class="imgUnoPx">
        </div>
      </div>  
  </div>
</div>  
</template>

<script>
  import ButtonCadastro from './button/ButtonCadastro.vue'
  
  export default {  
    name: 'PaginaUno',
    components: { 
      ButtonCadastro
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.returnIcon{ 
  height: 18px;
}

.buttonReturn{ 
  width: 15px;
  height: 15px;
  margin: 20px 0px 20px 280px;
}

.hello{ 
  height: 780px;
  width: 85.09em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe766;
}
.container{ 
  background: #ffffff;
  width: 750px;
  padding: 20px;
  border-radius: 20px;
  margin: 0px 0px 40px 0px;
  box-shadow: 0px 3px 5px #8a8a8a;
}

.divUno{ 
  padding-left: 40px;

}

.titleUno{ 
  color: #483698;
  font-family: 'Comfortaa', cursive;
  font-weight: 600;
  font-size: 40px;
  margin-top: 5px;
  margin-left: 25px;
  padding: 8px 0px 8px 12px;
}

.dadosSubTitle{ 
  padding-bottom: 10px;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}

label{ 
  font-size: 12px;
}

input{ 
  font-size: 12px;
}


.divNome{ 
  width: 350px;
  height: 25px;
}

.divCPF{ 
  width: 230px;
  height: 25px;
  border-radius: 0px 5px 5px 0px;
}

.divCelular{ 
  width: 230px;
  height: 25px;
}

.form-control{ 
  border: none;
}

.form-select{ 
  border: 1px solid #483698;
  font-size: 12px;
  height: 32px;
}


.imgUno{ 
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgUnoPx{ 
  width: 400px;
  height: 290px;
  margin-right: 12px;
}

.preco{ 
  background: #483698;
  border-radius: 6px 0px 0px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.precoLetter{ 
  font-size: 12px;
  color: #f9f9f9;
  font-family: 'Comfortaa', cursive;
}

.checkOne{ 
  border: 1px solid #b9b9b9;
  border-radius: 5px 5px 5px 5px;
  background: #f9f9f9;
}


.titleCheck{ 
  font-size: 12px;
}

.checkIcon{ 
  color: #483698;
}

.editarCadastro{ 
  font-size: 15px;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
  text-align: center;
  color: #483698;
  margin: 15px auto;
}

.form-label{ 
  font-weight: bold;
}


/*---------- MEDIA QUERiES ----------*/

@media only screen and (max-width: 480px) {

  .returnIcon{ 
  height: 18px;
  width: 200px;
  margin-right: 675px;
  }

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
  .divUno{ 
    padding-left: 40px;
    width: 350px;
  }
  .imgUnoPx{ 
    width: 0px;
    height: 0px;
    margin-right: 0px;
  }
  .titleUno{ 
  color: #483698;
  font-family: 'Comfortaa', cursive;
  font-weight: 600;
  height: 55px;
  font-size: 26px;
  margin-top: 5px;
  margin-left: 25px;
  margin-bottom: 0px;
  padding: 5px 15px 0px 0px;
}

.dadosSubTitle{ 
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}

}

</style>