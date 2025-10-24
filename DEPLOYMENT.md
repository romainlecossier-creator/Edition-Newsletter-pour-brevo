# Guide de Déploiement sur GitHub Pages

Ce guide vous explique comment mettre en ligne votre éditeur de newsletter en utilisant GitHub Pages. C'est une solution gratuite et parfaite pour partager facilement votre application avec vos collègues.

## Prérequis

1.  **Un compte GitHub :** Vous en avez déjà un, c'est parfait !
2.  **Git :** C'est un outil en ligne de commande qui permet de communiquer avec GitHub. Si vous ne l'avez pas, [installez-le depuis le site officiel](https://git-scm.com/downloads).
3.  **Le code de l'application :** Tous les fichiers de l'éditeur sur votre ordinateur.

---

## Étape 1 : Créer un dépôt (repository) sur GitHub

Un "dépôt" est simplement un projet sur GitHub. Il contiendra tous les fichiers de votre application.

1.  Connectez-vous à votre compte GitHub.
2.  Cliquez sur l'icône **`+`** en haut à droite, puis sur **`New repository`**.
3.  **Nom du dépôt (`Repository name`) :** Choisissez un nom simple, par exemple `editeur-newsletter`.
4.  **Description (optionnel) :** Ajoutez une courte description, comme "Éditeur HTML pour les newsletters de Brevo".
5.  **Public/Private :** Cochez **`Public`**. **Important :** C'est cette option qui rend GitHub Pages gratuit. Si vous le mettez en privé, le déploiement ne fonctionnera pas (ou nécessitera un compte payant).
6.  Cliquez sur le bouton vert **`Create repository`**.

---

### Dépannage : Que faire si mon dépôt est déjà créé et en "privé" ?

Pas de panique ! Vous pouvez changer sa visibilité très facilement :

1.  Allez sur la page principale de votre dépôt sur GitHub.
2.  Cliquez sur l'onglet **`Settings`**.
3.  Tout en bas de la page des options générales (`General`), vous trouverez la **"Danger Zone"** (zone de danger).
4.  La dernière option est **`Change repository visibility`**. Cliquez sur le bouton `Change visibility`.
5.  Sélectionnez **`Change to public`**.
6.  GitHub vous demandera de confirmer en tapant le nom complet de votre dépôt (par exemple `VOTRE_NOM_UTILISATEUR/editeur-newsletter`). Faites-le et validez.

Votre dépôt est maintenant public, et vous pouvez continuer le guide !

---

## Étape 2 : Envoyer votre code sur GitHub

Maintenant, nous allons envoyer les fichiers de votre ordinateur vers le dépôt que vous venez de créer.

1.  Ouvrez un **terminal** (ou "Invite de commandes" sur Windows) dans le dossier où se trouvent les fichiers de votre application (`index.html`, `App.tsx`, etc.).

2.  Initialisez Git dans votre dossier en tapant la commande suivante et en appuyant sur `Entrée` :
    ```bash
    git init -b main
    ```

3.  Ajoutez tous les fichiers du projet pour que Git puisse les suivre :
    ```bash
    git add .
    ```

4.  Enregistrez cette première version de votre code (c'est ce qu'on appelle un "commit") :
    ```bash
    git commit -m "Première version de l'éditeur"
    ```

5.  Connectez votre dossier local au dépôt distant sur GitHub. Copiez la commande depuis la page de votre dépôt sur GitHub (celle qui commence par `git remote add origin...`). Elle ressemblera à ceci (remplacez `VOTRE_NOM_UTILISATEUR` et `editeur-newsletter` par les vôtres) :
    ```bash
    git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/editeur-newsletter.git
    ```

6.  Enfin, envoyez ("poussez") votre code vers GitHub :
    ```bash
    git push -u origin main
    ```
    GitHub vous demandera peut-être de vous connecter.

Si vous retournez sur la page de votre dépôt sur GitHub et que vous l'actualisez, vous devriez voir tous vos fichiers !

---

## Étape 3 : Activer GitHub Pages

C'est l'étape magique qui va mettre votre application en ligne.

1.  Sur la page de votre dépôt GitHub, cliquez sur l'onglet **`Settings`**.
2.  Dans le menu de gauche, cliquez sur **`Pages`**.
3.  Dans la section "Build and deployment", sous **`Source`**, assurez-vous que **`Deploy from a branch`** est sélectionné.
4.  Dans la section **`Branch`**, sélectionnez la branche `main` et le dossier `/ (root)`.
5.  Cliquez sur **`Save`**.

---

## Étape 4 : Partager votre application !

Et voilà ! GitHub va maintenant construire et déployer votre site. Cela peut prendre 1 à 2 minutes.

-   Sur la même page des `Settings` > `Pages`, une bannière verte apparaîtra en haut avec l'URL de votre site en ligne.
-   L'URL ressemblera à : **`https://VOTRE_NOM_UTILISATEUR.github.io/editeur-newsletter/`**

Vous pouvez maintenant copier cette URL et la partager avec tous vos collègues. Ils pourront utiliser l'application directement dans leur navigateur.

---

## Comment mettre à jour l'application ?

Si vous modifiez le code sur votre ordinateur et que vous voulez mettre à jour la version en ligne, c'est très simple :

1.  Ouvrez à nouveau un terminal dans le dossier du projet.
2.  Ajoutez vos modifications :
    ```bash
    git add .
    ```
3.  Faites un "commit" avec une description de vos changements :
    ```bash
    git commit -m "Exemple: Correction du bug de la virgule dans les tags"
    ```
4.  Envoyez les changements sur GitHub :
    ```bash
    git push origin main
    ```

GitHub Pages détectera automatiquement la mise à jour et déploiera la nouvelle version de votre site en quelques minutes.
