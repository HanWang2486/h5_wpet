$.ajax({
	url:"html/include/header.html",
	success:function(data){
		$(".header").html(data)
	}
})

$.ajax({
	url:"html/include/footer.html",
	success:function(data){
		$(".footer").html(data)
	}
})
