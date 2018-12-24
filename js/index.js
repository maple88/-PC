
$(function(){  
	var elmArr = [],  
		$win = $(window);  
	$(".visible").each(function(i,elm){  
		$(elm).data("ot",$(elm).offset().top);  
		elmArr.push(elm);  
	});  

	dealClass(1);  
	$win.on("scroll",dealClass);  

	function dealClass(isRemove){  
		var top = $win.height() + $win.scrollTop();  
		if(isRemove!=1) { //滚动页面时的判断，并添加class="visible" 
			for (var i = 0,$elem; i < elmArr.length; i++) {  
				$elem = $(elmArr[i]);  
				if ($elem.data("ot") <= top) {  
					$elem.addClass("visible");  
					elmArr.splice(i, 1);  
					--i;  
				}  
			}  
		}else{  //初始化页面时的判断，并删除class="visible" 
			for (var i = 0,$elem; i < elmArr.length; i++) {  
				$elem = $(elmArr[i]);  
				if ($elem.data("ot") >= top) {  
					$elem.removeClass("visible");  
				}  
			}  
		}  
	}  
})











