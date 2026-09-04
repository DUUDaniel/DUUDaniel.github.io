# Daniel Aerial Photography

Personal aerial photography site, published at [https://duudaniel.github.io](https://duudaniel.github.io).

## Replace the front-page photograph

Overwrite `hero.jpg` in the repository root with your own image (wide landscape works best). Keep the filename `hero.jpg`.

## Replace a category cover

Overwrite the matching file in `covers/`:

- `covers/sunset.jpg`
- `covers/sea.jpg`
- `covers/rivers.jpg`
- `covers/temples.jpg`
- `covers/city.jpg`
- `covers/forest.jpg`
- `covers/autumn.jpg`
- `covers/winter.jpg`
- `covers/summer.jpg`
- `covers/spring.jpg`

## Add photographs to a collection

1. Drop image files into `photos/{category}/` (for example `photos/sunset/01.jpg`).
2. Open `assets/site.js` and add each file to that category’s `photos` array:

```js
photos: [
  { src: "photos/sunset/01.jpg", alt: "Sunset over the bay", title: "Bay" },
]
```

Collections currently wait empty on purpose so the frames are ready for your work.
