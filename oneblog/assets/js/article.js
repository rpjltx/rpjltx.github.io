$(function () {
	$("h4").each(function(){
		$("h4").css("color",function(){
			return "#"+(~~(Math.random()*(1<<24))).toString(16);
		})
	})
})
