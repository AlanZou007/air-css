## 基础样式
air 中默认包含一些常用的样式， 可以直接通过className的方式使用。

### 文字省略
当文本内容超过容器最大宽度时， 自动省略多余的文本。

```html
    <div class='air-ellipsis>这个一段宽度限制250px的文字， 后台的内容会省略</div>
```

### 1px 边框
 为元素添加Retina屏幕下的1px边框（即 hairline）, 基于伪类transform实现。


```html
<!-- 上边框 -->
<div class="van-hairline--top"></div>

<!-- 下边框 -->
<div class="van-hairline--bottom"></div>

<!-- 左边框 -->
<div class="van-hairline--left"></div>

<!-- 右边框 -->
<div class="van-hairline--right"></div>

<!-- 上下边框 -->
<div class="van-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="van-hairline--surround"></div>
```

### 动画
```html
<!-- 淡入 -->
<transition name="air-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- 下滑 -->
<transition name="air-slide-bottom">
  <div v-show="visible">Fade</div>
</transition>
```
