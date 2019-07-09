$(function(){
			$("#btn").click(function(){
                var uname=$("input[name=uname]").val();
                var upwd=$("input[name=upwd]").val(); 
                if(!uname){
                    alert("用户名不能为空");
                    return;
                }
                if(!upwd){
                    alert("密码不能为空");
                    return;
                }
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
                    alert("用户名或者密码错误!");
                }          
 }
     })
    })
})
	

