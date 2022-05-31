<template>
<div class="hello row">
  <div class="returnIcon">
    <router-link to="/"><img src="../assets/arrow.png" alt="returnIcon" class="buttonReturn"></router-link>
  </div>
  <div class="container row">
      <div class="row">
        <h1 class="titleUno">Sobre o atendimento</h1>
        <div class="col-6 divUno">
          <h2 class="dadosSubTitle">Detalhes do atendimento</h2>
          <form>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label">Especialidade princial*</label>
                <select id="disabledSelect" class="form-select">
                <option class="selecion">Selecione especialidade</option>
                </select>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Informe preço da consulta*</label>
              <div class="row">
                <div class="col-1 preco"><h3 class="precoLetter">R$</h3></div>
                <input type="text" class="form-control divCPF col-2" id="exampleInputPassword1" placeholder="Valor">
              </div>
            </div>
            <label for="exampleInputPassword1" class="form-label">Formas de pagamento da consulta*</label>
            <div class="mb-3 checkOne">
              <div class="form-check">
                <input class="form-check-input checkIcon" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label pagosLetter" for="defaultCheck1">
                        Pix
                </label>
              </div>
            </div>
            <div class="mb-3 checkOne">
              <div class="form-check">
                <input class="form-check-input checkIcon" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label pagosLetter" for="defaultCheck1">
                        Em dinheiro
                </label>
              </div>
            </div>
            <!-- Acordion -->
            <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <div class="form-check">
                      <input class="form-check-input checkIcon" type="checkbox" value="" id="defaultCheck1">
                      <label class="form-check-label pagosLetter" for="defaultCheck1">
                        Cartão de Crédito
                      </label>
                  </div>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <div class="form-check">
                      <h4 class="titleCheck">Parcelamento em</h4>
                      <input class="form-check-input checkCartao" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                      <label class="form-check-label" for="exampleRadios2">
                        1x, sem juros
                      </label>
                      </div>
                      <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                      <label class="form-check-label" for="exampleRadios2">
                          2x, sem juros
                      </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                        <label class="form-check-label" for="exampleRadios2">
                          2x, sem juros
                        </label>
                      </div>
                </div>
              </div>
            </div>
            </div>
            <div class="row cargaDados">
              <div class="col cargaUno"></div>
              <div class="col cargaDos"></div>
              <div class="col cargaTres">1 de 2</div>
            </div>
          </form>
          <router-link to="/PaginaTresViews">
            <ButtonCadastro proximo="PRÓXIMO"/>
          </router-link>
        </div>
        <div class="col-6 imgUno">
          <img src="../assets/desktop-pagina-2.png" alt="img1" class="imgUnoPx">
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
  margin: 0px 0px 0px 250px;
}

.hello{ 
  height: 750;
  width: 85.09em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe766;
}
.container{ 
  background: #ffffff;
  width: 840px;
  height: 650px;
  padding: 20px;
  border-radius: 20px;
  margin: 40px 0px 60px 0px;
  box-shadow: 0px 3px 5px #8a8a8a;
}

.divUno{ 
  padding-left: 40px;

}

.titleUno{ 
  color: #483698;
  font-family: 'Comfortaa', cursive;
  font-weight: 600;
  height: 60px;
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
  border: 1px solid #483698;

}

.form-select{ 
  border: 1px solid #483698;
  font-size: 12px;
  height: 32px;
}

.btn{
  border-radius: 20px;
  background: #483698;
  color: #f9f9f9;
  text-decoration: none;
}

a{ 
text-decoration: none;
}

.imgUno{ 
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgUnoPx{ 
  width: 400px;
  height: 290px;
  margin-right: 0px;
  margin-left: 60px;
}

.cargaDados{ 
  padding: 10px;
  
}

.cargaUno{ 
  background: #483698;
  border-radius: 6px 0px 0px 6px;

}

.cargaDos{ 
  border-radius: 0px 5px 5px 0px;
  background: #483698;
}

.cargaTres{ 
  text-align: end;
  color: #483698;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
}

.preco{ 
  background: #483698;
  border-radius: 6px 0px 0px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.precoLetter{ 
  font-size: 12px;
  color: #f9f9f9;
  font-family: 'Comfortaa', cursive;
  margin: 4px 0px 4px 0px;
}

.checkOne{ 
  border: 1px solid #b9b9b9;
  border-radius: 5px 5px 5px 5px;
  background: #f9f9f9;
  box-shadow: 0px 1px 2px #8a8a8a;
}


.titleCheck{ 
  font-size: 12px;
}

.checkIcon{ 
  color: #483698;
}

.checkOne{ 
  width: 330px
}

.checkIcon{ 
  margin: 6px 30px 0px 6px;
}

.accordion-button{ 
  padding: 0px;
}

.accordion-item{ 
  width: 330px;
}

.accordion-header{ 
  border-radius: 5px 5px 5px 5px;
  border: 1px solid #b9b9b9;
  background: #f9f9f9;
}

.pagosLetter{ 
  font-weight: bold;
}


/*---------- MEDIA QUERIES ----------*/

@media only screen and (max-width: 480px) {

.returnIcon{ 
  height: 18px;
  width: 200px;
  margin-right: 600px;
}

.buttonReturn{ 
  width: 15px;
  height: 15px;
  margin: 0px 0px 0px 250px;
}

.hello{ 
  height: 650px;
  width: 25em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffe766;
}
.container{ 
  background: #ffffff;
  width: 340px;
  height: 550px;
  padding: 0px;
  border-radius: 20px;
  margin: 40px 0px 60px 0px;
  box-shadow: 0px 3px 5px #8a8a8a;
}

.divUno{ 
  padding-left: 40px;
  width: 350px;

}

.titleUno{ 
  color: #483698;
  font-family: 'Comfortaa', cursive;
  font-weight: 600;
  height: 60px;
  font-size: 26px;
  margin-top: 5px;
  margin-left: 25px;
  padding: 8px 0px 8px 12px;
}

.dadosSubTitle{ 
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
}


.divNome{ 
  width: 350px;
  height: 25px;
}

.imgUnoPx{ 
  width: 0px;
  height: 0px;
  margin-right: 0px;
  margin-left: 0px;
}


.checkOne{ 
  border: 1px solid #b9b9b9;
  border-radius: 5px 5px 5px 5px;
  background: #f9f9f9;
  box-shadow: 0px 1px 2px #8a8a8a;
  width: 270px
}


.accordion-button{ 
  padding: 0px;
}

.accordion-item{ 
  width: 275px;
}

.accordion-header{ 
  border-radius: 5px 5px 5px 5px;
  border: 1px solid #b9b9b9;
  background: #f9f9f9;
}


}
</style>
