// JavaScript Document
function writexy(evt){
	var mousePos = getMousePos(canvas2, evt);
	//alert(mousePos.x + ',' + mousePos.y);
	//文字
	ctx2.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);//显示区域
	canvas2.height = canvas2.offsetHeight;
	canvas2.width = canvas2.offsetWidth;  
	
	var fx = parseInt(mousePos.x/((canvas2.offsetWidth-100)/ks)) + endid - ks;
	
	console.log(arr[fx]);
	
	/*var fx    = parseInt((mousePos.x-60)/(720/ks))+startid;
	var maxfx = (ks+startid);
	var minfx = startid;*/
/*	if(fx>=minfx&&fx<maxfx){
		ctx2.save(); 
		ctx2.beginPath(); // 开始路径绘制
		ctx2.font ="12px Arial";
		ctx2.fillStyle='#333';
		ctx2.textAlign='right';
		//'坐标：'+mousePos.x + ',' + mousePos.y +;
		percents=((data[fx][5]-data[fx][1])/data[fx][1])*100;
		ctx2.fillText('ID:'+fx+'日期:' + data[fx][0] +' 昨收:'+data[fx][1]+' 開盤:'+data[fx][2]+' 收盤:'+data[fx][5]+' 最高:'+data[fx][3]+' 最低:'+data[fx][4]+' 涨幅:'+percents.toFixed(2)+'%', 780,15);
		if(fx>=20){
			ctx2.textAlign='left';
			//ctx2.fillText(' ma5:'+getMa(data,fx).toFixed(2)+' ma10:'+getMa10(data,fx).toFixed(2)+' ma20:'+getMa20(data,fx).toFixed(2), 40,15);
			//ctx2.fillText(' k:'+data[fx][8]+' d:'+data[fx][9]+' j:'+data[fx][10], 40,15);
		}
		ctx2.restore();
	}*/
	/*//实时价格
	var fy = mousePos.y;
	ey=(height-low)/373;
	if(fy>=0&&fy<=393){
		ctx2.save(); 
		ctx2.beginPath(); // 开始路径绘制
		ctx2.textAlign='left';
		context.textBaseline = 'middle';
		ctx2.fillText((low+ey*(393-mousePos.y)).toFixed(2), 0,fy-5);
		ctx2.restore();
	}*/
	//y
	ctx2.save(); 
	ctx2.beginPath(); // 开始路径绘制
	ctx2.translate(0.5,0.5); 
	ctx2.moveTo(0, mousePos.y); // 设置路径起点，坐标为(20,20)
	ctx2.lineTo(canvas2.offsetWidth-100, mousePos.y); // 绘制一条到(200,20)的直线
	ctx2.lineWidth = 1.0; // 设置线宽
	ctx2.strokeStyle = "#000"; // 设置线的颜色
	ctx2.stroke(); // 进行线的着色，这时整条线才变得可见
	ctx2.restore(); 
	//x
	ctx2.save(); 
	ctx2.beginPath(); // 开始路径绘制
	ctx2.translate(0.5,0.5); 
	if((mousePos.x)>(canvas2.offsetWidth-100)){
		mousePos.x = canvas2.offsetWidth-100;
	}else{
		ctx2.moveTo(mousePos.x, 0); // 设置路径起点，坐标为(20,20)
		ctx2.lineTo(mousePos.x, canvas2.height); // 绘制一条到(200,20)的直线
	}
	ctx2.lineWidth = 1.0; // 设置线宽
	ctx2.strokeStyle = "#000"; // 设置线的颜色
	ctx2.stroke(); // 进行线的着色，这时整条线才变得可见
	ctx2.restore(); 
	
	//以下是分割線
	/*ctx2.save(); 
	ctx2.beginPath(); // 开始路径绘制
	ctx2.translate(0.5,0.5); 
	ctx2.moveTo(0, 418); // 设置路径起点，坐标为(20,20)
	ctx2.lineTo(800, 418); // 绘制一条到(200,20)的直线
	ctx2.lineWidth = 1.0; // 设置线宽
	ctx2.strokeStyle = "#000"; // 设置线的颜色
	ctx2.stroke(); // 进行线的着色，这时整条线才变得可见
	ctx2.restore();	*/
}
function writeout(){
	ctx2.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight);//显示区域
	//以下是分割線
	/*ctx2.save(); 
	ctx2.beginPath(); // 开始路径绘制
	ctx2.translate(0.5,0.5); 
	ctx2.moveTo(0, 418); // 设置路径起点，坐标为(20,20)
	ctx2.lineTo(800, 418); // 绘制一条到(200,20)的直线
	ctx2.lineWidth = 1.0; // 设置线宽
	ctx2.strokeStyle = "#000"; // 设置线的颜色
	ctx2.stroke(); // 进行线的着色，这时整条线才变得可见
	ctx2.restore();	*/
}
//Get Mouse Position 
function getMousePos(cvas, evt) {
	var rect = cvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left * (cvas.width / rect.width),
		y: evt.clientY - rect.top * (cvas.height / rect.height)
	}
}
