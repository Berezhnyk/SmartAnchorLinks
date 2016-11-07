# SmartAnchorLinks
## How to use:

Inctude the SmartAnchorLinks:
```html
<script src="https://raw.githubusercontent.com/Berezhnyk/SmartAnchorLinks/master/js/SmartAnchorLinks.js"></script>
```

Prepare your page selecors:
```javascript
var pages = [$('#page1'),$('#page2'),$('#page3'),$('#page4'),$('#page5')];
```

Create instance of SmartAnchorLinks on document ready:
```javascript
$(document).ready(function () {
  new SmartAnchorLinks({
    selectors:pages
  });
});
```
See the [demo](https://berezhnyk.github.io/SmartAnchorLinks)
