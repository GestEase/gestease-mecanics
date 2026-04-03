# Roadmap — gestease-mecanics

## Phase 1 — Deploiement public ✅

### 1.1 Repo et branding
- [x] README avec documentation des 11 modules
- [x] LICENSE MIT
- [x] Footer avec lien gestease.ca
- [x] docker-compose.example.yml (standalone)
- [x] Topics GitHub SEO (cnc, machining, tap-drill, etc.)
- [x] Description GitHub
- [x] Rendre le repo PUBLIC

### 1.2 Deploiement VPS Hostinger
- [x] Route Cloudflare `mecanics.gestease.ca` → nginx-proxy
- [x] Builder image Docker `ghcr.io/gestease/gestease-mecanics:latest`
- [x] Ajouter le container dans le docker-compose de prod sur le VPS
- [x] Ajouter server block nginx-proxy pour `mecanics.gestease.ca`
- [x] Deployer et valider (`curl https://mecanics.gestease.ca/health`)

### 1.3 CI/CD
- [x] Workflow GitHub Actions `deploy-mecanics-prod.yml` (build image + push ghcr.io)
- [x] Workflow deploy VPS (SSH pull + restart container + nginx reload)

---

## Phase 2 — Authentification GestFlow

### 2.1 Bouton "Se connecter"
- [ ] Bouton "Se connecter avec GestFlow" dans le header
- [ ] Integration Keycloak (meme realm que GestFlow)
- [ ] Mode public (sans auth) reste fonctionnel a 100%

### 2.2 Backend API (pour features connectees uniquement)
- [ ] Endpoint sauvegarde preferences utilisateur
- [ ] Endpoint favoris (threads, materiaux)
- [ ] Endpoint presets machines
- [ ] Stockage lie au compte GestFlow (PostgreSQL ou SQLite)

---

## Phase 3 — Features connectees

### 3.1 Personnalisation
- [ ] Favoris — sauvegarder threads/materiaux utilises souvent
- [ ] Presets machine — vitesses, outils, profondeurs par machine CNC
- [ ] Historique de calculs (Speed & Feed)
- [ ] Parametres sauvegardes (unites par defaut, theme)

### 3.2 Export
- [ ] Export PDF des tables (tap drill, speed & feed)
- [ ] Export CSV des resultats de calcul

### 3.3 Collaboration
- [ ] Partage de presets entre membres d'une equipe GestFlow
- [ ] Bibliotheque de materiaux custom partagee

---

## Phase 4 — Contenu et SEO

- [ ] Page d'accueil / landing (avant les tabs) pour le SEO
- [ ] Meta tags Open Graph pour partage social
- [ ] Sitemap.xml
- [ ] Version bilingue (FR/EN)
- [ ] Blog technique integre (articles sur les threads, speed & feed, etc.)

---

## Architecture cible

```
mecanics.gestease.ca (PUBLIC)
|
|-- Mode public (pas de compte)
|   |-- 11 modules complets
|   |-- localStorage pour preferences temporaires
|
|-- Mode connecte (compte GestFlow)
|   |-- Keycloak auth (meme realm)
|   |-- API backend pour persistence
|   |-- Favoris, presets, historique, export
|
gestflow.ca <-----> mecanics.gestease.ca
   (compte unique, ecosysteme GestEase)
```

---

*GestEase Technologie Inc.*
