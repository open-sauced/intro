# Outils pour réussir

Pour réussir votre parcours dans l'open source, il est essentiel de vous familiariser avec les outils et les plateformes couramment utilisés par la communauté. Ces outils vous aideront à collaborer efficacement, à gérer vos projets et à contribuer aux projets open source. Dans ce chapitre, nous aborderons les outils essentiels suivants pour la collaboration open source :

- GitHub et Git
- VS Code (l'éditeur)
- Discord

## Prérequis
Avant de pouvoir suivre ce guide, il convient d'effectuer les opérations suivantes :
- Créer un [compte GitHub](https://github.com/)
- Télécharger [VS Code](https://code.visualstudio.com/)

## GitHub et Git

### Introduction à Git

Git est un système de contrôle de version distribué conçu pour gérer rapidement et efficacement tous les projets, des plus petits aux plus grands. Il a été créé par Linus Torvalds, le créateur du noyau Linux, pour gérer le développement du noyau Linux lui-même.

Git permet aux développeurs de suivre les modifications apportées à leur code, de collaborer avec d'autres développeurs et de gérer plusieurs versions de leurs projets. Certaines des fonctionnalités clés de Git incluent :

- **Branchements** : Git permet aux développeurs de créer des branches, qui sont des copies séparées de leur base de code. Ils peuvent ainsi travailler sur de nouvelles fonctionnalités ou des corrections de bogues sans affecter la base de code principale. Une fois les modifications terminées, ils peuvent fusionner la branche avec la base de code principale.
- **Zone de préparation (index/tampon)** : Git fournit une zone de préparation où les développeurs peuvent préparer leurs modifications avant de les valider dans le référentiel. Cela leur permet de revoir et d'organiser leurs modifications avant de les rendre permanentes.
- **Contrôle de version distribué** : Contrairement aux systèmes de contrôle de version centralisés, Git est un système de contrôle de version distribué. Cela signifie que chaque développeur dispose d'une copie complète du dépôt sur sa machine locale, ce qui lui permet de travailler hors ligne et indépendamment d'un serveur central.

### Introduction à GitHub

GitHub est une plateforme web de contrôle de version et de collaboration qui utilise Git comme technologie sous-jacente. Elle offre une interface simple et conviviale pour gérer les dépôts Git, ainsi qu'une multitude de fonctionnalités et d'outils pour collaborer avec d'autres développeurs.

Voici quelques-unes des principales caractéristiques de GitHub :

- **Suivi des problèmes** : GitHub propose un système intégré de suivi des problèmes qui permet aux développeurs de créer, d'attribuer et de gérer les problèmes liés à leurs projets. Les problèmes peuvent être catégorisés à l'aide d'étiquettes, d'étapes et de destinataires, ce qui facilite le suivi de l'avancement du projet et la hiérarchisation des tâches.
- **Demandes de tirage** : GitHub introduit le concept de "pull requests", qui permet aux développeurs de proposer des modifications à la base de code d'un projet. Les demandes de tirage permettent la révision du code, la discussion et la collaboration avant que les changements ne soient fusionnés dans la base de code principale.
- **Forking (copie)** : GitHub permet aux utilisateurs de créer une copie d'un dépôt, appelée fork. Cela leur permet d'apporter des modifications à la base de code sans affecter le projet original. Une fois les modifications terminées, ils peuvent soumettre une demande de tirage pour que leurs modifications soient examinées et éventuellement fusionnées dans la base de code principale.
- **GitHub Actions** : GitHub Actions est un puissant outil d'automatisation qui vous permet de créer des flux de travail personnalisés pour automatiser des tâches telles que la construction, le test et le déploiement de votre code.

## Premiers pas avec Git et GitHub

Pour débuter avec GitHub, suivez les étapes suivantes :

1. **Installez Git** : Téléchargez et installez Git sur votre ordinateur en [visitant le site officiel de Git](https://git-scm.com/) et en suivant les instructions d'installation correspondant à votre système d'exploitation.

2. **Configurez Git** : Après avoir installé Git, ouvrez un terminal ou une invite de commande et configurez vos informations d'utilisateur Git en exécutant les commandes suivantes :

```
git config --global user.name "Votre nom utilisateur"
git config --global user.email "votre.mail@exemple.com"
```

Remplacez "Votre nom utilisateur" par votre nom complet et "votre.mail@exemple.com" par l'adresse e-mail que vous avez utilisée pour vous inscrire sur GitHub.

### S'entraîner à contribuer avec VS Code
Pour nous entraîner à utiliser GitHub, nous allons créer un dépôt, le cloner, y apporter des modifications et les pusher.

1. **Créez un nouveau dépôt** : Connectez-vous à votre compte GitHub et naviguez vers https://github.com/new ou cliquez sur l'icône "+" dans le coin supérieur droit et sélectionnez "Nouveau dépôt" dans le menu déroulant.

Choisissez vous-même comme propriétaire du dépôt, et saisissez un nom pour votre dépôt. Pour cet exemple, nous utiliserons `practice-repository`.

![Capture d'écran d'un nouveau dépôt sur GitHub](../../images/new-repo.png)

Choisissez si vous voulez qu'il soit public ou privé. Vous pouvez également choisir d'initialiser le dépôt avec un fichier README, un fichier `.gitignore`, et/ou une licence.

Pour cet exemple, initialiser le dépôt avec un fichier README.

2. **Clonez le dépôt** : Une fois que vous avez créé un nouveau dépôt, vous pouvez le cloner sur votre machine locale en exécutant la commande suivante dans votre terminal ou votre invite de commande :

```
git clone https://github.com/username/repository-name.git
```

Remplacez "username" par votre nom d'utilisateur GitHub et "repository-name" par `practice-repository`.

3. **Accédez à votre dépôt dans votre éditeur de code** : Pour cet exemple, nous utilisons VS Code. Ouvrez VS Code, naviguez jusqu'à l'onglet File, puis ouvrez votre dossier `practice-repository`.

4. **Apportez des modifications et validez** : Il devrait y avoir un fichier dans votre dépôt : `README.md`. Dans ce fichier, sous `# practice-repository`, tapez 'hello world !'. Une fois que vous avez fait des changements, vous pouvez les mettre en scène et les livrer.

Ouvrez votre terminal et assurez-vous que vous êtes dans le bon répertoire. Par exemple, mes projets de codage se trouvent dans mon dossier Projects. En utilisant mon terminal, j'accèderais à ce dépôt en exécutant la commande suivante :

```
cd projects/practice-repository
```

Une fois dans le bon dépôt, utilisez les commandes suivantes pour ajouter les modifications que vous avez effectuées et écrivez un message de validation avec une description des modifications :

```
git add .
git commit -m "Votre message de commit"
```

Remplacez "Votre message de commit" par une brève description des modifications que vous avez apportées.

5. **Envoyez vos modifications (push)** : Après avoir validé vos modifications, vous pouvez les pusher vers votre dépôt GitHub distant en exécutant la commande suivante :

```
git push origin main
```

Ceci enverra vos changements vers la branche "main" de votre dépôt distant. Si vous voulez vérifier votre travail, naviguez vers votre dépôt GitHub. Vous devriez maintenant voir 'hello world!' dans votre fichier README.md.

Vous avez maintenant configuré avec succès Git et GitHub sur votre machine locale et vous êtes prêt à collaborer sur des projets open source !

## VS Code

Visual Studio Code (VS Code) est un éditeur de code populaire, gratuit et open-source développé par Microsoft. Il prend en charge un large éventail de langages de programmation et offre de nombreuses fonctionnalités qui en font un excellent choix pour le développement open source :

- **Prise en charge intégrée de Git** : VS Code offre un support intégré pour Git, ce qui vous permet de gérer vos dépôts Git, de mettre en scène et de valider les modifications, et de résoudre les conflits de fusion directement à partir de l'éditeur.
- **Extensibilité** : VS Code offre un riche écosystème d'extensions qui peuvent améliorer votre expérience de développement et ajouter la prise en charge de langages, d'outils et de frameworks supplémentaires.
- **Terminal intégré** : VS Code comprend un terminal intégré qui vous permet d'exécuter des commandes, des scripts et des tâches de construction directement depuis l'éditeur.
- **Personnalisable** : VS Code est hautement personnalisable, ce qui vous permet d'adapter l'éditeur à vos préférences et à votre flux de travail. Vous pouvez personnaliser le thème, les raccourcis clavier et les paramètres pour créer un environnement de développement personnalisé.

Pour télécharger et [installer VS Code, visitez le site officiel](https://code.visualstudio.com/) et suivez les instructions correspondant à votre système d'exploitation.

## Discord

Discord est une plateforme populaire de messagerie et de chat vocal largement utilisée par les communautés open source pour la communication et la collaboration. En rejoignant des serveurs Discord liés à vos intérêts et à vos projets, vous pouvez :

- **Entrer en contact avec d'autres développeurs** : Discord vous permet de discuter avec d'autres développeurs, de poser des questions et de partager vos connaissances avec la communauté.
- **Rester informé** : De nombreux projets open source utilisent Discord pour partager des mises à jour, des annonces et d'autres informations importantes. En rejoignant leurs serveurs, vous pouvez rester informé des derniers développements et contribuer plus efficacement.
- **Participe aux discussions** : Les serveurs Discord accueillent souvent des discussions sur divers sujets liés au développement de logiciels libres. En participant à ces discussions, vous pouvez apprendre des autres, partager vos idées et contribuer au savoir collectif de la communauté.
- **Trouver des opportunités de collaboration** : Les serveurs Discord peuvent être un excellent moyen de trouver des personnes qui partagent vos intérêts et recherchent des opportunités de collaboration. En tissant des liens avec d'autres développeurs, vous pouvez découvrir de nouveaux projets sur lesquels travailler et former de précieuses collaborations.

Pour commencer à utiliser Discord, [visitez le site web officiel](https://discord.com/) et créez un compte. Une fois que vous avez un compte, vous pouvez rechercher des communautés et des projets open source sur des plateformes telles que GitHub, GitLab ou OpenSauced pour trouver leurs serveurs Discord et participer à la conversation.

En vous familiarisant avec ces outils et plateformes, vous serez en mesure de collaborer efficacement, de gérer vos projets et de contribuer à des projets open source. Dans le prochain chapitre, nous verrons comment contribuer à des projets open source, notamment en trouvant des projets sur lesquels travailler, en soumettant des contributions et en expliquant ce qui se passe une fois que votre contribution est acceptée.

[Section suivante ->](/translations/fr/05-comment-contribuer-à-l-open-source.md)

<a href="https://github.com/open-sauced/intro/edit/main/translations/fr/04-outils-pour-reussir.md">
  ✏️ Éditer cette page
</a>
