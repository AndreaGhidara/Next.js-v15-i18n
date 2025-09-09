# 🌍 Next.js 15 + i18n Boilerplate

Un progetto base con **Next.js 15** e **next-intl**  
per la gestione dell’internazionalizzazione (i18n).  
Supporta routing multilingua, traduzioni dinamiche e include esempi di gestione di **loading, error, not-found e global-error**.

---

## 🚀 Tech Stack

- **Next.js 15 (App Router)** 🖤
- **next-intl** → i18n semplice ed elegante
- **TypeScript** → tipizzazione sicura
- **Tailwind CSS** → styling veloce e moderno
- **Prettier** → formattazione del codice coerente

---

## 📂 Struttura del progetto

app/
├─ [locale]/ # Route segment per lingua (es. /it, /en)
│ ├─ layout.tsx # Layout locale con NextIntlClientProvider
│ ├─ page.tsx # Homepage localizzata
│ ├─ loading.tsx # Skeleton UI per caricamenti
│ ├─ error.tsx # Error boundary per questa lingua
│ └─ not-found.tsx # Pagina 404 localizzata
│
├─ layout.tsx # Root layout con <html> e <body>
├─ global-error.tsx # Gestione errori a livello globale
└─ globals.css # Stili globali

messages/
├─ en.json # Traduzioni inglese
└─ it.json # Traduzioni italiano


---


---

## 🌐 Routing multilingua

- Ogni lingua vive sotto un segmento:
    - `/it` → italiano 🇮🇹
    - `/en` → inglese 🇬🇧

- Se un utente va su un path non valido → **not-found.tsx**
- Se avviene un errore runtime → **error.tsx** o **global-error.tsx**

---

## ✨ Funzionalità implementate

### 🔤 Internazionalizzazione (i18n)
- Traduzioni caricate dinamicamente da `/messages/{locale}.json`
- Hook personalizzato `useChangeLocale` per cambiare lingua con un semplice `setLocale("en")`

### 🌀 Loading state
- **loading.tsx** mostra una UI temporanea quando la pagina ha un fetch lento

### 💥 Error handling
- **error.tsx** → intercetta errori all’interno della route `[locale]`
- **global-error.tsx** → fallback globale con `<html>` e `<body>` indipendenti

### ❌ 404 personalizzato
- **not-found.tsx** → pagina “non trovata” specifica per ogni lingua

---

## 🛠️ Setup

1. Clona il repo
   ```bash
   git clone git@github.com:AndreaGhidara/Next.js-v15-i18n.git
   cd Next.js-v15-i18n

2. Installa dipendenze

    ```bash
   npm install

3. Avvia il dev server

    ```bash
   npm run dev

Visita 👉 http://localhost:3000/it

o 👉 http://localhost:3000/en

---

📌 TODO / Possibili estensioni

Aggiungere nuove lingue (es. 🇪🇸 🇫🇷)

Supporto a date & time formatting con Intl.DateTimeFormat

Esempio API locale con app/api/.../route.ts

Test E2E con Playwright per loading/error/not-found