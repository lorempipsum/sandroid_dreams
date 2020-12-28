---
slug: "/blog/top-tips"
title: "Tips From Building This Site"
---


## CSS for lightbox images

Center an image horizontally and vertically:
```CSS
.centerImage {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3D(-50%, -50%, 0);
}
```

Size an image appropriately on both desktop and mobile:
(I originally did width: 85vw which looked nice on desktop but poor on mobile)
```CSS
.appropriateSize {
  max-height: 90vh;
  height: auto;
  max-width: 100vw;
  width: min(100vw, 1800px);
}
```

## Gatsby stuff

The deploy script starts with gatsby clean, since gatsby has a bug where it won't
prefix image paths properly if you run gatsby develop before deploying.

```Javascript
    "deploy": "gatsby clean && gatsby build --prefix-paths && gh-pages -d public -b master"
```
