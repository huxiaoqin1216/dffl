// JavaScript Document
var sContent = "<div><img src='img/about/map_phone.png'/><span>+(86) 21-51916238<br>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( SERVICE: 9:00-18:00 )</span></div><div><img src='img/about/map_email.png'/><span>info@chflbank.com</span></div><div style='margin-top:18px'><img src='img/about/map_zuobiao.png'/><span>上海浦东新区浦东南路1289号<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;华融大厦501室</span></div>";
	
	
	// 定义自定义覆盖物的构造函数   
	function SquareOverlay(center, length, color){     
	 this._center = center;     
	 this._length = length;     
	 this._color = color;     
	}     
	// 继承API的BMap.Overlay     
	SquareOverlay.prototype = new BMap.Overlay(); 
	SquareOverlay.prototype.initialize = function(map){   
	// 保存map对象实例    
	 this._map = map; 
	 // 创建div元素，作为自定义覆盖物的容器    
	 var div = document.createElement("div");     
	 div.style.position = "absolute";         
	 // 可以根据参数设置元素外观    
	 //div.style.width = 270 + "px";     
	// div.style.height =300 + "px";   
	 div.className="contact_map";
	  div.style.padding =45 + "px"; 
	  div.style.paddingTop=100+'px';
	  div.style.width ='231px';
	  div.style.height='154px';
	 div.style.background = 'url(img/about/map_img.png) no-repeat'; 
	 div.style.borderRadius="15px";
	 div.innerHTML=sContent;
	// 将div添加到覆盖物容器中    
	 map.getPanes().markerPane.appendChild(div);       
	// 保存div实例    
	 this._div = div; 
	 
	// 需要将div元素作为方法的返回值，当调用该覆盖物的show、    
	// hide方法，或者对覆盖物进行移除时，API都将操作此元素。    
	 return div;  
	 
	}  
	
	
	SquareOverlay.prototype.draw = function(){     
	// 根据地理坐标转换为像素坐标，并设置给容器     
	 var position = this._map.pointToOverlayPixel(this._center);     
	 this._div.style.left = position.x -235+ "px";     
	 this._div.style.top = position.y - 260 + "px";     
	}  
	
		// 百度地图API功能
		
		var map = new BMap.Map("allmap");
		var point = new BMap.Point(116.331398,39.897445);
		//offset:new BMap.Size(10,25),   
		//var infoWindow = new BMap.InfoWindow(sContent);
		map.centerAndZoom(point,12);
		map.setMapStyle({style:'grayscale'});
		
		// 创建地址解析器实例
		var myGeo = new BMap.Geocoder();
		// 将地址解析结果显示在地图上,并调整地图视野
		myGeo.getPoint("上海浦东新区浦东南路1289号华融大厦", function(point){
			if (point) {
				map.centerAndZoom(point, 16);
					var marker = new BMap.Marker(point);  // 创建标注
		//map.addOverlay(marker);               // 将标注添加到地图中
		//marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	
				//map.addOverlay(marker);//取消红色标注
				var mySquare = new SquareOverlay(map.getCenter(), 100, "#fff");     
				map.addOverlay(mySquare);  
	
				//marker.openInfoWindow(infoWindow,map.getCenter());
			}else{
				alert("您选择地址没有解析到结果!");
			}
		}, "上海市");