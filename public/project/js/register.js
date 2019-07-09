$(function(){
    $(".myfont4").click(function(){
        var uname=$("input[name=uname]").val();
        var upwd=$("input[name=upwd]").val();
        var email=$("input[name=email]").val();
        var tel=$("input[name=tel]").val();
        if(!uname){
            alert("用户名不能为空");return;
        }
        if(!upwd){
            alert("密码不能为空");return;
        }
        if(!email){
            alert("邮箱不能为空");return;
        }
        if(!tel){
            alert("电话不能为空");return;
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
                    alert("注册成功");
                
                }else{
                    alert("提交失败");
                }
            }
        })
    })
   $("input[name=uname]").focus(function(){
        $("#d1").show();
    }).blur(function(){
        $("#d1").hide();
    })
    $(".t1").focus(function(){
        $("#d2").show();
    }).blur(function(){
        $("#d2").hide();
    })
    $(".t2").focus(function(){
        $("#d3").show();
    }).blur(function(){
        $("#d3").hide();
    })
    $("input[name=email]").focus(function(){
        $("#d4").show();
    }).blur(function(){
        $("#d4").hide();
    })
    $("input[name=tel]").focus(function(){
        $("#d5").show();
    }).blur(function(){
        $("#d5").hide();
    })
})()