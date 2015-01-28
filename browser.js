 /**
 * 设为首页
 */
function setHome()
{
    try{
        //针对IE浏览器(setHomePage的参数必须是一个完整的网页URL才能正常触发设为首页操作)
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(location.href);
    }
    catch(e){
        //暂时没有找到兼容其他浏览器的方法，在此使用提示来代替（ASCII码字符：您的浏览器需要手动设置首页。如需获取帮助，请参见“如何把百度设为您的上网主页”！）
        var ok = confirm("\u60a8\u7684\u6d4f\u89c8\u5668\u9700\u8981\u624b\u52a8\u8bbe\u7f6e\u9996\u9875\u3002\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1\u201c\u5982\u4f55\u628a\u767e\u5ea6\u8bbe\u4e3a\u60a8\u7684\u4e0a\u7f51\u4e3b\u9875\u201d\uff01")
        ok && window.open("http://www.baidu.com/cache/sethelp/index.html", "_blank");
    }
},

/**
 * 加入收藏
 */
function addFavorite()
{
    try{
        //针对IE进行添加操作
        //注：由于安全设置问题，本地文件中没有权限执这行代码。
        //另外在IE中，无法直接执行addFavorite方法，需要通过dom节点的相关事件才能正常触发，而以IE为内核的360、搜狗等浏览器却可以正常被触发。
        window.external.addFavorite(location.href, document.title);
    }
    catch(e){
        try{
            //针对Firefox进行添加操作
            //注意：addPanel方法要求网址信息必须是一个绝对且有效的网站地址，所以在本地文件进行测试将无法看到效果
            window.sidebar.addPanel(document.title, location.href, "");
        }
        catch(e){
            //如果是其他浏览器，则提示按Ctrl+D进行添加操作（ASCII码字符：添加收藏没有成功，可使用Ctrl+D继续完成操作！）
            alert("\u6dfb\u52a0\u6536\u85cf\u6ca1\u6709\u6210\u529f\uff0c\u53ef\u4f7f\u7528Ctrl+D\u7ee7\u7eed\u5b8c\u6210\u64cd\u4f5c\uff01");
        }
    }
}