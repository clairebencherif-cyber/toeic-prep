# SPEC, Préparation TOEIC (objectif 750+)

## Utilisateurs
- V1 : une seule utilisatrice (moi), sur smartphone et ordinateur.
- Ouverture à d'autres personnes plus tard (nécessitera de vrais comptes), hors périmètre V1.

## Fonctionnalité principale
Se préparer au TOEIC Listening & Reading pour atteindre au moins 750/990, avec deux modes :
- Exercices courts (5 à 15 min), à faire chaque jour.
- Tests blancs complets (200 questions, 2 h : 100 en écoute puis 100 en lecture, chronométrés), de temps en temps.

Les questions sont originales, générées dans le style du TOEIC, avec le même format et la même structure que le vrai test.

## Structure du test à reproduire
- Écoute (environ 45 min, 100 questions) : Partie 1 photographies (6), Partie 2 question-réponse (25), Partie 3 conversations (39, soit 13 conversations de 3 questions), Partie 4 monologues (30, soit 10 monologues de 3 questions).
- Lecture (75 min, 100 questions) : Partie 5 phrases à compléter (30), Partie 6 textes à compléter (16), Partie 7 compréhension (54, passages simples et multiples).
- En mode test : chaque enregistrement n'est joué qu'une fois, sans retour en arrière sur l'audio.

## Écrans (3)
1. Accueil : exercice du jour, bouton pour lancer un test blanc, progression, dernier score estimé.
2. Session : questions, audio, chronomètre, pour un exercice court comme pour un test complet.
3. Résultats : correction détaillée avec explications, résultats par type de question, points faibles. Après un test blanc complet uniquement : fourchette de score estimé.

## Règles de score
- Exercice court : pourcentage de réussite par type de question. Pas de score sur 990.
- Test blanc complet : score par section converti avec une table de conversion approximative, affiché en fourchette et étiqueté « indicatif ».
- Raison : les tables de conversion officielles ne sont pas publiques et dépendent de chaque version du test. Les questions générées ont une difficulté inconnue.

## Exercice du jour
- Règle simple : le type de question avec le plus fort taux d'erreur sur mes dernières sessions, sinon rotation entre les types.

## Données à stocker
Chaque entité a un identifiant unique (UUID) et une date de création.
- Groupe : passage de texte, audio, image ou diagramme, partagé par une ou plusieurs questions (conversations, monologues, textes à compléter, passages de la Partie 7).
- Question : groupe (optionnel), texte, choix, bonne réponse, explication, partie, type, niveau estimé.
- Session : date de début, type (court/complet), statut (en cours/terminée), position atteinte, durée.
- Réponse : session, question, réponse donnée, temps passé.
- Score : session, section (écoute/lecture), nombre de bonnes réponses, score estimé (fourchette).

## Architecture
- Banque de questions : générée en amont par un script, puis relue. Stockée en fichiers statiques (JSON, MP3, images). Pas de génération à la volée.
- Progression : écrite d'abord dans le navigateur (local d'abord), puis synchronisée en arrière-plan.
- Synchronisation entre appareils : par code secret long, généré au premier lancement et saisi (ou scanné) sur l'autre appareil. Pas d'email ni de mot de passe.
- Seules les sessions terminées sont synchronisées, en ajout seulement (aucune modification après coup). Un test en cours reste sur son appareil.
- Service hébergé : une seule brique serveur, pour la synchronisation (type Supabase ou Firebase, à choisir). Toute lecture et écriture doit exiger le code secret.
- Export et import manuel de la progression en JSON, en secours.

## Contraintes
- Application Web responsive (smartphone et ordinateur). Sur ordinateur, les passages longs s'affichent à côté des questions.
- Chronomètre basé sur l'heure réelle, pas sur un compteur.
- État de la session sauvegardé après chaque réponse, avec reprise possible (appel téléphone, onglet fermé).
- Lecture audio déclenchée par un geste de l'utilisatrice (contrainte des navigateurs mobiles).

## Ordre de réalisation
1. Tranche verticale : Partie 5 seule (texte), 30 questions en JSON, les 3 écrans, déployée pour test sur téléphone.
2. Script de génération et de vérification des questions, puis Partie 2 avec audio.
3. Parties 3 et 4 (groupes), puis Parties 6 et 7.
4. Test blanc complet : chrono, reprise, fourchette de score.
5. Synchronisation entre appareils.
6. Points faibles et exercice du jour.
7. Partie 1 (photographies) en V1.1.

## Ce qu'on ne fera pas
- Pas de comptes, de mot de passe ni de connexion en V1.
- Pas de questions officielles ETS ; le score est une estimation, pas une garantie du score réel.
- Pas d'oral ni d'écriture (hors du périmètre du TOEIC Listening & Reading).
- Pas d'application mobile native.
- Pas de classements, de partage social ni de paiement.
- Pas de génération de questions à la volée.

## Décisions prises
- Stack : TypeScript, React, Vite, CSS simple, IndexedDB via Dexie, tests avec Vitest.
- Service de synchronisation : Supabase (à confirmer à l'étape 5).
- Hébergement : Vercel.

## Points à décider
- Voix de synthèse pour l'audio (accents à varier).
- Date visée pour le vrai test, pour dimensionner la banque de questions.
