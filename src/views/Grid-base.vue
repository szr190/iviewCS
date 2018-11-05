<template>
    <div>
        <h1>Grid 基础布局</h1>
        <!-- 
            基础用法 
                24栅格系统
                col必须放在row里
                col的总和应该是24
        -->
        <h3>1、基础用法</h3>
        <Row>
            <Col span="12">12</Col>
            <Col span="12">12</Col>
        </Row>
        <Divider />
        <!-- 
            区块间隔
                gutter {Number} 单位px
                推荐使用(16+8n)px作为间距
        -->
        <h3>2、区块间隔</h3>
        <Row :gutter="gutterVal" class-name="r2">
            <Col span="6">
                <div>6</div>
            </Col>
            <Col span="6">
                <div>6</div>
            </Col>
            <Col span="6">
                <div>6</div>
            </Col>
            <Col span="6">
                <div>6</div>
            </Col>
        </Row>
        <Divider />
        <!-- 
            栅格顺序
                - col通过order属性进行排序
        -->
        <h3>3、栅格顺序</h3>
        <Row type="flex">
            <Col span="6" order="4">1 - order4</Col>
            <Col span="6" order="2">2 - order2</Col>
            <Col span="6" order="1">3 - order1</Col>
            <Col span="6" order="3">4 - order3</Col>
        </Row>
        <Divider />
        <!-- 
            栅格排序
                - 通过设置push(向右移动的格数)、pull(向左移动的格数)来改变顺序
        -->
        <h3>4、栅格排序</h3>
        <Row>
            <Col span="18" push="6">18 - push6</Col>
            <Col span="6" pull="18">6 - pull18</Col>
        </Row>
        <Divider />
        <!-- 
            左右偏移
                offset - 栅格左侧的间隔偏移量
                需要注意的是间隔内不可以有栅格
        -->
        <h3>5、左右偏移</h3>
        <Row>
            <Col span="8">8</Col>
            <Col span="8" offset="8">8 - offset8</Col>
        </Row>
        <Divider />
        <!-- 
            响应式布局
                xs <768
                sm >=768
                md >=992
                lg >=1200

                :lg="{span:6,offset:2}" 可以这样嵌套使用
        -->
        <h3>6、响应式布局</h3>
        <Row>
            <Col :xs="2" :sm="4" :md="6" :lg="{span:6,offset:2}">Col</Col>
            <Col :xs="2" :sm="6" :md="12" :lg="8">Col</Col>
            <Col :xs="2" :sm="10" :md="6" :lg="8">Col</Col>
        </Row>
        <Divider />
    </div>
</template>

<script>
export default {
    name: 'Grid',
    data () {	
        return {
            gutterVal: 16
        }
    },
    methods: {}
}
</script>

<style scoped>
    .ivu-row {
        color: #fff;
    }
    .ivu-row .ivu-col {
        background-color:blue;
    }
    .ivu-row .ivu-col:nth-child(even){
        background-color: blueviolet;
    }
    .r2 {
        color: #000;
    }
    .r2 .ivu-col {
        background-color: #fff !important;
    }
    .r2 .ivu-col div {
        border: 1px solid #000;
    }
</style>