if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('../index.html');
}
;
//require("./superslide/jquery.SuperSlide.2.1.2.js");
//require("./../css/style.css");
require("./../sass/style.scss");
//require("./../sass/style.less");