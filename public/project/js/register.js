$(function(){
    $(".myfont4").click(function(){
        var uname=$("input[name=uname]").val();
        var upwd=$("input[name=upwd]").val();
        var email=$("input[name=email]").val();
        var tel=$("input[name=tel]").val();
        var regName=/[a-zA-Z]\w{3,16}/;
        var regName1=/[a-zA-Z]\w{6,20}/;
         var regName2=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          var reg=/[13,15,17]\d{9}/;
        if(!uname){
            console.log("用户名不能为空");return;
        }else if(!regName.test(uname)){
            console.log("用户名格式不正确");return;
        }
        if(!upwd){
            console.log("密码不能为空");return;
        }else if(!regName1.test(upwd)){
            console.log("密码格式不正确");return;
        }
        if(!email){
            console.log("邮箱不能为空");return;
        }else if(!regName2.test(email)){
            console.log("邮箱格式不正确");return;
        }
        if(!tel){
            console.log("电话不能为空");return;
        }else if(!reg.test(tel)){
            console.log("电话格式不正确");return;
        }
        $.ajax({
            url:"http://localhost:3000/index/register",
            type:"get",
            dataType:"json",
            data:{
                uname:uname,
                upwd:upwd,
                email:email,
                tel:tel
            },
            success:function(data){
                if(data.code==1){
                    confirm("注册成功");
                    window.location.href="index.html"
                
                }else{
                    confirm("提交失败");
                }
            }
        })
    })
})
$(function(){
    var errMsg;
    var errMsg1;
    var errMsg2;
    var errMsg3;
    $.each($("input"),function(i,val){
        $(val).blur(function(){
            if($(val).attr("name")=="uname"){
                $(".nameMsg").remove();
                var uname=val.value;
                var regName=/[a-zA-Z]\w{3,16}/;
                if(uname==""||uname.trim()==""){
                    errMsg="<span class='nameMsg' style='color:red'>用户名不能为空</span>"    
                }else if(!regName.test(uname)){
                    errMsg="<span class='nameMsg' style='color:red'>由4~16英文字母数字组成</span>"
            }else{
                    errMsg="<span class='nameMsg' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'></span>"
            }
                $(this).parent().append(errMsg);
            }
            if($(val).attr("name")=="upwd"){
                $(".nameMsg1").remove();
                var upwd=val.value;
                var regName=/[a-zA-Z]\w{6,20}/;
                if(upwd==""||upwd.trim()==""){
                    errMsg1="<span class='nameMsg1' style='color:red'>密码不能为空</span>"
                }else if(!regName.test(upwd)){
                    errMsg1="<span class='nameMsg1' style='color:red'>由6~20英文字母数字组成</span>"
                }else{
                    errMsg1="<span class='nameMsg1' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'></span>"
                }
                $(this).parent().append(errMsg1);
            }
            if($(val).attr("name")=="userupwd"){
                $(".nameMsg0").remove();
                var upwd=$("input[name=upwd]").val();
                var userupwd=val.value;
                if(userupwd==""||userupwd.trim()==""){
                    errMsg1="<span class='nameMsg0' style='color:red'>确认密码不能为空</span>"
                }else if(userupwd==upwd){
                    errMsg1="<span class='nameMsg0' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'></span>"
                }else{
                    errMsg1="<span class='nameMsg0' style='color:red'>两次输入的密码不一致</span>"
                }
                $(this).parent().append(errMsg1);
            }
            if($(val).attr("name")=="email"){
                $(".nameMsg2").remove();
                var email=val.value;
                var regName=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if(email==""||email.trim()==""){    
                    errMsg2="<span class='nameMsg2' style='color:red'>邮箱不能为空</span>"; 
                }else if(!regName.test(email)){
                    errMsg2="<span class='nameMsg2' style='color:red'>请输入正确的邮箱地址</span>" ;  
                }else{
                    errMsg2="<span class='nameMsg2' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'></span>"
                }
                $(this).parent().append(errMsg2);
            }
            if($(val).attr("name")=="tel"){
                $(".nameMsg3").remove();
                var tel=val.value;
                var reg=/[13,15,17]\d{9}/;
                if(tel==""||tel.trim()==""){    
                    errMsg3="<span class='nameMsg3' style='color:red'>电话不能为空</span>"   
                }else if(!reg.test(tel)){    
                    errMsg3="<span class='nameMsg3' style='color:red'>请输入正确的电话号码</span>"    
                }else{
                    errMsg3="<span class='nameMsg3' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'></span>"
                }
                $(this).parent().append(errMsg3);
            }
            
        })
    })
    
    })
         