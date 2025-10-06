# 🚀 Guide de Déploiement - MAMAHOLDING

Ce guide vous explique comment déployer votre site MAMAHOLDING Next.js en production.

## 📋 Prérequis

- Node.js 18+ installé
- Compte sur une plateforme de déploiement (Vercel recommandé)
- Git configuré

## 🌐 Options de Déploiement

### Option 1 : Vercel (Recommandé) ⭐

Vercel est la plateforme créée par les créateurs de Next.js. C'est la solution la plus simple et optimale.

#### Étapes :

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub

2. **Importer le projet**
   ```bash
   # Assurez-vous que votre code est sur GitHub
   git add .
   git commit -m "Site MAMAHOLDING complet"
   git push origin main
   ```

3. **Déployer depuis Vercel**
   - Cliquez sur "New Project"
   - Sélectionnez votre repository GitHub
   - Vercel détectera automatiquement Next.js
   - Cliquez sur "Deploy"

4. **Configuration (optionnel)**
   - Ajoutez vos variables d'environnement dans Vercel
   - Configurez un nom de domaine personnalisé

**C'est tout !** Vercel va :
- Builder automatiquement votre site
- L'héberger sur un CDN global
- Générer une URL HTTPS
- Déployer automatiquement à chaque push

### Option 2 : Netlify

1. **Créer un compte** sur [netlify.com](https://netlify.com)

2. **Configuration du build**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Déployer**
   - Connectez votre repo GitHub
   - Netlify déploiera automatiquement

### Option 3 : Serveur VPS (Digital Ocean, AWS, etc.)

#### Sur Ubuntu/Debian :

```bash
# 1. Se connecter au serveur
ssh user@your-server-ip

# 2. Installer Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Installer PM2 (gestionnaire de processus)
sudo npm install -g pm2

# 4. Cloner le projet
git clone [votre-repo]
cd MAMAHOLDING

# 5. Installer les dépendances
npm install

# 6. Builder le projet
npm run build

# 7. Démarrer avec PM2
pm2 start npm --name "mamaholding" -- start

# 8. Configurer PM2 pour démarrer au boot
pm2 startup
pm2 save

# 9. Installer Nginx (reverse proxy)
sudo apt install nginx

# 10. Configurer Nginx
sudo nano /etc/nginx/sites-available/mamaholding
```

**Configuration Nginx :**
```nginx
server {
    listen 80;
    server_name votre-domaine.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Activer le site
sudo ln -s /etc/nginx/sites-available/mamaholding /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Installer SSL avec Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d votre-domaine.com
```

## 🔧 Variables d'Environnement

Créez un fichier `.env.production` :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@mamaholding.fr
```

## 📊 Optimisations Avant Déploiement

### 1. Vérifier le Build

```bash
npm run build
npm run start
```

Testez le site sur `http://localhost:3000`

### 2. Analyser les Bundles

```bash
# Installer l'analyseur
npm install --save-dev @next/bundle-analyzer

# Analyser
ANALYZE=true npm run build
```

### 3. Optimiser les Images

- Utilisez le composant `next/image` partout
- Compressez les images avant de les ajouter
- Utilisez des formats modernes (WebP, AVIF)

### 4. Performance Check

```bash
# Installer Lighthouse CLI
npm install -g lighthouse

# Analyser le site
lighthouse https://votre-domaine.com --view
```

## 🌍 Configuration du Domaine

### Vercel

1. Allez dans Project Settings > Domains
2. Ajoutez votre domaine
3. Configurez les DNS selon les instructions

### DNS Configuration (exemple)

Pour `mamaholding.fr` :

```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
```

## 🔒 SSL/HTTPS

- **Vercel/Netlify** : SSL automatique ✅
- **VPS** : Utilisez Let's Encrypt (gratuit)

```bash
sudo certbot --nginx -d mamaholding.fr -d www.mamaholding.fr
```

## 📈 Monitoring

### Analytics

Ajoutez Google Analytics dans `src/app/layout.tsx` :

```tsx
import Script from 'next/script'

// Dans le component
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
```

### Error Monitoring

Utilisez Sentry pour le monitoring d'erreurs :

```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

## 🚀 Déploiement Continu (CI/CD)

### GitHub Actions

Créez `.github/workflows/deploy.yml` :

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm test
```

## 📱 Tests Avant Production

### Checklist

- [ ] Build réussi sans erreurs
- [ ] Toutes les pages fonctionnent
- [ ] Formulaire de contact opérationnel
- [ ] Navigation mobile OK
- [ ] Images optimisées
- [ ] SEO meta tags présents
- [ ] Lighthouse score > 90
- [ ] HTTPS configuré
- [ ] Analytics configuré
- [ ] Domaine configuré

## 🆘 Dépannage

### Build Failed

```bash
# Nettoyer le cache
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 déjà utilisé

```bash
# Changer le port
PORT=3001 npm run start
```

### Mémoire insuffisante

```bash
# Augmenter la limite Node
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

## 📞 Support

Pour toute question :
- Documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
- Vercel Support : [vercel.com/support](https://vercel.com/support)

---

**Bon déploiement ! 🚀**
