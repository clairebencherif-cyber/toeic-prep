# SPEC — Préparation TOEIC (objectif 750+)

## Utilisateurs
- Version 1 : une seule utilisatrice (moi).
- Ouverture possible à d'autres personnes plus tard, sans que ce soit prévu dans la V1.

## Fonctionnalité principale
Se préparer au TOEIC Listening & Reading pour atteindre au moins 750/990, avec deux modes :
- **Exercices courts** (5 à 15 min) à faire chaque jour.
- **Tests blancs complets** (200 questions, 2 h, écoute puis lecture, chronométrés) en conditions réelles, de temps en temps.

Les questions sont originales, générées dans le style du TOEIC, avec le même format et la même structure que le vrai test.

## Écrans (3)
1. **Accueil** : exercice du jour, bouton pour lancer un test blanc, progression et score estimé.
2. **Session** : réponse aux questions (audio, chronomètre), pour un exercice court comme pour un test complet.
3. **Résultats** : score estimé sur 990, correction détaillée, points faibles.

## Données à stocker
- **Questions** : texte, choix, bonne réponse, partie (écoute/lecture), type (photos, dialogues, grammaire, textes…), fichier audio éventuel.
- **Sessions** : date, type (court/complet), durée.
- **Réponses** : réponse donnée à chaque question.
- **Scores** : score estimé par session.

## Contraintes
- Application Web utilisable sur smartphone (affichage adapté aux petits écrans).

## Ce qu'on ne fera pas
- Pas de comptes ni de connexion en V1.
- Pas de questions officielles ETS ; le score est une estimation, pas une garantie du score réel.
- Pas d'oral ni d'écriture (hors du périmètre du TOEIC Listening & Reading).
- Pas d'application mobile native.
- Pas de classements, de partage social ni de paiement.
