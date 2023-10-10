# Como contribuir para o código aberto

Neste capítulo, iremos orientá-lo pelo processo de contribuição para projetos de código aberto. Abordaremos os seguintes tópicos:

- Encontrando projetos para contribuir
- Como enviar uma contribuição?
- Integração em um novo projeto
- O que acontece em seguida?

## Encontrando projetos para contribuir

Um dos primeiros desafios que você pode enfrentar ao entrar no mundo do código aberto é encontrar um projeto para contribuir. Aqui estão algumas dicas para ajudá-lo a descobrir projetos que correspondam aos seus interesses e habilidades:

1. **Explore o GitHub e o GitLab**: Tanto o GitHub quanto o GitLab hospedam uma grande quantidade de projetos de código aberto. Você pode usar a função de pesquisa deles para encontrar projetos com base em palavras-chave, linguagens de programação ou tópicos específicos.

2. **Siga seus interesses**: Pense nas ferramentas, estruturas (frameworks) e bibliotecas que você usa ou gostaria de aprender mais. Muitos desses projetos são de código aberto e recebem de bom grado contribuições da comunidade.

3. **Junte-se às comunidades de código aberto**: Existem muitas comunidades, fóruns e plataformas de discussão online dedicados ao desenvolvimento de código aberto. Ao se juntar a essas comunidades, você pode entrar em contato com outros desenvolvedores, descobrir novos projetos e encontrar oportunidades de colaboração. Por exemplo, no servidor [Discord do OpenSauced](https://discord.com/invite/U2peSNf23P), compartilhamos problemas iniciais, projetos interessantes do GitHub e problemas abertos em nossos repositórios.

4. **Aproveite o OpenSauced**: [OpenSauced](https://opensauced.pizza/) é uma plataforma que ajuda os desenvolvedores a descobrir projetos de código aberto para contribuir. Usando o OpenSauced, você pode encontrar projetos que correspondam aos seus interesses, habilidades e metas.

### Explorando o código aberto com o OpenSauced

O OpenSauced é uma ferramenta poderosa para encontrar projetos de código aberto para contribuir. Para começar a usar o OpenSauced, siga estas etapas:

1. **Crie uma conta**: Visite <https://www.opensauced.pizza/> e crie uma conta usando suas credenciais do GitHub.

![Imagem](../../opensauced-signup.png)

Durante o processo de registro, você será solicitado a escolher seus interesses e definir seu fuso horário. Isso ajudará o OpenSauced a recomendar projetos que correspondam aos seus interesses e ao seu cronograma.

2. **Explore o painel**: Após o registro, você terá acesso ao seu painel, onde pode ver seus projetos em andamento, metas e contribuições. Clicando em "Explorar" no cabeçalho, você poderá navegar por projetos com base em seus interesses e habilidades.

3. **Pesquise projetos**: No Explorador, você pode ver uma lista de repositórios e suas atividades e envolvimento relevantes que estão em tendência atualmente. Você também pode pesquisar projetos digitando na barra de pesquisa. Você pode procurar projetos por nome, descrição ou tópico e usar essa ferramenta para encontrar algo que lhe interesse.

![Explorar](../../opensauced-explore.png)

4. **Salve projetos em suas "Insights"**: Quando encontrar projetos de seu interesse, você pode adicioná-los ao que chamamos de "Insights", que fornecem mais detalhes sobre a atividade dos projetos. Você também pode passar para a próxima etapa se preferir se envolver diretamente no projeto e fazer sua contribuição.

Usando o OpenSauced, você pode simplificar o processo de encontrar projetos de código aberto para contribuir e se concentrar em contribuir para projetos que correspondam aos seus interesses e objetivos.

## Começando a contribuir

Depois de encontrar um projeto ao qual você gostaria de contribuir, é importante entender como o projeto aceita contribuições. Aqui estão algumas etapas que você pode seguir para garantir que está seguindo os procedimentos estabelecidos pelos mantenedores para os contribuidores.

1. **Familiarize-se com o projeto**: Leia a documentação do projeto, incluindo o arquivo README, para entender seu propósito, objetivos e convenções de codificação. Em seguida, leia o arquivo CONTRIBUTING para compreender o processo de contribuição. Explore o código do projeto, sua estrutura e as issues existentes.

2. **Encontre um bug/problema ou relate um bug**: Procure por issues marcadas como "good first issue" (bom primeiro problema) ou "beginner-friendly" (amigável para iniciantes) que correspondam ao seu nível de habilidade. Você também pode identificar um recurso ou melhoria na qual gostaria de trabalhar e verificar se está alinhado com a roadmap do projeto. Isso pode envolver atualizações na documentação, correções de bugs, modificações de conteúdo, etc.

3. **Solicite atribuição do problema**: Quando você fizer sua primeira contribuição a um projeto, é aconselhável solicitar que os mantenedores atribuam o problema a você. Isso garante que você não está duplicando esforços e que sua contribuição está alinhada com os objetivos e requisitos do projeto. Se não houver instruções no arquivo CONTRIBUTING, você pode comentar na issue: "Posso ser atribuído a este problema?". Quando um mantenedor o atribuir, você verá seu nome de usuário na issue.

![Captura de tela da issue atribuída](../../issue-assign.png)

## Como enviar uma contribuição?

Depois de encontrar o projeto ao qual deseja contribuir, o próximo passo é enviar a contribuição. Aqui estão as etapas gerais do processo:

1. **Faça um fork do repositório**: Crie uma cópia do repositório do projeto no seu próprio perfil GitHub. Isso criará uma cópia do repositório em sua conta GitHub, permitindo que você faça alterações no código sem afetar o projeto original.

2. **Clone o seu fork**: Clone o repositório forkado para a sua máquina local usando o seguinte comando no seu terminal ou prompt de comando:

```bash
git clone https://github.com/username/nome-do-repositorio.git
```

Substitua "username" pelo seu nome de usuário GitHub e "nome-do-repositorio" pelo nome do repositório.

3. **Crie uma nova branch**: Antes de fazer alterações, crie uma nova branch no seu repositório local para trabalhar na sua contribuição. Isso ajuda a manter suas alterações separadas da branch principal e facilita o envio de uma pull request posteriormente. Você pode criar uma nova branch com o seguinte comando:

```bash
git checkout -b nome-da-sua-branch
```

Substitua "nome-da-sua-branch" por um nome descritivo, como "correcao-bug-123" ou "nova-funcionalidade".

4. **Faça as suas alterações**: Agora que você tem uma nova branch, pode fazer as alterações no código. Certifique-se de seguir as diretrizes e convenções de codificação do projeto, e teste as suas alterações para garantir que funcionam conforme o esperado.

5. **Confirme as suas alterações (commit)**: Após fazer as suas alterações, coloque-as na área de preparação e faça um commit usando os seguintes comandos:


```bash
git add .
git commit -m "Sua mensagem de commit"
```

Substitua "Sua mensagem de commit" por uma breve descrição das alterações que você fez.

6. **Envie as suas alterações (push)**: Envie as suas alterações para o seu repositório forkado no GitHub usando o seguinte comando:

```bash
git push origin nome-da-sua-branch
```

Substitua "nome-da-sua-branch" pelo nome da sua branch.

7. **Crie uma pull request**: Após enviar as suas alterações, vá para o repositório original do projeto no GitHub e clique no botão "Nova pull request" (New pull request). Na lista suspensa "base repository" (repositório base), selecione o repositório original e, na lista suspensa "head repository" (repositório de origem), selecione o seu repositório forkado. Escolha a sua branch na lista suspensa "compare" (comparar) e clique em "Criar pull request" (Create pull request). Preencha as informações necessárias e envie a sua pull request.

8. **Responda aos comentários**: Após enviar a sua pull request, os mantenedores do projeto podem fazer comentários ou solicitar alterações. Certifique-se de responder prontamente e considerar as preocupações ou sugestões que possam surgir.

Ao seguir essas etapas, você estará pronto para enviar as suas contribuições para projetos de código aberto e colaborar com outros desenvolvedores para melhorar o código base.

## Prática

Agora que você sabe como encontrar e contribuir para projetos de código aberto, é hora de colocar as suas habilidades em prática. Vamos contribuir para o guestbook do OpenSauced usando a especificação ["all contributors"](https://allcontributors.org/).

1. Comece fazendo um fork do repositório, conforme descrito acima, mas desta vez, o repositório é o guestbook: <https://github.com/open-sauced/guestbook>. Clicando em "Fork" no GitHub, você criará uma cópia do repositório na sua conta do GitHub.

2. Em seguida, clone esse repositório na sua máquina local. No seu terminal ou prompt de comando, execute o seguinte comando:

```bash
git clone git@github.com:[seu-nome-de-usuario]/repositorio.git
```

> Este tutorial presume que o Node.js está instalado na sua máquina, o que é necessário para trabalhar com este projeto. Se você não tiver o Node.js instalado, pode baixá-lo em <https://nodejs.org/pt-br/download/>.

3. Depois de clonar, abra o projeto no seu terminal e execute `npm install` para instalar as dependências. Você também pode usar `pnpm install` se preferir outro gerenciador de pacotes.

4. **Crie uma nova branch**: Antes de fazer alterações, lembre-se de criar uma nova branch no seu repositório local para trabalhar na sua contribuição. Você pode criar uma nova branch com o seguinte comando:

```bash
git checkout -b feature/adicionar-perfil-[seu-nome-de-usuario]
```


Não se esqueça de substituir "[seu-nome-de-usuario]" pelo seu nome de usuário GitHub.

5. Execute `npm run contributors:add` para adicionar-se à lista de contribuidores e preencha o formulário com base nas suas contribuições.

6. Execute `npm run contributors:generate` para gerar a nova lista de contribuidores.

7. Confirme as suas alterações, faça um commit e envie para o seu repositório forkado.

8. Após o envio, vá para o repositório original do projeto no GitHub e clique em "Nova pull request" (New pull request). Na lista suspensa "base repository" (repositório base), selecione o repositório original e, na lista suspensa "head repository" (repositório de origem), selecione o seu repositório forkado. Escolha a sua branch na lista suspensa "compare" (comparar) e clique em "Criar pull request" (Create pull request). Preencha as informações necessárias e envie a sua pull request.

Parabéns! Você acabou de fazer uma contribuição para o código aberto! No próximo capítulo, você a adicionará ao seu portfólio de código aberto - um currículo para contribuições de código aberto onde poderá mostrar o seu trabalho e atrair potenciais empregadores e amigos que usam o OpenSauced. Por enquanto, vamos continuar com algumas notas sobre integração.

## Integração em um Novo Projeto

Quando você se junta a um novo projeto de código aberto, é importante se familiarizar com as diretrizes, convenções e fluxo de trabalho do projeto. Aqui estão algumas dicas para ajudar você a ter sucesso na sua integração:

1. **Leia a documentação**: Comece lendo a documentação do projeto, incluindo o arquivo README, as diretrizes de contribuição e o código de conduta. Isso ajudará você a entender os objetivos do projeto, os requisitos e as expectativas dos contribuidores.

2. **Junte-se à comunidade**: Muitos projetos de código aberto têm comunidades online, fóruns ou plataformas de discussão onde os desenvolvedores podem fazer perguntas, compartilhar conhecimento e colaborar. Ao se juntar a essas comunidades, você pode entrar em contato com outros contribuidores, aproveitar suas experiências e obter ajuda para resolver os problemas que encontrar.

3. **Comece com tarefas pequenas**: quando você está começando em um projeto, é aconselhável começar com tarefas pequenas e gerenciáveis, como corrigir bugs, adicionar testes ou atualizar a documentação. Isso ajudará você a se familiarizar com o código-fonte e o fluxo de desenvolvimento sem se sentir sobrecarregado.

4. **Peça ajuda**: Se você não tem certeza de algo ou está enfrentando um problema, não hesite em pedir ajuda. As comunidades de código aberto geralmente são solidárias e acolhedoras, e outros contribuidores ficarão felizes em ajudar você.

5. **Seja paciente e persistente**: Integrar-se a um novo projeto pode ser desafiador, especialmente se você for novo no desenvolvimento de código aberto. Seja paciente consigo mesmo e não desanime com falhas ou erros. Com perseverança e prática, você se tornará mais confortável e confiante em suas contribuições.

## O que acontece em seguida?

Depois que sua contribuição for enviada e revisada, um dos seguintes resultados pode ocorrer:

1. **Sua contribuição é aceita**: Se sua contribuição for aprovada pelos responsáveis pelo projeto, ela será mesclada na branch principal do código-fonte.

Parabéns! Seu trabalho agora faz parte do projeto e você fez uma contribuição valiosa para a comunidade de código aberto.

2. **Sua contribuição requer alterações**: Às vezes, os responsáveis pelo projeto podem solicitar alterações em sua contribuição antes de aceitá-la. Isso pode ser devido a problemas de codificação, conflitos com outras alterações ou necessidade de documentação adicional. Nesse caso, faça as alterações solicitadas e envie novamente sua solicitação de pull.

3. **Sua contribuição é rejeitada**: Em alguns casos, sua contribuição pode não atender aos objetivos ou requisitos do projeto, ou pode não ser a melhor solução para um problema. Se sua contribuição for rejeitada, não desanime. Considere os comentários recebidos como uma oportunidade de aprendizado e melhoria. Você sempre pode tentar contribuir para outro projeto ou enviar uma contribuição diferente para o mesmo projeto.

Continuando a contribuir para projetos de código aberto, você ganhará experiência valiosa, desenvolverá novas habilidades e construirá um portfólio sólido de trabalho. No próximo capítulo, discutiremos algumas estratégias para começar a contribuir para projetos de código aberto, ganhar terreno em suas contribuições e desenvolver seu currículo de código aberto com a ajuda do OpenSauced.

# Como contribuir para o código aberto

Neste capítulo, vamos guiá-lo pelo processo de contribuição para projetos de código aberto. Abordaremos os seguintes tópicos:

- Encontrar projetos para trabalhar
- Como enviar uma contribuição?
- Integrando-se a um novo projeto
- O que acontece em seguida?

## Encontrar projetos para trabalhar

Um dos primeiros desafios que você pode enfrentar ao entrar no mundo do código aberto é encontrar um projeto ao qual contribuir. Aqui estão algumas dicas para ajudá-lo a descobrir projetos que se encaixem em seus interesses e habilidades:

1. **Explore o GitHub e o GitLab**: O GitHub e o GitLab hospedam uma grande quantidade de projetos de código aberto. Você pode usar a função de pesquisa deles para encontrar projetos com base em palavras-chave, linguagens de programação ou tópicos específicos.

2. **Siga seus interesses**: Pense nas ferramentas, estruturas e bibliotecas que você usa ou gostaria de aprender mais. Muitos desses projetos são de código aberto e recebem contribuições da comunidade com prazer.

3. **Junte-se às comunidades de código aberto**: Existem muitas comunidades, fóruns e plataformas de discussão online dedicados ao desenvolvimento de código aberto. Ao se juntar a essas comunidades, você pode entrar em contato com outros desenvolvedores, descobrir novos projetos e encontrar oportunidades de colaboração. No servidor [Discord do OpenSauced](https://discord.com/invite/U2peSNf23P), por exemplo, compartilhamos problemas iniciais, projetos interessantes no GitHub e problemas abertos em nossos repositórios.

4. **Aproveite o OpenSauced**: [OpenSauced](https://opensauced.pizza/) é uma plataforma que ajuda os desenvolvedores a descobrir projetos de código aberto e contribuir para eles. Usando o OpenSauced, você pode encontrar projetos que se alinham com seus interesses, habilidades e metas.

### Descobrindo o código aberto com o OpenSauced

O OpenSauced é uma ferramenta poderosa para encontrar projetos de código aberto para contribuir. Para começar a usar o OpenSauced, siga estas etapas:

1. **Crie uma conta**: Visite <https://www.opensauced.pizza/> e crie uma conta usando suas credenciais do GitHub.

![Imagem](../../opensauced-signup.png)

Durante o processo de inscrição, você será solicitado a escolher seus interesses e definir seu fuso horário. Isso ajudará o OpenSauced a recomendar projetos que se ajustem aos seus interesses e horário.

2. **Explore o painel**: Depois de se inscrever, você terá acesso ao seu painel, onde poderá ver seus projetos em andamento, objetivos e contribuições. Clicando em "Explorar" no cabeçalho, você poderá navegar por projetos com base em seus interesses e habilidades.

3. **Pesquise projetos**: No Explorador, você pode ver uma lista de repositórios e suas atividades e envolvimento relevantes que estão atualmente em tendência. Você também pode pesquisar projetos digitando na barra de pesquisa. Você pode pesquisar projetos por nome, descrição ou tópico e usar essa ferramenta para encontrar algo que seja adequado para você.

![Explorar](../../opensauced-explore.png)

1. **Salve projetos nas suas páginas "Insights"**: Quando você encontrar projetos que lhe interessam, pode adicioná-los ao que são chamadas de páginas "Insights", que fornecem mais detalhes sobre a atividade dos projetos. Você também pode prosseguir para a próxima etapa se preferir se envolver diretamente no projeto e contribuir para ele.

Usando o OpenSauced, você pode simplificar o processo de busca por projetos de código aberto para trabalhar e se concentrar em contribuir para projetos que correspondem aos seus interesses e objetivos.

## Começando a contribuir

Depois de encontrar um projeto ao qual gostaria de contribuir, é importante entender como o projeto recebe contribuições. Aqui estão algumas etapas que você pode seguir para garantir que está seguindo os procedimentos estabelecidos pelos responsáveis pelo projeto para os contribuidores.

1. **Familiarize-se com o projeto**: Leia a documentação do projeto, incluindo o arquivo README, para entender o propósito, os objetivos e as convenções de codificação do projeto. Em seguida, leia o arquivo CONTRIBUTING para entender melhor o processo de contribuição. Familiarize-se com o código-fonte do projeto, sua estrutura e os problemas existentes (issues).

2. **Encontre um bug/problema ou relate um bug**: Procure por problemas rotulados como "good first issue" (bom primeiro problema) ou "beginner-friendly" (amigável para iniciantes) que correspondam ao seu nível de habilidade. Você também pode identificar um recurso ou melhoria com os quais gostaria de trabalhar e verificar se eles estão alinhados com a trajetória do projeto. Isso pode incluir atualizações na documentação, correções de bugs, alterações de conteúdo, etc.

3. **Peça para ser atribuído ao problema**: Quando você está fazendo sua primeira contribuição a um projeto, é aconselhável pedir aos responsáveis para ser atribuído ao problema. Isso garantirá que você não está trabalhando duplicadamente e que sua contribuição está de acordo com os objetivos e requisitos do projeto. Se não houver instruções no arquivo CONTRIBUTING, você pode comentar no problema, "Posso ser atribuído a este problema, por favor?" Quando o responsável atribuir o problema a você, você notará que o problema agora está etiquetado com seu nome de usuário.

![captura de tela do problema atribuído](../../issue-assign.png)

## Como enviar uma contribuição?

Depois de encontrar o projeto para o qual deseja contribuir, o próximo passo é enviar uma contribuição. Aqui estão os passos gerais do procedimento:

1. **Faça um fork do repositório**: Crie uma cópia do repositório do projeto, isso criará uma cópia do repositório na sua conta do GitHub. Isso permitirá que você faça alterações na base de código sem afetar o projeto original.

2. **Clone o seu fork**: Clone o repositório forkado para a sua máquina local executando o seguinte comando no seu terminal ou prompt de comando:

```shell
git clone https://github.com/username/repository-name.git

```

3. **Criar uma nova branch**: Antes de fazer qualquer modificação, crie uma nova branch no seu repositório local para trabalhar na sua contribuição. Isso ajudará a manter suas alterações separadas da branch principal e facilitará a submissão de uma solicitação de pull request posteriormente. Você pode criar uma nova branch usando o seguinte comando:

```shell
git checkout -b seu-nome-de-branch
```

Substitua "seu-nome-de-branch" pelo nome descritivo da sua branch, como "correcao-bug-123" ou "adicao-nova-funcionalidade".

4. **Faça suas alterações**: Agora que você criou uma nova branch, pode fazer as alterações no código-fonte. Certifique-se de seguir as diretrizes e convenções de codificação do projeto e teste suas alterações para garantir que elas funcionem como esperado.

5. **Confirme suas alterações (commit)**: Após concluir suas alterações, coloque-as na área de preparação e confirme-as (faça um commit) usando os seguintes comandos:

```shell
git add .
git commit -m "Sua mensagem de commit"
```

Substitua "Sua mensagem de commit" por uma breve descrição das alterações que você fez.

5. **Envie suas alterações (push)**: Envie suas alterações para o seu repositório fork no GitHub executando o seguinte comando:

```shell
git push -u origin seu-nome-de-branch
```

Substitua "seu-nome-de-branch" pelo nome da sua branch onde você fez as alterações.

7. **Enviar uma solicitação de pull request**: Após ter enviado suas alterações, vá para o repositório original do projeto no GitHub e clique no botão "Nova solicitação de pull" (New pull request). Na lista suspensa "repositório base" (base repository), selecione o repositório original e, na lista suspensa "repositório de origem" (head repository), selecione o seu repositório fork. Escolha a sua branch na lista suspensa "comparar" (compare), e clique em "Criar solicitação de pull" (Create pull request). Preencha as informações necessárias e envie a sua solicitação de pull request.

8. **Responder aos comentários**: Após enviar a sua solicitação de pull request, os mantenedores do projeto podem fornecer comentários ou solicitar alterações. Certifique-se de responder prontamente e levar em consideração as preocupações ou sugestões que possam ter.

Seguindo esses passos, você poderá enviar as suas contribuições para projetos open source e colaborar com outros desenvolvedores para melhorar o código-base.

## Vamos fazer um exercício prático

Agora que você sabe como encontrar e contribuir para projetos open source, é hora de colocar suas habilidades em prática. Para isso, vamos contribuir para o guestbook do OpenSauced usando a especificação ["all contributors"](https://allcontributors.org/).

1. Comece fazendo um fork do repositório conforme descrito acima, mas desta vez é o repositório do guestbook: <https://github.com/open-sauced/guestbook>. Ao clicar em "Fazer um fork" (Fork) no GitHub, você criará uma cópia do repositório na sua conta do GitHub.

2. Em seguida, clone o repositório para a sua máquina local. No seu terminal ou prompt de comando, execute o seguinte comando:

```bash
git clone git@github.com:[seu-nome-de-usuario]/repositorio.git
```

> Certifique-se de ter o Node.js instalado na sua máquina, pois isso é necessário para trabalhar com este projeto. Se você ainda não tiver o Node.js instalado, pode baixá-lo em <https://nodejs.org/pt-br/download/>.

3. Depois de clonar, abra o projeto no seu terminal e execute `npm install` para instalar as dependências. Você também pode usar `pnpm install` se preferir outro gerenciador de pacotes.

4. **Crie uma nova branch**: Antes de fazer qualquer alteração, não se esqueça de criar uma nova branch no seu repositório local para trabalhar na sua contribuição. Você pode criar uma nova branch usando o seguinte comando:

```shell
git checkout -b seu-nome-de-branch
```

Certifique-se de substituir "seu-nome-de-branch" pelo nome descritivo da sua branch, como "correcao-bug-123" ou "adicao-nova-funcionalidade".

5. Execute `npm run contributors:add` para se adicionar à lista de contribuidores e preencher o formulário com base nas suas contribuições.

6. Execute `npm run contributors:generate` para gerar a nova lista de contribuidores.

7. Confirme suas alterações (commit) e envie-as para o seu repositório forkado.

8. Após enviar as suas alterações, vá até o repositório do projeto original no GitHub e clique no botão "Nova solicitação de pull" (New pull request). Na lista suspensa "repositório base" (base repository), selecione o repositório original e, na lista suspensa "repositório de origem" (head repository), selecione o seu repositório forkado. Escolha a sua branch na lista suspensa "Comparar" (compare) e clique em "Criar solicitação de pull" (Create pull request). Preencha as informações necessárias e envie a sua solicitação de pull.

Parabéns! Você acabou de fazer uma contribuição de código aberto! No próximo capítulo, vamos adicioná-la a um portfólio de código aberto: um currículo para contribuições de código aberto, onde você pode mostrar o seu trabalho e atrair potenciais empregadores e amigos usando o OpenSauced. Por enquanto, vamos concluir com algumas notas sobre integração.

## Integrando-se em um Novo Projeto

Quando você se junta a um novo projeto de código aberto, é importante se familiarizar com as diretrizes, convenções e fluxo de trabalho do projeto. Aqui estão algumas dicas para ajudá-lo a ter sucesso na sua integração:

1. **Leia a documentação**: Comece lendo a documentação do projeto, incluindo o arquivo README, as diretrizes de contribuição e o código de conduta. Isso o ajudará a entender os objetivos do projeto, os requisitos e as expectativas dos contribuidores.

2. **Participe da comunidade**: Muitos projetos de código aberto têm comunidades online, fóruns ou plataformas de discussão onde os desenvolvedores podem fazer perguntas, compartilhar conhecimento e colaborar. Ao ingressar nessas comunidades, você pode se conectar com outros contribuidores, aproveitar suas experiências e obter ajuda para resolver os problemas que encontrar.

3. **Comece com pequenas tarefas**: Quando você está começando em um projeto, é aconselhável começar com pequenas tarefas gerenciáveis, como corrigir bugs, adicionar testes ou atualizar a documentação. Isso o ajudará a se familiarizar com o código e o fluxo de desenvolvimento sem se sentir sobrecarregado.

4. **Peça ajuda**: Se você não tem certeza de algo ou encontra um problema, não hesite em pedir ajuda. Comunidades de código aberto geralmente são solidárias e acolhedoras, e outros contribuidores ficarão felizes em ajudá-lo.

5. **Seja paciente e perseverante**: Integrar-se a um novo projeto pode ser desafiador, especialmente se você é novo na contribuição para código aberto. Seja paciente consigo mesmo e não se desanime com falhas ou erros. Com persistência e prática, você se tornará mais confortável e confiante em suas contribuições.

## E depois?

Depois que sua contribuição for enviada e revisada, um dos seguintes resultados pode ocorrer:

1. **Sua contribuição é aceita**: Se sua contribuição for aprovada pelos responsáveis do projeto, ela será mesclada na branch principal do código.

Parabéns! Seu trabalho agora faz parte do projeto e você fez uma contribuição valiosa para a comunidade de código aberto.

2. **Sua contribuição requer alterações**: Às vezes, os responsáveis do projeto podem solicitar alterações em sua contribuição antes de aceitá-la. Isso pode ser devido a problemas de codificação, conflitos com outras alterações ou à necessidade de documentação adicional. Nesse caso, faça as alterações solicitadas e envie novamente sua solicitação de pull.

3. **Sua contribuição é rejeitada**: Em alguns casos, sua contribuição pode não se adequar aos objetivos ou requisitos do projeto, ou talvez não seja a melhor solução para um problema. Se sua contribuição for rejeitada, não desanime. Encare os comentários que você recebeu como uma oportunidade de aprendizado e melhoria. Você sempre pode tentar contribuir para outro projeto ou enviar uma contribuição diferente para o mesmo projeto.

Ao continuar a contribuir para projetos de código aberto, você ganhará experiência valiosa, desenvolverá novas habilidades e construirá um portfólio sólido de trabalhos. No próximo capítulo, discutiremos algumas estratégias para começar a contribuir para projetos de código aberto, ganhar terreno em suas contribuições e desenvolver seu currículo de código aberto usando o OpenSauced.

[Próxima seção ->](./06-o-segredo-da-receita.md)
