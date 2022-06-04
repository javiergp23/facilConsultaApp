<template>
    <div class="d-grid gap-2">
        <button :class="[morado ? 'morado' : 'amarelo']" class="btn"  type="submit">
            {{proximo}} {{cadastro}}
        </button> 
    </div>
</template>

<script>
    export default {  
        name: 'ButtonCadastro',
        props: {  
            proximo: String,
            cadastro: String,
            morado: {
                type: Boolean,
                default: () => true,
            },
            amarelo: {  
                type: Boolean,
                default: () => false,
            }
        }
    }
</script>

<style scoped>

.morado{ 
    border-radius: 20px;
    background: #483698;
    color: #f9f9f9;
    text-decoration: none;
    box-shadow: none;
}

.amarelo{ 
  border-radius: 20px;
  background: #fbde40;
  color: #282828;
  font-weight: 600;
}
</style>
