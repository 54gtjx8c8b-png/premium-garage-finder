## Finalisation de l'Espace Pro Garagiste

Le squelette du Dashboard existe déjà (`/dashboard`, hooks `useGarageOwnership`, `useReviewResponses`, table `garage_owners`), mais il manque les pièces qui rendent la fonctionnalité réellement utilisable de bout en bout.

### Constat actuel

- ✅ Page `/dashboard` avec stats, onglets Avis/Devis et formulaire de réponse
- ✅ Tables `garage_owners`, `review_responses`, `quote_requests` en place
- ❌ **Aucun moyen pour un garagiste de réclamer sa fiche** → le dashboard est inaccessible en pratique
- ❌ Pas de lien Dashboard dans `BottomNav` ni `StickyHeader`
- ❌ Pas de gestion du statut des devis (toujours "En attente")
- ❌ Pas d'état vide engageant pour l'onboarding pro

---

### Étape 1 — Système de "claim" d'une fiche garage

**Objectif** : un utilisateur connecté peut revendiquer un garage existant et devenir `garage_owner` après validation.

- Créer une table `garage_claims` (id, user_id, garage_id, business_email, justification, status `pending`/`approved`/`rejected`, created_at) avec RLS :
  - L'utilisateur peut insérer/voir ses propres demandes
  - Seuls les admins peuvent approuver (utilise le rôle `admin` existant via `has_role`)
- Trigger : à l'approbation d'un claim, insérer automatiquement la ligne dans `garage_owners`
- Pour la démo, ajouter une **auto-approbation simple** : un claim s'auto-approuve si l'email professionnel saisi correspond au domaine du `website` du garage (sinon reste `pending`)

### Étape 2 — Page d'onboarding pro `/pro/claim`

- Nouvelle page `src/pages/ClaimGarage.tsx`
- Champ recherche/autocomplete sur les garages existants (réutilise `useGarages`)
- Formulaire : email professionnel + courte justification
- Affichage de l'état des claims en cours de l'utilisateur
- Bouton "Accéder au dashboard" si déjà propriétaire

### Étape 3 — Améliorer le Dashboard existant

- **Bouton de gestion des devis** : passer un devis de `pending` → `accepted` / `rejected` / `completed` (mutation Supabase + toast)
- **Filtre par statut** sur l'onglet Devis (chips : Tous / En attente / Acceptés / Terminés)
- **Notification visuelle** : badge "Nouveau" sur les devis ≤ 24 h
- **État vide amélioré** : si pas de garage owné, CTA "Revendiquer ma fiche" → `/pro/claim` (au lieu du simple message actuel)

### Étape 4 — Navigation

- `BottomNav` : remplacer dynamiquement l'onglet "Véhicules" par "Pro" (icône `Briefcase`) si l'utilisateur est `garage_owner`, sinon garder Véhicules. Alternativement, ajouter un 5e onglet conditionnel.
- `StickyHeader` (desktop) : afficher un lien "Dashboard Pro" dans la nav si owner détecté
- Sur la page `/profile`, ajouter une carte CTA "Vous êtes garagiste ?" → `/pro/claim`

### Étape 5 — Affichage public côté fiche garage

- Sur `GarageDetail.tsx`, badge discret "Fiche revendiquée par le propriétaire" si la fiche a au moins un `garage_owner` actif (renforce la confiance)

---

### Détails techniques

- **Migrations SQL** :
  - `garage_claims` (avec RLS + trigger d'approbation)
  - Ajout colonne `status` valeurs `accepted`/`rejected`/`completed` autorisées sur `quote_requests` (déjà text, juste valider)
- **Nouveaux hooks** : `useGarageClaims`, `useCreateClaim`, `useUpdateQuoteStatus`, `useGarageHasOwner(garageId)`
- **Nouvelles routes** : `/pro/claim` ajoutée dans `App.tsx`
- **Fichiers modifiés** : `Dashboard.tsx`, `BottomNav.tsx`, `StickyHeader.tsx`, `Profile.tsx`, `GarageDetail.tsx`, `App.tsx`
- **Nouveaux fichiers** : `src/pages/ClaimGarage.tsx`, `src/hooks/useGarageClaims.ts`, `src/components/dashboard/QuoteStatusActions.tsx`

### Hors scope (à faire dans une étape ultérieure)

- Interface admin pour valider manuellement les claims `pending` → on s'appuie sur l'auto-approbation par domaine pour l'instant
- Statistiques avancées (vues, conversions) → reportées
- Notifications email → reportées
