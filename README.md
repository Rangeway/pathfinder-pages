# Pathfinder Rewards - Rangeway

Jekyll-powered site for Pathfinder Rewards, Rangeway's loyalty program.

## Site Structure

- **index.html** - Main Pathfinder Rewards landing page with membership tiers
- **playbook.html** - Comprehensive internal playbook for the rewards program
- **_layouts/** - Jekyll layout templates
- **assets/** - CSS and JavaScript files
- **_config.yml** - Jekyll configuration

## Local Development

### Prerequisites
- Ruby 2.6+
- Bundler

### Setup
```bash
# Install dependencies
bundle install --path vendor/bundle

# Build the site
bundle exec jekyll build

# Serve locally (optional)
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

## Deployment

The production site is [pathfinder.rangeway.co](https://pathfinder.rangeway.co). Pushes to `main` trigger GitHub Actions, which builds Jekyll and publishes the result to `deploy-dist`. The Rangeway VPS pulls that branch on its recurring deployment timer and serves the files with Nginx.

See [DEPLOY.md](DEPLOY.md) for the server paths and operational details.

## File Structure

```
pathfinder-pages/
├── _config.yml           # Jekyll configuration
├── _layouts/
│   └── default.html      # Base layout template
├── assets/
│   ├── css/
│   │   ├── main.css      # Styles for index page
│   │   └── playbook.css  # Styles for playbook page
│   └── js/
│       ├── main.js       # Scripts for index page
│       └── playbook.js   # Scripts for playbook page
├── index.html           # Main landing page
├── playbook.html        # Rewards program playbook
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Site Features

### Index Page
- Membership tier showcase (Explorer, Voyager, Pioneer, Trailblazer)
- Benefits overview
- Call-to-action sections
- Responsive design

### Playbook Page
- Comprehensive program documentation
- Sidebar navigation
- Mobile-friendly menu
- Detailed tier breakdowns
- Financial projections
- Marketing guidelines
- Operational procedures

## Technologies Used

- **Jekyll 3.9** - Static site generator
- **jekyll-seo-tag** - SEO optimization
- **Custom CSS** - No frameworks, pure CSS
- **Vanilla JavaScript** - No dependencies

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact

For questions about Pathfinder Rewards:
- Email: hello@rangewayev.com
- Phone: (650) 420-6300
- Address: 2661 Market Street #87587, San Francisco, CA 94114

## License

© 2025 Rangeway Energy, Inc. All rights reserved.
