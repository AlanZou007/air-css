## Common Style

[访问中文版](https://github.com/AlanZou007/air-css/blob/master/zh-CN.md)

air-css includes some commonly used styles by default, and can be used directly with className.

### Ellipsis Text
When the text content exceeds the maximum width of the container, the extra text is automatically omitted.
```html
<div class='air-ellipsis>This paragraph is limited to 250px text, the background content will be omitted</div>
```

### 1px border
Add a 1px border (hairline) under the Retina screen to the element, based on the pseudo-class transform.

```html
<!-- top -->
<div class="air-hairline--top"></div>

<!-- bottom -->
<div class="air-hairline--bottom"></div>

<!-- left -->
<div class="air-hairline--left"></div>

<!-- right -->
<div class="air-hairline--right"></div>

<!-- top and bottom -->
<div class="air-hairline--top-bottom"></div>

<!-- surround -->
<div class="air-hairline--surround"></div>
```

### animation
```html
<!-- fade -->
<transition name="air-fade">
  <div v-show="visible">Fade</div>
</transition>

<!-- slide-botom -->
<transition name="air-slide-bottom">
  <div v-show="visible">Fade</div>
</transition>
```