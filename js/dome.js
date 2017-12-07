	window.onload=function() {
		var li=document.getElementsByTagName("li");
		for (var i = 0; i < li.length; i++) {
			li[i].i=i
			li[i].onmouseover=function() {
				this.className="lihover";    //为点击的li添加类名
				var h=(this.i) * 30  + 40;                        //点击的li上边距离顶部的高度
				var y=this.getElementsByTagName("div")[0].offsetHeight;    //对应点击li的悬浮层的上边距离的高度
				var h0=this.getElementsByTagName("div")[0].style.top+y;    //对应点击li的悬浮层的自身高度加上y（就是下边距离顶部的高度）
				if (h>h0) {                              
					this.getElementsByTagName("div")[0].style.top=h+"px";     
				};
			}
			li[i].onmouseout=function () {
				this.className="";               //删除类名
			}
		};
	}
