$(function(){
			$("#btn").click(function(){
                var uname=$("input[name=uname]").val();
                var upwd=$("input[name=upwd]").val(); 
            $.ajax({
            url:"http://localhost:3000/index/root",
            type:"get",
            dataType:"json",
            data:{
                uname:uname,
                upwd:upwd
            },
            success:function(data){
                if(data.code==1){
                    window.location.href="index.html";
                }else{
                    confirm("用户名或者密码错误!");
                }          
 }
     })
    })
})
$(function(){
    $("input[name=uname]").focus(function(){
         $(".nameMsg").addClass("collapse");
}).blur(function(){
    if($("input[name=uname]").val()==""){
        $(".nameMsg").removeClass("collapse");
    }
  })
})
	

