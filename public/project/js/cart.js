// new Vue({
//     el:"#mycart",
//         data:{ 
//             count:1,
//             list:[] 
//             },
//         created(){
//             var id=sessionStorage.getItem("did");
//               $.ajax({
//              url:"http://localhost:3000/index/cart",
//                type:"get",
//                dataType:"json",
//                data:{did:id},
//                 success:function(result){
//                   console.log(result);
//                   //1:获取服务器数组
//                 var rows = result.data;
//                 //2:创建循环为数组中每个//对象添加cb属性
//                 //cb控制商品前复选框
//                  for(var item of rows){
//                    item.cb = false;
//                  }
//                 //3:将新数据保存
//                 this.list = rows;
//                 console.log(this.list)
//                 }
//             })
//         },
//    methods:{
//               min(){
//                 this.count>1?this.count--:1; 
//               },
//               add(){
//                 this.count++;
//               },
 
//  delItem(e){
//               //1:获取当前商品id
//               var id = e.target.dataset.id;
//               console.log(id);
//               //2:显示交互确认框 27
//               //3:如果用户选择 "确认"
              
//               this.$messagebox.confirm("是否删除指定数据").then(action=>{
//                 $.ajax({
//                   url:"http://localhost:3000/index/delItem",
//                   type:"get",
//                   dataType:"json",
//                   data:{id:id}
//                 }).then(result=>{
//                     //重新加载数据相当刷新
//                     this.loadMore();
//                   })
//               }).catch(err=>{
//                 return;
//               })
//               },   
//               selectAll(e){
//             //全选按钮状态
//             var cb =  e.target.checked;
//             //依据状态修改列表cb
//             for(var item of this.list){
//                 item.cb = cb;
//             }
//               }
//             }
//    })
  