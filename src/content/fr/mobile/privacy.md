---
head: {
    title: 'Politique de Confidentialité - Sport Track Merger',
    description: "Politique de Confidentialité de l'application Sport Track Merger"
}
title: 'Politique de Confidentialité'
---

**Dernière mise à jour : 19/06/2025**

## 1. Responsable du traitement

Le traitement des données personnelles est assuré par :

**Bily Victorien**  
Développeur indépendant – Micro-entreprise  
34 Rue Bugeaud, 29200 Brest, France  
✉️ Contact : [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 2. Données collectées et finalités

L'application **Sport Track Merger** **ne collecte aucune donnée personnelle identifiable** de l'utilisateur.

Les données provenant de l’**API Strava** (activités, métriques, ID utilisateur) sont uniquement **stockées localement** sur le téléphone de l’utilisateur pour permettre la **fusion ou duplication** d’activités.  
> **Aucune de ces données n’est transmise à un serveur tiers**, ni conservée par l’éditeur.

Les activités fusionnées ou dupliquées sont créées localement, puis **envoyées directement vers Strava**. Les fichiers générés sont **supprimés automatiquement** après envoi.

### Données anonymes collectées :

- **Erreurs et crashs** (via Firebase Crashlytics) : collecte automatique, **non désactivable**
- **Actions utilisateur & performances** (via Firebase Analytics & Performance) : **activable/désactivable** dans les paramètres de l’app
- **Identifiant Strava hashé** (non réversible) : utilisé pour associer une **licence Pro** à un compte

Une authentification sécurisée à Strava est assurée via une **Cloud Function Firebase** :  
> Elle protège les clés d’API, **sans traitement de données personnelles**.

## 3. Base légale du traitement

Les traitements effectués dans l’application reposent sur :

- **Le contrat** entre l'utilisateur et l'application pour l'accès aux données Strava
- **Le consentement explicite** de l’utilisateur pour le suivi d’usage (Analytics), **activable dans les réglages**

## 4. Conservation des données

- L’éditeur **ne conserve aucune donnée personnelle** sur ses propres serveurs
- Seules les **données anonymes techniques** sont stockées par **Firebase**, selon leurs politiques de rétention
- Les fichiers d’activités sont générés localement et **supprimés du téléphone après usage**

## 5. Plateformes de distribution

L’application est distribuée via :

- **Google Play Store** (Google Ireland Ltd.)
- **Apple App Store** (Apple Inc.)

Ces plateformes peuvent collecter des données d’usage et de diagnostic (installation, performance, etc.)  
> Ces données sont **collectées par Google ou Apple**, avec le **consentement donné dans les paramètres** de l’appareil.

L’éditeur n’a accès **qu’à des données anonymes et agrégées**.

### Pour plus d’informations :

- [Google Play – Paramètres de confidentialité](https://support.google.com/accounts/answer/3118621) 
- [Apple – Confidentialité et réglages](https://support.apple.com/108971)

## 6. Prestataires tiers et transfert hors UE

L'application utilise les services suivants :

- **Firebase (Google)** : crashs, performances, analytics
- **RevenueCat** : gestion des achats In-App

> RevenueCat utilise un **identifiant anonyme** (dérivé de l'identifiant Strava, non réversible) pour associer une licence à un utilisateur.  
> Aucune **donnée personnelle identifiable** n’est transmise.

Ces prestataires peuvent traiter des données **hors de l'Union Européenne**, avec des **clauses contractuelles types** conformes au RGPD.

## 7. Droits de l'utilisateur

Conformément au **RGPD**, l’utilisateur dispose des droits suivants :

- **Accès, rectification et suppression** des données locales (en supprimant l’app ou en se déconnectant)
- **Révocation de l'accès Strava** via la [page dédiée de Strava](https://www.strava.com/settings/apps)
- **Opposition à la collecte d’analytics** via les réglages de l’app
- **Contact du responsable** : [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 8. Public concerné

L'application est réservée aux utilisateurs éligibles à un **compte Strava**, c’est-à-dire :

- **Âgés d’au moins 13 ans**, ou de l’âge minimum requis dans leur pays de résidence

## 9. Mise à jour de la politique

Cette politique peut être **modifiée à tout moment**.  
Toute version mise à jour sera publiée dans l’app ou sur le site officiel.

> L’utilisateur est invité à consulter régulièrement la dernière version disponible.