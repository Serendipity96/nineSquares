
var emmm;
function onClick() {
	//多次执行
	emmm = setInterval("startChangeColor()", 1500);

}

function startChangeColor() {
	var div_group = document.getElementById("div_group");
	var divs = div_group.getElementsByTagName("div");//9（0-8）

	var arr = [];
	var i, j, temp, flag;

	//选格子
	for (i = 0; i < 3; i++) {
		flag = 0;
		temp = Math.floor(Math.random() * 9);
		for (j = 0; j < i; j++) {
			if (arr[j] === temp) {
				flag = 1;
				break;
			}
		}
		if (flag == 1) {
			i--;
		}
		else {
			arr[i] = temp;
		}
	}

	//涂颜色
	var newColor = randomColor();//函数之间嵌套使用
	for (i = 0; i < 3; i++) {
		divs[arr[i]].style.backgroundColor = newColor[i];//变成div元素
	}

	setTimeout("clearColor()", 750);
}

//选颜色
function randomColor() {
	var colorStr = [];
	var i, j;
	for (i = 0; i < 3; i++) {
		var a;
		a = parseInt(Math.random() * 0xffffff).toString(16);//255*255*255
		var len = a.length;
		for (j = 0; j < 6 - len; j++) {
			a = '0' + a;
		}
		colorStr[i] = '#' + a;
	}
	return colorStr;

}

//清除一次颜色
function clearColor() {
	var div_group = document.getElementById("div_group");
	var divs = div_group.getElementsByTagName("div");//9（0-8）
	//恢复颜色
	for (var i = 0; i < 9; i++) {
		divs[i].style.backgroundColor = '#ff9900';
	}
}

//重置全部颜色
function resetColor() {
	clearInterval(emmm);
}

