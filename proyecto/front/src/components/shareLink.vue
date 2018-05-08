<template>
    <div class="shareLink">
        <label for="chatLink">Share Me!</label>
        <div class="input-group">
        <input type="text" value="//chattranslate.com/123123" id="chatLink" class="chatLink" readonly>
        <a @click="copyToClipboard()" href="#" class="copy"><i class="fas fa-copy"></i></a>   
        </div>
    </div>
</template>

<script>

export default {
  name: "shareLink",
  props: ["link"],

  methods:{
      copyToClipboard() {
        event.preventDefault();
        console.log('entre')
        var copyText = document.getElementById("chatLink");
        copyText.select();
        document.execCommand("Copy");
        alert("Copied the text: " + copyText.value);

        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* ----------------------- Other class ---------------------------- */
.shareLink{
    display:flex;
    flex-wrap: nowrap;
    
}

label{
    font-size:1rem;
    color:#fff;
    
}

input:not([type]), input[type=text]:not(.browser-default), 
input[type=password]:not(.browser-default), input[type=email]:not(.browser-default), 
input[type=url]:not(.browser-default), input[type=time]:not(.browser-default), 
input[type=date]:not(.browser-default), input[type=datetime]:not(.browser-default), 
input[type=datetime-local]:not(.browser-default), input[type=tel]:not(.browser-default), 
input[type=number]:not(.browser-default), input[type=search]:not(.browser-default), 
textarea.materialize-textarea{
    background-color:rgb(255, 255, 255);
    border:none;
    width:300px;
    height: 30px;
    position:unset;
    padding:0px 5px;
    margin-left:5px;
}

.input-group{
    display:flex;
    border-collapse: collapse;
    justify-content: center;
    align-items: center;
    width:70%;
}

.chatLink{
    padding:0px;
}

.copy{
    font-weight: 300;
}


i{
    padding:7px 5px 7px;  
}

i:hover{
    font-weight: 100
}

</style>