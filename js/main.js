// var关键字进行显式申明的变量是做为局部变量，
// 而没有用var关键字，使用直接赋值方式声明的是全局变量。
// 当我们使用访问一个没有声明的变量时，JS会报错。而当我们给一个没有声明的变量赋值时，
// JS不会报错，相反它会认为我们是要隐式申明一个全局变量，这一点一定要注意。　
//因此在程序设计中我们需要考虑如何合理声明变量，这样既减小了不必要的内存开销，
//同时能很大程度地避免变量重复定义而覆盖先前定义的变量所造成的Debug麻烦。　
//https://zhidao.baidu.com/question/554888605.html

var emmm;
function onClick(){
	//多次执行
	emmm = setInterval("startChangeColor()",1000);
	
}
	
function startChangeColor() {
	var div_group = document.getElementById("div_group");
	var divs = div_group.getElementsByTagName("div");//9（0-8）
	var arr = [];
	var i, j, temp, flag;
	var min = 1;
	var max = divs.length;

	//选格子
	for (i = 0; i < 3; i++) {
		flag = 0;
		temp = Math.floor(Math.random() * (max - min + 1)) + min;/*???*/
		for (j = 0; j < i; j++) {
			if (arr[j] === temp) {
				// console.log(j===temp);
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
		// console.log(arr[i]);
		divs[arr[i] - 1].style.backgroundColor = newColor[i];//变成div元素
		// console.log(newColor[i]);
		//	arr[i].style.background-color = newColor[i];
	}
}

//选颜色
function randomColor() {
	var colorStr = [];
	var i;
	for (i = 0; i < 3; i++) {
		var a;
		a = parseInt(Math.random() * 0xffffff).toString(16);//255*255*255
		colorStr[i] = '#' + a;
	}
	return colorStr;
}



//重置全部颜色
function resetColor(){
	var div_group = document.getElementById("div_group");
	var divs = div_group.getElementsByTagName("div");//9（0-8）
	//恢复颜色
	for (var i = 0; i < 9; i++) {
		divs[i].style.backgroundColor = '#ff9900';
	}
	clearInterval(emmm);
}