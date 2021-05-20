<template lang="">
  <div>
    <h1>创建分类</h1>
    <el-form  ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" >立即创建</el-button>
        <el-button >重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      name:''
    }
  }
}
</script>
<style lang="">
  
</style>