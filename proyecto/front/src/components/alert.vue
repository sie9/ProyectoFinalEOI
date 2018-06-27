<template>
  <div>
    <div class="row" id="alert_box">
      <div class="col s12 m12">
        <div class="card red darken-1">
          <div class="row">
            <div class="col s12 m10">
              <div class="card-content white-text">
                <p>{{dato}}</p>
              </div>
            </div>
            <!-- <div class="col s12 m2">
 <i class="fa fa-times icon_style" id="alert_close" aria-hidden="true"></i>
</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

$('#alert_close').click(function(){
    $( "#alert_box" ).fadeOut( "slow", function() {
    });
  });

export default {
 name: "alert",
 data() {
    return {
      
    };
  },
components:{
   
},
props:["dato"],
 }


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.icon_style{
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    color: white;
    cursor:pointer; 
}
</style>