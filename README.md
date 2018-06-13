## Common Style

[访问中文版](https://github.com/AlanZou007/air-css/blob/master/zh-CN.md)

air-css includes some commonly used styles by default, and can be used directly with className.

### Ellipsis Text
When the text content exceeds the maximum width of the container, the extra text is automatically ellipsis.
```html
<div class='air-ellipsis>这个一段宽度限制250px的文字， 后台的内容会省略</div>
```

### 1px border
Add a 1px border (hairline) under the Retina screen to the element, based on the pseudo-class transform.

```html
<!-- 上边框 -->
<div class="air-hairline--top"></div>

<!-- 下边框 -->
<div class="air-hairline--bottom"></div>

<!-- 左边框 -->
<div class="air-hairline--left"></div>

<!-- 右边框 -->
<div class="air-hairline--right"></div>

<!-- 上下边框 -->
<div class="air-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="air-hairline--surround"></div>
```

### animation
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