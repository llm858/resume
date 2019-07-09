(function(){
   $.ajax({
        url:"http://localhost:3000/index",
        type:"get",
        dataType:"json"
    })
    .then(function(result){
        new Vue({
          el:"#f2",
          data:{
              result
          }
        })
    })
    $.ajax({
        url:"http://localhost:3000/index/lunbo1",
        type:"get",
        dataType:"json",
    success:function(result){
        console.log(result);
        new Vue({
            el:"#d1",
            data:{
                p1:result[0],
                p2:result[1],
                p3:result[2]
            
            }
        })
     }
    })
    $.ajax({
        url:"http://localhost:3000/index/lunbo2",
        type:"get",
        dataType:"json",
    success:function(result){
        new Vue({
            el:"#d2",
            data:{
                p1:result[0],
                p2:result[1],
                p3:result[2],
                p4:result[3],
            }
        })
     }
    })
    $.ajax({
        url:"http://localhost:3000/index/roads1_img",
        type:"get",
        dataType:"json",
    success:function(result){
        new Vue({
            el:"#d3",
            data:{
                p1:result[0],
                p2:result[1],
                p3:result[2],
                p4:result[3],
                p5:result[4]
            }
        })
     }
    })
    $.ajax({
        url:"http://localhost:3000/index/roads_details",
        type:"get",
        dataType:"json",
    success:function(result){
        new Vue({
            el:"#d4",
            data:{
                p1:result[0],
                p2:result[1],
                p3:result[2]
            }
        })
     }
    })
})()