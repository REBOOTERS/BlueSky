##插件介绍##
使用此插件，可以实现应用热部署更新，Android应用可实现Apk 下载更新，IOS应用可提示跳转至APP STORE 应用商品。

##实现原理##
使用插件，JS需按如下步骤实现：
1. 实现init方法 ，传递检测更新相关信息至原生层，原生层调用检测接口，根据检测结果返回相应信息。
2. 根据返回信息，如果是二级制APP 更新，需要实现update 方法，传递update 指令至原生层，原生层根据指令会执行下载APK（Android）或跳转至APP STORE (IOS)
3. 根据返回信息，**热部署非强制更新**时，需实现redirect 方法，传递redirect 指令至原生层，实现重定向操作。

##接口设计##

根据Web层传递的**url接口地址**实现更新检测

####请求参数####
 |参数|类型|说明|
|:------|:------------:|:----:|
|deviceAppVersion|String|当前应用的二进制版本|
|deviceDeployVersion|String|当前应用的热部署版本，若没有进行过热部署，该参数不提供|
|devicePlatform|String|设备平台名称，一般为 "android" 或 "ios"|
|channelTag|String|渠道名称|


####返回参数（json结构）：####

```
{
"stateCode":0  响应状态码
" message(?) "："" 响应信息，一般为错误信息，成功可留空
"data": 响应的实际数据
{
    msg(?): -无可用更新返回具体原因（如“已是最新”，“版本不符合” 等信息）,updateAvailable 为 true时，可以不提供
    updateAvailable:  - 是否有可用的更新
    update(?): {          - 更新信息，updateAvailable属性为 true，则必须提供该数据
        deploy :        - true 热部署更新，false 二进制APP 更新
        version:        - 要更新的版本号
        force:           - 是否强制更新，true 为是
        url:               - 更新包的下载地址（二进制制更新时Android为APK 下载地址，IOS 为APP STORE 地址，地址内容：
                              打开iTunes，找到目标应用程序，在应用程序的logo处点击右键，就会弹出“拷贝链接”的选项，拷贝即可）
        updatInfo:     - 二进制更新时提供更新信息
    }
}

}
```

如下图所示


 
 
 

##流程综述##

1. Web层调用插件时，传递用于检测更新的**checkUrl,channle 和 Header 信息**, 原生层请求url后，
      如果需要更新且为二进制更新，将更新信息返回到Web层，如果是热部署更新，则直接进行下载、解压等步骤。
2. Web层返回是否进行更新操作的指令，原生层根据指令进行APP更新流程。
  



###流程图###

```flow
st=>start: 初始化
e=>end: 结束
e1=>end: 结束
e2=>end: 结束
op0=>operation: 插件execute 执行init，接收checkUrl,channle 和 header 参数
op1=>operation: 检测是否需要重定向,如果需要则重定向
op2=>operation: 返回更新信息至Web层
op3=>operation: 热部署包下载、解压缩覆盖目标文件夹。
op4=>operation: 成功后，返回成功信息至Web层
op5=>operation: Web层返回确认下载的指令，进行APP下载操作，并提示用户安装。
op6=>operation: 进行重定向
cond=>condition: 检测是否需要更新?
cond2=>condition: deploy=false,需要进行APP更新
cond3=>condition: force=true,需要进行重定向
cond4=>condition: Web 层发送redirect指令，确定要重定向
st->op1->op0->cond
cond(yes)->op2->cond2
cond(no)->e1
cond2(yes)->op5->e
cond2(no)->op3->op4->cond3
cond3(yes)->op6->e2
cond3(no)->cond4
cond4(yes)->op6
cond4(no)->e2
```

###JS 需要实现###

JS 需要实现的三个方法：

* 初始化检测完成后，需要Web层传递checkUrl,channel 和 header 

```
init(String checkUrl,String channel,Object requestHeaders)
```

检测完成后，如果是二进制APP更新，会返回更新信息

callbackContext.success(String info);

* Web层根据返回的更新信息，提示用户更新，根据用户选择结果，告知是否更新

```
update();
```

当这个方法发生，Android就会开始APK 下载过程，IOS 就会跳转到APP STORE.

* 热部署更新时，Web层如果明确告知重定向，那么需要实现重定向

```
redirect();
```






