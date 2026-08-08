# AEUCAB-ZAI — SGIAU

**Système de Gestion Intégrée de l'Amicale Universitaire (SGIAU)**

Application complète de gestion d'une amicale universitaire : membres, cotisations, comptabilité, activités, élections, documents, archives et toutes les opérations administratives.

## 🎯 Modules (28)

### Pilotage
- **Tableau de bord** — vue d'ensemble en temps réel (stats, graphiques, alertes)
- **Statistiques** — analyses croisées (membres, finances, activités)
- **Recherche globale** — multicritère sur toutes les entités

### Membres
- **Membres** — annuaire, fiches, statuts, QR codes, import/export
- **Adhésions** — workflow de validation (secrétaire → président)
- **Cartes membres** — génération, impression, QR code de vérification
- **Espace membre** — application mobile web (annonces, cotisations, reçus, demandes)

### Finances
- **Cotisations** — types, paiements, suivi
- **Reçus** — génération PDF, impression, QR de vérification, annulation
- **Comptabilité** — journal, plan comptable, balance, exercices, clôture
- **Caisse** — multi-comptes, transferts, mouvements
- **Dépenses** — création, validation, écritures comptables

### Vie associative
- **Activités** — événements, budget, participants, présences
- **Réunions** — ordre du jour, PV, décisions, présences
- **Présences** — manuel et QR code, statistiques
- **Élections** — candidats, vote électronique, résultats
- **Votes internes** — anonymes, QR code, un vote par membre

### Ressources
- **Documents** — classement, signature électronique, visibilité
- **Inventaire** — biens, état, localisation, maintenance
- **Formations** — formateur, participants, attestations, QR présence
- **Bibliothèque** — ressources, emprunts, retours
- **Partenaires** — contacts, contrats, contributions
- **Archives** — historique, classement annuel, protection

### Système
- **Notifications** — internes et membres (APP, WhatsApp, Email)
- **Import / Export** — CSV (membres, paiements, dépenses) + JSON complet
- **Utilisateurs & sécurité** — rôles, permissions, verrouillage, sessions
- **Journal d'audit** — before/after JSON, filtres, pagination
- **Synchronisation** — mode hors-ligne, sync log, gestion conflits

## 🛠 Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 16 (App Router) |
| Langage | TypeScript 5 |
| UI | Tailwind CSS 4 + shadcn/ui + Lucide icons |
| Charts | Recharts |
| ORM | Prisma 6 |
| Base de données | **Neon PostgreSQL** |
| State | Zustand + TanStack Query |

## 🚀 Démarrage

```bash
# 1. Installer les dépendances
bun install

# 2. Configurer la base de données
cp .env.example .env
#   → éditer .env avec votre DATABASE_URL Neon PostgreSQL

# 3. Créer le schéma
bun run db:push

# 4. Lancer le serveur dev
bun run dev
```

L'application est disponible sur `http://localhost:3000`.

### Seed (données de démonstration)

Au premier chargement, cliquez sur **"Initialiser la démo"** dans la topbar, ou :
```bash
curl -X POST http://localhost:3000/api/seed -H "Content-Type: application/json" -d '{"force":true}'
```

## 📊 Rôles & permissions

| Rôle | Permissions typiques |
|------|---------------------|
| Président | Tout : consulter, ajouter, modifier, supprimer, valider, exporter, imprimer |
| Secrétaire général | Membres, adhésions, réunions, documents |
| Trésorier | Finances, caisse, dépenses, reçus |
| Caissier | Cotisations, paiements, reçus |
| Commissaire aux comptes | Consultation, audit, rapports |
| Administrateur informatique | Utilisateurs, sécurité, système |
| Membre simple | Espace membre (consultation) |
| Rôle personnalisé | Configurable |

## 🔒 Sécurité

- `.env` gitigné (jamais committé)
- Journal d'audit complet (before/after JSON sur chaque mutation)
- Historique des connexions
- Blocage après plusieurs erreurs (configurable)
- Endpoints REST avec vérifications

## 📁 Structure

```
src/
├── app/
│   ├── api/           # 26+ routes REST (CRUD + audit)
│   ├── page.tsx       # App shell
│   └── layout.tsx
├── components/
│   ├── sgiau/
│   │   ├── modules/   # 28 modules fonctionnels
│   │   ├── shell/     # sidebar, topbar, app-shell
│   │   ├── ui.tsx     # composants partagés
│   │   └── qr-block.tsx
│   └── ui/            # shadcn/ui
└── lib/
    ├── sgiau/         # constants, format, api helpers, seed, store
    └── db.ts          # client Prisma + health check
prisma/
└── schema.prisma      # 30+ modèles, audit log, sync log
```

## 📝 Licence

Projet interne — Amicale Universitaire.

---

**SGIAU v1.0** — conçu pour les amicales universitaires.
