# Deploy and operations

Production domain: `https://pathfinder.rangeway.co`

Hosting: Rangeway Hostinger VPS at `72.60.71.39`, served by Nginx from `/var/www/pathfinder-pages/`.

## Deployment path

1. Push to `main`.
2. GitHub Actions builds Jekyll and publishes `_site` to the repository's `deploy-dist` branch.
3. The VPS service `rangeway-deploy.timer` checks that branch every two minutes.
4. `/usr/local/bin/rangeway-pull-deploy` syncs it into `/var/www/pathfinder-pages/`.

## DNS and TLS

- Cloudflare A record: `pathfinder.rangeway.co` to `72.60.71.39`
- Nginx configuration: `/etc/nginx/sites-available/pathfinder-pages`
- Enabled link: `/etc/nginx/sites-enabled/pathfinder-pages`
- Let's Encrypt certificate: `/etc/letsencrypt/live/pathfinder.rangeway.co/`
- Certificate renewal: standard Certbot system renewal

## VPS deployment registration

`/etc/rangeway-deploy.conf` includes:

```text
pathfinder-pages /var/www/pathfinder-pages
```
