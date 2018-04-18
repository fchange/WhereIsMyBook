'use strict';

var AV = require('leancloud-storage');
var { Query, User } = AV;

// LeanCloud - 文件
// https://leancloud.cn/docs/leanstorage_guide-js.html#文件
var file = $('#inputFile')[0].files[0];
var name = file.name;
var avFile = new AV.File(name, file);

// LeanCloud - 对象
// https://leancloud.cn/docs/leanstorage_guide-js.html#数据类型
function seveShangP(){
    var product = new Product();
    product.set('title', title);
    product.set('price', price);
    product.set('description', description);
    product.set('owner', AV.User.current());
    product.set('image', avFile);
    product.save().then( null, () => {
        alert(JSON.stringify(error));
    });
}