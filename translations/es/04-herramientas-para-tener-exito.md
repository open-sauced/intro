# Herramientas para tener éxito

Para tener éxito en su viaje hacia el Open Source, es esencial familiarizarse con las herramientas y plataformas comúnmente utilizadas por la comunidad. Estas herramientas lo ayudarán a colaborar de manera efectiva, administrar sus proyectos y contribuir a proyectos Open Source. En este capítulo, analizaremos las siguientes herramientas esenciales para la colaboración en Open Source:

- GitHub y Git
- CodeSee
- VS Code (El editor)
- Discord

## Requisitos previos
Antes de completar el siguiente tutorial, complete lo siguiente:
- Cree una [cuenta de GitHub](https://github.com/)
- Descargar [VS Code](https://code.visualstudio.com/)

## GitHub y Git

### Introducción a Git

Git es un sistema de control de versiones distribuido diseñado para manejar todo, desde proyectos pequeños hasta proyectos muy grandes con velocidad y eficiencia. Fue creado por Linus Torvalds, el creador del kernel de Linux, para gestionar el desarrollo del propio kernel de Linux.

Git permite a los desarrolladores realizar un seguimiento de los cambios en su código, colaborar con otros desarrolladores y gestionar múltiples versiones de sus proyectos. Algunas de las características clave de Git incluyen:

- **Ramificar**: Git permite a los desarrolladores crear ramas, que son copias separadas de su código base. Esto les permite trabajar en nuevas funciones o correcciones de errores sin afectar el código base principal. Una vez que se completen los cambios, pueden fusionar la rama nuevamente con el código base principal.
- **Área de preparación**: Git proporciona un área de preparación donde los desarrolladores pueden preparar sus cambios antes de enviarlos al repositorio. Esto les permite revisar y organizar sus cambios antes de hacerlos permanentes.
- **Control de versiones distribuido**: a diferencia de los sistemas de control de versiones centralizados, Git es un sistema de control de versiones distribuido. Esto significa que cada desarrollador tiene una copia completa del repositorio en su máquina local, lo que les permite trabajar sin conexión e independientemente de un servidor central.

### Introducción a GitHub

GitHub es una plataforma basada en web para control de versiones y colaboración que utiliza Git como tecnología subyacente. Proporciona una interfaz sencilla y fácil de usar para gestionar repositorios Git, así como una serie de funciones y herramientas para colaborar con otros desarrolladores.

Algunas de las características clave de GitHub incluyen:

- **Seguimiento de problemas**: GitHub proporciona un sistema de seguimiento de problemas integrado que permite a los desarrolladores crear, asignar y gestionar problemas relacionados con sus proyectos. Los problemas se pueden clasificar mediante etiquetas, hitos y personas asignadas, lo que facilita realizar un seguimiento del progreso del proyecto y priorizar las tareas.
- **Solicitudes de extracción**: GitHub introduce el concepto de solicitudes de extracción, que permiten a los desarrolladores proponer cambios en el código base de un proyecto. Las solicitudes de extracción permiten la revisión, discusión y colaboración del código antes de que los cambios se fusionen en la base de código principal.
- **Bifurcación**: GitHub permite a los usuarios crear una copia de un repositorio, conocida como bifurcación. Esto les permite realizar cambios en el código base sin afectar el proyecto original. Una vez que se completen los cambios, pueden enviar una solicitud de extracción para que sus cambios se revisen y potencialmente se fusionen en el código base principal.
- **GitHub Actions**: GitHub Actions es una potente herramienta de automatización que te permite crear flujos de trabajo personalizados para automatizar tareas como crear, probar e implementar tu código.

### Primeros pasos con Git y GitHub

Para comenzar con Git y GitHub, siga estos pasos:

1. **Instala Git**: descarga e instala Git en tu computadora visitando el sitio web oficial de Git (https://git-scm.com/) y siguiendo las instrucciones de instalación para tu sistema operativo.

2. **Configurar Git**: Después de instalar Git, abra una terminal o símbolo del sistema y configure su información de usuario de Git ejecutando los siguientes comandos:

```
git config --global user.name "Tu nombre"
git config --global user.email "Tu.correo electrónico@ejemplo.com"
```

Reemplace "Tu nombre" con su nombre completo y "Tu.correo electrónico@ejemplo.com" con la dirección de correo electrónico que utilizó para registrarse en GitHub.

#### Practicando la contribución con VS Code
Para practicar el uso de GitHub, veremos cómo crear un repositorio, clonarlo, realizar cambios y empujar esos cambios.

1. **Cree un nuevo repositorio**: inicie sesión en su cuenta de GitHub y navegue hasta [https://github.com/new](https://github.com/new) o haga clic en el icono "+". en la esquina superior derecha y seleccione "Nuevo repositorio" en el menú desplegable.

Elija usted mismo como propietario del repositorio e ingrese un nombre para su repositorio. Para este ejemplo, usaremos `practice-repository`.

![nueva captura de pantalla del repositorio](../../images/new-repo.png)

Elige si quieres que sea público o privado. También puede optar por inicializar el repositorio con un archivo README, un archivo .gitignore y/o una licencia.

Para este ejemplo, inicialice el repositorio con un archivo README.

2. **Clonar el repositorio**: una vez que haya creado un nuevo repositorio, puede clonarlo en su máquina local ejecutando el siguiente comando en su terminal o símbolo del sistema:

```
git clone https://github.com/nombre-de-usuario/nombre-repositorio.git
```

Reemplace "nombre-de-usuario" con su nombre de usuario de GitHub y "nombre-repositorio" con `practice-repository`.

3. **Acceda a su repositorio en su editor de código**: para este ejemplo, estamos usando VS Code. Abra VS Code, navegue hasta la pestaña del archivo y luego abra su `practice-repository`.

4. **Realizar cambios y confirmar**: Debería haber un archivo en su repositorio: `README.md`. Dentro de ese archivo, debajo de `#practice-repository`, escribe '¡hola mundo!' Una vez que haya realizado cambios, puede prepararlos y confirmarlos.

Abra su terminal y asegúrese de estar en el directorio correcto. Por ejemplo, mis proyectos de codificación están dentro de mi carpeta `proyectos`. Usando mi terminal, accedería a este repositorio ejecutando este comando:

```
cd proyectos/practice-repository
```

Una vez que esté en el repositorio correcto, use los siguientes comandos para agregar los cambios que realizó y escriba un mensaje de confirmación con una descripción de los cambios:

```
git add .
git commit -m "Tu mensaje de confirmación"
```

Reemplace "Tu mensaje de confirmación" con una breve descripción de los cambios que realizó.

5. **Empuje sus cambios**: después de confirmar sus cambios, puede enviarlos a su repositorio remoto de GitHub ejecutando el siguiente comando:

```
git push origin main
```

Esto enviará sus cambios a la rama "principal" de su repositorio remoto. Si desea comprobar su trabajo, navegue hasta su repositorio de GitHub. Ahora deberías ver '¡hola mundo!' en su archivo README.md.

¡Ahora ha configurado con éxito Git y GitHub en su máquina local y está listo para colaborar en proyectos Open Source!

## CodeSee

CodeSee es una poderosa herramienta de visualización que ayuda a los desarrolladores a comprender bases de código complejas y navegar por proyectos grandes de manera más eficiente. Al proporcionar una representación visual de su código, CodeSee le permite:

- **Identificar dependencias**: CodeSee lo ayuda a comprender cómo están conectadas las diferentes partes de su código base y cómo los cambios en un área pueden afectar otras áreas.
- **Analizar la estructura del código**: CodeSee le permite visualizar la estructura de su código, lo que facilita la identificación de patrones, antipatrones y áreas de mejora.
- **Navegue por bases de código grandes**: con CodeSee, puede navegar rápidamente por bases de código grandes y encontrar las partes del código en las que necesita trabajar.

Para comenzar con CodeSee, visite el sitio web oficial (https://www.codesee.io/) y siga las instrucciones para instalar la extensión del navegador e integrarla con su cuenta de GitHub.

## VS Code

Visual Studio Code (VS Code) es un editor de código popular, gratuito y Open Source desarrollado por Microsoft. Admite una amplia gama de lenguajes de programación y ofrece muchas características que lo convierten en una excelente opción para el desarrollo Open Source, que incluyen:

- **Soporte Git integrado**: VS Code proporciona soporte integrado para Git, lo que le permite administrar sus repositorios Git, preparar y confirmar cambios y resolver conflictos de fusión directamente desde el editor.
- **Extensibilidad**: VS Code ofrece un rico ecosistema de extensiones que pueden mejorar su experiencia de desarrollo y agregar soporte para lenguajes, herramientas y marcos adicionales.
- **Terminal integrada**: VS Code incluye una terminal integrada que le permite ejecutar comandos, scripts y crear tareas directamente desde el editor.
- **Personalizable**: VS Code es altamente personalizable, lo que le permite adaptar el editor a sus preferencias y flujo de trabajo. Puede personalizar el tema, las combinaciones de teclas y la configuración para crear un entorno de desarrollo personalizado.

Para descargar e instalar VS Code, visite el sitio web oficial (https://code.visualstudio.com/) y siga las instrucciones de su sistema operativo.

## Discord

Discord es una popular plataforma de mensajería y chat de voz ampliamente utilizada por comunidades Open Source para comunicación y colaboración. Al unirte a servidores de Discord relacionados con tus intereses y proyectos, podrás:

- **Conéctate con otros desarrolladores**: Discord te permite chatear con otros desarrolladores, hacer preguntas y compartir tus conocimientos con la comunidad.
- **Manténgase actualizado**: muchos proyectos Open Source utilizan Discord para compartir actualizaciones, anuncios y otra información importante. Al unirte a sus servidores, podrás mantenerte informado sobre los últimos desarrollos y contribuir de manera más efectiva.
- **Participe en debates**: los servidores de Discord suelen albergar debates sobre diversos temas relacionados con el desarrollo Open Source. Al participar en estas discusiones, puede aprender de otros, compartir sus ideas y contribuir al conocimiento colectivo de la comunidad.
- **Encuentra oportunidades de colaboración**: los servidores de Discord pueden ser un excelente lugar para encontrar otras personas que comparten tus intereses y buscan oportunidades de colaboración. Al establecer contactos con otros desarrolladores, puede descubrir nuevos proyectos en los que trabajar y formar asociaciones valiosas.

Para comenzar con Discord, visite el sitio web oficial (https://discord.com/) y regístrese para obtener una cuenta. Una vez que tenga una cuenta, puede buscar comunidades y proyectos Open Source en plataformas como GitHub, GitLab u OpenSauced para encontrar sus servidores Discord y unirse a la conversación.

Al familiarizarse con estas herramientas y plataformas, estará equipado para colaborar de manera efectiva, administrar sus proyectos y contribuir a proyectos Open Source. En el próximo capítulo, analizaremos cómo contribuir a proyectos Open Source, incluida la búsqueda de proyectos en los que trabajar, el envío de contribuciones y lo que sucede después de que se acepta su contribución.

[Siguiente Sección ->](05-como-contribuir-al-open-source.md)
