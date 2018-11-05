<template>
  <div class="home">
    <h1>Button 按钮</h1>
    <h3>按钮类型</h3>
    <Button>Default</Button>
    <!-- 
      type 按钮类型 
        default、primary、dashed、text、info、success、warning、error
    -->
    <Button type="primary">Primary</Button>
    <Divider />
    <!-- 
      幽灵按钮 - 使按钮背景透明
        ghost 
    -->
    <h3>幽灵按钮</h3>
    <Button type="info" ghost>Info</Button>
    <Divider />
    <!-- 
      按钮尺寸
        large,small,default
    -->
    <h3>按钮尺寸</h3>
    <Button type="success" size="large">Large</Button>
    <Button type="success" size="small">Small</Button>
    <Button type="success" size="default">Default</Button>
    <Divider />
    <!-- 
      长按钮
        long
    -->
    <h3>长按钮</h3>
    <Button type="error" long>Error</Button>
    <Divider />
    <!-- 
      禁用状态
        disabled
    -->
    <h3>禁用状态</h3>
    <Button type="dashed" disabled>Dashed</Button>
    <Divider />
    <!-- 
      按钮形状
        shape - circle或者不设置
    -->
    <h3>按钮形状</h3>
    <Button type="warning" shape="circle">Dashed</Button>
    <Divider />
    <!-- 
      加载中按钮
        loading
    -->
    <h3>加载中按钮</h3>
    <Button type="primary" :loading="loading" @click="handleLoading">
      <span v-if="!loading">Please Click Me</span>
      <span v-else>Loading</span>
    </Button>
    <Divider />
    <!-- 
      按钮组 
        shape 形状
        size 大小
        vertical 是否纵向排列
    -->
    <h3>按钮组</h3>
    <ButtonGroup vertical>
      <Button type="primary" class="b">L</Button>
      <Button type="default">M</Button>
      <Button type="dashed">R</Button>
    </ButtonGroup>
    <Divider />
    <!-- 
      设置原生Button的类型
        button、submit、reset  
    -->
    <h3>设置原生Button的类型</h3>
    <Button html-type="submit">Submit</Button>
    <Divider />
    <!-- 
      设置按钮的图标类型
      icon
    -->
    <h3>设置按钮的图标类型</h3>
    <Button type="primary" icon="ios-skip-forward"></Button>
    <Divider />
    <!-- 
      跳转功能
        to - 类似于vue-router
        replace - 不记录历史纪录
        target - 相当于a链接的target属性
    -->
    <h3>跳转功能</h3>
    <Button type="primary" to="/about">To</Button>
    <Button type="warning" replace>Replace</Button>
    <Button type="error" to="/" target="_blank">Target</Button>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handleLoading () {
      this.loading = !this.loading;
    }
  },
  components: {
  }
}
</script>

<style>
  button {
    margin: 0 10px;
  }
  .b {
    margin: 0;
  }
  h3 {
    margin: 20px 0;
  }
</style>

