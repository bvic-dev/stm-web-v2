---
head: {
    title: 'Política de Privacidad - Sport Track Merger',
    description: "Política de Privacidad de la aplicación Sport Track Merger"
}
title: 'Política de Privacidad'
---

**Última actualización: 19/06/2025**

## 1. Responsable del tratamiento de datos

El tratamiento de los datos personales está a cargo de:

**Bily Victorien**  
Desarrollador independiente – Autónomo  
34 Rue Bugeaud, 29200 Brest, Francia  
✉️ Contacto: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 2. Datos recopilados y finalidad

La aplicación **Sport Track Merger** **no recopila ningún dato personal identificable** del usuario.

Los datos procedentes de la **API de Strava** (actividades, métricas, ID de usuario) se almacenan únicamente **de forma local** en el teléfono del usuario para permitir la **fusión o duplicación** de actividades.  
> **Ninguno de estos datos se transmite a un servidor externo**, ni se almacena por el editor.

Las actividades fusionadas o duplicadas se generan localmente y se **envían directamente a Strava**. Los archivos generados se **eliminan automáticamente** tras el envío.

### Datos anónimos recopilados:

- **Errores y bloqueos** (a través de Firebase Crashlytics): recopilación automática, **no desactivable**
- **Acciones del usuario y rendimiento** (a través de Firebase Analytics & Performance): **activable/desactivable** en los ajustes de la app
- **ID de Strava en hash** (no reversible): utilizado para vincular una **licencia Pro** a una cuenta

La autenticación segura con Strava se realiza a través de una **Cloud Function de Firebase**:  
> Protege las claves API, **sin procesar datos personales**.

## 3. Base legal del tratamiento

Los tratamientos realizados en la aplicación se basan en:

- **El contrato** entre el usuario y la aplicación para el acceso a las funciones de Strava
- **El consentimiento explícito** del usuario para el análisis de uso (Analytics), **activable en los ajustes**

## 4. Conservación de datos

- El editor **no almacena datos personales** en sus propios servidores
- Solo se almacenan **datos técnicos anónimos** por **Firebase**, conforme a sus políticas de retención
- Los archivos de actividad se generan localmente y **se eliminan tras su uso del dispositivo**

## 5. Plataformas de distribución

La aplicación se distribuye a través de:

- **Google Play Store** (Google Ireland Ltd.)
- **Apple App Store** (Apple Inc.)

Estas plataformas pueden recopilar datos de uso y diagnóstico (instalación, rendimiento, etc.)  
> Estos datos son **recopilados por Google o Apple**, con el **consentimiento otorgado en la configuración del dispositivo**.

El editor solo tiene acceso a **datos anónimos y agregados**.

### Más información:

- [Google Play – Ajustes de privacidad](https://support.google.com/accounts/answer/3118621)  
- [Apple – Privacidad y ajustes](https://support.apple.com/108971)

## 6. Terceros proveedores y transferencia fuera de la UE

La aplicación utiliza los siguientes servicios:

- **Firebase (Google)**: fallos, rendimiento, análisis
- **RevenueCat**: gestión de compras dentro de la app

> RevenueCat utiliza un **identificador anónimo** (derivado del ID de Strava hasheado) para vincular una licencia a un usuario.  
> No se transmite **ningún dato personal identificable**.

Estos proveedores pueden procesar datos **fuera de la Unión Europea**, utilizando **cláusulas contractuales tipo** conforme al RGPD.

## 7. Derechos del usuario

Conforme al **RGPD**, el usuario tiene los siguientes derechos:

- **Acceso, rectificación y eliminación** de datos locales (desinstalando la app o cerrando sesión)
- **Revocación del acceso a Strava** desde la [página dedicada de Strava](https://www.strava.com/settings/apps)
- **Oposición a la recopilación de datos analíticos** en los ajustes de la app
- **Contacto con el responsable**: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 8. Público destinatario

La aplicación está reservada a usuarios que cumplan los requisitos para tener una **cuenta de Strava**, es decir:

- Tener **al menos 13 años**, o la **edad mínima requerida** en su país de residencia

## 9. Actualización de la política

Esta política puede ser **modificada en cualquier momento**.  
Cualquier versión actualizada será publicada en la app o en el sitio web oficial.

> Se invita al usuario a consultar regularmente la versión más reciente disponible.