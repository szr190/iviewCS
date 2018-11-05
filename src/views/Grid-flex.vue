<template>
    <div>
        <h1>Grid 弹性布局</h1>
        <!-- 
            子元素向左 / 右 / 居中 / 等宽 / 分散排列 
                justify="start / end / center / space-between / space-around"
        -->
        <h3>1、子元素向左排列</h3>
        <Row type="flex" justify="start">
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
        </Row>
        <Divider />

        <h3>2、子元素向右排列</h3>
        <Row type="flex" justify="end">
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
        </Row>
        <Divider />

        <h3>3、子元素居中排列</h3>
        <Row type="flex" justify="center">
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
        </Row>
        <Divider />

        <h3>4、子元素等宽排列</h3>
        <Row type="flex" justify="space-between">
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
        </Row>
        <Divider />

        <h3>5、子元素分散排列</h3>
        <Row type="flex" justify="space-around">
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
            <Col span="4">4</Col>
        </Row>
        <Divider />

        <!-- 
            对齐方式
                justify + align (top / bottom / middle)
        -->
        <h3>6、顶部对齐</h3>
        <Row type="flex" justify="center" align="top">
            <Col span="4">
                <p style="height:80px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:30px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:100px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:60px;">4</p>
            </Col>
        </Row>
        <Divider />

        <h3>7、居中对齐</h3>
        <Row type="flex" justify="center" align="middle">
            <Col span="4">
                <p style="height:80px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:30px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:100px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:60px;">4</p>
            </Col>
        </Row>
        <Divider />

        <h3>8、底部对齐</h3>
        <Row type="flex" justify="center" align="bottom">
            <Col span="4">
                <p style="height:80px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:30px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:100px;">4</p>
            </Col>
            <Col span="4">
                <p style="height:60px;">4</p>
            </Col>
        </Row>
        <Divider />
    </div>
</template>

<script>
export default {
    name: 'GridFlex',
    data () {	
        return {}
    },
    methods: {}
}
</script>

<style scoped>
    .ivu-row-flex {
        color: #fff;
    }
    .ivu-row-flex .ivu-col {
        background-color:blue;
    }
    .ivu-row-flex .ivu-col:nth-child(even){
        background-color: blueviolet;
    }
</style>