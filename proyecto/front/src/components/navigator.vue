<template>
<div>
     <nav>
       <div class="left brand-logo">
        <a href="#"><img src="../assets/img/chat2.png" alt=""></a>
       </div>
      <share-link></share-link>
      <language-choice @lang="changeLang" class="language-choice"></language-choice>
      <ul id="nav" class="right hide-on-med-and-down">
        <li><a href="#">Yeah</a></li>
        <li><div @click="show()">Add Users</div></li>
        <li><a href="#" >Contact</a></li>
      </ul>
    
    </nav>
    <!-- The Modal -->
    <div id="myModal" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="hide">&times;</span>
        <h3>Añade a tus amigos a la sala!</h3>
        
        <div id= "Container" class="collection">
          <div class="collection-item" style="background-color: #f0f0f0;">Amigos añadidos:</div>
        </div>
            
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" @keyup.enter="onSubmit()" v-model="email" >
            <label for="email" >Email</label>
          </div>
        </div>

        
        <div class="row">
            <div class="card-panel teal lighten-3 flow-text  offset-s2 col s4" style= "background-color: #000;">Cancelar</div>
            <div class="card-panel teal lighten-1 flow-text col s5 " style= "background-color: #111;">Enviar</div>
          
        </div>
      </div>
    </div>
          
    </div>
</template>

<script>
import languageChoice from "./languageChoice";
import shareLink from "./shareLink";

var modal = document.getElementById("myModal");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

export default {
  name: "navigator",
  components: {
    languageChoice,
    shareLink
  },
  data() {
    return {
      email: ""
      /* lang:"" */
    };
  },
  methods: {
    changeLang(lang) {
      this.$emit("lang", lang);

      /* this.lang = lang; */
    },
    onSubmit() {
      if (this.email.includes("@")) {
        $("#Container").append(
          `<div class="collection-item">` + this.email + `</div>`
        );
        $("#email").val("");
      }
    },
    show() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    hide() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

nav{
    background:rgb(169, 170, 173);
    display:flex;
    flex-wrap: nowrap;
}

.brand-logo{
    margin-left:20px;
    position:initial;
    width: 15%;
    text-align:left;
}

.language-choice{
  margin-top:10px;
}

.select-wrapper input.select-dropdown{
  border-bottom:none;
}

img{
  width:40%;
  filter: grayscale(100%);
  transition: filter 0.3s ease-out;
  padding-top: 5px;
}

img:hover{
  transition:filter .3s ease-in;
  filter: grayscale(0%);
}

share-link {
  width: 80%;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  z-index: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 100%;
  height: 100%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
