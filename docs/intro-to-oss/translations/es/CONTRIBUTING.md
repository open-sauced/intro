# Contribuyendo a introducción con OpenSauced

Las contribuciones siempre son bienvenidas, sin importar cuán grandes o pequeñas sean. Antes de contribuir, lea el [Código de conducta](https://docs.opensauced.pizza/contributing/code-of-conduct/) y siga las instrucciones de esta guía.

## Estilo de comunicación recomendado

1. Deje siempre capturas de pantalla para los cambios visuales.
2. Deje siempre una descripción detallada en la solicitud de extracción. No deje nada ambiguo para los revisores.
3. Siempre revise su código primero. Asegúrese de ejecutar el proyecto localmente y probarlo antes de solicitar una revisión.
4. Comuníquese siempre en el repositorio de GitHub. Ya sea en el problema o en la solicitud de extracción, mantener las líneas de comunicación abiertas y visibles para todos los miembros del equipo ayuda a todos los que lo rodean.

## Problemas

- Cuando contribuyas al proyecto por primera vez, considera revisar las etiquetas [error](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22) o [buen primer problema](https://github.com/open-sauced/intro/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)

- Si desea trabajar en un problema abierto, comente con `.take` y se le asignará. Si un problema no está asignado, se supone que está disponible para que cualquiera pueda trabajar en él. Por lo tanto, asígnate un problema antes de comenzar a trabajar para evitar conflictos.

- ¿Tienes una idea y quieres agregar una sección o un capítulo a un curso? ¿O detecta un error o tiene una idea para mejorar alguno de nuestros cursos? Puede crear un problema para solucionarlo. Pero nuestros encargados de mantenimiento deben clasificar el problema antes de que usted pueda trabajar en él. Si desea trabajar en el problema, etiquete al equipo `@open-sauced/docs` en el comentario para notificarles.

Siempre puedes pedir ayuda en el canal `🍕opensauced-contributors-chat` en nuestra comunidad de [Discord](https://discord.com/invite/U2peSNf23P) o [GitHub Discussions](https://github.com/open-sauced/intro/discussions) si te quedas atascado mientras trabajas en tus cambios o necesitas una aclaración.

## Empezando

### Configurar el proyecto localmente

1. [Bifurca](https://docs.github.com/en/get-started/quickstart/fork-a-repo) el [repositorio de introducción](github.com/open-sauced/intro) a tu propia cuenta de GitHub.
2. [Clona](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) el repositorio bifurcado a su máquina local.

   ```bash
   git clone https://github.com/YOUR-USERNAME/intro.git
   ```

3. Navegue y abra el proyecto en su editor de código.

   ```bash
   cd intro
   ```

4. Cree una nueva rama para trabajar en sus cambios.

   ```bash
   git checkout -b YOUR-BRANCH-NAME
   ```

   Reemplace "YOUR-BRANCH-NAME" con un nombre descriptivo para su rama — Por ejemplo, `feat/add-submit-button`.

5. Ejecute el proyecto.

### Ejecutar el proyecto localmente

Ejecutar el proyecto localmente es esencial para ver los cambios en tiempo real y probarlos minuciosamente cuando contribuya. 

Recomendamos uno de estos dos métodos para ejecutar el proyecto en su máquina local:

1. Usando la [CLI de Docsify](https://docsify.js.org/#/)
2. Aprovechando la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de Visual Studio Code.

#### Método 1: Usando la CLI de Docsify

1. **Instala Node.js**.

    Puede descargarlo desde el [sitio web oficial](https://nodejs.org/) de Node.js.

2. **Instala docsify globalmente**.

    Se recomienda encarecidamente instalar docsify globalmente. En tu terminal, ejecuta el siguiente comando:

    ```bash
    npm install -g docsify-cli
    ```

3. **Ejecute el proyectot**.

    ```bash
    docsify serve docs
    ```

    Este comando iniciará un servidor de desarrollo local y podrá acceder al proyecto en su navegador web en `http://localhost:3000`.

4. **Realizar y probar cambios.**

    Con el servidor local en ejecución, puede realizar cambios en los archivos y ver inmediatamente los resultados en su navegador. Pruebe sus cambios a fondo.

5. **Detenga el servidor.**

    Después de completar y probar los cambios, puede detener el servidor local presionando `Ctrl + C` en la terminal.

#### Método 2: Aprovechando la extensión Live Server de Visual Studio Code.

La extensión Live Server le permite iniciar un servidor de desarrollo local y obtener una vista previa de sus cambios en tiempo real en su navegador.

1. **Instalar Visual Studio Code**.

    Descargar [Visual Studio Code](https://code.visualstudio.com/) e instálalo si no lo has hecho

2. **Abrir el proyecto en VS Code**.

    Inicie VS Code, abra la carpeta del proyecto seleccionando "Archivo" > "Abrir carpeta" y elija el directorio del proyecto.

3. **Instale la extensión Live Server**.

    - Haga clic en "Ver" en la barra superior del VS Code.
    - Haga clic en "Extensiones".

    Alternativamente, presione el atajo `Ctrl + Shift + X `para abrir el menú "Extensiones".

    - Busque "Live Server" de Ritwick Dey e instálelo.


4. **Inicie Live Server**.

    Haga clic en el botón "Go Live" en la esquina inferior derecha de la ventana de VS Code. Se abrirá una nueva pestaña en su navegador en una dirección local. Luego, haga clic en la carpeta "docs" para ver el proyecto en modo en vivo.

5. **Realizar y probar cambios**.

    Con Live Server en ejecución, puede realizar cambios en los archivos usando VS Code y los cambios se reflejarán automáticamente en su navegador. Pruebe sus cambios a fondo.

6. **Detenga Live Server**.

    Cuando haya terminado de probar o realizar cambios, puede detener Live Server haciendo clic en el botón "Puerto: 5500" en la barra de estado de VS Code en la esquina inferior derecha.

## Trabajando con el contenido

Los contenidos de nuestros cursos están escritos en [Markdown](https://www.markdownguide.org/), un lenguaje de marcado liviano y fácil de usar que le permite formatear el texto de una manera legible y visualmente atractiva.

Lea la sección ["Uso de Markdown para este proyecto"]() para obtener detalles sobre cómo usarlo en este proyecto.

### Agregando definiciones al glosario

Si agrega definiciones al capítulo "Glosario" en el [curso Introducción al Open Source](./glosario.md) o [Cómo convertirse en mantenedor](../../../becoming-a-maintainer/glossary.md), asegúrese de que las definiciones se agreguen **alfabéticamente**.


### Agregando una nueva sección a un capítulo

Si su contenido puede pertenecer a la categoría de uno de los capítulos del curso, considere agregarlo como una nueva sección del capítulo. Crea un título de `heading 2` y escribe tu contenido.

Puede agregar un nuevo capítulo si es más adecuado para una sección independiente.

### Agregando un nuevo capítulo y agregarlo a la barra lateral

En esta sección, lo guiaremos para agregar un nuevo capítulo a cualquiera de nuestros cursos y agregarlo a la barra lateral.

#### Agregando un nuevo capítulo

Siga estos pasos para agregar un nuevo capítulo a nuestro curso:

1. **Crear un nuevo archivo Markdown**

    Cree un nuevo archivo Markdown (`.md`) en el directorio del curso y asigne un nombre al archivo que refleje el contenido del capítulo — por ejemplo, `como-contribuir-al-open-source.md` para un capítulo sobre cómo contribuir al Open Source.

    > **NOTE**: Asegúrese de seguir las convenciones de nomenclatura. Observe que los nombres de los archivos no están en mayúscula y que hay guiones en lugar de espacios entre las palabras.

2. **Escribir contenido**

    Abra el archivo Markdown recién creado en un editor de texto y escriba el contenido de su capítulo usando la sintaxis de Markdown. Puede incluir encabezados, texto, imágenes, enlaces, listas y otros elementos para presentar su información de manera efectiva.

    > **NOTE**: Sólo debe haber un `heading 1` en cada archivo.

3. **Probar los cambios**.

    Antes de finalizar su nuevo capítulo, debe probar sus cambios localmente. Puede crear o renderizar el proyecto para asegurarse de que su nuevo capítulo aparezca como se esperaba dentro de la estructura del curso.

4. **Actualizar la barra lateral**.

    Después de agregar un nuevo capítulo, también debe agregarlo a la barra lateral para que los usuarios descubran el contenido.

#### Agregando nuevos capítulos a la barra lateral

La barra lateral de nuestro curso sirve como menú de navegación. Por lo tanto, cuando agrega un nuevo capítulo al curso, es importante actualizar la barra lateral incluyendo el enlace al capítulo. De esa manera, los usuarios pueden navegar hasta el contenido sin problemas.

Siga estos pasos para agregar nuevos capítulos a la barra lateral:

1. Abre el archivo `_sidebar.md` en el directorio del curso.
2. **Agregue el enlace del nuevo capítulo**.

    - Inserte su nuevo capítulo en la lista. Si no estás seguro de dónde es mejor colocarlo, puedes comentar sobre el problema y etiquetar a los mantenedores `@open-sauced/docs` para pedir ayuda.
    - Utilice el siguiente formato para agregar el enlace al nuevo capítulo:

        ```markdown
        - [Intro](intro.md)
        ```

         - Reemplace `Intro` con el título de su nuevo capítulo. Asegúrese de escribir el título en mayúscula inicial.
         - Reemplace `intro.md` con el nombre del archivo Markdown de su nuevo capítulo

3. **Crea una solicitud de extracción**.

    Una vez que haya creado el nuevo capítulo y haya verificado que cumple con los requisitos de nuestro proyecto, puede enviar su contribución creando una solicitud de extracción.

4. **Revisión y retroalimentación**.

    Espere a que los mantenedores revisen su solicitud de extracción y prepárese para recibir comentarios de ellos o de sus colaboradores. Realice cambios si es necesario para refinar su contribución.

Una vez que se acepte su contribución, su nuevo capítulo pasará a formar parte de nuestro curso, mejorando su contenido para usuarios y contribuyentes.

## Usando Markdown para este proyecto

Al contribuir a este proyecto, debe seguir nuestra convención de Markdown a continuación:

### 1. Encabezados

Utilice el símbolo almohadilla (`#`) para crear encabezados (títulos y subtítulos). Hay seis niveles de títulos de sección y el número de símbolos indica el nivel del título.

```markdown
# Heading 1

## Heading 2
```

### 2. Formato de texto

- Ponga el texto en negrita encerrándolo con asteriscos dobles (`**`).
- Ponga el texto en cursiva encerrándolo con guiones bajos simples (`_`). 
- Cree código en línea ajustando el texto con comillas invertidas (`` ` ``).

```markdown
**This is a bold text.**

_This is an italic text._

This is an `inline code`.
```

### 3. Listas

- Crea listas ordenadas usando números seguidos de un punto (`1.`, `2.`, etc.).
- Cree listas desordenadas usando guiones (`-`).

```markdown
1.  Item 1
2.  Item 2

- Unordered Item 1
- Unordered Item 2
```

### 4. Enlaces

Cree enlaces utilizando corchetes (`[]`) para el texto del enlace y paréntesis (`()`) para la URL.

```markdown
[Open Source Education Path with OpenSauced](https://intro.opensauced.pizza/#/)
```

### 5. Imágenes

Incruste imágenes usando un signo de exclamación (`!`), seguido de corchetes (`[]`) para el texto alternativo y paréntesis (`()`) para la URL de la imagen.

```markdown
![Create new repository on GitHub](../_assets/images/new-repo.png)
```

### 6. Citas en bloque

Cree citas en bloque usando el símbolo mayor que (`>`).

```markdown
> This is a blockquote.
```

### 7. Bloques de código

Cree bloques de código utilizando comillas invertidas triples (` ``` `) para bloques de código delimitados y especifique un idioma junto a los acentos graves antes del bloque de código delimitado para resaltar la sintaxis.

````
```bash
git pull
```
````

### Consejos de Markdown

- Obtenga una vista previa de su Markdown localmente para garantizar el formato adecuado antes de enviar su contribución.
- Mantenga organizado su contenido de Markdown y utilice títulos para estructurar sus secciones.
- Sólo puede haber un `heading 1` en cada capítulo.
- Utilice bloques de código para resaltar fragmentos de código o ejemplos de configuración.
- Consulte el sitio web oficial de [Markdown Guide](https://www.markdownguide.org/basic-syntax/) para obtener más información sobre el uso de Markdown.

## Traduciendo los cursos

Traducir nuestros cursos Introducción al Open Source abierto y Cómo convertirse en mantenedor ayuda a hacerlos más accesibles para una audiencia más amplia. Si desea traducir uno de estos cursos, lea nuestra página [🌐 Directrices i18n](../../../i18n-guidelines.md).