const express=require("express");
const router=express.Router();
const pool=require("../pool.js");

router.get('/',(req,res)=>{
    var sql=`SELECT * FROM xm_roads_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
})

router.get('/roads-photo',(req,res)=>{
    var sql=`SELECT * FROM xm_roads_photo`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
})
//用户插入数据
router.get('/news',(req,res)=>{
    var obj=req.query;
if(!obj.uname){
	res.send("姓名不能为空");
	return;
	}if(!obj.tel)
	{res.send("电话不能为空");
	return;}
    if(!obj.msg)
	{res.send("留言不能为空");
	return;}
pool.query('INSERT INTO xm_news SET ?',[obj],(err,result)=>{
	if(err)throw err;
	if(result.affectedRows>0)
	{res.send("提交成功");
	}else{
        res.send("提交失败");
    }
	});
  });

 router.get('/lunbo1',(req,res)=>{
    var sql=`SELECT * FROM xm_lunbo1_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

router.get('/lunbo2',(req,res)=>{
    var sql=`SELECT * FROM xm_lunbo2_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

router.get('/roads1_img',(req,res)=>{
    var sql=`SELECT * FROM xm_roads1_img`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

//查询数据
router.get('/roads_details',(req,res)=>{
    var sql=`SELECT * FROM xm_roads_details`;
    pool.query(sql,[],(err,result)=>{
    if(err){
        console.log(err);
        res.send({code:0});
    }else{
        res.send(result);
    }
    })
}) 

//用户登录
router.get('/root',function(req,res){
	var obj=req.query;
	if(!obj.uname)
    {res.send("用户名不能为空");
	return;}
	if(!obj.upwd)
    {res.send("密码不能为空");
	return;
}
    var sql=`SELECT * FROM xm_root WHERE uname=? AND upwd=?`;
	pool.query(sql,[obj.uname,obj.upwd],function(err,result){
	if(err)throw err;
	if(result.length>0)
	{res.send({code:1,msg:"login sus"});
	}else
	{res.send({code:0,msg:"login fail"});}
	});
});

//用户注册
router.get('/register',(req,res)=>{
    var obj=req.query;
if(!obj.uname){
	res.send("用户名不能为空");
	return;
	}if(!obj.upwd)
	{res.send("密码不能为空");
	return;}
    if(!obj.email)
	{res.send("邮箱不能为空");
	return;}
    if(!obj.tel)
	{res.send("电话不能为空");
	return;}
pool.query('INSERT INTO xm_root SET ?',[obj],(err,result)=>{
	if(err)throw err;
	if(result.affectedRows>0)
	{res.send({code:1,msg:"req suc"});
	}else{
        res.send({code:0,msg:"req fail"});
    }
	});
  });
module.exports=router;