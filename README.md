# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## About this Prodject

Online-Shopping-Cart

### Überblick

"Online-Shopping-Cart" ist ein modernes E-Commerce-Projekt, das auf React basiert und eine Vielzahl fortschrittlicher Features und Technologien verwendet. Es zielt darauf ab, eine benutzerfreundliche, effiziente und interaktive Online-Shopping-Erfahrung zu bieten.

### Kernfunktionalitäten

Datenabruf und State-Management

    useState und useEffect: Zum Abrufen und Speichern von Produktdaten aus einer externen API (https://fakestoreapi.com/products).
    useReducer: Für ein effektives State-Management. Es ermöglicht das Hinzufügen und Entfernen von Produkten im Warenkorb sowie das Aktualisieren der Produktmengen und des Gesamtpreises.

Context API

    ShopData Context: Ermöglicht einen globalen Zustand für die Anwendung, um den Zugriff auf zentrale Daten wie Produktdaten und Warenkorbaktionen zu vereinfachen.

Routing

    React Router: Bietet eine saubere und effiziente Navigation innerhalb der Anwendung mit verschiedenen Routen wie /home und /carts.

### Code-Beschreibung

App.jsx

Die App.jsx-Datei implementiert die Kernfunktionalitäten des Projekts, indem sie State-Hooks, den Reducer und das Context API verwendet, um eine strukturierte und wartbare Anwendungsarchitektur zu schaffen.
Context.js

Die Context.js-Datei definiert den ShopData-Context, der für das Bereitstellen eines globalen Zustands innerhalb der Anwendung sorgt.
Usereducer.js

Die Usereducer.js-Datei enthält den Initialzustand und die Reducer-Logik, um verschiedene Aktionen wie das Hinzufügen und Entfernen von Produkten sowie die Aktualisierung der Produktmengen und des Gesamtpreises zu verwalten.
Products.jsx

Die Products.jsx-Komponente bietet eine interaktive Benutzeroberfläche, um Produkte basierend auf Kategorien und Preisspannen zu filtern. Sie implementiert auch einen Scroll-to-Top-Button für verbesserte Benutzerfreundlichkeit.
Zusammenfassung

Das Projekt "Online-Shopping-Cart" integriert moderne Web-Technologien und Best Practices von React, um eine nahtlose und interaktive Einkaufserfahrung zu schaffen. Durch den Einsatz von Hooks, dem Context API und React Router bietet es eine robuste Lösung für die Herausforderungen moderner E-Commerce-Anwendungen.
