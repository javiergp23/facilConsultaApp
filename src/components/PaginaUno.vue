<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <h1 class="titleUno">Sobre o profissional</h1>
        <div class="col-6 divUno">
          <h2 class="dadosSubTitle">Dados do profissional</h2>
          <form >
            <div class="mb-3">
              <label for="nome" class="form-label">Nome completo*</label>
              <input type="text" class="form-control divNome" id="nome" v-model="nome" aria-describedby="emailHelp" placeholder="Digite o nome completo">
              
            </div>
            <div class="mb-3">
              <label for="cpf"  class="form-label">CPF*</label>
              <input type="text" class="form-control divCPF" id="cpf" v-model="cpf" placeholder="Digite um CPF">
              
            </div>
            <div class="mb-3">
              <label for="celular" class="form-label">Número de cedular*</label>
              <input type="text" class="form-control divCelular" id="celular" v-model="celular"  placeholder="(00) 0 0000-0000">
              
            </div>
            <div class="row">
              <div class="mb-3 col">
                <label for="disabledSelect" class="form-label">Estado*</label>
                <select name="estado" id="estado" v-model="estados" class="form-select">
                <option v-for="estados in estados" :key="estados.id" :value="estados.nome" class="selecion">{{estados.nome}}</option>
                </select>
              </div>
              <div class="mb-3 col">
                <label for="cidade" class="form-label">Cidade*</label>
                <select name="cidade" id="cidade" v-model="cidades"  class="form-select">.
                <option v-for="cidades in cidades" :key="cidades.id" :value="cidades.nome" class="selecion"> {{cidades.nome}}</option>
                </select>
              </div>
            </div>
            <div class="row cargaDados">
              <div class="col cargaUno"></div>
              <div class="col cargaDos"></div>
              <div class="col cargaTres">1 de 2</div>
            </div>
          </form>
          <router-link to="/PaginaDosViews">
            <ButtonCadastro :morado="true" proximo="PRÓXIMO" type="submit"/>
          </router-link>
        </div>
        <div class="col-6 imgUno">
          <img src="../assets/desktop-pagina-1.png" alt="img1" class="imgUnoPx">
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
import ButtonCadastro from './button/ButtonCadastro.vue';

  export default {  
    name: 'PaginaUno',
    components: { 
      ButtonCadastro,
    },
    data() {  
      return{  
          nome: "",
          cpf: "",  
          celular: "",
          cidades: null,
          estados: null,
          cidade: null,
          estado: null,
          enviado: false,
      }
    },
    
    methods: {
      
      async getEstados() { 
        const req = await fetch('https://api-teste-front-end-fc.herokuapp.com/estados');
        const data = await req.json();

        this.estados = data;
      },
      async getCidades() { 
        const req = await fetch('https://api-teste-front-end-fc.herokuapp.com/cidades');
        const data = await req.json();

        this.cidades = data;
      },
    },
    mounted() {
      this.getCidades()
      this.getEstados()
    }

  } 
</script>

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
  width: 800px;
  height: 550px;
  padding: 10px;
  border-radius: 20px;
  margin: 0px auto;
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

.cargaDados{ 
  padding: 10px;
  
}

.cargaUno{ 
  background: #483698;
  border-radius: 6px 0px 0px 6px;

}

.cargaDos{ 
  border: 1px solid #b9b9b9;
  border-radius: 0px 5px 5px 0px;
  background: #f9f9f9;
}

.cargaTres{ 
  text-align: end;
  color: #483698;
  font-weight: bold;
  font-family: 'Comfortaa', cursive;
}

.btn{ 
  border-radius: 20px;
  background: #483698;
  color: #f9f9f9;
}
.btnRouter{ 
  text-decoration: none;
  box-shadow: none;
}


/*---------- MEDIA QUERIES ----------*/

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
    height: 550px;
    padding: 0px;
    border-radius: 20px;
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

  label{ 
    font-size: 12px;
  }

  input{ 
    font-size: 12px;
  }


  .divNome{ 
    width: 280px;
    height: 25px;
  }

  .divCPF{ 
    width: 230px;
    height: 25px;
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


  .imgUno{ 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgUnoPx{ 
    width: 0px;
    height: 0px;
    margin-right: 0px;
  }

  .cargaDados{ 
    padding: 10px;
    
  }

  .cargaUno{ 
    background: #483698;
    border-radius: 6px 0px 0px 6px;

  }

  .cargaDos{ 
    border: 1px solid #b9b9b9;
    border-radius: 0px 5px 5px 0px;
    background: #f9f9f9;
  }

  .cargaTres{ 
    text-align: end;
    color: #483698;
    font-weight: bold;
    font-family: 'Comfortaa', cursive;
  }

  .btn{ 
    border-radius: 20px;
    background: #483698;
    color: #f9f9f9;
  }
  .btnRouter{ 
    text-decoration: none;
    box-shadow: none;
  }
  
}

</style>
