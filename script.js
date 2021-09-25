<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <title>Home</title>
</head>
<body>
    <div id = "formulario"></div>
    
     <script>
        new Vue({
        el: '#formulario',
        template:`
        
        <form  @submit.prevent="addDados">
            <section id = "cont">
                <div id = "box1">
                <table class = "for">
                <tr>
                    <td > <label>Nome: </label><input type="" placeholder=" Nome" v-model = "nome"/></td>

                    <td > <label>Email: </label><input type="email" placeholder="E-mail" v-model = "email""/></td>
                </tr>
                    <tr>
                <td>    <label>Chek-in: </label><input type="date" v-model="dChegada"/> </td>
      
                   <td> <label>N° de noites: </label><input type="number" placeholder="Número de noites" v-model = "nNoites"/></td>
                    
                    </tr>
      <tr>
                    <td> <label>N° de Hóspedes: </label><input type="number" placeholder="Número de hóspedes" v-model="nHospedes"/></td>
        
                    <td><label>Total estimado: </label><input type="number" placeholder="Total estimado" v-model="tEstimado"/></td>
         </tr>

           <tr>
                 <td>   <label>Avaliação: </label><textarea placeholder="Digite sua Avaliação" v-model="comentario" ></textarea></td>

                    </tr>

<center>    <button type = "submit">Enviar</button> </center>
</table>
</div>
  </div>
<div id = "box2">
           <div id="tabela" >
           <table >
         <tr>
            <td class = "tab">Nome</td> <td class = "tab">Email</td> <td class = "tab">Data de chegada</td> <td class = "tab">Número de noites</td> <td class = "tab">Número de Hóspedes</td><td class = "tab">Total estimado</td><td class = "tab">Comentário</td>
         </tr>
          <tr v-for="comment in comments">
              <td class = "tab">{{comment.nome}}</td> <td class = "tab">{{comment.email}}</td>  <td class = "tab">{{comment.dChegada}}</td>  <td class = "tab">{{comment.nNoites}}</td>  <td class = "tab">{{comment.nHospedes}}</td>  <td class = "tab">{{comment.tEstimado}}</td>  <td class = "tab">{{comment.comentario}}</td> 
     </tr>
              </table>
     </section>
 </form>
</div>`,

 data() {
     return {
        comments:[],
         nome:'',
         email:'',
         dChegada:'',
         nNoites:'',
         nHospedes:'',
         tEstimado:'',
         comentario:''
     }
    
 },
 methods: {
          addDados() {
             this.comments.push({
        nome:this.nome,
         email:this.email,
         dChegada:this.dChegada,
         nNoites:this.nNoites,
         nHospedes:this.nHospedes,
         tEstimado:this.tEstimado,
         comentario:this.comentario

             })
        
         }
     }
        })

     </script>
</body>
</html>
