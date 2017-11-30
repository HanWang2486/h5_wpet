//定义区域菜单显示隐藏状态
var t = 1;
$(".district").hover(function(){
	var val = $(this).children("i").html()
	console.log(val);
	var data="";
	var html1 = ``;
	var html2 = ``;
	$(".dis").show()
	$.ajax({
		//获取所有省（直辖市）级行政区
		url:"http://route.showapi.com/1149-1?showapi_appid=48136&showapi_sign=7dbf58a21af246f79047cb935fbbb286&level=1",
		success:function(responseData){
			$(responseData.showapi_res_body.data).each(function(index,curr){
				html1+=`<span class="${curr.provinceId}">${curr.simpleName}</span>`
			})
		}
	}).done(function(){
		$.ajax({
			url:"http://route.showapi.com/1149-1?showapi_appid=48136&showapi_sign=7dbf58a21af246f79047cb935fbbb286&level=1&page=2",
			success:function(responseData){
				$(responseData.showapi_res_body.data).each(function(index,curr){
					html1+=`<span class="${curr.provinceId}">${curr.simpleName}</span>`
				})
			}
		}).done(function(){
			//显示到disList
			$(".disList").html(html1);
			$(".disList span").click(function(){
				$(".province").html(this)
				$(".city").html("请选择")
				$(".district i").html($(this).html())
				$.ajax({
					url:"http://route.showapi.com/1149-2?showapi_appid=48136&showapi_sign=7dbf58a21af246f79047cb935fbbb286&parentId="+this.className,
					success:function(data){
						$(data.showapi_res_body.data).each(function(index,curr){
							html2+=`<span>${curr.simpleName}</span>`
						})
						$(".disList").html(html2)
						$(".disList span").click(function(){
							$(".city").html(this)
							$(".dis").hide()
						})
					}
				})
			})
		})
	})

},function(){
	$(".dis").hide()
})