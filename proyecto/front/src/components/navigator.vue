<template>
<div>
     <nav class="nav">
       <div class="left brand-logo">
        <a href="#"><img src="../assets/img/chat2.png" alt=""></a>
       </div>
      <share-link></share-link>
      <language-choice @lang="changeLang" class="language-choice"></language-choice>
      <ul id="nav" class="right hide-on-med-and-down">
        <li><div @click="show()" class="addUser">Add Users</div></li>
        <li><a href="#" >Contact</a></li>
      </ul>
    
    </nav>
    <!-- The Modal enviar email -->
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
          <!-- The Modal exito email -->
    <div id="myModal2" class="modal">
      <!-- Modal content -->
      <div class="modal-content2">
        <span class="close" @click="hide2">&times;</span>
        <h3>Se ha enviado tu email!!</h3>
      </div>
    </div>

    <!-- The Modal contacto -->
    <div id="myModal3" class="modal">

      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="hide3">&times;</span>
        <h3>¿Como podemos ayudarte?</h3>
                    
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate"  v-model="contacto.email" >
            <label for="email" >Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="asunto" type="text" class="validate" v-model="contacto.asunto" >
            <label for="asunto" >Asunto</label>
          </div>
        </div>
       
        <div class="row">
            <div class="card-panel teal lighten-3 flow-text  offset-s2 col s4" style= "background-color: #000;">Cancelar</div>
            <div class="card-panel teal lighten-1 flow-text col s5 " style= "background-color: #111;" @click="onSubmit2()">Enviar</div>
          
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
      email: "",
      emails: [],
      contacto: {
        email:"",
        asunto:""
      }
      /* lang:"" */
    };
  },
  methods: {
    changeLang(lang) {
      this.$emit("lang", lang);
    },
    onSubmit() {
      if (this.email.includes("@")) {
        $("#Container").append(
          `<div class="collection-item">` + this.email + `</div>`
        );
        $("#email").val("");
        this.emails.push(this.email);
        this.sendMail();
      }
    },
    onSubmit2() {
      if (this.contacto.email.includes("@")) {
        this.sendMail2();
      }
    },
    show() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    show2() {
      var modal = document.getElementById("myModal2");
      modal.style.display = "block";

      setTimeout(() => {
        this.hide2();
        this.hide();
      }, div000);
    },
    show3() {
      var modal = document.getElementById("myModal3");
      modal.style.display = "block";
    },
    hide() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      this.emails = [];
      this.email = "";
    },

    hide2() {
      var modal = document.getElementById("myModal2");
      modal.style.display = "none";
    },
    hide3() {
      var modal = document.getElementById("myModal3");
      modal.style.display = "none";
    },

    sendMail() {
      var route = this.$route.path;
      var res = route.substring(1, route.length);

      let data = {
        service_id: "pry.chtty@gmail.com",
        template_id: "chatty",
        user_id: "user_DeVh4AytZ9lQqdCTn9ODu",
        template_params: {
          email: this.email,
          sala: "http://localhost:8080/#/" + res
        }
      };

      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
      })
        .done(() => {
          this.show2();
        })
        .fail(function(error) {
          console.log("Oops... " + JSON.stringify(error));
        });
    },
    sendMail2() {
      var route = this.$route.path;
      var res = route.substring(1, route.length);

      let data = {
        service_id: "pry.chtty@gmail.com",
        template_id: "prueba",
        user_id: "user_DeVh4AytZ9lQqdCTn9ODu",
        template_params: { 
          contacto: this.contacto.email,
          asunto: this.contacto.asunto
        }
      };

      $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json"
      })
        .done(() => {
          this.show2();
        })
        .fail(function(error) {
          console.log("Oops... " + JSON.stringify(error));
        });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.nav{
    background:#fca331;
    display:flex;
    flex-wrap: nowrap;
    box-shadow:0 4px 2px 1px rgba(61, 61, 61,0.5);
}

.brand-logo {
  margin-left: 20px;
  position: initial;
  width: 15%;
  text-align: left;
}

.language-choice {
  margin-top: 10px;
}

.select-wrapper .select-dropdown{
  border-bottom:0px;
}

.select-wrapper input.select-dropdown:focus{
  border-bottom:none;
}

img {
  width: 40%;
  filter: grayscale(100%);
  transition: filter 0.3s ease-out;
  padding-top: 5px;
}

img:hover {
  transition: filter 0.3s ease-in;
  filter: grayscale(0%);
}

share-link {
  width: 80%;
}

.addUser{
  cursor: pointer;
  padding: 0 15px;
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
  width: 80%;
  height: 100%;
}

/* The Modal (background) */
.modal2 {
  display: none; /* Hidden by default */
  z-index: auto;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content2 {
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 100px;
  height: auto;
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
