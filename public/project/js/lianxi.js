$(function(){
    $(".mybtn").click(function(){
      $.ajax({
        url:"http://localhost:3000/index/news",
        type:"get",
        data:{
            uname:$(".myinput").val(),
            tel:$(".myinput2").val(),
            msg:$(".myinput1").val()
        },
        dataType:"text",
    success:function (data) {
             if(data){
                     document.getElementById('Result').innerHTML=data;
                     $("input:not('#send')").val('');
             }   
         },
         error:function () {
             document.getElementById('Result').innerHTML="出错啦！";
             $("input:not('#send')").val('');
         }
 
     });
      })
})