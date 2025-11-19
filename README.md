# Starling Woodworking Website

A beautiful, modern, and responsive website for Starling Woodworking company.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Portfolio Gallery**: Showcase woodworking projects with an interactive lightbox
- **Contact Form**: Client-side validation with smooth user experience
- **Smooth Animations**: Scroll-based animations and hover effects
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Semantic HTML with proper meta tags

## Technology Stack

- HTML5
- CSS3 (Custom properties, Flexbox, Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Playfair Display & Inter)

## File Structure

```
starlingwoodworking/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript functionality
├── images/             # Image assets directory
│   ├── hero.jpg        # Hero section background
│   ├── workshop.jpg    # About section image
│   └── project1-6.jpg  # Portfolio project images
└── README.md           # This file
```

## Adding Your Images

To personalize the website with your friend's woodworking projects:

### Required Images:

1. **hero.jpg** (1920x1080px or larger)
   - Main hero section background
   - Recommended: A stunning shot of a finished piece or workshop
   - Place in: `images/hero.jpg`

2. **workshop.jpg** (800x600px or larger)
   - About section image
   - Recommended: Workshop photo or craftsman at work
   - Place in: `images/workshop.jpg`

3. **project1.jpg to project6.jpg** (1200x900px recommended)
   - Portfolio gallery images
   - These showcase the finished woodworking projects
   - Recommended aspect ratio: 4:3
   - Place in: `images/project1.jpg`, `images/project2.jpg`, etc.

### Adding More Portfolio Items:

To add more portfolio projects, edit the `index.html` file:

1. Find the portfolio section (around line 140)
2. Copy one of the existing portfolio items:

```html
<div class="portfolio-item" data-category="furniture">
    <img src="images/projectX.jpg" alt="Project Description">
    <div class="portfolio-overlay">
        <h3>Project Title</h3>
        <p>Project description</p>
    </div>
</div>
```

3. Replace:
   - `projectX.jpg` with your image filename
   - `Project Description` with your alt text
   - `Project Title` with the project name
   - `Project description` with details

### Image Optimization Tips:

- **Format**: Use JPEG for photos
- **Compression**: Compress images to reduce file size (try TinyPNG or similar)
- **Dimensions**: Don't use images larger than necessary
- **File size**: Aim for under 500KB per image for fast loading

## Customization

### Updating Contact Information:

Edit the contact section in `index.html` (around line 260):

```html
<div class="contact-item">
    <h4>Location</h4>
    <p>Your City, State</p>  <!-- Update this -->
</div>
<div class="contact-item">
    <h4>Phone</h4>
    <p>(555) 123-4567</p>  <!-- Update this -->
</div>
<div class="contact-item">
    <h4>Email</h4>
    <p>info@starlingwoodworking.com</p>  <!-- Update this -->
</div>
```

### Changing Colors:

Edit the CSS variables in `styles.css` (lines 12-23):

```css
:root {
    --primary-color: #8B4513;      /* Main brown color */
    --primary-dark: #654321;       /* Darker brown */
    --primary-light: #A0522D;      /* Lighter brown */
    --secondary-color: #D4A574;    /* Accent color */
    /* ... modify as needed ... */
}
```

### Updating Services:

Edit the services section in `index.html` (around line 100) to modify service descriptions.

### Adding Social Media Links:

Update the footer social links in `index.html` (around line 340):

```html
<a href="https://facebook.com/yourpage" aria-label="Facebook">
<a href="https://instagram.com/yourpage" aria-label="Instagram">
<a href="https://pinterest.com/yourpage" aria-label="Pinterest">
```

## Contact Form Setup

The contact form currently shows a success message but doesn't send emails. To make it functional:

### Option 1: Formspree (Easy, Free)

1. Sign up at [Formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `script.js` (around line 182):

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option 2: Netlify Forms (if hosting on Netlify)

1. Add `netlify` attribute to form tag in `index.html`:
```html
<form class="contact-form" id="contactForm" netlify>
```

### Option 3: Custom Backend

Create your own API endpoint and update the fetch URL in `script.js`.

## Deployment

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/starlingwoodworking`

### Netlify (Free, Recommended)

1. Sign up at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be live instantly
4. Connect your custom domain `starlingwoodworking.com`

### Custom Hosting

Upload all files to your web hosting via FTP/SFTP to the public_html directory.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

The website is optimized for performance:
- Minimal JavaScript (no frameworks)
- Efficient CSS with no unused styles
- Lazy loading can be added for images
- Total size (without images): ~25KB

## Future Enhancements

Consider adding:
- Blog section for woodworking tips
- Customer testimonials slider
- Before/after project comparisons
- Video gallery
- Online quote calculator
- Instagram feed integration

## Support

For questions or customization help, consult web development documentation or hire a web developer.

## License

This website template is created for Starling Woodworking. Feel free to modify and use it as needed.

---

**Built with care for Starling Woodworking**
