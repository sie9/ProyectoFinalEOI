<template>
<div>
     <nav class="nav">
       <div class="left brand-logo">
        <a href="#"><img src="../assets/img/chat.png" alt="Logo Chatty"></a>
       </div>
      <share-link></share-link>
      <language-choice @lang="changeLang" class="language-choice"></language-choice>
      <ul id="nav" class="right hide-on-med-and-down">
        <li><div @click="showLogin()" class="login nav-btn">Login</div></li>
        <li><div @click="show()" class="addUser nav-btn">Add Users</div></li>
        <li><div @click="show3()" class="contact nav-btn">Contact</div></li>
      </ul>
    
    </nav>
    <!--------------------------------- The Modal enviar email ---------------------------------------->
      
    <div id="myModal" class="modal">
      <loaders class="loaders" :conver="this.cond" ></loaders>
      <div class="modal-content" v-if='cond'>
        <span class="close" @click="hide">&times;</span>
        <h3>Add friends to your chatroom</h3>
        
        <div id= "Container" class="collection">
          <div class="collection-item added-friends">Friends to add:</div>
          <div class="collection-item" v-for="(email,index) in emails">  {{email}} <span @click='borrarEmail(index)' > x </span></div>
        </div>
            
        <div class="row">
          <div class="input-field col s12" >
            <input id="email" type="email" class="validate" @keyup.enter="onSubmit()" v-model="email" >
            <label for="email">Email</label>
          </div>
        </div>
       
        <div class="row" v-if="emails.length>0">
            <div class="card-panel flow-text email-button" @click="sendMail()">Send</div>
        </div>
      </div>
    </div>

    <!------------------------------------- MODAL LOGIN ---------------------------------->
    <div id="loginModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="hideLogin">&times;</span>
        <h3>LOG IN</h3>
        <div class="input-field col s12" >
            <input id="email" type="email" class="validate" @keyup.enter="onSubmit()" v-model="usuario" >
            <label for="email">Email</label>
          </div>
          <div class="input-field col s12" >
            <input id="pass" type="password" class="validate" @keyup.enter="onSubmit()" v-model="pass" >
            <label for="pass">Password</label>
          </div>
        
       
        <div class="row">
            <div class="card-panel flow-text email-button" @click="logIn()" v-if="(usuario != '' && pass != '')">Log in</div>
        </div>
      </div>
    </div>
     <!--------------------------------- The Modal exito email ---------------------------------------->
    <div id="myModal2" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <!-- <span class="close" @click="hide2">&times;</span> -->
        <h3>¡¡Your mail has been sent!!</h3>
      </div>
    </div>
      <!--------------------------------- The Modal contacto  ---------------------------------------->
    <div id="myModal3" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="hide3">&times;</span>
        <h3>How can we help you?</h3>
                    
        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate"  v-model="contacto.email" >
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="asunto" type="text" class="validate" v-model="contacto.asunto" >
            <label for="asunto">Subject</label>
          </div>
        </div>
       
        <div class="row">
            <div class="card-panel flow-text email-button" @click="onSubmit2()" v-if="contacto.email!='' && contacto.asunto!=''">send</div>
          
        </div>
      </div>
    </div>
          
    </div>
</template>

<script>
import languageChoice from "./languageChoice";
import shareLink from "./shareLink";
import firebase from "firebase";
import loaders from "./loaders";

$(document).click(function(event) {
  if ($("#myModal").css("display") == "block") {
    if (!$(event.target).closest(".modal-content,.addUser").length) {
      $("#myModal").hide();
    }
  }
});

$(document).click(function(event) {
  if ($("#myModal3").css("display") == "block") {
    if (!$(event.target).closest(".modal-content,.contact").length) {
      $("#myModal3").hide();
    }
  }
});

$(document).click(function(event) {
  if ($("#loginModal").css("display") == "block") {
    if (!$(event.target).closest(".modal-content,.login").length) {
      $("#loginModal").hide();
    }
  }
});

export default {
  name: "navigator",
  components: {
    languageChoice,
    shareLink,
    loaders
  },
  data() {
    return {
      email: "",
      emails: [],
      contacto: {
        email: "",
        asunto: "",
        pass: ""
      },
      usuario: "",
      pass: "",
      cond: true

      /* lang:"" */
    };
  },
  created() {
    $(document).ready(function() {
      M.updateTextFields();
    });
  },
  methods: {
    borrarEmail(index) {
      console.log(index);
      this.emails.splice(index, 1);
    },
    changeLang(lang) {
      this.$emit("lang", lang);
    },
    onSubmit() {
      if (this.email.includes("@")) {
        this.emails.push(this.email);
        this.email = "";
        $("#email").val("");        
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
      this.hide2();
      this.hide3();
    },
    show2() {
      var modal = document.getElementById("myModal2");
      modal.style.display = "block";
      
      

      setTimeout(() => {
        this.hide2();
        this.hide();
      }, 2000);
    },
    show3() {
      var modal = document.getElementById("myModal3");
      modal.style.display = "block";
      this.hide();
      this.hide2();
    },
    showLogin() {
      var modal = document.getElementById("loginModal");
      modal.style.display = "block";
      this.hide();
      this.hide2();
    },
    logIn() {
      firebase.auth().signInWithEmailAndPassword(this.usuario, this.pass)
        .then(()=>{
          alert("Logeado");
          this.hideLogin();
        })
        .catch(function(error) {         
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
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
    hideLogin() {
      var modal = document.getElementById("loginModal");
      modal.style.display = "none";
    },

    sendMail() {
      var route = this.$route.path;
      var res = route.substring(1, route.length);

      this.cond = false;       
      this.emails.forEach(correo => {
        
        let data = {
          service_id: "pry.chtty@gmail.com",
          template_id: "chatty",
          user_id: "user_DeVh4AytZ9lQqdCTn9ODu",
          template_params: {
            email: correo,
            sala: "http://chatty.biz/" + res
          }
        };

        $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json"
        })
          .done(() => { 
            this.cond = true;                      
            this.show2();
          })
          .fail(function(error) {
            this.cond = true;
            console.log("ESTÁ ROMPIENDO POR AQUÍ " + JSON.stringify(error));
          });
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
.nav {
  background: #fca331;
  display: flex;
  flex-wrap: nowrap;
  z-index: 9999;
  border-bottom: 1px solid rgb(61, 61, 61);
}

.row {
  margin-right: 10px;
}

.brand-logo {
  margin-left: 20px;
  margin-right: 50px;
  position: initial;
  width: 6%;
  text-align: left;
}

.language-choice {
  margin-top: 10px;
}

img {
  width: 120px;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.3s ease-out;
  /* padding-top: 5px; */
}

img:hover {
  transition: filter 0.3s ease-in;
  filter: grayscale(0%);
}

share-link {
  width: 80%;
}

.nav-btn {
  cursor: pointer;
  padding: 0 15px;
}

.nav-btn:hover {
  background-color: #a56b20;
}

/* The Modal (background) */
.modal {
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 5;
  width: 100vw;
  height: 100vh;
  display: none;
  padding: 10% 0;
  max-height: 100%;
}

/* Modal Content */
.modal-content {
  font-family: "Montserrat", sans-serif;
  background-color: #fefefe;
  margin: auto;
  border: 1px solid #888;
  width: 35%;
  height: auto;
  padding-bottom: 10px;
  border: 2px inset #fca331;
  box-shadow: 0px 10px 20px 5px rgb(85, 85, 85);
}

.modal-content h3 {
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  text-transform: uppercase;
}

.added-friends {
  background-color: #f0f0f0;
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

.email-button {
  color: white;
  cursor: pointer;
  background-color: #fca331;
}

.email-button:hover {
  background-color: #ce8c35;
  color: white;
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

.collection-item span {
  color: rgba(175, 11, 11, 0.836);
  cursor: pointer;
}

</style>
