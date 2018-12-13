<template>
    <div class="index">
       <div class="top">
            <div class="top-left">
                <a href="#">
                    <img src="../img/mercedes-benz-logo-desktop.png">
                </a>
            </div>
            <div class="top-bt">
                <ul>
                    <li class="aaaa"  @mouseenter="bbb()"  @mouseleave="bbbb()">
                        <a href="#" class="aaa">
                            车型
                            <div class="cx">
                                <h1>所有车型</h1>
                                <ul class="cx1">
                                    <li><a href="#">轿车</a></li>
                                    <li><a href="#">SUV</a></li>
                                    <li><a href="#">跑车</a></li>
                                    <li><a href="#">商务车</a></li>
                                </ul >
                                <br>
                                <ul class="img">
                                    <li><img src="../img/1.png"></li>
                                    <li><img src="../img/L400 (1).png" ></li>
                                    <li><img src="../img/L400 (2).png"></li>
                                    <li><img src="../img/L400.png" ></li>
                                </ul>
                                <br>
                                <ul class="jiaoche">
                                    <li><a href="#" >S级</a></li>
                                    <li><a href="#">E级</a></li>
                                    <li><a href="#">C级</a></li>
                                    <li><a href="#">A级</a></li>
                                </ul>
                                <br>
                                <ul class="cheliang">
                                    <li><a href="#">S级轿车<br><br>￥86.38万起</a></li>
                                    <li><a href="#">长轴距E级轿车<br><br>¥ 43.58 万起</a></li>
                                    <li><a href="#">长轴距C级运动轿车<br><br>¥ 31.58 万起</a></li>
                                    <li><a href="#">A级车<br><br>¥ 21.98 万起</a></li>
                                </ul>
                                <ul class="cheliang">
                                    <li><a href="http://">S级轿车<br><br>￥86.38万起</a></li>
                                    <li><a href="http://">长轴距E级轿车<br><br>¥ 43.58 万起</a></li>
                                    <li><a href="http://">长轴距C级运动轿车<br><br>¥ 31.58 万起</a></li>
                                    <li><a href="http://">A级车<br><br>¥ 21.98 万起</a></li>
                                </ul>
                                <ul class="cheliang">
                                    <li><a href="http://">S级轿车<br><br>￥86.38万起</a></li>
                                    <li><a href="http://">长轴距E级轿车<br><br>¥ 43.58 万起</a></li>
                                    <li><a href="http://">长轴距C级运动轿车<br><br>¥ 31.58 万起</a></li>
                                    <li><a href="http://">A级车<br><br>¥ 21.98 万起</a></li>
                                </ul>
                        </div>
                        </a>
                        
                    </li>
                    <li><a href="#">购车指南</a></li>
                    <li><a href="#">客户服务</a></li>
                    <li><a href="#">Mercedes me</a></li>
                    <li><a href="#">梅赛德斯-AMG</a></li>
                </ul>
            </div>
           
        </div>
        
        <mt-swipe :auto="4000" class="mt-swipe">
            <mt-swipe-item v-for="item in list" :key="item.id" class="mt-swipe-item">
                <img :src="item.img_url">
            </mt-swipe-item>
        </mt-swipe>
        
        <div class="section">
            <div class="p1">
                <span class="hr1"></span>
                <div class="chexing">全部车型</div>
                <span class="hr2"></span>
            </div>
            <div class="quanbu">
                <a>
                    <ul>
                        <li class="li"  @mouseenter="cc()" @mouseleave="ccc()">
                            <div class="div1">
                                <div class="div11">&gt;</div> 
                                <div>轿车</div>
                            </div>
                        </li>
                        <li class="li">
                            <div class="div2">
                                <div class="div11">&gt;</div> 
                                <div>SUV</div>
                            </div>
                        </li>
                        <li class="li">
                            <div class="div3">
                                <div class="div11">&gt;</div> 
                                <div>跑车</div>
                            </div>
                        </li>
                        <li class="li">
                            <div class="div4">
                                <div class="div11">&gt;</div> 
                                <div>商务车</div>
                            </div>
                        </li>
                    </ul>
                </a >
            </div>
        </div>
        <div class="section-one">
            <div class="p2">
                <span class="hr1"></span>
                <div class="chexing">发现更多</div>
                <span class="hr3"></span>
            </div>
            <div class="section-one-top">
                <div class="section-one-top-top">
                    <a>
                        <img src="../img/d-mb-homepage-large-special-offer-pc-new.jpg" class="new"  @mouseenter="a()" @mouseleave="aa()">
                        <div class="text">
                            <div class="text1">限时购车新方案</div>
                            <div class="text2">多种优惠方案，</div>
                            <div class="text4">助你轻松拥有梅赛德斯-奔驰</div>
                            <div class="text3">&gt;&nbsp;了解更多</div>
                        </div>
                    </a>
                </div>
                <div class="section-bottom-left">
                    <div>
                        <a class="left">
                            <img src="../img/0917she's-pc.jpg" class="left-1" @mouseenter="b()" @mouseleave="bb()">
                            <div class="text">
                                <div class="text1">加入She's Mercedes</div>
                                <div class="text2">发出你的声音, 唤醒女性力量。</div>
                                <div class="text5">&gt;&nbsp;了解更多</div>
                            </div>
                        </a>
                        <a class="right">
                           <img src="../img/1.jpg" class="right-1" @mouseenter="d()" @mouseleave="dd()">
                           <div class="text">
                                <div class="text1">星友荟</div>
                                <div class="text2">尽情表达自我、分享观点、</div>
                                <div class="text4">结识新友的星徽社群。</div>
                                <div class="text3">&gt;&nbsp;了解更多</div>
                           </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-2">
            <div class="section-2-1">
                <div class="section-2-1-1">
                    <div>
                        <p>预约试驾</p>
                        <p class="tiyan">亲身体验梅赛德斯-奔驰吧。</p>
                        <a>&gt;&nbsp;开始</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="p5">
                <span class="hr2"></span>
                <div class="shipin">视频中心</div>
                <span class="hr6"></span>
        </div>
        <div class="video">
            <video src="../img/20180517.mp4" muted controls loop poster="../img/2.jpg" ></video>
        </div>

        <div class="footer">
            <div class="footer-top">
                <div>
                <ul><h4>车型</h4>
                    <li><a href="http://">轿车</a></li>
                    <li><a href="http://">SUV</a></li>
                    <li><a href="http://">轿跑车和敞篷跑车</a></li>
                    <li><a href="http://">MPV</a></li>
                    <li><a href="http://">EQC</a></li>
                    <li><a href="http://">车型总览</a></li>
                </ul>
                <ul><h4>购车指南</h4>
                    <li><a href="http://">限时购车新方案</a></li>
                    <li><a href="http://">在线购车</a></li>
                    <li><a href="http://">查找经销商</a></li>
                    <li><a href="http://">金融计算器</a></li>
                    <li><a href="http://">预约试驾</a></li>
                    <li><a href="http://">下载产品手册</a></li>
                </ul>     
                <ul><h4>客户服务</h4>
                    <li><a href="http://">星徽保养菜单</a></li>
                    <li><a href="http://">原厂修养套餐家族</a></li>
                    <li><a href="http://">手机端服务体验</a></li>
                    <li><a href="http://">原厂配件</a></li>
                    <li><a href="http://">事故与保险服务</a></li>
                    <li><a href="http://">24小时道路救援</a></li>
                    <li><a href="http://">召回通知</a></li>
                    <li><a href="http://">留学回国人员购车业务</a></li>
                    <li><a href="http://">金融服务</a></li>
                </ul>
                <ul><h4>奔驰天下</h4>
                    <li><a href="http://">Mercedes me</a></li>
                    <li><a href="http://">品牌介绍</a></li>
                    <li><a href="http://">奔驰新闻</a></li>
                    <li><a href="http://">企业社会责任</a></li>
                    <li><a href="http://">奔驰驾驶学院</a></li>
                    <li><a href="http://">供应商信息平台</a></li>
                    <li><a href="http://">环保信息清单</a></li>
                    <li><a href="http://">奔驰杂志</a></li>
                    <li><a href="http://">星友荟</a></li>
                </ul>
                </div>
            </div> 
        </div>
        <div class="foot-bt">
            <hr>
            <div class="foot-bt-top">
                <div class="aa"><b>其它奔驰网站</b></div>
                <div class="bb">
                    <span>Mercedes me</span>
                    <span>星睿认证二手车</span>
                    <span>She's Mercedes</span>
                    <span>金融服务</span>
                </div>
            </div>
            <hr>
            <div class="aaa"><b>关注我们</b></div>
        </div>
        <div class="foot">
            <ul>
                <li><a href="http://">© 2018 北京梅赛德斯-奔驰销售服务有限公司 版权所有</a></li>
                <li><a href="http://">网站地图</a></li>
                <li><a href="http://">隐私条款</a></li>
                <li><a href="http://">京ICP备09046804号-2</a></li>
                <li><a href="http://">法律声明</a></li>
                <li><a href="http://">京公网安备 11010502035702号</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                list:[]
            }
        },
        methods:{
            cc(){
                $(".li").mouseenter(function(){
                    $(this).children(":nth-child(1)").css("top","75%"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("background","rgb(255,255,255)")
                })
            },
            ccc(){
                $(".li").mouseleave(function(){
                    $(this).children(":nth-child(1)").css("top","80%"),
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("background","transparent")
                })
            },
            a(){
                $(".new").mouseenter(function(){
                    $(this).parent().children(":nth-child(2)").children(":nth-child(2)").css("display","block")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(3)").css("display","block")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(4)").css("display","block")
                    $(this).next().css("top","25%")
                })
            },
            aa(){
                $(".new").mouseleave(function(){
                    $(this).parent().children(":nth-child(2)").children(":nth-child(2)").css("display","none")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(3)").css("display","none")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(4)").css("display","none")
                     $(this).next().css("top","30%")
                })
            },
            b(){
                $(".left-1").mouseenter(function(){
                    $(this).parent().children(":nth-child(2)").children(":nth-child(2)").css("display","block")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(3)").css("display","block")
                    $(this).next().css("top","25%")
                })
            },
            bb(){
                $(".left-1").mouseleave(function(){
                    $(this).parent().children(":nth-child(2)").children(":nth-child(2)").css("display","none")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(3)").css("display","none")
                    $(this).next().css("top","30%")
                })
            },
            d(){
                $(".right-1").mouseenter(function(){
                    $(this).parent().children(":nth-child(2)").children(":nth-child(2)").css("display","block")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(3)").css("display","block")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(4)").css("display","block")
                    $(this).next().css("left","55%")
                    $(this).next().css("top","35%")
                })
            },
            dd(){
                $(".right-1").mouseleave(function(){
                    $(this).parent().children(":nth-child(2)").children(":nth-child(2)").css("display","none")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(3)").css("display","none")
                    $(this).parent().children(":nth-child(2)").children(":nth-child(4)").css("display","none")
                    $(this).next().css("top","46%")
                    $(this).next().css("left","65%")
                })
            },
            aaa(){
                $(function(){
                    setInterval(function(){
                        $(this).children(":nth-child(2)").children(":nth-child(1)").addclass("show")
                        $(this).children(":nth-child(1)").children(":nth-child(1)").removeclass("show")
                    },1000)
                })
            },
            bbb(){
                $(".aaaa").mouseenter(function(e){
                    e.preventDefault();
                $(this).children(":nth-child(1)").children(":nth-child(1)").css("display","block")
                   
                })
            },
            bbbb(){
                $(".aaaa").mouseleave(function(e){
                    e.preventDefault()
                    $(this).children(":nth-child(1)").children(":nth-child(1)").css("display","none")
                })    
            },
            getImage(){
                var url="http://127.0.0.1:3000/image"
                this.$http.get(url).then(result=>{
                    this.list=result.body
                })
            },
            getVideo(){
                var url="http://127.0.0.1:3000/video"
                this.$http.get(url).then(result=>{
                    console.log(result)
                })
            }
        },
        created(){
            this.cc()
            this.ccc()
            this.a()
            this.aa()
            this.b()
            this.bb()
            this.d()
            this.dd()
            //this.aaa()
            this.bbb()
            this.bbbb()
            this.getImage()
        },
    }
</script>
<style>
    .index .mt-swipe{
        padding:0 0;
        height:600px;
    }
    .index .mt-swipe .mt-swipe-item img{
        width:100%
    } 
    .top{
        background: #222;
        margin-top:-40px;
        width:100%;
        height:108px;
        box-sizing: border-box;
    }
    .top .top-left{
        margin-left:200px;
        padding-top:28px;
    }
    .top .top-left a img{
        width:259px;
        height:64px;
    }
    .top-bt ul li{
        list-style: none;
        float:left;
        margin-right:50px;
        white-space: nowrap;
    }
    .top-bt ul li a{
        text-decoration: none;
        color:#fff;
        font: normal 400 14px/3.42857 "PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Microsoft YaHei","SimHei",Helvetica,Arial,serif;
    line-height: normal;
    }
    .top-bt ul li a:hover{
        color:lightblue;
    }
        
    .top-bt{
        position:absolute;
        left:35%;
        top:50px;
        width:100%;
        box-sizing: border-box;
    }
    .cx{
        width:1600px;
        background-color:rgba(255,255,255,1);
        position: relative;
        left:-35%;
        display:none;
        top:-10%;
        margin-top:37px;
        z-index:111;
        height:700px;
    }
    .top-bt .aaa .cx h1{
        font: normal 400 36px/50px "SimSun",serif;
        margin:20px 210px;  
    }
    .cx ul li{
        float:left;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    .cx .cx1{
        white-space: nowrap;
        margin-left:210px
    }
    .cx .cx1 li a{
        margin-right:100px;
    }
    .cx ul li a{
        font-weight: normal;
        display: inline-block;
        cursor: pointer;
        font-size: 16px;
        color: #666;
        line-height: 16px;
    }
    .cx .cx1 li a:hover{
        border-bottom:1px solid lightskyblue
    }
    .cx ul li img{
        width:200px;
        height:81px;
        margin-right:-70px;
        margin-left:210px;
        white-space: nowrap;
        margin-top:20px;
        margin-bottom:20px;
    }
    .cx .jiaoche{
        margin-left:210px;
        white-space: nowrap;
    }
    .cx .jiaoche li a{
        border-bottom:1px solid lightslategrey;
        font: normal 400 36px/1 "SimSun",serif;
        margin-right:280px !important;
    }
    .cheliang{
        margin-left:90px;
    }
    .cheliang li a{
        margin:20px 120px !important;
    }
    #slider a img{
        height:660px;
        width:100%;
        display:none;
    }
    #slider a img.show{
        display:block
    }
    .p1 .hr1{
        content: '';
        width: 350px;
        height: 1px;
        background-color: #e1e1e1;
        position: absolute;
        left: 320px;
        z-index: 1;
        top:20px;
        margin-bottom:20px;
    }
    .chexing{
        margin-left:20px;
        margin-top:-40px;
        font: normal 400 36px/50px "SimSun",serif;
        color:#666;
        cursor:text;
    }
    .section{
        width:100%;
        text-align:center;
        position:relative;
    }
    .p1{
        margin-top:50px;
        position:relative
    }
    span.hr2{
        content: '';
        width: 350px;
        height: 1px;
        background-color: #e1e1e1;
        position: absolute;
        left: 910px;
        z-index: 1;
        top:20px;
        margin-bottom:20px;
    }
    div.quanbu{
        margin:20px auto;
        width:940px;
        height:400px;
        background-image:url("../img/d-mb-homepage-all-vehicles-bg-img.jpg");
    }
    ul{
        margin:0;
        padding:0;
        list-style:none;
    }
    .quanbu a ul li{
        border-right: 1px solid #fff;
        width:235px;
        height:400px;
        background-color:rgba(0,0,0,0.1);
        float:left;
        
    }
    .quanbu a ul li:hover{
        background-color:rgba(0,0,0,.4)
    }

    .quanbu a ul li div.div1{
        position: absolute;
        top: -moz-calc(100% - 140px);
        top:80%;
        left: 26%;
        max-width: 95px;
        text-align: center;
        font: normal 400 20px/28px "PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Microsoft YaHei","SimHei",Helvetica,Arial,serif;
        font-weight: 600;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        color: #fff;
    }
    .quanbu a ul li div.div1 .div11{
        width:32px;
        height:32px;
        border:1px solid #fff;
        border-radius:50%;
        margin-top:-50px;
        margin-bottom:30px;
        margin-left:5px;
        background:transparent;
    }
    .quanbu a ul li div.div2{
        position: absolute;
        top: -moz-calc(100% - 140px);
        top:80%;
        left: 42%;
        max-width: 95px;
        text-align: center;
        font: normal 400 20px/28px "PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Microsoft YaHei","SimHei",Helvetica,Arial,serif;
        font-weight: 600;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        color: #fff;
    }
    .quanbu a ul li div.div2 .div11{
        width:32px;
        height:32px;
        border:1px solid #fff;
        border-radius:50%;
        margin-top:-50px;
        margin-bottom:30px;
        margin-left:5px;
        background:transparent;
    }
    .quanbu a ul li div.div3{
        position: absolute;
        top: -moz-calc(100% - 140px);
        top:80%;
        left:56%;
        max-width: 95px;
        text-align: center;
        font: normal 400 20px/28px "PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Microsoft YaHei","SimHei",Helvetica,Arial,serif;
        font-weight: 600;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        color: #fff;
    }
    .quanbu a ul li div.div3 .div11{
        width:32px;
        height:32px;
        border:1px solid #fff;
        border-radius:50%;
        margin-top:-50px;
        margin-bottom:30px;
        margin-left:5px;
        background:transparent;
    }
    .quanbu a ul li div.div4{
        position: absolute;
        top: -moz-calc(100% - 140px);
        top:80%;
        left: 70%;
        max-width: 95px;
        text-align: center;
        font: normal 400 20px/28px "PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Microsoft YaHei","SimHei",Helvetica,Arial,serif;
        font-weight: 600;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        color: #fff;
    }
    .quanbu a ul li div.div4 .div11{
        width:32px;
        height:32px;
        border:1px solid #fff;
        border-radius:50%;
        margin-top:-50px;
        margin-bottom:30px;
        margin-left:8px;
        background:transparent;
    }
    .section-one{
        text-align:center;
        margin:100px;
        position:relative;
    }
    .p2 .hr1{
        content: '';
        width: 350px;
        height: 1px;
        background-color: #e1e1e1;
        position: absolute;
        left: 225px;
        z-index: 1;
        top:20px;
        margin-bottom:20px;
    }
    span.hr3{
        content: '';
        width: 350px;
        height: 1px;
        background-color: #e1e1e1;
        position: absolute;
        left: 810px;
        z-index: 1;
        top:20px;
        margin-bottom:20px;
    }
    .section-one-top .section-one-top-top{
        background:transparent;
    }
    .section-one-top .section-one-top-top a img{
        width:940px;
        height:300px;
        margin:20px;
    }
    .section-one-top .section-one-top-top a .text{
        position:absolute;
        left:20%;
        top:30%;
        color:#fff;
        background:transparent;
    }
    .section-one-top .section-one-top-top a .text .text1{
        font-size:30px;
        color:#fff;
    }
    .section-one-top .section-one-top-top a .text .text2{
        margin-top:20px;
        margin-left:-90px;
        display:none;
    }
    .section-one-top-top a .text .text4{
        display:none;
    }
    .section-one-top-top a .text .text3{
        margin-left:-120px;
        display:none;
        margin-top:30px;
    }
    .section-one-top .section-bottom-left div .left{
        width:620px;
        height:300px;
        margin-right:10px;
    }
    .section-one-top .section-bottom-left div .right{
        width:310px;
        height:300px;
    }
    .section-one-top .section-bottom-left div .right img{
        width:310px;
        height:300px;
    }
    .section-bottom-left div .left .text{
        position:absolute;
        left:20%;
        top:30%;
        color:#fff;
        background:transparent;
    }
    .section-bottom-left{
        position:relative
    }
    .section-bottom-left div .left .text .text1{
        font-size:30px;
        color:#fff;
    }
    .section-bottom-left div .left .text .text5{
        margin-left:-190px;
        margin-top:30px;
        display:none;
    }
    .section-bottom-left div .left .text .text2{
        margin-top:20px;
        margin-left:-50px;
        display:none;
    }
    .section-bottom-left div .right .text{
        position:absolute;
        left:65%;
        top:46%;
        color:#fff;
        background:transparent;
    }
    .section-bottom-left div .right .text .text1{
        font-size:30px;
        color:#fff;
    }
    .section-bottom-left div .right .text .text2{
        margin-top:20px;
        margin-left:120px;
        display:none;
    }
    .section-bottom-left div .right .text .text4{
        margin-left:90px;
         display:none;
    }
    .section-bottom-left div .right .text .text3{
        margin-left:0px;
        margin-top:30px;
        display:none;
    }
    div.section-2{
        width:100%;
        background-image:url("../img/E-Class-Coupe.jpg");
        height:440px;
        text-align:center;
    }
    .section-2 .section-2-1{
        width:940px;
        height:440px;
        margin:0 auto;
        position:relative
    }
    .section-2 .section-2-1 .section-2-1-1{
        width:300px;
        height:202px;
        background:rgba(255,255,255,0.9);
        position:absolute;
        top:30%;
        padding-left:20px;
        padding-top:30px;
  
    }
    .section-2 .section-2-1 .section-2-1-1 div p{
        font: normal 400 36px/50px "SimSun",serif;
        margin-left:-50px;
    }
    .section-2 .section-2-1 .section-2-1-1 div .tiyan{
        font-size:17px;
        margin-left:20px;
    }
    .section-2 .section-2-1 .section-2-1-1 div a{
        color:#333;
        font-family:SimHei;
        font-size:14px;
        margin-left:-150px;
        cursor:pointer;
    }
    .kongbai{
        width:100px;
        height:50px;
        margin:10px;
        margin-bottom:100px; 
    }
    .p5 .hr2{
        content: '';
        width: 350px;
        height: 1px;
        background-color: #ddd;
        position: absolute;
        left: 325px;
        z-index: 1;
        top:2560px;
        margin-bottom:20px;
    }
    .p5 .shipin{
        margin-left:720px;
        margin-top:45px;
        font: normal 400 36px/50px "SimSun",serif;
        color:#666;
        cursor:text;
    }
    span.hr6{
        content: '';
        width: 350px;
        height: 1px;
        background-color: #ddd;
        position: absolute;
        left: 910px;
        z-index: 1;
        top:2560px;
        margin-bottom:20px;
    }
    .video{
        width:100%;
        height:100%;
        margin:10px auto 10px;
        text-align: center;
        border:1px dotted lightblue;
    }
    .video video{
        width:inherit;
        height:inherit;
    }
    .footer{
        margin:60px auto;
        background-color:#f1f1f1;
        width:100%;
        height:100%;
        text-align:center;
    }
    .footer .footer-top{
        width:1000px;
        height:480px;
        margin:20px auto;
        padding-top:40px;
    }
    .footer  div ul{
        float:left;
        margin-left:40px;
        margin-right:80px;
    }
    .footer  div ul li a{
        font: normal 400 14px/3.42857 "PingFang SC","Hiragino Sans GB","Noto Sans CJK SC","Source Han Sans SC","Microsoft YaHei","SimHei",Helvetica,Arial,serif;
        color:#333;
    }
    .footer  div ul li a:hover{
        color:lightskyblue
    }
    .foot-bt{
        width:1000px;
        height:100%;
        line-height:20px;
        text-align: center;
    }
    .foot-bt hr{
        width:1000px;
        margin-left:30%;
        margin-top:20px;
        margin-bottom:20px;
    }
    .foot-bt .aa{
       font-size:22px;
       margin-left:-270px;
       margin-bottom:30px;
       margin-top:30px;
    }
    .foot-bt .bb{
        display:flex;
        flex-wrap: nowrap;
        text-align: center;
        align-items: center;
        justify-content: space-between;
        margin-left:300px;
        margin-top:30px;
        margin-bottom:30px;
    }
    .foot-bt .aaa{
       font-size:22px;
       margin-left:-310px;
       margin-bottom:30px;
       margin-top:30px;
    }
    .foot{
        height:50px;
        background: #222;
        font-size:13px;
        text-align: center;
        box-sizing: border-box;
    }
    .foot ul{
        text-align: center;
        margin-left:285px;
    }
    .foot ul li{
        float:left;
        margin-right:10px;
        padding:15px;
    }
    .foot ul li a{
        color:lightgrey;
    }
    .foot ul li a:hover{
        color:lightskyblue;
    }
</style>