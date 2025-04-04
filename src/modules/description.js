export function createDescription() {

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    document.body.appendChild(descriptionDiv);
  
    const descriptionTitle = document.createElement("h2");
    descriptionTitle.textContent = "Sobre mí";
    descriptionDiv.appendChild(descriptionTitle);
  
    const introParagraph = document.createElement("p");
    introParagraph.textContent = "Me llamo Alex. Soy desarrollador especializado en Backend. Trabajo en proyectos de iniciativa propia para mejorar mis habilidades cada día.";
    descriptionDiv.appendChild(introParagraph);
  
    const skillsParagraph = document.createElement("p");
    skillsParagraph.textContent = "Soy un estudiante voraz. Mi rutina es romper siempre mis límites. La excelencia es el mínimo.";
    descriptionDiv.appendChild(skillsParagraph);
  
    const philosophyParagraph = document.createElement("p");
    philosophyParagraph.textContent = "Documento mi trabajo a diario a través de YouTube y Linkedin, para ayudar e inspirar a otros programadores.";
    descriptionDiv.appendChild(philosophyParagraph);
  
    const closingParagraph = document.createElement("p");
    closingParagraph.textContent = "Puedes echar un vistazo a mis proyectos y habilidades concretas a continuación. Si deseas conocerme mejor, o quieres proponerme un desafío, puedes contactarme en el email que encontrarás al final.";
    descriptionDiv.appendChild(closingParagraph);
  }
