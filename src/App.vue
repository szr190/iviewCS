<template>
  <div class="layout">
      <Layout>
        <Sider hide-trigger width="240">
          <Menu :active-name="activeName">
            <MenuItem name="/btn" to="/btn">Button</MenuItem>
            <MenuItem name="/icon" to="/icon">Icon</MenuItem>
            <MenuItem name="/grid" to="/grid">Grid</MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            <Card padding="50" :bordered="false">
              <router-view/>
            </Card>
          </Content>
        </Layout>
      </Layout>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: this.$route.path
    }
  },
  watch: {
    '$route' () {
      this.activeName = this.$route.path
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ivu-layout-sider {
  background-color: #fff !important;
}
</style>
