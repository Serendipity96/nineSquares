function onClick(){
	var div_group = document.getElementById("div_group");
	var divs = div_group.getElementsByTagName("div");//9

    var arr = [];
	var i,j,temp,flag;
    var min = 1;
    var max = divs.length;

	for(i = 0;i<3;i++){
		flag = 0;
		temp = Math.floor(Math.random() * (max - min + 1)) + min;/*???*/
		for(j = 0;j<i;j++){
			if (arr[j] === temp) {
				flag = 1;
				break;
			}
		}
		if (flag == 1) {
			i--;
		}
		else{
			arr[i] = temp;
		}
	}
	for( i = 0 ;i<3;i++){
		console.log(arr[i]);
	}

}
function randomColor(){
    var colorStr = [];
    var i;
    for(i = 0;i<3;i++){
        var a,b,c;
        a = parseInt(Math.random()*255).toString(16);
        b = parseInt(Math.random()*255).toString(16);
        c = parseInt(Math.random()*255).toString(16);
        colorStr[i] = '#'+a+b+c;
    }
    console.log(colorStr);
}


    // var a = parseInt(255 - Math.random() * 255).toString(16);为什么？
