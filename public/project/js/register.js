$(function(){
    $(".myfont4").click(function(){
        var uname=$("input[name=uname]").val();
        var upwd=$("input[name=upwd]").val();
        var email=$("input[name=email]").val();
        var tel=$("input[name=tel]").val();
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
                    alert("注册成功");
                
                }else{
                    alert("提交失败");
                }
            }
        })
    })
})
$(function(){
    var errMsg;
    $.each($("input"),function(i,val){
        $(val).blur(function(){
            if($(val).attr("name")=="uname"){
                $(".nameMsg").remove();
                var uname=val.value;
                var regName=/[a-zA-Z]\w{3,16}/;
                if(uname==""||uname.trim()==""){
                    errMsg="<span class='nameMsg' style='color:red'>用户名不能为空<span>"
                }else if(!regName.test(uname)){
                    errMsg="<span class='nameMsg' style='color:red'>由英文字母数字组成的4~16位字符<span>"
                }else{
                    errMsg="<span class='nameMsg' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'><span>"
                }
                $(this).parent().append(errMsg);

            }else if($(val).attr("name")=="upwd"){
                $(".nameMsg").remove();
                var upwd=val.value;
                var regName=/[a-zA-Z]\w{6,20}/;
                if(upwd==""||upwd.trim()==""){
                    errMsg="<span class='nameMsg' style='color:red'>密码不能为空<span>"
                }else if(!regName.test(upwd)){
                    errMsg="<span class='nameMsg' style='color:red'>由英文字母数字组成的6~20位字符组成<span>"
                }else{
                    errMsg="<span class='nameMsg' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'><span>"
                }
                $(this).parent().append(errMsg);
            }
            else if($(val).attr("name")=="email"){
                $(".nameMsg").remove();
                var email=val.value;
                var regName=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if(email==""||email.trim()==""){
                    errMsg="<span class='nameMsg' style='color:red'>邮箱不能为空<span>"
                }else if(!regName.test(email)){
                    errMsg="<span class='nameMsg' style='color:red'>邮箱账号@域名：如good@tom.com<span>"
                }
                $(this).parent().append(errMsg);
            }
            else if($(val).attr("name")=="tel"){
                $(".nameMsg").remove();
                var tel=val.value;
                var regName=/[13,15,17]\d{9}/;
                if(tel==""||tel.trim()==""){
                    errMsg="<span class='nameMsg' style='color:red'>电话不能为空<span>"
                }else if(!regName.test(tel)){
                    errMsg="<span class='nameMsg' style='color:red'>格式错误<span>"
                }else{
                    errMsg="<span class='nameMsg' style='color:green'><img width='20px' height='20px' src='../img/Icon.png'><span>"
                }
                $(this).parent().append(errMsg);
            }
            
        })
    })
})