# SmartAnchorLinks
## How to use:

Inctude the SmartAnchorLinks:
```sh
<script src="https://raw.githubusercontent.com/Berezhnyk/SmartAnchorLinks/master/js/SmartAnchorLinks.js"></script>
```

Prepare your page selecors:
```sh
var pages = [$('#page1'),$('#page2'),$('#page3'),$('#page4'),$('#page5')];
```

Create instance of SmartAnchorLinks on document ready:
```sh
$(document).ready(function () {
  new SmartAnchorLinks({
    selectors:pages
  });
});
```
See the [demo](https://berezhnyk.github.io/SmartAnchorLinks)
