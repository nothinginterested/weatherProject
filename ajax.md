# ajax

> var xhr=new XMLHttpRequest()
> xhr.open("get",url,false)
> xhr.send(null)//这里有时候要填null

> 200 Http请求成功的标志  
> 304 请求的资源没有被修改 可以直接访问
-------------------------------

url的查询字符串要满足特定的格式 用<strong>encodeURIComponent</strong>函数

在onreadystatechange（）函数里判断readystate值是否等于四。接着在判断statue的值 最后返回的内容在XHMLHttpResquest里的responseText  
-------------------------------------  
> 本次调用一个api来练习AJAX的操作，采用原生的JS与JQ来写

