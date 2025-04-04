export function createSkills() {

    const skillsDiv = document.createElement("div");
    skillsDiv.id = "skills";
    document.body.appendChild(skillsDiv);
  
    const skillsTitle = document.createElement("h2");
    skillsTitle.textContent = "Mis Habilidades";
    skillsDiv.appendChild(skillsTitle);
    
    const skills = [
      {
        title: "Desarrollo Frontend",
        description: "Conocimiento flexible de HTML, SCSS y JavaScript."
      },
      {
        title: "Desarrollo Backend",
        description: "Experiencia con Node.js, Express y Multer."
      },
      {
        title: "Bases de Datos",
        description: "Diseño y optimización en MongoDB y Postgre."
      },
      {
        title: "Encriptación",
        description: "Diseño de métodos de encriptación y desencriptación (Treecrypt)."
      },
      {
        title: "React",
        description: "Especialización en React, DND y Hook-form."
      },
      {
        title: "Chakra UI",
        description: "Diseño y programación personalizada de UI."
      },
      {
        title: "Comandos de GitHub",
        description: "Comandos avanzados para desarrollo de proyectos."
      },
      {
        title: "Wordpress",
        description: "Experiencia en diseño web con Wordpress."
      },
      {
        title: "Sony Vegas",
        description: "Edición de vídeo y podcast."
      },
      {
        title: "Pixlr & GIMP",
        description: "Edición de imágenes y miniaturas."
      },
      {
        title: "Creatividad e Innovación",
        description: "Expert en encontrar soluciones y mejoras constantes."
      },
      {
        title: "Liderazgo y coaching",
        description: "Experiencia en equipos de trabajo y mentorías."
      },
    ];
  
    const skillsList = document.createElement("div");
    skillsList.classList.add("skills-list");
    
    skills.forEach(skill => {
      const skillItem = document.createElement("div");
      skillItem.classList.add("skill-item");
  
      const skillTitle = document.createElement("h3");
      skillTitle.textContent = skill.title;
      
      const skillDescription = document.createElement("p");
      skillDescription.textContent = skill.description;
      
      skillItem.appendChild(skillTitle);
      skillItem.appendChild(skillDescription);
  
      skillsList.appendChild(skillItem);
    });
  
    skillsDiv.appendChild(skillsList);
  }
