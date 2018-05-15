<template>
<h1>Oops.</h1>
</template>

<script>

export default {
  name: "ifError",
  components: {
    Picker
  },
  data() {
    return {
      msg: ""
    };
  },
  created() {},
  methods: {
    writetodB: function() {
      var privateId = this.cargarUsuario();
      if (privateId == null) {
        privateId == "WTF?";
      }

      var route = this.$route.path;
      var res = route.substring(1, route.length);
      console.log(res);
      firebase
        .database()
        .ref("Sala" + res)
        .child("Mensajes")
        .push({
          text: this.msg,
          owner: privateId,
          time: Date(),
          id: (this.s4() + "-" + this.s4())
        });
      this.msg = "";
    }
  }
};
