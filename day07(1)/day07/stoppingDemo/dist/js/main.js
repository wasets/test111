console.log("加载成功");

//配置引入的js模块路径
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "index": "index",
        "banner": "banner"
    },
    shim: {
        //jquery.cookie 是依赖于 jquery开发
        //设置依赖关系
        "jquery-cookie": ["jquery"],
        //某一个模块，不遵从AMD   声明define
        "parabola": {
            exports: "_" //和普通的函数一样去使用
        }
    }
})


//调用首页模块上面的函数，实现对应的功能
require(["index", "banner"], function(index, banner){
    index.download();
    index.goodsBtnClick();
    index.rightGoodsHover();
    index.clearBtnClick();
    index.rightGoodsBtnClick();

    banner.banner();

})