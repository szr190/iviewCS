<template>
    <div class="layout">
        <h1>Card</h1>
        <!-- 
            基本用法
                slot 
                    title 标题
                    extra 右上角需要显示的额外东西
        -->
        <h3>1、基本用法</h3>
        <Card>
            <p slot="title">基础</p>
            <p slot="extra">X</p>
            <ul>
                <li>111</li>
                <li>222</li>
                <li>333</li>
            </ul>
        </Card>
        <Divider />

        <!-- 
            无边框
                bordered {Boolean}
        -->
        <h3>2、无边框</h3>
        <Card :bordered="false">
            <p slot="title">No title</p>
        </Card>
        <Divider />

        <!-- 
            禁用悬停按钮
                dis-hover
        -->
        <h3>3、禁用悬停按钮</h3>
        <Card dis-hover>
            <p slot="title">title</p>
        </Card>
        <Divider />
    </div>
</template>

<script>
export default {
    name: 'Layout',
    data () {	
        return {}
    },
    methods: {}
}
</script>

<style scoped>

</style>