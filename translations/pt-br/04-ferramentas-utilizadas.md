# Ferramentas utilizadas

Para ter sucesso na sua jornada de código aberto, é essencial familiarizar-se com as ferramentas e plataformas comumente utilizadas pela comunidade. Essas ferramentas ajudarão você a colaborar de forma eficaz, gerenciar seus projetos e contribuir para projetos de código aberto. Neste capítulo, discutiremos as seguintes ferramentas essenciais para colaboração de código aberto:

- GitHub & Git
- CodeSee
- VS Code (O editor)
- Discord

## Pré-requisitos

Antes de completar o seguinte passo a passo, complete o seguinte:
- Crie uma [conta no GitHub](https://github.com/)
- Baixe o [VS Code](https://code.visualstudio.com/)

## GitHub & Git

### Introdução ao Git

Git é um sistema de controlo de versão distribuído projetado para lidar com projetos pequenos e muito grandes com velocidade e eficiência. Foi criado por Linus Torvalds, o criador do kernel Linux, para gerir o desenvolvimento do próprio kernel Linux.

Git permite que os desenvolvedores acompanhem as alterações no seu código, colaborem com outros desenvolvedores e gerenciem várias versões dos seus projetos. Alguns dos recursos principais do Git incluem:

- **Branch**: Git permite que os desenvolvedores criem ramificações, cópias separadas da sua base de código. Isso permite que eles trabalhem em novos recursos ou correções de bugs sem afetar a base de código principal. Uma vez que as alterações estejam concluídas, eles podem mesclar a ramificação de volta para a base de código principal.
- **Área de preparação(Stagging area)**: Git fornece uma área de preparação onde os desenvolvedores podem preparar as suas alterações antes de as comprometerem com o repositório. Isso permite que eles revisem e organizem as suas alterações antes de as tornarem permanentes.
- **Controle de versão distribuído**: Ao contrário dos sistemas de controlo de versão centralizados, o Git é um sistema de controlo de versão distribuído. Isso significa que cada desenvolvedor tem uma cópia completa do repositório na máquina local, permitindo-lhes trabalhar offline e independentemente de um servidor central.

### Introdução ao GitHub

O GitHub é uma plataforma baseada na web para controle de versão e colaboração que utiliza o Git como tecnologia subjacente. Ele fornece uma interface simples e amigável para gerir repositórios Git, bem como uma série de recursos e ferramentas para colaborar com outros desenvolvedores.

Algumas das principais funcionalidades do GitHub incluem:

- **Rastramento de issues**: O GitHub fornece um sistema integrado de rastreamento de problemas que permite que os desenvolvedores criem, atribuam e gerenciem problemas relacionados aos seus projetos. Os problemas podem ser categorizados usando etiquetas, marcos e pessoas atribuídas, tornando fácil acompanhar o progresso do projeto e priorizar tarefas.
- **Pull requests**: O GitHub introduz o conceito de pedidos de pull, que permitem que os desenvolvedores proponham alterações à base de código de um projeto. Os pedidos de pull permitem a revisão de código, discussão e colaboração antes que as alterações sejam mescladas na base de código principal.
- **Forking**: O GitHub permite que os utilizadores criem uma cópia de um repositório, conhecida como fork. Isso permite que eles façam alterações na base de código sem afetar o projeto original. Uma vez que as alterações estejam concluídas, eles podem enviar um pedido de pull para que as suas alterações sejam revisadas e potencialmente mescladas na base de código principal.
- **GitHub Actions**: O GitHub Actions é uma poderosa ferramenta de automação que permite criar fluxos de trabalho personalizados para automatizar tarefas como a construção, teste e implantação do seu código.

### Começando com Git e GitHub

Para começar com Git e GitHub, siga estes passos:

1. **Instalar o Git**: Baixe e instale o Git no seu computador visitando o site oficial do Git (https://git-scm.com/) e seguindo as instruções de instalação para o seu sistema operacional.
2. **Configurar o Git**: Após instalar o Git, abra um terminal ou prompt de comando e configure as informações do seu usuário Git executando os seguintes comandos:

```bash
git config --global user.name "Seu nome"
git config --global user.email "seu.email@exemplo.com"
```

Substitua "Seu nome" pelo seu nome completo e "seu.email@exemplo.com" pelo endereço de e-mail que você usou para se inscrever no GitHub.

#### Praticando Contribuições com o VS Code

Para praticar o uso do GitHub, vamos passar por criar um repositório, clonar o repositório, fazer alterações e empurrar essas alterações.

1. **Crie um repositório**: Faça login na sua conta do GitHub e navegue até [https://github.com/new](https://github.com/new) ou clique no ícone "+" no canto superior direito e selecione "Novo repositório" no menu suspenso.

Escollha você mesmo como o proprietário do repositório, e digite um nome para o seu repositório. Para este exemplo, usaremos `practice-repository`

![new repo screenshot](../../images/new-repo.png)

Escollha se você quer que seja público ou privado. Você também pode escolher inicializar o repositório com um arquivo README, um arquivo .gitignore e/ou uma licença.

Por exemplo, inicialize o repositório com um arquivo README. 

2. **Clone o repositório**: Uma vez que você tenha criado um repositório, você pode cloná-lo para a sua máquina local executando o seguinte comando no seu terminal ou prompt de comando:

```bash
git clone https://github.com/username/repository-name.git
```

Substitua "username" pelo seu nome de utilizador do GitHub e "repository-name" por `practice-repository`.

3. **Acesse o seu repositório no seu editor de código**: Para este exemplo, estamos usando o VS Code. Abra o VS Code, navegue até a guia de arquivos e abra o seu `practice-repository`.

4. **Faça alterações e confirme**: Deve haver um arquivo no seu repositório: `README.md`. Dentro desse arquivo, abaixo de `# practice-repository`, digite 'hello world!' Após ter feito alterações, você pode prepará-las e confirmá-las.

Abra o seu terminal e certifique-se de que está no diretório correto. Por exemplo, os meus projetos de codificação estão dentro da minha pasta `Projects`. Usando o meu terminal, eu acessaria este repositório executando este comando:

```bash
cd projects/practice-repository
```

Agora que você está no diretório correto, use os seguintes comandos para adicionar as alterações que você fez e escrever uma mensagem de confirmação com uma descrição das alterações:

```bash
git add .
git commit -m "Your commit message"
```

Substitua "Your commit message" por uma breve descrição das alterações que você fez.

5. **Empurre as suas alterações**: Após confirmar as suas alterações, você pode empurrá-las para o seu repositório remoto no GitHub executando o seguinte comando:

```bash
git push origin main
```

O commando `push origen main` empurra as suas alterações para o ramo "main" do seu repositório remoto. Se você quiser verificar o seu trabalho, navegue até o seu repositório do GitHub. Você deve ver 'hello world!' no seu arquivo README.md.

Você agora configurou com sucesso o Git e o GitHub na sua máquina local e está pronto para colaborar em projetos de código aberto!

## CodeSee

CodeSee é uma poderosa ferramenta de visualização que ajuda os desenvolvedores a entenderem bases de código complexas e a navegarem em grandes projetos de forma mais eficiente. Ao fornecer uma representação visual do seu código, o CodeSee permite que você:

- **Identificar dependências**: O CodeSee ajuda você a entender como diferentes partes da sua base de código estão conectadas e como as alterações numa área podem afetar outras áreas.
- **Analisar a estrutura do código**: O CodeSee permite que você visualize a estrutura do seu código, facilitando identificar padrões, antipadrões e áreas para melhorias.
- **Navegar em grandes bases de código**: com o CodeSee, você pode navegar rapidamente em grandes bases de código e encontrar as partes do código que você precisa trabalhar.

Para começar com o CodeSee, visite o site oficial (https://www.codesee.io/) e siga as instruções para instalar a extensão do navegador e integrá-la com a sua conta do GitHub.

## VS Code

Visual Studio Code (VS Code) é um editor de código popular, gratuito e de código aberto desenvolvido pela Microsoft. Ele suporta uma ampla gama de linguagens de programação e oferece muitos recursos que o tornam uma ótima escolha para o desenvolvimento de código aberto, incluindo:

- **Suporte Git integrado**: O VS Code oferece suporte integrado para Git, permitindo que você gerencie os seus repositórios Git, estágio e confirme alterações e resolva conflitos de mesclagem diretamente do editor.
- **Extensibilidade**: O VS Code oferece um rico ecossistema de extensões que podem aprimorar a sua experiência de desenvolvimento e adicionar suporte para idiomas, ferramentas e estruturas adicionais.
- **Terminal integrado**: O VS Code inclui um terminal integrado que permite executar comandos, scripts e tarefas de compilação diretamente do editor.
- **Customizável**: O VS Code é altamente customizável, permitindo que você adapte o editor às suas preferências e fluxo de trabalho. Você pode personalizar o tema, atalhos de teclado e configurações para criar um ambiente de desenvolvimento personalizado.

Para baixar e instalar o VS Code, visite o site oficial (https://code.visualstudio.com/) e siga as instruções para o seu sistema operacional.

## Discord

O Discord é uma plataforma popular de mensagens e chat de voz amplamente utilizada por comunidades de código aberto para comunicação e colaboração. Ao juntar-se a servidor Discord relacionados aos seus interesses e projetos, você pode:

- **Conecte-se com outros desenvolvedores**: O Discord permite que você converse com outros desenvolvedores, faça perguntas e compartilhe o seu conhecimento com a comunidade.
- **Mantenha-se atualizado**: muitos projetos de código aberto usam o Discord para compartilhar atualizações, anúncios e outras informações importantes. Ao juntar-se aos seus servidores, você pode se manter informado sobre os últimos desenvolvimentos e contribuir de forma mais eficaz.
- **Participar de discussões**: Os servidores do Discord muitas vezes hospedam discussões sobre vários tópicos relacionados ao desenvolvimento de código aberto. Ao participar dessas discussões, você pode aprender com os outros, compartilhar as suas ideias e contribuir para o conhecimento coletivo da comunidade.
- **Encontre oportunidades de colaboração**: Os servidores do Discord podem ser um ótimo lugar para encontrar outras pessoas que compartilham os seus interesses e procuram oportunidades de colaboração. Ao fazer networking com outros desenvolvedores, você pode descobrir novos projetos para trabalhar e formar parcerias valiosas.

Para começar com o Discord, visite o site oficial (https://discord.com/) e inscreva-se para uma conta. Após ter uma conta, você pode procurar por comunidades e projetos de código aberto em plataformas como GitHub, GitLab ou OpenSauced para encontrar os seus servidores do Discord e juntar-se à conversa.

Familiarizando-se com essas ferramentas e plataformas, você estará equipado para colaborar efetivamente, gerir os seus projetos e contribuir para projetos de código aberto. No próximo capítulo, discutiremos como contribuir para projetos de código aberto, incluindo encontrar projetos para trabalhar, enviar contribuições e o que acontece depois que a sua contribuição é aceite.

[Próximo Capítulo ->](/translations/pt-br/05-como-contribuir-para-open-source.md)

<a href="https://github.com/open-sauced/intro/edit/main/translations/pt-br/04-ferramentas-utilizadas.md">
✏️  Editar esta página
</a>