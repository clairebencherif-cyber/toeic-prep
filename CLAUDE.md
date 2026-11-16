# Contexte du projet

Application web de préparation au TOEIC Listening & Reading (objectif 750+), pour une seule utilisatrice, sur smartphone et ordinateur. Le projet sert aussi d'exercice d'apprentissage du vibe coding : l'utilisatrice veut comprendre ce qui est construit.
La référence est SPEC.md. En cas de doute, la spec fait foi. Ne rien ajouter qui soit dans « Ce qu'on ne fera pas ».

# Façon de travailler
- Répondre en français, avec le tutoiement, ton simple et direct. Pas de tirets longs.
- Avancer par petites étapes suivant « Ordre de réalisation » de la spec. Une étape à la fois, expliquée avant d'être codée.
- Expliquer les choix techniques avec un exemple concret, en partant de zéro.
- Demander avant d'ajouter une dépendance, un service ou un fichier de configuration.
- Faire un commit par étape terminée, avec un message clair en français.
- Dire franchement quand un point est fragile ou quand une demande contredit la spec.

# Règles techniques
- Mobile d'abord, puis adaptation ordinateur.
- Local d'abord : tout est écrit dans le navigateur, la synchronisation vient après.
- Données en ajout seulement, avec UUID et horodatage sur chaque entité.
- Chronomètre basé sur l'heure réelle. Sauvegarde de l'état après chaque réponse.
- Audio lancé par un geste de l'utilisatrice. En mode test, aucun rejeu.
- La banque de questions est statique (JSON, MP3, images). Jamais d'appel à un modèle depuis l'application.
- Tests automatisés pour la logique de score et de fusion de sessions.
- Sécurité de la synchronisation : aucune table lisible ou modifiable sans le code secret. Vérifier les règles d'accès avant tout déploiement.
- Aucune question officielle ETS ne doit être copiée dans le projet.

# Stack
À confirmer avant de coder (voir « Points à décider » dans SPEC.md).
