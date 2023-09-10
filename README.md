# ripple.js
Extension of @luncheon/ripplet.js. Makes every element with the "ripple" attribute ripple!

## Usage

### The easy way

I combined both ripplet.js and ripple.js into one file (r.js) to make everything easier:

```html
<script src="r.js"></script>
<button ripple>Click Me</button>
```

Note: `r-disabled.js` disables ripple on disabled buttons.

**[NEW] Or use the CDN**

`<script src="https://cdn.jsdelivr.net/gh/fakerybakery/ripple.js/r.js"></script>`

`<script src="https://cdn.jsdelivr.net/gh/fakerybakery/ripple.js/r-disabled.js"></script>`

### The hard way

```html
<script src="ripplet.js"></script>
<script src="ripple.min.js"></script>
<button ripple>Click Me</button>
```

## Important!

(If you're using **The hard way**): Make sure you've first included [ripplet.js](https://github.com/luncheon/ripplet.js/) before including ripple.js!

## License

(Modified) Unlicense. Changes: remove link to website, add optional attribution
