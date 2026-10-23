# RS EcoFiber — Website

Banana fiber manufacturer website (Nandurbar, Maharashtra) with a client enquiry form.

## Pages
| File | Page |
|---|---|
| `index.html` | Home: hero, about, products, process, why us, industries, enquiry form |
| `about.html` | About, mission/vision, values, community impact |
| `products.html` | 6 products with specifications + FAQ |
| `gallery.html` | Photo gallery with lightbox |
| `blog.html` | Knowledge articles |
| `contact.html` | Contact details, enquiry form, Google Map |
| `admin.php` | **Private** dashboard to view and download client enquiries |

## Before going live: fill in your details
1. **`js/main.js`** (top of file, `SITE`): phone, WhatsApp number, email, full address, social media links.
2. **`config.php`**: notification email, from-email, and **change `ADMIN_PASSWORD`**.
3. **`about.html`**: replace `Since 20XX` with your founding year.
4. **`contact.html`**: update the Google Map `q=` with your exact factory address.
5. **Photos**: put your real photos in `images/` with these names (JPG, ~1600px wide). Until then, colored placeholders show.
   - `hero.jpg`, `banner.jpg`, `about.jpg`
   - `raw-fiber.jpg`, `yarn.jpg`, `rope.jpg`, `handicraft.jpg`, `fabric.jpg`, `paper.jpg`
   - `gallery-1.jpg` … `gallery-9.jpg`

## How client details are collected
- Visitors fill the enquiry form (Home or Contact page).
- `enquiry.php` validates it, saves it in `data/enquiries.csv`, and emails you.
- Open `https://yourdomain/admin.php` and log in to see all enquiries, search them, click to call/WhatsApp/email, and **download them as an Excel CSV**.
- Spam protection: hidden honeypot field + max 5 submissions per IP per hour.

## Hosting
Needs normal **PHP hosting** (Hostinger, GoDaddy, BigRock, any cPanel, PHP 7.4+).
Upload all files into `public_html`. The `data/` folder must be writable (permission 755).
`data/.htaccess` blocks public access to the CSV on Apache hosts.

Opening the HTML files directly from your computer shows the site, but the form only works once uploaded to PHP hosting
(or locally with `php -S localhost:8000`).
