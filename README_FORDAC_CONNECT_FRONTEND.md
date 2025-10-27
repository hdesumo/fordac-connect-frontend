# 🟢 FORDAC Connect Frontend — Documentation technique (v1.0.0)

**Nom du projet :** FORDAC Connect  
**Type :** Frontend Web Vitrine (Next.js + TailwindCSS)  
**Déploiement :** https://fordac-connect.org  
**API connectée :** https://api.fordac-connect.org  

---

## 🧱 1. Présentation

**FORDAC (Forces Démocratiques pour l’Action et le Changement)** est un parti politique engagé pour une gouvernance participative et un changement démocratique fondé sur la justice, la solidarité et l’action locale.

Ce frontend sert de **vitrine officielle** du parti, connectée à l’API **FORDAC Connect**, et permet :

- l’adhésion en ligne (formulaire connecté à l’API),
- la consultation d’actualités et d’événements,
- la lecture de la Charte du FORDAC,
- la présentation institutionnelle du parti et de son Bureau national.

---

## ⚙️ 2. Stack technique

| Technologie | Description |
|--------------|--------------|
| **Next.js 16 (App Router)** | Framework React full-stack moderne |
| **TailwindCSS** | Stylisation rapide et responsive |
| **TypeScript** | Typage statique pour fiabilité du code |
| **Framer Motion** | Animations légères et élégantes |
| **React Big Calendar** | Gestion des événements interactifs |
| **Axios** | Requêtes HTTP vers l’API |
| **Lucide React** | Icônes modernes et légères |
| **Vercel** | Déploiement continu et hébergement global |

---

## 📁 3. Structure du projet

```
fordac-connect-frontend/
├── app/
│   ├── page.tsx
│   ├── adherer/page.tsx
│   ├── adherer/success/page.tsx
│   ├── organisation/page.tsx
│   ├── evenements/page.tsx
│   ├── actualites/page.tsx
│   ├── contact/page.tsx
│   ├── login/page.tsx
│   └── layout.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── PresidentSection.tsx
│   ├── Footer.tsx
│   ├── NewsSection.tsx
│   ├── AgendaSection.tsx
│   ├── JoinUsCard.tsx
│   ├── MarqueeBanner.tsx
│   └── ValuesSection.tsx
│
├── public/
│   ├── hero/
│   ├── documents/charte-mutuelle.pdf
│   ├── president.png
│   └── favicon.ico
│
├── lib/
│   └── api.ts
│
├── data/
│   └── moungoData.ts
│
├── styles/
│   └── globals.css
│
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🔗 4. Variables d’environnement

Fichier `.env.local` :

```
NEXT_PUBLIC_API_BASE_URL=https://api.fordac-connect.org
```

---

## 🧩 5. Installation locale

```bash
git clone https://github.com/hdesumo/fordac-connect-frontend.git
cd fordac-connect-frontend
npm install
npm run dev
```

Accès : [http://localhost:3000](http://localhost:3000)

---

## 🏗️ 6. Build et production

```bash
npm run build
npm start
```

---

## 🚀 7. Déploiement sur Vercel

Lien projet : https://vercel.com/erone-omusohs-projects/fordac-connect-frontend

Déploiement manuel :

```bash
vercel --prod
```

---

## 🌙 8. Thème et design

Palette :
```css
--primary: #177245;
--secondary: #E9F2EC;
--accent: #0C3D27;
--text-dark: #1E1E1E;
--text-light: #FFFFFF;
```

---

## 🧠 9. Connexion API

Base : https://api.fordac-connect.org

| Action | Méthode | Endpoint |
|---------|----------|-----------|
| Liste des membres | GET | /api/members |
| Enregistrement adhérent | POST | /api/members/register |
| Authentification membre | POST | /api/login |
| Liste des événements | GET | /api/events |

---

## 🧾 10. Auteur & Licence

**Auteur :** Apps 1 Global SA  
**Coordination technique :** Erone Omusoh  
**Licence :** Tous droits réservés — FORDAC Connect © 2025  
**Contact :** info@fordac-connect.org
