const express = require('express')

const app = express()

app.get('/demo',(req,res) =>{
  res.json({
    message:'1111'
  })
  //throw new Error('测试异常功能')
})

function error_handle_middleaware(err,req,res,next){
  let {message} = err
  if(err){
    res.status(500).json({
      message:`${message || '服务器异常'}`
    })
  }else{
    //
  }
}
// app.use(error_handle_middleaware)

app.listen('5000',() =>{
  console.log('启动成功')
})