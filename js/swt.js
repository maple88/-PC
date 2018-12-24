
//商务通轨迹
function online(){
    var e = 'wap';
    if(arguments.length == 1){
        e = arguments[0];
    }
    if(typeof openZoosUrl == 'undefined'){
        var url = '//pyt.zoosnet.net/LR/Chatpre.aspx?id=PYT45400899&lng=cn';//这里修改为自己商务通对话窗口的地址
        url = url + '&e=' + escape(e) + '&p=' + encodeURIComponent(location.href);
        try{
            window.open(url, 'new' + Math.round( Math.random() * 1000000 ));
        }catch(ex){
            window.location.href=url;
        }
        return false;
    }else{
        openZoosUrl('chatwin','&e=' + escape(e));
    }
}

//底部按钮
//document.writeln('<script src="/public2/js/bot.js"></'+'script>');
document.writeln('\
<style type="text/css">\
#lt_footer_swt_bg{ height:.85rem; overflow:hidden; clear:both;}\
#lt_footer_swt_box{ z-index:2; position: fixed; left:0; bottom:0; width:100%; z-index: 999999;}\
#lt_footer_swt_box .lt_footer_in{height:.85rem;width:100%; max-width:640px; margin:0 auto; position:relative;}\
#lt_footer_swt_box .lt_footer_l{ height:.85rem; float:left; overflow:hidden;}\
#lt_footer_swt_box .lt_footer_l img{ height:.85rem; float:left;}\
#lt_footer_swt_box .lt_footer_l1{ width:1.08rem;}\
#lt_footer_swt_box .lt_footer_l3{ width:2.08rem; float:right;}\
#lt_footer_swt_box .lt_footer_l4{ width:2.08rem; float:right;}\
#lt_footer_swt_box .lt_footer_l2{ height:1.15rem; width:1.17rem; float:inherit; position:absolute; left:1.08rem; bottom:0;}\
#lt_footer_swt_box .lt_footer_l2 img{ height:1.15rem;}\
</style>\
<div id="lt_footer_swt_bg"></div>\
<div id="lt_footer_swt_box">\
	<div class="lt_footer_in">\
		<div class="lt_footer_l lt_footer_l1">\
			<a href="/"><img src="/public2/images/bot_pic1.png" /></a>\
		</div>\
		<div class="lt_footer_l lt_footer_l2">\
			<a href="http://m.showfeel.cn/zt/xxfcp/?ltLyId=手机站底部按钮"><img src="/public2/images/bot_pic2.png" /></a>\
		</div>\
		<div class="lt_footer_l lt_footer_l3">\
			<a href="javascript:online(\'点击来源：手机版底部在线咨询按钮\')"><img src="/public2/images/bot_pic4.png" /></a>\
		</div>\
		<div class="lt_footer_l lt_footer_l4">\
			<a href="tel:075536819999"><img src="/public2/images/bot_pic3.png" /></a>\
		</div>\
	</div>\
</div>\
');


//开业记念包
//var rstr='%3Cstyle%20type%3D%22text/css%22%3E%0A%23ltswt_right_box%7B%20height%3Aauto%3B%20display%3Anone%3B%20width%3A50%25%3Bmax-width%3A380px%3B%20position%3Afixed%3B%20right%3A0%3B%20bottom%3A10%25%3B%20z-index%3A214747%3Bfont-family%3A%22Microsoft%20YaHei%22%2C%20%22%u5FAE%u8F6F%u96C5%u9ED1%22%2C%20%22%u5B8B%u4F53%22%2C%20%22SimSun%22%2C%20%22Arial%22%3B%7D%0A%23ltswt_right_box%20a%20img%7B%20width%3A100%25%3B%7D%0A%3C/style%3E%0A%3Cdiv%20id%3D%22ltswt_right_box%22%3E%0A%09%3Ca%20href%3D%22/%22%3E%0A%09%09%3Cimg%20src%3D%22/public2/images/r_pic.png%22%20/%3E%0A%09%3C/a%3E%0A%3C/div%3E';
//document.writeln(unescape(rstr));

document.writeln('\
<style>\
#ltswt_right_box{ height:auto; display:none; width:50%;max-width:380px; position:fixed; right:0; bottom:10%; z-index:214747;font-family:"Microsoft YaHei", "微软雅黑", "宋体", "SimSun", "Arial";}\
#ltswt_right_box a img{ width:100%;}\
</style>\
<div id="ltswt_right_box">\
	<a href="/">\
		<img src="/public2/images/r_pic.png" />\
	</a>\
</div>\
');


//弹窗
//var cstr='%3Cstyle%20type%3D%22text/css%22%3E%0A.lt_swt_center_box%2C.lt_swt_center_box%20*%7Bbox-sizing%3Acontent-box%3B%7D%0A.lt_swt_center_box%7B%20height%3Aauto%3B%20overflow%3Ahidden%3B%20width%3A66%25%3B%20max-width%3A482px%3B%20z-index%3A%2021474836%3B%20position%3A%20fixed%20%21important%3B%20top%3A20%25%3B%20left%3A50%25%3B%20margin-left%3A-32%25%3B%20font-family%3A%22Microsoft%20YaHei%22%2C%20%22%u5FAE%u8F6F%u96C5%u9ED1%22%2C%20%22%u5B8B%u4F53%22%2C%20%22SimSun%22%2C%20%22Arial%22%3Bopacity%3A0%3B%20visibility%3Ahidden%3Btransform%3Ascale%280%2C0%29%3B-ms-transform%3Ascale%280%2C0%29%3B-webkit-transform%3Ascale%280%2C0%29%3B-o-transform%3Ascale%280%2C0%29%3B-moz-transform%3Ascale%280%2C0%29%3Btransition%3Aall%20.3s%20ease-out%3Bmoz-transition%3Aall%20.3s%20ease-in-out%3B-webkit-transition%3Aall%20.3s%20ease-in-out%3B-o-transition%3Aall%20.3s%20ease-in-out%3B%7D%0A.lt_swt_center_box.hover%7Bopacity%3A1%3B%20visibility%3Avisible%3B%20transform%3Ascale%281%2C1%29%3B-ms-transform%3Ascale%281%2C1%29%3B-webkit-transform%3Ascale%281%2C1%29%3B-o-transform%3Ascale%281%2C1%29%3B-moz-transform%3Ascale%281%2C1%29%3Btransition%3Aall%20.3s%20ease-out%3Bmoz-transition%3Aall%20.3s%20ease-in-out%3B-webkit-transition%3Aall%20.3s%20ease-in-out%3B-o-transition%3Aall%20.3s%20ease-in-out%3B%7D%0A.lt_swt_center_box%20.ltscb_in%7Bposition%3Arelative%3B%7D%0A.lt_swt_center_box%20.ltscb_close%7B%20height%3A40px%3B%20width%3A40px%3B%20overflow%3Ahidden%3B%20position%3Aabsolute%3B%20right%3A0%3B%20top%3A0%3B%20z-index%3A2%3B%7D%0A.lt_swt_center_box%20.ltscb_con%20img%7B%20width%3A98%25%3B%20float%3Aleft%3B%7D%0A@media%20screen%20and%20%28min-width%3A640px%29%20%7B%0A.lt_swt_center_box%7B%20top%3A50%25%3B%20margin-left%3A-241px%3Bmargin-top%3A-180px%3B%7D%0A%7D%0A%3C/style%3E%0A%3Cdiv%20class%3D%22lt_swt_center_box%22%20id%3D%22lt_swt_center_box%22%3E%0A%09%3Cdiv%20class%3D%22ltscb_in%22%3E%0A%09%09%3Cdiv%20class%3D%22ltscb_close%22%20onClick%3D%22hideswt%28%29%22%3E%3C/div%3E%0A%09%09%3Cdiv%20class%3D%22ltscb_con%22%3E%0A%09%09%09%3Ca%20href%3D%22/%22%3E%3Cimg%20src%3D%22/public2/images/swt_cen.png%22%20/%3E%3C/a%3E%09%09%09%0A%09%09%3C/div%3E%0A%09%3C/div%3E%0A%3C/div%3E';
//document.writeln(unescape(cstr));

document.writeln('\
<style>\
.lt_swt_center_box,.lt_swt_center_box *{box-sizing:content-box;}\
.lt_swt_center_box{ height:auto; overflow:hidden; width:66%; max-width:482px; z-index: 21474836; position: fixed !important; top:20%; left:50%; margin-left:-32%; font-family:"Microsoft YaHei", "微软雅黑", "宋体", "SimSun", "Arial";opacity:0; visibility:hidden;transform:scale(0,0);-ms-transform:scale(0,0);-webkit-transform:scale(0,0);-o-transform:scale(0,0);-moz-transform:scale(0,0);transition:all .3s ease-out;moz-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;}\
.lt_swt_center_box.hover{opacity:1; visibility:visible; transform:scale(1,1);-ms-transform:scale(1,1);-webkit-transform:scale(1,1);-o-transform:scale(1,1);-moz-transform:scale(1,1);transition:all .3s ease-out;moz-transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out;}\
.lt_swt_center_box .ltscb_in{position:relative;}\
.lt_swt_center_box .ltscb_close{ height:40px; width:40px; overflow:hidden; position:absolute; right:0; top:0; z-index:2;}\
.lt_swt_center_box .ltscb_con img{ width:98%; float:left;}\
@media screen and (min-width:640px) {\
.lt_swt_center_box{ top:50%; margin-left:-241px;margin-top:-180px;}\
}\
</style>\
<div class="lt_swt_center_box" id="lt_swt_center_box">\
	<div class="ltscb_in">\
		<div class="ltscb_close" onClick="hideswt()"></div>\
		<div class="ltscb_con">\
			<a href="javascript:online(\'点击来源：手机版弹窗咨询按钮\')"><img src="/public2/images/swt_cen.png" /></a>\
		</div>\
	</div>\
</div>\
');


showzx();

function showzx(){
    setTimeout(showYQ,3000)
}

function showYQ(){
    var obj=_id("lt_swt_center_box");
    addClass(obj,"hover");
}

function hideswt(){
    var obj=_id("lt_swt_center_box");
    removeClass(obj,"hover");
    showSWT_time=setTimeout("showYQ()",30000);
}

function hasClass(obj, cls) {  
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  

function addClass(obj, cls) {  
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;  
}  



function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
} 

function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
} 

function _id(id){
    return document.getElementById(id);
}

