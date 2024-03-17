# Comment contribuer à l'open source

Dans ce chapitre, nous vous guiderons à travers le processus de contribution aux projets open source. Nous aborderons les sujets suivants:

- Trouver des projets sur lesquels travailler
- Comment soumettre une contribution?
- S'intégrer dans un nouveau projet
- Que se passe-t-il ensuite?

## Trouver des projets sur lesquels travailler

L'un des premiers défis auxquels vous pouvez être confronté lorsque vous vous lancez dans l'open source est de trouver un projet auquel contribuer. Voici quelques conseils pour vous aider à découvrir des projets qui correspondent à vos intérêts et à vos compétences:

1. **Parcourir GitHub et GitLab**: GitHub et GitLab hébergent tous deux un grand nombre de projets open source. Vous pouvez utiliser leur fonction de recherche pour trouver des projets basés sur des mots-clés, des langages de programmation ou des sujets spécifiques.

2. **Suivez vos intérêts**: Réfléchissez aux outils, aux cadres et aux bibliothèques que vous utilisez ou sur lesquels vous souhaitez en savoir plus. Un grand nombre de ces projets sont libres et accueillent volontiers les contributions de la communauté.

3. **Rejoignez les communautés open source**: Il existe de nombreuses communautés, forums et plateformes de discussion en ligne consacrés au développement open source. En rejoignant ces communautés, vous pouvez entrer en contact avec d'autres développeurs, découvrir de nouveaux projets et trouver des possibilités de collaboration. Dans le serveur [Discord d'OpenSauced](https://discord.com/invite/U2peSNf23P) par exemple, nous partageons les premiers problèmes, les projets GitHub intéressants et les problèmes ouverts dans nos dépôts.

4. **Tirer parti d'OpenSauced**: [OpenSauced](https://opensauced.pizza/) est une plateforme qui aide les développeurs à découvrir des projets open source et à y contribuer. En utilisant OpenSauced, vous pouvez trouver des projets qui correspondent à vos intérêts, à vos compétences et à vos objectifs.

### Découvrir l'Open-Source avec OpenSauced

OpenSauced est un outil puissant pour trouver des projets open source auxquels contribuer. Pour commencer à utiliser OpenSauced, suivez les étapes suivantes:

1. **Créer un compte**: Visitez <https://www.opensauced.pizza/> et créer un compte en utilisant vos identifiants GitHub.

![Image](../../images/opensauced-signup.png)

Au cours de la procédure d'inscription, il vous sera demandé de choisir vos centres d'intérêt et de définir votre fuseau horaire. Cela aidera OpenSauced à vous recommander des projets qui correspondent à vos centres d'intérêt et à votre emploi du temps.

2. **Explorez le tableau de bord**: Une fois que vous vous êtes inscrit, vous accédez à votre tableau de bord, où vous pouvez consulter vos projets en cours, vos objectifs et vos contributions. En cliquant sur "Explorer" dans l'en-tête, vous pourrez parcourir les projets en fonction de vos intérêts et de vos compétences.

3. **Rechercher des projets**: Dans Explorer, vous pouvez voir une liste de dépôts et leurs niveaux d'activité et d'engagement pertinents qui sont actuellement en tendance. Vous pouvez également rechercher des projets en tapant dans la barre de recherche. Vous pouvez rechercher des projets par nom, par description ou par sujet et utiliser cet outil pour trouver quelque chose qui vous correspond.

![Explore](../../images/opensauced-explore.png)

4. **Enregistrez des projets dans vos pages "Insights"**: Lorsque vous trouvez des projets qui vous intéressent, vous pouvez les ajouter à ce que l'on appelle les pages "Insights", qui vous donnent plus de détails sur l'activité des projets. Vous pouvez également passer à l'étape suivante si vous préférez vous plonger dans le projet et y apporter votre contribution.

En utilisant OpenSauced, vous pouvez rationaliser le processus de recherche de projets open source sur lesquels travailler et vous concentrer sur la contribution aux projets qui correspondent à vos intérêts et à vos objectifs.

## Commencer par contribuer

Une fois que vous avez trouvé un projet auquel vous aimeriez contribuer, vous devez vous renseigner sur la manière dont le projet reçoit les contributions. Voici quelques mesures que vous pouvez prendre pour vous assurer que vous suivez les procédures que les responsables ont créées pour les contributeurs.

1. **Familiarisez-vous avec le projet**: Lisez la documentation du projet, y compris le fichier README, pour comprendre son but, ses objectifs et ses conventions de codage. Ensuite, lisez le fichier CONTRIBUTING pour mieux comprendre le processus de contribution. Familiarisez-vous avec le codebase du projet, sa structure et les problèmes existants (issues).

2. **Trouvez un bug/problème ou reporter un bug**: Recherchez les problèmes étiquetés comme "good first issue" (bon premier problème) ou "beginner-friendly" (adapté aux débutants) qui correspondent à votre niveau de compétence. Vous pouvez également identifier une fonctionnalité ou une amélioration sur laquelle vous aimeriez travailler et vérifier si elle s'inscrit dans la feuille de route du projet. Il peut s'agir de mises à jour de la documentation, de corrections de bogues, de modifications du contenu, etc.

3. **Demandez à ce que le problème vous soit attribué**: Lorsque vous apportez votre première contribution à un projet, il est conseillé de demander aux responsables de vous attribuer le problème. Cela vous permettra de vous assurer que vous ne faites pas double travail et que votre contribution est conforme aux objectifs et aux exigences du projet. S'il n'y a pas d'instructions dans le fichier CONTRIBUTING, vous pouvez faire un commentaire dans le problème, "Can I please be assigned this issue ?" (Puis-je me voir attribuer ce problème ?) Lorsque le responsable vous aura assigné ce problème, vous remarquerez que le problème est maintenant étiqueté avec votre nom d'utilisateur.

![issue assigned screenshot](../../images/issue-assign.png)

## Comment soumettre une contribution ?

Une fois le projet auquel vous souhaitez contribuer est trouvé, l'étape suivante consiste à soumettre une contribution. Voici les grandes lignes de la procédure:

1. **Faire une copie du dépôt (forker le dépôt)**: Créez une copie du dépôt du projet, ceci créera une copie du dépôt sur votre compte GitHub. Cela vous permettra d'apporter des modifications à la base de code sans affecter le projet original.

2. **Clonez votre fork**: Clonez votre dépôt forké sur votre machine locale en exécutant la commande suivante dans votre terminal ou votre invite de commande:

```
git clone https://github.com/username/repository-name.git
```

Remplacez "username" par votre nom d'utilisateur GitHub et "repository-name" par le nom du dépôt.

3. **Créer une nouvelle branche**: Avant d'apporter des modifications, créez une nouvelle branche dans votre dépôt local pour travailler sur votre contribution. Cela vous aidera à garder vos modifications séparées de la branche principale et facilitera la soumission d'une demande de tirage (pull request) plus tard. Vous pouvez créer une nouvelle branche en utilisant la commande suivante:

```
git checkout -b votre-nom-de-branche
```

Remplacez "votre-nom-de-branche" par un nom descriptif de votre branche, tel que "fix-bug-123" ou "add-new-feature".

4. **Effectuez vos modifications**: Maintenant que vous disposez d'une nouvelle branche, vous pouvez apporter des modifications au codebase. Veillez à respecter les directives et conventions de codage du projet, et testez vos modifications pour vous assurer qu'elles fonctionnent comme prévu.

5. **Validez vos modifications (commit)**: Une fois que vous avez effectué vos modifications, mettez-les en zone de préparation et validez-les (commiter les modifications) à l'aide des commandes suivantes:

```
git add .
git commit -m "Votre message de commit"
```

Remplacez "Votre message de commit" par une brève description des modifications que vous avez apportées.

5. **Envoyer vos modifications (push)**: Envoyer vos modifications vers votre dépôt forké sur GitHub en exécutant la commande suivante:

```
git push -b votre-nom-de-branche
```

Remplacez "votre-nom-de-branche" par le nom de votre branche.

7. **Soumettez une demande de tirage**: Une fois que vous avez pushé vos modifications, naviguez vers le dépôt du projet original sur GitHub et cliquez sur le bouton "Nouvelle demande de tirage" (New pull request). Dans la liste déroulante "rébase repository", sélectionnez le dépôt original, et dans la liste déroulante "head repository", sélectionnez votre dépôt forké. Choisissez votre branche dans la liste déroulante "compare", et cliquez sur "Créer la demande de tirage" (Create pull request). Remplissez les informations requises et soumettez votre demande de tirage.

8. **Répondre aux commentaires**: Après avoir soumis votre demande de tirage, les responsables du projet peuvent vous faire part de leurs commentaires ou demander des modifications. Veillez à répondre rapidement et à prendre en compte les préoccupations ou les suggestions qu'ils peuvent avoir.

En suivant ces étapes, vous pourrez soumettre vos contributions à des projets open source et collaborer avec d'autres développeurs pour améliorer le codebase.

## Faisons un cas pratique

Maintenant que vous savez comment trouver et contribuer à des projets open source, il est temps de mettre vos compétences en pratique. Pour ce faire, nous allons contribuer au guestbook d'OpenSauced en utilisant la spécification ["all contributors"](https://allcontributors.org/).

1. Commençons par forker le dépôt comme décrit ci-dessus, mais cette fois-ci, il s'agit du dépôt guestbook : <https://github.com/open-sauced/guestbook>. En cliquant sur "Faire une copie" (Fork) sur GitHub, vous créerez une copie du dépôt sur votre compte GitHub.

2. Ensuite, clonons ce dépôt sur notre machine locale. Dans votre terminal ou votre invite de commande, exécutez la commande suivante:

```
git clone git@github.com:[votre-username]/guestbook.git
```

> Ce tutoriel suppose que Node.js est installé sur votre machine, ce qui est nécessaire pour travailler avec ce projet. Si vous n'avez pas installé Node.js, vous pouvez le télécharger à partir de <https://nodejs.org/fr/download/>.

3. Une fois cloné, ouvrez le projet dans votre terminal et lancez `npm install` pour installer ses dépendances. Vous pouvez également lancer `pnpm install` si vous préférez un autre gestionnaire de paquets et l'installer.

4. **Créez une nouvelle branche**: Avant d'effectuer des modifications, n'oubliez pas de créer une nouvelle branche dans votre dépôt local pour travailler sur votre contribution. Vous pouvez créer une nouvelle branche en utilisant la commande suivante :

```
git checkout -b feature/add-profile-[votre-username]
```

N'oubliez pas de remplacer "votre-username" par votre nom d'utilisateur GitHub.

5. Exécutez `npm run contributors:add` pour vous ajouter à la liste des contributeurs et remplir le formulaire en fonction de vos contributions.

6. Exécutez `npm run contributors:generate` pour générer la nouvelle liste de contributeurs.

7. Validez vos modifications en commitant et publiez-les dans votre dépôt forké.

8. Une fois la demande pushé, naviguez vers le dépôt du projet original sur GitHub et cliquez sur le bouton "Nouvelle demande de tirage" (New pull request). Dans la liste déroulante "base repository", sélectionnez le dépôt original, et dans la liste déroulante "head repository", sélectionnez votre dépôt forké. Choisissez votre branche dans la liste déroulante "Comparer" (compare), et cliquez sur "Créer la demande de tirage" (Create pull request). Remplissez les informations requises et soumettez votre demande de tirage.

Félicitations ! Vous venez de faire une contribution open source ! Dans le prochain chapitre, nous l'ajouterons à un portfolio open source : un CV pour les contributions open source à travers lequel vous pouvez présenter votre travail et attirer de potentiels employeurs et des amis utilisant OpenSauced. Pour l'instant, terminons par quelques notes sur l'intégration.

## S'intégrer dans un nouveau projet

Lorsque vous rejoignez un nouveau projet open source, il est important de vous familiariser avec les lignes directrices, les conventions et le flux de travail du projet. Voici quelques conseils pour vous aider à réussir votre intégration:

1. **Lire la documentation**: Commencez par lire la documentation du projet, y compris le fichier README, les directives de contribution et le code de conduite. Cela vous aidera à comprendre les objectifs du projet, les exigences et les attentes des contributeurs.

2. **Rejoignez la communauté**: De nombreux projets open source disposent de communautés en ligne, de forums ou de plateformes de discussion où les développeurs peuvent poser des questions, partager leurs connaissances et collaborer. En rejoignant ces communautés, vous pouvez entrer en contact avec d'autres contributeurs, tirer parti de leurs expériences et obtenir de l'aide pour résoudre les problèmes que vous rencontrez.

3. **Commencez par de petites tâches**: lorsque vous débutez dans un projet, il est conseillé de commencer par de petites tâches gérables, telles que la correction de bugs, l'ajout de tests ou la mise à jour de la documentation. Cela vous aidera à vous familiariser avec le codebase et le flux de développement sans vous laisser submerger.

4. **Demandez de l'aide**: Si vous n'êtes pas sûr de quelque chose ou si vous rencontrez un problème, n'hésitez pas à demander de l'aide. Les communautés open source sont généralement solidaires et accueillantes, et les autres contributeurs seront heureux de vous aider.

5. **Soyez patient et persévérant**: L'intégration dans un nouveau projet peut s'avérer difficile, en particulier si vous êtes novice en matière de développement open source. Soyez patient avec vous-même et ne vous laissez pas décourager par les échecs ou les erreurs. Avec de la persévérance et de la pratique, vous deviendrez plus à l'aise et plus confiant dans vos contributions.

## Que se passe-t-il ensuite?

Une fois que votre contribution a été soumise et examinée, l'un des résultats suivants peut se produire:

1. **Votre contribution est acceptée**: Si votre contribution est approuvée par les responsables du projet, elle sera fusionnée dans la branche principale du codebase.

Félicitations! Votre travail fait désormais partie du projet et vous avez apporté une contribution précieuse à la communauté open source.

2. **Votre contribution nécessite des modifications**: Parfois, les responsables du projet peuvent demander des modifications à votre contribution avant qu'elle ne soit acceptée. Cela peut être dû à des problèmes de codage, à des conflits avec d'autres modifications ou à la nécessité d'une documentation supplémentaire. Dans ce cas, apportez les modifications demandées et soumettez à nouveau votre demande de tirage.

3. **Votre contribution est rejetée**: Dans certains cas, votre contribution peut ne pas correspondre aux objectifs ou aux exigences du projet, ou ne pas être la meilleure solution à un problème. Si votre contribution est rejetée, ne vous découragez pas. Prenez les commentaires que vous avez reçus comme une occasion d'apprendre et de vous améliorer. Vous pouvez toujours essayer de contribuer à un autre projet ou de soumettre une contribution différente pour le même projet.

En continuant à contribuer à des projets open source, vous acquerrez une expérience précieuse, développerez de nouvelles compétences et constituerez un solide portefeuille de travaux. Dans le prochain chapitre, nous discuterons de quelques stratégies pour commencer à contribuer à des projets open source, pour gagner du terrain dans vos contributions et pour développer votre CV open source à l'aide d'OpenSauced.

[Section suivante ->](06-la-sauce-secrète.md)

# Comment contribuer à l'open source

Dans ce chapitre, nous vous guiderons à travers le processus de contribution aux projets open source. Nous aborderons les sujets suivants:

- Trouver des projets sur lesquels travailler
- Comment soumettre une contribution ?
- S'intégrer dans un nouveau projet
- Que se passe-t-il ensuite ?

## Trouver des projets sur lesquels travailler

L'un des premiers défis auxquels vous pouvez être confronté lorsque vous vous lancez dans l'open source est de trouver un projet auquel contribuer. Voici quelques conseils pour vous aider à découvrir des projets qui correspondent à vos intérêts et à vos compétences:

1. **Parcourir GitHub et GitLab**: GitHub et GitLab hébergent tous deux un grand nombre de projets open source. Vous pouvez utiliser leur fonction de recherche pour trouver des projets basés sur des mots-clés, des langages de programmation ou des sujets spécifiques.

2. **Suivez vos intérêts**: Réfléchissez aux outils, aux cadres et aux bibliothèques que vous utilisez ou sur lesquels vous souhaitez en savoir plus. Un grand nombre de ces projets sont libres et accueillent volontiers les contributions de la communauté.

3. **Rejoignez les communautés open source**: Il existe de nombreuses communautés, forums et plateformes de discussion en ligne consacrés au développement open source. En rejoignant ces communautés, vous pouvez entrer en contact avec d'autres développeurs, découvrir de nouveaux projets et trouver des possibilités de collaboration. Dans le serveur [Discord d'OpenSauced](https://discord.com/invite/U2peSNf23P) par exemple, nous partageons les premiers problèmes, les projets GitHub intéressants et les problèmes ouverts dans nos dépôts.

4. **Tirer parti d'OpenSauced**: [OpenSauced](https://opensauced.pizza/) est une plateforme qui aide les développeurs à découvrir des projets open source et à y contribuer. En utilisant OpenSauced, vous pouvez trouver des projets qui correspondent à vos intérêts, à vos compétences et à vos objectifs.

### Découvrir l'Open-Source avec OpenSauced

OpenSauced est un outil puissant pour trouver des projets open source auxquels contribuer. Pour commencer à utiliser OpenSauced, suivez les étapes suivantes:

1. **Créer un compte**: Visitez <https://www.opensauced.pizza/> et créer un compte en utilisant vos identifiants GitHub.

![Image](../../images/opensauced-signup.png)

Au cours de la procédure d'inscription, il vous sera demandé de choisir vos centres d'intérêt et de définir votre fuseau horaire. Cela aidera OpenSauced à vous recommander des projets qui correspondent à vos centres d'intérêt et à votre emploi du temps.

2. **Explorez le tableau de bord**: Une fois que vous vous êtes inscrit, vous accédez à votre tableau de bord, où vous pouvez consulter vos projets en cours, vos objectifs et vos contributions. En cliquant sur "Explorer" dans l'en-tête, vous pourrez parcourir les projets en fonction de vos intérêts et de vos compétences.

3. **Rechercher des projets**: Dans Explorer, vous pouvez voir une liste de dépôts et leurs niveaux d'activité et d'engagement pertinents qui sont actuellement en tendance. Vous pouvez également rechercher des projets en tapant dans la barre de recherche. Vous pouvez rechercher des projets par nom, par description ou par sujet et utiliser cet outil pour trouver quelque chose qui vous correspond.

![Explore](../../images/opensauced-explore.png)

4. **Enregistrez des projets dans vos pages "Insights"**: Lorsque vous trouvez des projets qui vous intéressent, vous pouvez les ajouter à ce que l'on appelle les pages "Insights", qui vous donnent plus de détails sur l'activité des projets. Vous pouvez également passer à l'étape suivante si vous préférez vous plonger dans le projet et y apporter votre contribution.

En utilisant OpenSauced, vous pouvez rationaliser le processus de recherche de projets open source sur lesquels travailler et vous concentrer sur la contribution aux projets qui correspondent à vos intérêts et à vos objectifs.

## Commencer par contribuer

Une fois que vous avez trouvé un projet auquel vous aimeriez contribuer, vous devez vous renseigner sur la manière dont le projet reçoit les contributions. Voici quelques mesures que vous pouvez prendre pour vous assurer que vous suivez les procédures que les responsables ont créées pour les contributeurs.

1. **Familiarisez-vous avec le projet**: Lisez la documentation du projet, y compris le fichier README, pour comprendre son but, ses objectifs et ses conventions de codage. Ensuite, lisez le fichier CONTRIBUTING pour mieux comprendre le processus de contribution. Familiarisez-vous avec le codebase du projet, sa structure et les problèmes existants (issues).

2. **Trouvez un bug/problème ou reporter un bug**: Recherchez les problèmes étiquetés comme "good first issue" (bon premier problème) ou "beginner-friendly" (adapté aux débutants) qui correspondent à votre niveau de compétence. Vous pouvez également identifier une fonctionnalité ou une amélioration sur laquelle vous aimeriez travailler et vérifier si elle s'inscrit dans la feuille de route du projet. Il peut s'agir de mises à jour de la documentation, de corrections de bogues, de modifications du contenu, etc.

3. **Demandez à ce que le problème vous soit attribué**: Lorsque vous apportez votre première contribution à un projet, il est conseillé de demander aux responsables de vous attribuer le problème. Cela vous permettra de vous assurer que vous ne faites pas double travail et que votre contribution est conforme aux objectifs et aux exigences du projet. S'il n'y a pas d'instructions dans le fichier CONTRIBUTING, vous pouvez faire un commentaire dans le problème, "Can I please be assigned this issue ?" (Puis-je me voir attribuer ce problème ?) Lorsque le responsable vous aura assigné ce problème, vous remarquerez que le problème est maintenant étiqueté avec votre nom d'utilisateur.

![issue assigned screenshot](../../images/issue-assign.png)

## Comment soumettre une contribution?

Une fois le projet auquel vous souhaitez contribuer est trouvé, l'étape suivante consiste à soumettre une contribution. Voici les grandes lignes de la procédure:

1. **Faire une copie du dépôt (forker le dépôt)**: Créez une copie du dépôt du projet, ceci créera une copie du dépôt sur votre compte GitHub. Cela vous permettra d'apporter des modifications à la base de code sans affecter le projet original.

2. **Clonez votre fork**: Clonez votre dépôt forké sur votre machine locale en exécutant la commande suivante dans votre terminal ou votre invite de commande:

```
git clone https://github.com/username/repository-name.git
```

Remplacez "username" par votre nom d'utilisateur GitHub et "repository-name" par le nom du dépôt.

3. **Créer une nouvelle branche**: Avant d'apporter des modifications, créez une nouvelle branche dans votre dépôt local pour travailler sur votre contribution. Cela vous aidera à garder vos modifications séparées de la branche principale et facilitera la soumission d'une demande de tirage (pull request) plus tard. Vous pouvez créer une nouvelle branche en utilisant la commande suivante:

```
git checkout -b votre-nom-de-branche
```

Remplacez "votre-nom-de-branche" par un nom descriptif de votre branche, tel que "fix-bug-123" ou "add-new-feature".

4. **Effectuez vos modifications**: Maintenant que vous disposez d'une nouvelle branche, vous pouvez apporter des modifications au codebase. Veillez à respecter les directives et conventions de codage du projet, et testez vos modifications pour vous assurer qu'elles fonctionnent comme prévu.

5. **Validez vos modifications (commit)**: Une fois que vous avez effectué vos modifications, mettez-les en zone de préparation et validez-les (commiter les modifications) à l'aide des commandes suivantes:

```
git add .
git commit -m "Votre message de commit"
```

Remplacez "Votre message de commit" par une brève description des modifications que vous avez apportées.

5. **Envoyer vos modifications (push)**: Envoyer vos modifications vers votre dépôt forké sur GitHub en exécutant la commande suivante:

```
git push -b votre-nom-de-branche
```

Remplacez "votre-nom-de-branche" par le nom de votre branche.

7. **Soumettez une demande de tirage**: Une fois que vous avez pushé vos modifications, naviguez vers le dépôt du projet original sur GitHub et cliquez sur le bouton "Nouvelle demande de tirage" (New pull request). Dans la liste déroulante "rébase repository", sélectionnez le dépôt original, et dans la liste déroulante "head repository", sélectionnez votre dépôt forké. Choisissez votre branche dans la liste déroulante "compare", et cliquez sur "Créer la demande de tirage" (Create pull request). Remplissez les informations requises et soumettez votre demande de tirage.

8. **Répondre aux commentaires**: Après avoir soumis votre demande de tirage, les responsables du projet peuvent vous faire part de leurs commentaires ou demander des modifications. Veillez à répondre rapidement et à prendre en compte les préoccupations ou les suggestions qu'ils peuvent avoir.

En suivant ces étapes, vous pourrez soumettre vos contributions à des projets open source et collaborer avec d'autres développeurs pour améliorer le codebase.

## Faisons un cas pratique

Maintenant que vous savez comment trouver et contribuer à des projets open source, il est temps de mettre vos compétences en pratique. Pour ce faire, nous allons contribuer au guestbook d'OpenSauced en utilisant la spécification ["all contributors"](https://allcontributors.org/).

1. Commençons par forker le dépôt comme décrit ci-dessus, mais cette fois-ci, il s'agit du dépôt guestbook : <https://github.com/open-sauced/guestbook>. En cliquant sur "Faire une copie" (Fork) sur GitHub, vous créerez une copie du dépôt sur votre compte GitHub.

2. Ensuite, clonons ce dépôt sur notre machine locale. Dans votre terminal ou votre invite de commande, exécutez la commande suivante:

```
git clone git@github.com:[votre-username]/guestbook.git
```

> Ce tutoriel suppose que Node.js est installé sur votre machine, ce qui est nécessaire pour travailler avec ce projet. Si vous n'avez pas installé Node.js, vous pouvez le télécharger à partir de <https://nodejs.org/fr/download/>.

3. Une fois cloné, ouvrez le projet dans votre terminal et lancez `npm install` pour installer ses dépendances. Vous pouvez également lancer `pnpm install` si vous préférez un autre gestionnaire de paquets et l'installer.

4. **Créez une nouvelle branche**: Avant d'effectuer des modifications, n'oubliez pas de créer une nouvelle branche dans votre dépôt local pour travailler sur votre contribution. Vous pouvez créer une nouvelle branche en utilisant la commande suivante :

```
git checkout -b feature/add-profile-[votre-username]
```

N'oubliez pas de remplacer "votre-username" par votre nom d'utilisateur GitHub.

5. Exécutez `npm run contributors:add` pour vous ajouter à la liste des contributeurs et remplir le formulaire en fonction de vos contributions.

6. Exécutez `npm run contributors:generate` pour générer la nouvelle liste de contributeurs.

7. Validez vos modifications en commitant et publiez-les dans votre dépôt forké.

8. Une fois la demande pushé, naviguez vers le dépôt du projet original sur GitHub et cliquez sur le bouton "Nouvelle demande de tirage" (New pull request). Dans la liste déroulante "base repository", sélectionnez le dépôt original, et dans la liste déroulante "head repository", sélectionnez votre dépôt forké. Choisissez votre branche dans la liste déroulante "Comparer" (compare), et cliquez sur "Créer la demande de tirage" (Create pull request). Remplissez les informations requises et soumettez votre demande de tirage.

Félicitations ! Vous venez de faire une contribution open source ! Dans le prochain chapitre, nous l'ajouterons à un portfolio open source : un CV pour les contributions open source à travers lequel vous pouvez présenter votre travail et attirer de potentiels employeurs et des amis utilisant OpenSauced. Pour l'instant, terminons par quelques notes sur l'intégration.

## S'intégrer dans un nouveau projet

Lorsque vous rejoignez un nouveau projet open source, il est important de vous familiariser avec les lignes directrices, les conventions et le flux de travail du projet. Voici quelques conseils pour vous aider à réussir votre intégration:

1. **Lire la documentation**: Commencez par lire la documentation du projet, y compris le fichier README, les directives de contribution et le code de conduite. Cela vous aidera à comprendre les objectifs du projet, les exigences et les attentes des contributeurs.

2. **Rejoignez la communauté**: De nombreux projets open source disposent de communautés en ligne, de forums ou de plateformes de discussion où les développeurs peuvent poser des questions, partager leurs connaissances et collaborer. En rejoignant ces communautés, vous pouvez entrer en contact avec d'autres contributeurs, tirer parti de leurs expériences et obtenir de l'aide pour résoudre les problèmes que vous rencontrez.

3. **Commencez par de petites tâches**: lorsque vous débutez dans un projet, il est conseillé de commencer par de petites tâches gérables, telles que la correction de bugs, l'ajout de tests ou la mise à jour de la documentation. Cela vous aidera à vous familiariser avec le codebase et le flux de développement sans vous laisser submerger.

4. **Demandez de l'aide**: Si vous n'êtes pas sûr de quelque chose ou si vous rencontrez un problème, n'hésitez pas à demander de l'aide. Les communautés open source sont généralement solidaires et accueillantes, et les autres contributeurs seront heureux de vous aider.

5. **Soyez patient et persévérant**: L'intégration dans un nouveau projet peut s'avérer difficile, en particulier si vous êtes novice en matière de développement open source. Soyez patient avec vous-même et ne vous laissez pas décourager par les échecs ou les erreurs. Avec de la persévérance et de la pratique, vous deviendrez plus à l'aise et plus confiant dans vos contributions.

## Que se passe-t-il ensuite ?

Une fois que votre contribution a été soumise et examinée, l'un des résultats suivants peut se produire:

1. **Votre contribution est acceptée**: Si votre contribution est approuvée par les responsables du projet, elle sera fusionnée dans la branche principale du codebase.

Félicitations ! Votre travail fait désormais partie du projet et vous avez apporté une contribution précieuse à la communauté open source.

2. **Votre contribution nécessite des modifications**: Parfois, les responsables du projet peuvent demander des modifications à votre contribution avant qu'elle ne soit acceptée. Cela peut être dû à des problèmes de codage, à des conflits avec d'autres modifications ou à la nécessité d'une documentation supplémentaire. Dans ce cas, apportez les modifications demandées et soumettez à nouveau votre demande de tirage.

3. **Votre contribution est rejetée**: Dans certains cas, votre contribution peut ne pas correspondre aux objectifs ou aux exigences du projet, ou ne pas être la meilleure solution à un problème. Si votre contribution est rejetée, ne vous découragez pas. Prenez les commentaires que vous avez reçus comme une occasion d'apprendre et de vous améliorer. Vous pouvez toujours essayer de contribuer à un autre projet ou de soumettre une contribution différente pour le même projet.

En continuant à contribuer à des projets open source, vous acquerrez une expérience précieuse, développerez de nouvelles compétences et constituerez un solide portefeuille de travaux. Dans le prochain chapitre, nous discuterons de quelques stratégies pour commencer à contribuer à des projets open source, pour gagner du terrain dans vos contributions et pour développer votre CV open source à l'aide d'OpenSauced.

[Section suivante ->](/translations/fr/06-la-sauce-secrète.md)
