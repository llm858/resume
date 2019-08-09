$(function(){
			$("#btn").click(function(){
                var uname=$("input[name=uname]").val();
                var upwd=$("input[name=upwd]").val();
                 sessionStorage.setItem("uname",uname);
                if(!uname){
                    console.log("用户名不能为空");return;  
                }
                if(!upwd){
                    console.log("密码不能为空");return;
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
                    confirm('登录成功');
                    $("input[name=uname]").val('');
                    $("input[name=upwd]").val('');
                    var did=data.data[0].did;
                    console.log(did);
                    sessionStorage.setItem("did",did); 
                    location.href="index.html";
            }else{
                    confirm("用户名或者密码错误!");
                    
               }
                
     }
})
})
})
$(function(){
    var errMsg;
    var errMsg1;
    $.each($("input"),function(i,val){
        $(val).blur(function(){
            if($(val).attr("name")=="uname"){
               $(".nameMsg").remove();
                var uname=val.value;
                if(uname==""||uname.trim()==""){
                    errMsg="<span class='nameMsg' style='color:red'>用户名不能为空</span>"  
                    $(this).parent().append(errMsg);  
                }else if(uname.length>0){
                    $(".nameMsg").addClass("collapse");
                }
            }
            if($(val).attr("name")=="upwd"){
                $(".nameMsg1").remove();
                var upwd=val.value;
                if(upwd==""||upwd.trim()==""){
                    errMsg1="<span class='nameMsg1' style='color:red'>密码不能为空</span>";
                     $(this).parent().append(errMsg1);
                }else if(upwd.length>0){
                    $(".nameMsg1").addClass("collapse");
                }
            }
        })	
        })	
    })
   

