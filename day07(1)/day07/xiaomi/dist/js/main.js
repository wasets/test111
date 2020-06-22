console.log("加载成功");

/*
    配置我们要引入的模块路径
*/
require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "parabola": "parabola",
        "banner": "banner",
        "index": "index"
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


//使用轮播图模块，实现轮播效果
require(["banner", "index"], function(banner, index){
    banner.handleClick(); //实现点击按钮，完成图片的切换
    banner.handleHover(); //添加banner图的移入移出效果

    index.download(); //下载数据
    index.addCarClick();
    index.handleHover();
})
