

## Plan : Transformation TRUSTMARQ en plateforme multi-véhicules complète

Ce plan couvre les 5 fonctionnalités majeures discutées : catégories multi-véhicules, devis amélioré, espace pro garagiste, carnet d'entretien digital, et vérification des avis.

---

### 1. Catégories multi-véhicules

**Base de données :**
- Ajouter colonne `vehicle_types` (jsonb, default `'["voiture"]'`) à la table `garages`
- Mettre à jour les garages existants avec des types de véhicules

**Frontend :**
- Ajouter de nouveaux FilterChips : Voiture (Car), Moto (Bike), Trottinette (Scooter), Camion (Truck), Vélo électrique (E-bike)
- Modifier `FilterChips.tsx` avec les nouvelles catégories et icônes
- Mettre à jour le filtrage dans `ReviewCards.tsx` pour chercher dans `vehicle_types`
- Afficher les types de véhicules acceptés sur la fiche garage (`GarageDetail.tsx`)

---

### 2. Devis amélioré avec sélection véhicule/prestation

**Base de données :**
- Créer table `quote_requests` (id, garage_id, user_id nullable, plate, vehicle_type, service_type, description, status, created_at) avec RLS
- Types de prestations : Entretien, Réparation, Carrosserie, Pneus, Diagnostic, Autre

**Frontend :**
- Refondre `QuoteModal.tsx` en formulaire multi-étapes :
  1. Type de véhicule (voiture/moto/trottinette/camion/vélo)
  2. Type de prestation (select)
  3. Immatriculation + description du problème
- Sauvegarder en base au lieu du simple affichage actuel
- Ajouter confirmation avec numéro de demande

---

### 3. Espace professionnel garagiste (Dashboard)

**Base de données :**
- Ajouter rôle `'garage_owner'` au type enum `app_role`
- Créer table `garage_owners` (id, user_id, garage_id, UNIQUE) avec RLS
- Créer table `review_responses` (id, review_id, garage_owner_id, text, created_at) avec RLS — lisible publiquement, insertable par le propriétaire

**Frontend :**
- Nouvelle page `/dashboard` avec protection par rôle
- Onglets : Vue d'ensemble (stats), Avis reçus (avec réponse), Demandes de devis
- Composants : `DashboardStats` (nombre d'avis, note moyenne, vues), `DashboardReviews` (liste + formulaire de réponse), `DashboardQuotes` (liste des devis reçus)
- Afficher les réponses du garagiste sous les avis dans `GarageReviews.tsx`
- Ajouter lien Dashboard dans `StickyHeader` et `BottomNav` pour les owners

---

### 4. Carnet d'entretien digital

**Base de données :**
- Créer table `user_vehicles` (id, user_id, type, brand, model, plate, year, mileage, created_at) avec RLS
- Créer table `maintenance_records` (id, vehicle_id, garage_id nullable, service_type, description, date, mileage_at_service, next_service_date, cost, created_at) avec RLS
- Les deux tables : accès limité au propriétaire (user_id via vehicle)

**Frontend :**
- Nouvelle page `/vehicles` accessible depuis le profil et la navigation
- Liste des véhicules avec ajout/modification
- Pour chaque véhicule : historique d'entretien chronologique
- Formulaire d'ajout d'intervention (type, date, kilométrage, coût, garage associé)
- Indicateur visuel de rappel (prochain entretien basé sur `next_service_date`)
- Onglet supplémentaire "Mes véhicules" dans la page Profil

---

### 5. Vérification des avis avec upload de facture

**Base de données :**
- Créer un bucket Storage `review-invoices` (privé)
- Ajouter colonnes à `reviews` : `invoice_url` (text nullable), `verified` (boolean default false)
- Politique Storage : upload par le propriétaire de l'avis, lecture par admins

**Frontend :**
- Ajouter un champ upload de facture (image/PDF) dans le formulaire d'avis de `GarageReviews.tsx`
- Badge "Avis vérifié" (icône ShieldCheck) affiché à côté des avis avec facture validée
- Upload vers le bucket Storage lors de la soumission
- Affichage conditionnel du badge vérifié dans la liste des avis

---

### Ordre d'implémentation

1. **Multi-véhicules** — migration DB + filtres (fondation pour tout le reste)
2. **Devis amélioré** — migration `quote_requests` + refonte modal
3. **Vérification des avis** — migration + storage + UI badge
4. **Carnet d'entretien** — tables véhicules/interventions + pages
5. **Espace pro** — rôle garage_owner + dashboard + réponses aux avis

### Fichiers impactés

- **Nouveaux** : `src/pages/Dashboard.tsx`, `src/pages/Vehicles.tsx`, `src/components/dashboard/*`, `src/components/vehicles/*`, `src/hooks/useVehicles.ts`, `src/hooks/useQuoteRequests.ts`
- **Modifiés** : `FilterChips.tsx`, `ReviewCards.tsx`, `QuoteModal.tsx`, `GarageReviews.tsx`, `GarageDetail.tsx`, `Profile.tsx`, `App.tsx`, `BottomNav.tsx`, `StickyHeader.tsx`, `useGarages.ts`
- **Migrations** : 5-6 fichiers SQL pour les nouvelles tables, colonnes, et bucket storage

