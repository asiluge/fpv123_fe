<template>
    <div >
        <NavMenu />
        <div class="home_content">
<!--            <br><br>-->
            <el-carousel :interval="5000" type="card" height="300px">
                <el-carousel-item v-for="item in 5" :key="item">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
            <br><br>


        </div>
    </div>
</template>

<script>
    import NavMenu from "../components/NavMenu";
    import eye from "../assets/eye.png"
    import closeEye from "../assets/close.png"
    export default {
        name: 'Start',
        components: {
            NavMenu
        },
        props: {
            msg: String
        },
        data(){
            return {
                isShowToken:false,
                showTokenButtonIcon:eye,
            }
        },
        methods: {
            openDoc:function () {
                window.open('https://bytedance.feishu.cn/space/doc/doccnb6xtCkksfeOBLq8okaNfPa')
            },
            displayToken:function(){
                this.isShowToken = !this.isShowToken;
                if (this.isShowToken){
                    this.showTokenButtonIcon =closeEye
                }else{
                    this.showTokenButtonIcon =eye
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
    .home_content {
        margin-top: 40px;
        margin-bottom: 100px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #D3D3D3;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #D3D3D3;
    }
</style>
