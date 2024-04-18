# Contribuer à OpenSauced Intro

Les contributions sont toujours les bienvenues, quelle que soit leur importance. Avant de contribuer, veuillez lire le [Code de Conduite](https://docs.opensauced.pizza/contributing/code-of-conduct/) et suivre les instructions de ce guide.

## Style de communication recommandé

1. Laissez toujours des captures d'écran pour les changements visuels.
2. Laissez toujours une description détaillée dans la Pull Request. Ne laissez rien d'ambigu pour le(s) réviseur(s).
3. Révisez toujours votre code en premier. Assurez-vous d'exécuter le projet localement et de le tester avant de demander une révision.
4. Communiquez toujours dans le dépôt GitHub. Qu'il s'agisse d'un problème ou d'une demande d'extraction, le fait de garder les lignes de communication ouvertes et visibles pour tous les membres de l'équipe permet d'aider tout le monde autour de vous.

## Issues

Lorsque vous contribuez au projet pour la première fois, pensez à vérifier les étiquettes [bug](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) ou [good first issue](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

Si vous souhaitez travailler sur une issue ouverte, veuillez commenter avec `.take`, et il vous sera attribué. Si un problème n'est pas assigné, il est supposé être disponible pour n'importe qui. Par conséquent, attribuez-vous une issue avant de commencer à travailler afin d'éviter les conflits.

Vous avez une idée et souhaitez ajouter une section ou un chapitre à ce cours ? Vous pouvez créer une issue pour y répondre. Mais les mainteneurs doivent trier l'issue avant que vous puissiez travailler dessus. Si vous souhaitez travailler sur l'issue, veuillez marquer nos mainteneurs `@open-sauced/docs` dans le commentaire pour les avertir.

Vous pouvez toujours demander de l'aide dans le canal `🍕opensauced-contributors-chat` sur notre communauté [Discord](https://discord.com/invite/U2peSNf23P) ou dans les discussions GitHub si vous êtes bloqué pendant que vous travaillez sur vos modifications ou si vous avez besoin d'éclaircissements.

## Démarrage

### Configurer le projet localement

1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) le [dépôt intro](https://github.com/open-sauced/intro) sur votre propre compte GitHub.
2. [Clonez](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) le dépôt forké sur votre machine locale.

   ```bash
   git clone https://github.com/<your-username>/intro.git
   ```

3. Naviguez jusqu'au projet et ouvrez-le dans votre éditeur de code.

   ```bash
   cd intro
   ```

4. Créez une nouvelle branche pour travailler sur vos modifications.

   ```bash
   git checkout -b YOUR-BRANCH-NAME
   ```

   Remplacez "YOUR-BRANCH-NAME" par un nom descriptif de votre branche - par exemple, `feat/add-submit-button`.

5. Exécutez le projet.

### Exécuter le projet localement

Il est essentiel d'exécuter le projet localement pour voir vos modifications en temps réel et les tester minutieusement lorsque vous y contribuez.

Nous recommandons l'une des deux méthodes suivantes pour exécuter le projet sur votre machine locale :

1. Utiliser [docsify CLI](https://docsify.js.org/#/).
2. En utilisant l'extension [Live Server de Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

#### Méthode 1 : Utilisation du CLI de docsify

1. **Installez Node.js**.

   Vous pouvez le télécharger à partir du [site web de Node.js officiel](https://nodejs.org/).

2. **Installez docsify globalement**.

   Il est fortement recommandé d'installer docsify globalement. Dans votre terminal, exécutez la commande suivante :

   ```bash
   npm install -g docsify-cli
   ```

3. **Exécutez le projet**.

   ```bash
   docsify serve
   ```

   Cette commande démarre un serveur de développement local, et vous pouvez accéder au projet dans votre navigateur web à l'adresse `http://localhost:3000`.

4. **Procédez aux modifications et les tester**.

   Lorsque le serveur local fonctionne, vous pouvez apporter des modifications aux fichiers et voir immédiatement les résultats dans votre navigateur. Testez soigneusement vos modifications.

5. **Arrêtez le serveur**.

   Après avoir terminé et testé les changements, vous pouvez arrêter le serveur local en appuyant sur `Ctrl + C` dans le terminal.

#### Méthode 2 : Utilisation de l'extension Live Server sur Visual Studio Code (VS Code)

L'extension Live Server vous permet de lancer un serveur de développement local et de prévisualiser vos modifications en temps réel dans votre navigateur.

1. **Installez Visual Studio Code**.

   Téléchargez [Visual Studio Code](https://code.visualstudio.com/) et installez-le si vous ne l'avez pas encore fait.

2. **Ouvrez le projet dans VS Code**.

   Lancez VS Code, ouvrez le dossier du projet en sélectionnant "File" > "Open Folder", et choisissez le répertoire du projet.

3. **Installez l'extension Live Server**.

   - Cliquez sur "View" dans la barre supérieure du code VS.
   - Cliquez sur "Extensions".

   Vous pouvez également appuyer sur le raccourci `Ctrl + Shift + X` pour ouvrir le menu "Extensions".

   - Recherchez "Live Server" de Ritwick Dey et installez-le.

4. **Lancez le Live Server**.

   Cliquez sur le bouton "Go Live" dans le coin inférieur droit de la fenêtre VS Code. Le projet s'ouvrira dans un nouvel onglet de votre navigateur à une adresse locale.

5. **Procédez aux modifications et les tester**.

   Avec le Live Server en cours d'exécution, vous pouvez apporter des modifications aux fichiers à l'aide de VS Code, et les modifications seront automatiquement reflétées dans votre navigateur. Testez soigneusement vos modifications.

6. **Arrêtez le Live Server**.

   Quand vous avez terminé de tester ou de faire des modifications, vous pouvez arrêter le Live Server en cliquant sur le bouton "Port: 5500" dans la barre d'état de VS Code en bas à droite.

## Travailler avec le Contenu

Les contenus de ce cours sont écrits en [Markdown](https://www.markdownguide.org/). Veuillez lire la section [Utilisation de Markdown pour ce projet](#notions-de-base-sur-le-markdown) pour plus de détails sur l'utilisation de Markdown dans ce projet.

### Ajouter des définitions au glossaire

Si vous ajoutez des définitions au chapitre [Glossaire](glossaire.md), assurez-vous que les définitions sont ajoutées dans l'ordre **alphabétique**.

### Ajouter une nouvelle section à un chapitre

Si votre contenu peut entrer dans la catégorie d'un des chapitres du cours, envisagez de l'ajouter en tant que nouvelle section du chapitre. Créez un titre `heading 2` et rédigez votre contenu.

Vous pouvez ajouter un nouveau chapitre s'il est plus approprié pour une section indépendante.

### Ajouter un nouveau chapitre et l'ajouter à la barre latérale

Dans cette section, nous allons vous expliquer comment ajouter un nouveau chapitre à notre cours d'introduction à l'Open Source et l'ajouter à la barre latérale.

#### Ajouter un nouveau chapitre

Suivez les étapes suivantes pour ajouter un nouveau chapitre à notre cours :

1. **Créez un nouveau fichier Markdown**.

   Créez un nouveau fichier Markdown (`.md`) à la racine et nommez-le en fonction du contenu du chapitre - par exemple, `how-to-contribute-to-open-source.md` pour un chapitre sur la façon de contribuer à l'open source.

   > **NOTE** : Veillez à respecter les conventions de dénomination. Notez que les noms de fichiers ne sont pas en majuscules et que les traits d'union remplacent les espaces entre les mots.

2. **Déterminez le numéro du chapitre**.

   Nous avons des conventions spécifiques pour numéroter les noms de fichiers afin de maintenir une structure cohérente. Dans ce projet, les nombres dans le nom du fichier représentent les chapitres - par exemple, `01-intro`, `02-what-is-open-source`, `03-why-open-source`, etc.

   Réfléchissez à la place logique du nouveau chapitre sur lequel vous allez travailler dans le cours.

   Si vous n'êtes pas sûr, commentez le problème et marquez les mainteneurs de `@open-sauced/community` pour demander de l'aide.

3. **Écrivez le contenu**.

   Ouvrez le fichier Markdown nouvellement créé dans un éditeur de texte et rédigez le contenu de votre chapitre en utilisant la syntaxe Markdown. Vous pouvez inclure des titres, du texte, des images, des liens, des listes et d'autres éléments pour présenter vos informations de manière efficace.

   > **Note** : Il ne doit y avoir qu'un seul **titre 1` dans chaque fichier.

4. **Assurez-vous qu'il n'y a pas de numéros de chapitre en double et qu'ils sont dans l'ordre**.

   Il ne doit y avoir qu'un seul numéro pour chaque chapitre (pas de duplication), et les numéros doivent être dans l'ordre pour que le cours soit fluide. Vous devez renommer les autres fichiers qui suivent votre nouveau fichier en changeant le numéro de chapitre en conséquence.

5. **Testez vos changements**.

   Avant de finaliser votre nouveau chapitre, vous devez tester vos modifications localement. Vous pouvez construire ou afficher le projet pour vous assurer que votre nouveau chapitre apparaît comme prévu dans la structure du cours.

6. **Mettez à jour la barre latérale**.

   Après avoir ajouté un nouveau chapitre, vous devez également l'ajouter à la barre latérale pour que les utilisateurs puissent en découvrir le contenu.

#### Ajouter de nouveaux chapitres à la barre latérale

La barre latérale de notre cours sert de menu de navigation. Ainsi, lorsque vous ajoutez un nouveau chapitre au cours, il est important de mettre à jour la barre latérale en incluant le lien vers le chapitre. De cette façon, les utilisateurs peuvent naviguer vers le contenu de manière transparente.

Suivez ces étapes pour ajouter de nouveaux chapitres à la barre latérale :

1. Naviguez vers `_layouts/sidebar.js`.
2. **Ajoutez le lien du nouveau chapitre**.

   - Insérez une nouvelle ligne dans la liste basée sur le numéro de votre chapitre. Par exemple, si votre numéro de chapitre est `07`, insérez cette nouvelle ligne juste après `06`.
   - Utilisez le format ci-dessous pour ajouter le lien vers le nouveau chapitre :

     ```markdown
     - [Intro](https://github.com/01-intro.md)
     ```

      - Remplacez `Intro` par le titre de votre nouveau chapitre. Veillez à mettre une majuscule au titre_.
      - Remplacez `/01-intro.md` par le chemin relatif vers le fichier Markdown de votre nouveau chapitre.

3. **Assurez-vous que les numéros du chapitre sont dans l'ordre**.

   Les numéros de chapitre doivent être dans l'ordre. Vous devez donc modifier les numéros de chapitre dans les chemins relatifs qui suivent le nouveau chapitre.

4. **Créez une demande de fusion** (pull request).

   Une fois que vous avez créé le nouveau chapitre et vérifié qu'il répond aux exigences de notre projet, vous pouvez soumettre votre contribution en créant une demande d'extraction.

5. **Révision et retour d'information**.

   Attendez que les mainteneurs examinent votre pull request, et soyez prêt à recevoir des commentaires de leur part ou de la part de collaborateurs. Apportez des modifications si nécessaire pour affiner votre contribution.

Une fois votre contribution acceptée, votre nouveau chapitre fera partie de notre cours et en améliorera le contenu pour les utilisateurs et les contributeurs.

## Utiliser Markdown pour ce projet

Nous avons un [guide de style](https://github.com/open-sauced/pizza-verse/blob/main/style-guide.md) pour utiliser Markdown pour nos projets. Ainsi, lorsque vous contribuez à ce projet, vous devez suivre cette convention.

### Notions de base sur le Markdown

Markdown est un langage de balisage léger et facile à utiliser qui vous permet de formater du texte de manière lisible et visuellement attrayante.

Vous trouverez ci-dessous des exemples d'éléments Markdown que vous utiliserez couramment dans ce projet, en suivant notre guide de style :

#### 1. Titres

Le symbole du dièse (`#`) permet de créer des titres (titres et sous-titres). Il existe six niveaux de titres de section, et le nombre de symboles indique le niveau du titre.

```markdown
# Titre 1

## Titre 2
```

#### 2. Formatage du texte

- Mettez le texte en gras en l'entourant de doubles astérisques (`**`).
- Mettez le texte en italique en l'entourant de simples traits de soulignement (`_`).
- Créez du code en ligne en entourant le texte de barres d'espacement (`` ` ``).

```markdown
**Il s'agit d'un texte en gras.**

_TIl s'agit d'un texte en italique._

Il s'agit d'un `code en ligne`.
```


#### 3. Listes

- Créez des listes ordonnées en utilisant des nombres suivis d'un point (`1.`, `2.`, etc.).
- Créer des listes non ordonnées en utilisant des traits d'union (`-`).

```markdown
1. Élément 1
2. Elément 2

- Élément non ordonné 1
- Élément non ordonné 2
```

#### 4. Liens

Créez des liens en utilisant des crochets (`[]`) pour le texte du lien et des parenthèses (`()`) pour l'URL.

```markdown
[Introduction à l'Open Source avec OpenSauced](https://intro.opensauced.pizza/#/)
```

#### 5. Images

Pour intégrer des images, utilisez un point d'exclamation (`!`), suivi de crochets (`[]`) pour le texte alt et de parenthèses (`()`) pour l'URL de l'image.

```markdown
![Create new repository on GitHub](../_assets/images/new-repo.png)
```

#### 6. Extrait de citation

Créez des extraits de citation entre guillemets à l'aide du symbole plus grand que (`>`).

```markdown
> Il s'agit d'un extrait de citation.
```

#### 7. Blocs de code

Créez des blocs de code en utilisant des triples crochets (` `` `) pour les blocs de code clôturés et spécifiez une langue à côté des crochets avant le bloc de code clôturé pour mettre en évidence la syntaxe.

````
```bash
git pull
```
````

### Conseils sur le format Markdown

- Prévisualisez votre contenu Markdown localement pour vous assurer qu'il est correctement formaté avant de soumettre votre contribution.
- Gardez votre contenu Markdown organisé, et utilisez des titres pour structurer vos sections.
- Il ne peut y avoir qu'un seul "titre 1" dans chaque chapitre.
- Utilisez des blocs de code pour mettre en évidence des extraits de code ou des exemples de configuration.
- Consultez le site officiel [Markdown Guide](https://www.markdownguide.org/basic-syntax/) pour plus d'informations sur l'utilisation de Markdown.

## Traduire le cours d'introduction à l'Open Source

Traduire notre cours d'introduction à l'Open Source permet de le rendre plus accessible à un public plus large. Si vous souhaitez traduire ce cours, veuillez lire notre page [🌐 i18n Guidelines](../../../i18n-guidelines.md).
