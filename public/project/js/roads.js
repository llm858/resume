(function(){
   $.ajax({
        url:"http://localhost:3000/index/roads-photo",
        type:"get",
        dataType:"json"
    })
    .then(function(result){
        //console.log(result);
        var tab1=result;
        var html=`<div class="row m-0 text-center active">
      <div class="col-md-3 col-sm-12 p-0 my_style">
			  <div>
        <img class="my_height" src="${tab1[0].href}" alt=""></div>
        <p class="my_color">${tab1[0].details}</p>
        </div>
        <div class="col-md-3 col-sm-12 p-0 my_style">
				 <div>
          <img class="my_height" src="${tab1[1].href}" alt=""></div>
        <p class="my_color">${tab1[1].details}</p>
        </div>
        <div class="col-md-3 col-sm-12 p-0 my_style">
				<div>
        <img class="my_height" src="${tab1[2].href}" alt=""></div>
        <p class="my_color">${tab1[2].details}</p>
        </div>
        <div class="col-md-3 col-sm-12 text-center p-0 my_style">
				<div>
        <img class="my_height" src="${tab1[3].href}" alt=""></div>
        <p class="my_color">${tab1[3].details}</p>
        </div>
      </div>`;
            document.getElementsById("tab1").innerHTML=html;
    })
})()