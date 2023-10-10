# Ferramentas para o Sucesso

Para ter sucesso em sua jornada no código aberto, é essencial se familiarizar com as ferramentas e plataformas comumente usadas pela comunidade. Essas ferramentas ajudarão você a colaborar de forma eficaz, gerenciar seus projetos e contribuir para projetos de código aberto. Neste capítulo, abordaremos as seguintes ferramentas essenciais para a colaboração em código aberto:

- GitHub e Git
- CodeSee
- VS Code (o editor)
- Discord

## Pré-Requisitos

Antes de seguir este guia, você deve realizar as seguintes ações:

- Criar uma [conta no GitHub](https://github.com/)
- Baixar o [VS Code](https://code.visualstudio.com/)

## GitHub e Git

### Introdução ao Git

O Git é um sistema de controle de versão distribuído projetado para gerenciar projetos, desde os pequenos até os muito grandes, de maneira rápida e eficiente. Foi criado por Linus Torvalds, o criador do kernel Linux, para gerenciar o desenvolvimento do próprio kernel Linux.

O Git permite que os desenvolvedores acompanhem as alterações em seu código, colaborem com outros desenvolvedores e gerenciem várias versões de seus projetos. Algumas das principais características do Git incluem:

- **Branches (ramificações)**: O Git permite que os desenvolvedores criem ramos, que são cópias separadas de sua base de código. Isso permite que eles trabalhem em novos recursos ou correções de bugs sem afetar a base de código principal. Quando as alterações são concluídas, eles podem mesclar o ramo de volta à base de código principal.
- **Área de preparação (staging area)**: O Git fornece uma área de preparação onde os desenvolvedores podem preparar suas alterações antes de confirmá-las no repositório. Isso permite que eles revisem e organizem suas alterações antes de torná-las permanentes.
- **Controle de versão distribuído**: Ao contrário dos sistemas de controle de versão centralizados, o Git é um sistema de controle de versão distribuído. Isso significa que cada desenvolvedor possui uma cópia completa do repositório em sua máquina local, permitindo que trabalhem offline e independentemente de um servidor central.

### Introdução ao GitHub

O GitHub é uma plataforma web de controle de versão e colaboração que utiliza o Git como tecnologia subjacente. Ele oferece uma interface simples e amigável para gerenciar repositórios Git, bem como uma variedade de recursos e ferramentas para colaborar com outros desenvolvedores.

Aqui estão algumas das principais características do GitHub:

- **Rastreamento de problemas**: O GitHub possui um sistema integrado de rastreamento de problemas que permite que os desenvolvedores criem, atribuam e gerenciem problemas relacionados aos seus projetos. Os problemas podem ser categorizados usando rótulos, marcos e destinatários, facilitando o acompanhamento do progresso do projeto e a priorização das tarefas.
- **Pull Requests (solicitações de pull)**: O GitHub introduz o conceito de "solicitações de pull", que permite que os desenvolvedores proponham alterações à base de código de um projeto. As solicitações de pull permitem a revisão de código, discussão e colaboração antes que as alterações sejam mescladas na base de código principal.
- **Fork (bifurcação)**: O GitHub permite que os usuários criem uma cópia de um repositório, chamada de bifurcação (fork). Isso lhes permite fazer alterações na base de código sem afetar o projeto original. Depois de concluir as alterações, eles podem enviar uma solicitação de pull para que suas alterações sejam revisadas e, possivelmente, mescladas na base de código principal.
- **GitHub Actions (ações do GitHub)**: O GitHub Actions é uma poderosa ferramenta de automação que permite criar fluxos de trabalho personalizados para automatizar tarefas como compilação, teste e implantação de seu código.

## Começando com Git e GitHub

Para começar com o GitHub, siga as etapas abaixo:

1. **Instale o Git**: Baixe e instale o Git em seu computador acessando o site oficial do Git (https://git-scm.com/) e seguindo as instruções de instalação para o seu sistema operacional.

2. **Configure o Git**: Após instalar o Git, abra um terminal ou prompt de comando e configure suas informações de usuário Git executando os comandos a seguir:

```shell
git config --global user.name "Seu Nome de Usuário"
git config --global user.email "seu.email@exemplo.com"
```

Substitua "Seu Nome de Usuário" pelo seu nome completo e "seu.email@exemplo.com" pelo endereço de e-mail que você usou para se inscrever no GitHub.

### Praticando com o VS Code

Para praticar o uso do GitHub, vamos criar um repositório, cloná-lo, fazer alterações e enviá-las.

1. **Crie um novo repositório**: Faça login na sua conta do GitHub e vá para https://github.com/new ou clique no ícone "+" no canto superior direito e selecione "Novo repositório" no menu suspenso.

Escolha a opção "Seu" como proprietário do repositório e insira um nome para o seu repositório. Para este exemplo, usaremos `repositorio-de-pratica`.

![nova captura de tela do repositório](../../nova-repo.png)

Escolha se deseja que ele seja público ou privado. Você também pode optar por inicializar o repositório com um arquivo README, um arquivo .gitignore e/ou uma licença.

Para este exemplo, inicialize o repositório com um arquivo README.

2. **Clone o repositório**: Depois de criar um novo repositório, você pode cloná-lo para sua máquina local executando o seguinte comando no seu terminal ou prompt de comando:

```bash
git clone https://github.com/seu-nome-de-usuario/nome-do-repositorio.git
```

Substitua "seu-nome-de-usuario" pelo seu nome de usuário no GitHub e "nome-do-repositorio" por `repositorio-de-pratica`.

3. **Acesse seu repositório no seu editor de código**: Para este exemplo, estamos usando o VS Code. Abra o VS Code, vá para a guia Arquivo e abra o seu repositório de prática.

4. **Faça alterações e faça commit**: Deve haver um arquivo no seu repositório: `README.md`. Neste arquivo, sob `# repositorio-de-pratica`, digite 'olá mundo!'. Depois de fazer as alterações, você pode adicioná-las ao commit.

Abra o seu terminal e verifique se você está no diretório correto. Por exemplo, meus projetos de código estão na minha pasta Projetos. Usando o meu terminal, eu entraria neste repositório com o seguinte comando:

```bash
cd projetos/repositorio-de-pratica
```

Depois de estar no diretório correto, use os seguintes comandos para adicionar as alterações que você fez e escrever uma mensagem de commit com uma descrição das alterações:

```bash
git add .
git commit -m "Sua mensagem de commit"
```

Substitua "Sua mensagem de commit" por uma breve descrição das alterações que você fez.

5. **Envie suas alterações**: Após fazer o commit das suas alterações, você pode enviá-las para o seu repositório remoto no GitHub executando o seguinte comando:

```bash
git push origin main
```


Isso enviará suas mudanças para o ramo "main" do seu repositório remoto. Se você quiser verificar seu trabalho, vá para o seu repositório no GitHub. Você deverá ver 'olá mundo!' no seu arquivo README.md.

Agora você configurou com sucesso o Git e o GitHub na sua máquina local e está pronto para colaborar em projetos de código aberto!

## CodeSee

CodeSee é uma ferramenta de visualização poderosa que ajuda os desenvolvedores a entenderem as bases de código complexas e a navegarem mais eficazmente em projetos grandes. Ao fornecer uma representação visual do seu código, o CodeSee permite que você:

- **Identifique as dependências**: O CodeSee ajuda a entender como as diferentes partes da sua base de código estão conectadas e como as mudanças em uma área podem afetar outras áreas.
- **Analise a estrutura do código**: O CodeSee permite visualizar a estrutura do seu código, facilitando a identificação de padrões, antipadrões e áreas para melhorias.
- **Navegue em bases de código grandes**: Com o CodeSee, você pode navegar rapidamente em grandes bases de código e encontrar as partes do código nas quais precisa trabalhar.

Para começar a usar o CodeSee, visite o site oficial (https://www.codesee.io/) e siga as instruções para instalar a extensão no seu navegador e integrá-la à sua conta do GitHub.

## VS Code

O Visual Studio Code (VS Code) é um editor de código popular, gratuito e de código aberto desenvolvido pela Microsoft. Ele suporta uma ampla variedade de linguagens de programação e oferece muitos recursos que o tornam uma excelente escolha para o desenvolvimento de código aberto:

- **Suporte integrado ao Git**: O VS Code oferece suporte integrado ao Git, permitindo que você gerencie seus repositórios Git, faça o staging e confirme alterações e resolva conflitos de mesclagem diretamente no editor.
- **Extensibilidade**: O VS Code oferece um ecossistema rico de extensões que podem melhorar sua experiência de desenvolvimento e adicionar suporte para linguagens, ferramentas e frameworks adicionais.
- **Terminal integrado**: O VS Code inclui um terminal integrado que permite executar comandos, scripts e tarefas de construção diretamente no editor.
- **Customizável**: O VS Code é altamente customizável, permitindo que você adapte o editor às suas preferências e fluxo de trabalho. Você pode personalizar o tema, os atalhos de teclado e as configurações para criar um ambiente de desenvolvimento personalizado.

Para baixar e instalar o VS Code, visite o site oficial (https://code.visualstudio.com/) e siga as instruções para o seu sistema operacional.

## Discord

O Discord é uma plataforma popular de mensagens e chat de voz amplamente utilizada pelas comunidades de código aberto para comunicação e colaboração. Ao ingressar em servidores do Discord relacionados aos seus interesses e projetos, você pode:

- **Conectar-se com outros desenvolvedores**: O Discord permite que você converse com outros desenvolvedores, faça perguntas e compartilhe seu conhecimento com a comunidade.
- **Ficar informado**: Muitos projetos de código aberto usam o Discord para compartilhar atualizações, anúncios e outras informações importantes. Ao ingressar em seus servidores, você pode se manter informado sobre os últimos desenvolvimentos e contribuir de forma mais eficaz.
- **Participar de discussões**: Os servidores do Discord frequentemente hospedam discussões sobre vários tópicos relacionados ao desenvolvimento de software livre. Ao participar dessas discussões, você pode:

* Aprender com os outros
* Compartilhar suas ideias
* Contribuir para o conhecimento coletivo da comunidade

## Encontre oportunidades de colaboração

Os servidores Discord podem ser uma excelente maneira de encontrar pessoas que compartilham seus interesses e buscam oportunidades de colaboração. Ao criar laços com outros desenvolvedores, você pode:

* Descobrir novos projetos para trabalhar
* Formar parcerias valiosas

## Como começar

Para começar a usar o Discord, visite o site oficial (https://discord.com/) e crie uma conta. Depois de ter uma conta, você pode pesquisar comunidades e projetos open source em plataformas como GitHub, GitLab ou OpenSauced para encontrar seus servidores Discord e participar da conversa.

## Próxima seção

No próximo capítulo, veremos como contribuir para projetos open source, incluindo como encontrar projetos para trabalhar, como enviar contribuições e como explicar o que acontece depois que sua contribuição é aceita.

[Seção seguinte ->](./05-como-contribuir-para-o-codigo-aberto.md)