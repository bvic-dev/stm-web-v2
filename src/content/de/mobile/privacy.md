---
head: {
    title: 'Datenschutzerklärung - Sport Track Merger',
    description: "Datenschutzerklärung der App Sport Track Merger"
}
title: 'Datenschutzerklärung'
key: 'privacy'
---

**Letzte Aktualisierung: 19.06.2025**

## 1. Verantwortlicher für die Datenverarbeitung

Die Verarbeitung personenbezogener Daten erfolgt durch:

**Bily Victorien**  
Unabhängiger Entwickler – Kleingewerbe  
34 Rue Bugeaud, 29200 Brest, Frankreich  
✉️ Kontakt: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 2. Erhobene Daten und Zweck

Die App **Sport Track Merger** **erhebt keine identifizierbaren personenbezogenen Daten** des Nutzers.

Daten aus der **Strava API** (Aktivitäten, Metriken, Benutzer-ID) werden ausschließlich **lokal** auf dem Telefon des Nutzers gespeichert, um die **Zusammenführung oder Duplizierung** von Aktivitäten zu ermöglichen.  
> **Keine dieser Daten wird an einen Drittserver übermittelt**, noch vom Herausgeber gespeichert.

Zusammengeführte oder duplizierte Aktivitäten werden lokal erstellt und **direkt an Strava gesendet**. Die generierten Dateien werden **nach dem Senden automatisch gelöscht**.

### Anonym erhobene Daten:

- **Fehler und Abstürze** (über Firebase Crashlytics): automatische Erfassung, **nicht deaktivierbar**
- **Nutzeraktionen & Leistung** (über Firebase Analytics & Performance): **aktivierbar/deaktivierbar** in den App-Einstellungen
- **Gehashte Strava-ID** (nicht umkehrbar): dient zur Verknüpfung einer **Pro-Lizenz** mit einem Konto

Eine sichere Authentifizierung zu Strava erfolgt über eine **Firebase Cloud Function**:  
> Sie schützt die API-Schlüssel, **ohne personenbezogene Daten zu verarbeiten**.

## 3. Rechtsgrundlage der Verarbeitung

Die in der App durchgeführten Verarbeitungen basieren auf:

- **Dem Vertrag** zwischen dem Nutzer und der App für den Zugriff auf Strava-Funktionen
- **Der ausdrücklichen Einwilligung** des Nutzers zur Nutzungsanalyse (Analytics), **in den Einstellungen aktivierbar**

## 4. Datenspeicherung

- Der Herausgeber **speichert keine personenbezogenen Daten** auf eigenen Servern
- Nur **anonyme technische Daten** werden von **Firebase** gemäß deren Aufbewahrungsrichtlinien gespeichert
- Aktivitätsdateien werden lokal generiert und **nach der Verwendung vom Gerät gelöscht**

## 5. Vertriebsplattformen

Die App wird über folgende Plattformen vertrieben:

- **Google Play Store** (Google Ireland Ltd.)
- **Apple App Store** (Apple Inc.)

Diese Plattformen können Nutzungs- und Diagnosedaten erfassen (Installation, Leistung usw.)  
> Diese Daten werden **von Google oder Apple erhoben**, mit der **Einwilligung in den Geräteeinstellungen**.

Der Herausgeber hat **nur Zugriff auf anonyme und aggregierte Daten**.

### Weitere Informationen:

- [Google Play – Datenschutzeinstellungen](https://support.google.com/accounts/answer/3118621)  
- [Apple – Datenschutz und Einstellungen](https://support.apple.com/108971)

## 6. Drittanbieter und Datenübertragung außerhalb der EU

Die App verwendet folgende Dienste:

- **Firebase (Google)**: Abstürze, Leistung, Analytics  
- **RevenueCat**: Verwaltung von In-App-Käufen

> RevenueCat verwendet eine **anonyme Kennung** (abgeleitet aus der gehashten Strava-ID), um eine Lizenz mit einem Nutzer zu verknüpfen.  
> Es werden **keine identifizierbaren personenbezogenen Daten** übermittelt.

Diese Anbieter können Daten **außerhalb der Europäischen Union** verarbeiten, unter Verwendung **standardisierter Vertragsklauseln** gemäß DSGVO.

## 7. Rechte des Nutzers

Gemäß der **DSGVO** hat der Nutzer folgende Rechte:

- **Zugriff, Berichtigung und Löschung** lokaler Daten (durch Deinstallation der App oder Abmeldung)
- **Widerruf des Strava-Zugriffs** über die [Strava-Seite](https://www.strava.com/settings/apps)
- **Widerspruch gegen die Erhebung von Analytics-Daten** in den App-Einstellungen
- **Kontakt zum Verantwortlichen**: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 8. Zielgruppe

Die App ist nur für Nutzer zugänglich, die für ein **Strava-Konto berechtigt** sind, also:

- **Mindestens 13 Jahre alt** sind oder das **Mindestalter im jeweiligen Wohnsitzland** erreicht haben

## 9. Aktualisierung der Richtlinie

Diese Richtlinie kann **jederzeit geändert** werden.  
Eine aktualisierte Version wird in der App oder auf der offiziellen Website veröffentlicht.

> Der Nutzer wird aufgefordert, regelmäßig die aktuelle Version zu überprüfen.
