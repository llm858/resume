$(function(){
    var t=$("#text-box");
    $("#add").click(function(){
        t.val(parseInt(t.val())+1);
        if(parseInt(t.val())!=1)
        {
            $("#min").attr("disable",false);
        }
    })
    $("#min").click(function(){
        if(parseInt(t.val())==1){
            $("#min").attr("disable",true);
        }else{
            t.val(parseInt(t.val())-1);
        }
    })
})