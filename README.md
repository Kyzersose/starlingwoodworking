# Starling Woodworking

Static website for Starling Woodworking, a handcrafted furniture maker in Opelika, Alabama.

Live site: https://starlingwoodworking.com
Test site: https://starling.cristocreativetech.com (see `CNAME`)

## Structure

- `index.html` – main single-page site
- `quote-received.html` – confirmation page shown after a quote request
- `styles.css` – site styles
- `script.js` – lightbox, slideshows and other page behavior
- `images/` – product photos by collection (Classic, Custom, Farmhouse, Franklin, Waverly, Home Decor, The Craft), plus logo and favicon. See `images/IMAGE_GUIDE.txt` for image conventions.
- `robots.txt`, `CNAME` – hosting/SEO config

## Local development

No build step. Open `index.html` in a browser, or serve the folder:

```
python -m http.server 8000
```

## Deployment

Hosted as static files (AWS S3, GitHub Pages-style, via `CNAME`). Pushing to `master` publishes the site. Pushing `test` publishes to Github site. 
