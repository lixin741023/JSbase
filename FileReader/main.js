// 关联：File、Blob

// FileReader 对象允许Web应用程序 异步 读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，
// 使用 File 或 Blob 对象指定要读取的文件或数据。

// 属性：
// FileReader.error -> 在读取时发生的错误

// FileReader.readyState -> 表示 FileReader 状态的数字。取值如下：
// <|EMPTY	  0	还没有加载任何数据.
// <|LOADING	1	数据正在被加载.
// <|DONE	    2	已完成全部的读取请求.

// FileReader.result -> 文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪个方法来启动读取操作。


// 读取方法：
// readAsArrayBuffer() -> 异步按字节读取文件内容，结果用 ArrayBuffer 对象表示

// readAsBinaryString() -> 异步按字节读取文件内容，结果为文件的二进制串

// readAsDataURL() -> 异步读取文件内容，结果用data:url的字符串形式表示
// <|会把文件结果进行 base64 编码后输出，常用于本地图片预览。(Data URL 直接存储图片base64编码后的数据，所以对于大图片有点儿长)
// (关于base64，详情请见文件夹：base64)

// readAsText() -> 异步按字符读取文件内容，结果用字符串形式表示
// <|读取 txt 文件常用
