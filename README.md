# Gulp

## Start

`npm i` - install dependencies

`gulp` - start gulp

`gulp build` - command for the production assembly of the project.

`gulp cache` - command to run after `gulp build`, if you need to upload new files to hosting without caching.

`gulp backend` - backend pack

`gulp zip` - packs project into zip

## Structure

```
├── src/
│   ├── js
│   │   ├── components
│   │   ├── vendor
│   │   ├── _vars.js
│   │   ├── _vendor.js
│   │   ├── _functions.js
│   │   ├── _components.js
│   │   └── main.js
│   ├── scss
│   │   ├── components
│   │   ├── mixins
│   │   ├── vendor
│   │   ├──  vendor.scss
│   │   ├──  _fonts.scss
│   │   ├──  _mixins.scss
│   │   ├──  _vars.scss
│   │   ├──  _settings.scss
│   │   └── main.scss
│   ├── partials
│   ├── img
│   │   └── svg
│   ├── resources
│   │   └── fonts
│   └── index.html
├── gulpfile.js
├── package.json
├── .editorconfig
├── .ecrc
├── .stylelintrc
└── README.md
```

1. [npm](#npm)
2. [HTML](#html)
3. [Fonts](#fonts)
4. [Images](#images)
5. [Modules](#modules)

## npm

`npm run code` - editor config check

## html

Use `@include('partials/filename.html')` to past html parts in main

If you need multipage site copy and rename __index.html__

## Fonts

1. Put files __woff2__ in folder __resources/fonts__
2. Use mixin `@font-face` in ___fonts.scss__
3. Use `<link preload>` in HTML

## Images

Any images, other then __favicon__ and __svg__ put in folder __img__.

Put __svg__ in folder __img/svg__, and use snippet `g-use`
If you need support __webp__ and __avif__ use snippet `g-picture`.

## Modules

### Burger menu

1. Use snippet `g-burger`
2. Add attribute `data-menu`
3. In scss use mixin `burger`

```
.burger { @include burger }
```

4. Uncomment js/_functions.js
5. Style `menu--active` in scss

### Scroll Control

1. Uncomment js/_functions.js  `disableScroll`, `enableScroll`.
2. If fixed position, add class `fixed-block`

### Throttle

1. Import function __throttle()__
2. Add new function, for example, __func()__
3. Add new variable, for example: `let f = throttle(func)`
4. Use this variable, for example: `window.addEventListener('resize', f)`

### Full Screen Fixed

1. Uncomment __fix-fullheight.js__
2. Add to your block height: `var(--vh)`

This function use Throttle.

### Get Header Height

1. Uncomment __header-height.js__
2. Use css variable `--header-height`

### Custom Scroll Bar

1. Uncomment __simplebar__
2. Add to your block the maximum height and attribute `data-simplebar`

### Swiper - Slider

1. Use snippet `g-swiper`
2. Uncomment swiper styles in _vendor.scss_
3. Connect swiper in _functions.js_ and use with documentations

### Scroll Animations

1. Connect AOS.js in _functions.js_ and init
2. Use plugin documentations

### Paralax scroll to anchor

1. Connect rellax.js in _functions.js_ and init with element class.
2. Use plugin documentations

### Smooth scroll

1. Connect smooth-scroll.js in _functions.js_) and init with selectors.
2. Set attribute `data-scroll` to anchor links.

### Swipe on mobile devices

1. Connect swiped-events.js in _functions.js_
2. Use plugin documentations

### Fslightbox - modal

1. Connect fslightbox in _functions.js_
2. Use plugin documentations
