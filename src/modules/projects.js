export function createProjects() {

    const projectsDiv = document.createElement("div");
    projectsDiv.id = "projects";
    document.body.appendChild(projectsDiv);

const projectsTitle = document.createElement("h2");
projectsTitle.textContent = "Mis Proyectos";
projectsDiv.appendChild(projectsTitle);

const projects = [
  {
    name: "TreeCrypt",
    thumbnail: "/projects/treecrypt.png",
    version: "v1.0.0 (04/04/2025)",
    description: "Aplicación de encriptado de archivos con método propio.",
    buttons: [
      {
        text: "🔎¡Echa un vistazo!",
        link: "https://treecrypt.netlify.app"
      }
    ],
    note: "El código del proyecto se encuentra oculto para proteger la exclusividad"
  },
  {
    name: "Ocean Database",
    thumbnail: "/projects/oceanDatabase.png",
    version: "v1.0.0 (23/03/2025)",
    description: "Base de datos Postgre diseñada para hoteles.",
    buttons: [
      {
        text: "🔎¡Echa un vistazo!",
        link: "https://oceanexperiencehotel.netlify.app"
      },
      {
        text: "🧬¿Quieres ver el código?",
        link: "https://github.com/AlexKingCoder/oceandb-server"
      }
    ]
  },
  {
    name: "Multiverse Patrols",
    thumbnail: "/projects/multiversePatrols.png",
    version: "v1.0.1 (01/03/2025)",
    description: "Juego narrativo diseñado con React.",
    buttons: [
      {
        text: "🔎¡Echa un vistazo!",
        link: "https://multiversepatrols.netlify.app"
      },
      {
        text: "🧬¿Quieres ver el código?",
        link: "https://github.com/AlexKingCoder/multiversepatrols"
      }
    ]
  },
  {
    name: "Ice Dream",
    thumbnail: "/projects/iceDreamBackend.png",
    version: "v0.9.1 (25/01/2025)",
    description: "Backend completo diseñado para la futura aplicación Ice Dream.",
    buttons: [
      {
        text: "🧬¿Quieres ver el código?",
        link: "https://github.com/AlexKingCoder/iceDream"
      }
    ]
  },
  {
    name: "Story Flipper",
    thumbnail: "/projects/storyFlipper.png",
    version: "v1.1 (19/12/2024)",
    description: "Aplicación que genera ideas para escribir historias alucinantes.",
    buttons: [
      {
        text: "🔎¡Echa un vistazo!",
        link: "https://storyflipper.netlify.app"
      },
      {
        text: "🧬¿Quieres ver el código?",
        link: "https://github.com/AlexKingCoder/storyflipper"
      }
    ]
  },
  {
    name: "Audi",
    thumbnail: "/projects/audiSpain.png",
    version: "v1.0 (11/11/2024)",
    description: "Réplica de la página web de Audi España.",
    buttons: [
      {
        text: "🔎¡Echa un vistazo!",
        link: "https://audispain.netlify.app"
      },
      {
        text: "🧬¿Quieres ver el código?",
        link: "https://github.com/AlexKingCoder/audi-spain"
      }
    ]
  },
  {
    name: "Educando Héroes",
    thumbnail: "/projects/logoEducandoHeroes.png",
    version: "En activo",
    description: "Canal enfocado a la educación y el desarrollo personal.",
    buttons: [
      {
        text: "🔎¡Echa un vistazo!",
        link: "https://youtube.com/@educandoheroes"
      }
    ]
  },
  {
    name: "King Coder",
    thumbnail: "/KingCoderLogoSmall.png",
    version: "En activo",
    description: "Canal donde documento los avances de mis proyectos.",
    buttons: [
      {
        text: "🔎¡Echa un vistazo!",
        link: "https://youtube.com/@alexkingcoder"
      }
    ]
  }
];

const projectsList = document.createElement("div");
projectsList.classList.add("projects-list");

projects.forEach(project => {
  const projectItem = document.createElement("div");
  projectItem.classList.add("project-item");

  const projectName = document.createElement("h3");
  projectName.textContent = project.name;
  
  const projectThumbnail = document.createElement("img");
  projectThumbnail.src = project.thumbnail;
  projectThumbnail.alt = `Miniatura de ${project.name}`;
  projectThumbnail.classList.add("project-thumbnail");
  
  const projectVersion = document.createElement("span");
  projectVersion.classList.add("project-version");
  projectVersion.textContent = `Versión: ${project.version}`;

  const projectDescription = document.createElement("p");
  projectDescription.textContent = project.description;

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  if (project.buttons && project.buttons.length > 0) {
    project.buttons.forEach(button => {
      const projectButton = document.createElement("a");
      projectButton.href = button.link;
      projectButton.target = "_blank";
      projectButton.textContent = button.text;
      buttonContainer.appendChild(projectButton);
    });
  }

  projectItem.appendChild(projectName);
  projectItem.appendChild(projectThumbnail);
  projectItem.appendChild(projectVersion);
  projectItem.appendChild(projectDescription);
  projectItem.appendChild(buttonContainer);

  if (project.note) {
    const projectNote = document.createElement("p");
    projectNote.classList.add("project-note");
    projectNote.textContent = project.note;
    projectItem.appendChild(projectNote);
  }

  projectsList.appendChild(projectItem);
});

projectsDiv.appendChild(projectsList);
}