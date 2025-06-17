export function createDescription() {

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    document.body.appendChild(descriptionDiv);
  
    const descriptionTitle = document.createElement("h2");
    descriptionTitle.textContent = "Voy a ahorrarte tiempo";
    descriptionDiv.appendChild(descriptionTitle);
  
    const introParagraph = document.createElement("p");
    introParagraph.textContent = "Tienes todos mis proyectos aquí debajo. Échales un vistazo y saca tus propias conclusiones.";
    descriptionDiv.appendChild(introParagraph);
  
    const skillsParagraph = document.createElement("p");
    skillsParagraph.textContent = "Si crees que tengo talento que aportar a tu empresa, puedes contactarme en el email abajo del todo.";
    descriptionDiv.appendChild(skillsParagraph);
  
    const philosophyParagraph = document.createElement("p");
    philosophyParagraph.textContent = "De lo contrario, puedes pasar al siguiente candidato.";
    descriptionDiv.appendChild(philosophyParagraph);
  
    const closingParagraph = document.createElement("p");
    closingParagraph.textContent = "En cualquier caso, muchas gracias por tu tiempo.";
    descriptionDiv.appendChild(closingParagraph);
  }
