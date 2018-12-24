
$(".listpage2") .not(":eq(0)") .hide();
$(".list_nav li").click(function(){
	if($(".listpage2").eq($(this) .index()).css("display")=="none"){
		$(".listpage2") .hide();
		$(".listpage2").eq($(this) .index()).show();
		$(".list_nav li").removeClass("li_dj");	
		$(".list_nav li").eq($(this).index()).addClass("li_dj");
	}else{
		
	}
});


