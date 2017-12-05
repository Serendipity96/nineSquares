# nineSquares
 
Code步骤
1.	为已经写好的HTML&CSS添加一个外联js文件  
2.	为页面两个按钮，分别加上一个click事件  
3.	获取九宫格中的小格子DOM  
注意：getElementsByTagName，获取到的是div的一个数组，整个数组都是div对象。
4.	随机取得小格子中的3个格子  
Math.floor（）向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。  
要注意负数的向下取整    
document.write(Math.floor(0.60))   //0  
document.write(Math.floor(0.40))   //0  
document.write(Math.floor(5))      //5  
document.write(Math.floor(5.1))    //5  
document.write(Math.floor(-5.1))   //-6  
document.write(Math.floor(-5.9))   //-6   
Math. random() 方法可返回介于 0 ~ 1 之间的一个随机数。Eg：0.04016428138740413。  
这里有九个格子，所以乘9。   
内层的for循环用来查重，如果随机获取的temp和数组里的数重复，flag置为1，当flag==1，那么i--，重新获取随机数，使得最后数组里存的是3个不同的数。  
5.	随机得3个颜色值   
16进制颜色的取值范围是0~ffffff，JavaScript中十六进制表示前面要加前缀0x或0X。  
ParseInt（），字符串转为整数的时候，是一个个字符依次转换，如果遇到不能转为数字的字符，就不再进行下去，返回已经转好的部分。   
关于进制，parseInt（）可以看下面的链接http://javascript.ruanyifeng.com/grammar/number.html#toc11。   
在调试过程中发现，有时候取出的并不是正好6位，比如#3df18，如果不是6位数字的，后面改变颜色的时候就会有bug，我们就在这做个判断，如果不是6位，那么就在这个值前加0，来补全6位。   
6.	将随机出来的颜色值分别添加到3个格子的样式上   
由于是startChangeColor（）函数中抽取的3个随机格子，那么在这里调用随机选的颜色，将颜色涂在这3个格子上。  
7.	利用setTimeout，setInterval和cleatInterval，在start按钮的事件里添加定时或延迟执行的函数，在resset按钮的事件里添加取消定时或延迟执行的函数。   
8.	多次执行代码，发现bug并改正  
这里关于数字的判断，颜色的判断，setInterval，setTimeout时间的设定，都是多次执行后优化出来的。  

