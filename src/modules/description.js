export function createDescription() {

    const descriptionDiv = document.createElement("div");
    descriptionDiv.id = "description";
    document.body.appendChild(descriptionDiv);
  
    const descriptionTitle = document.createElement("h2");
    descriptionTitle.textContent = "Sobre mí";
    descriptionDiv.appendChild(descriptionTitle);
  
    const introParagraph = document.createElement("p");
    introParagraph.textContent = "¡Hola! Me llamo Alex y soy desarrollador full stack (con una pasión especial por el backend). Dispongo de una experiencia variada y creciente en todo tipo de tecnologías, desde ES6, Mongo, React, y actualmente estudio una especialización en IA enfocada a la empresa.";
    descriptionDiv.appendChild(introParagraph);
  
    const skillsParagraph = document.createElement("p");
    skillsParagraph.textContent = "Trabajo de manera activa en el desarrollo y mejora de diversas aplicaciones. También dispongo de un canal de YouTube de amplia difusión, con el cual he adquirido habilidades de marketing y difusión en redes sociales. Además, he trabajado de forma remota para una empresa de alto impacto (Secretos de la Vida), por lo que soy resuelto en el trabajo a distancia y en el liderazgo de equipo.";
    descriptionDiv.appendChild(skillsParagraph);
  
    const philosophyParagraph = document.createElement("p");
    philosophyParagraph.textContent = "Soy un desarrollador bien formado, pulcro y creativo. Apuesto por el trabajo bien hecho y la formación continua. Me encanta trabajar en equipo. Al ser también graduado en Educación, me apasionado ayudar a mis compañeros, tanto a nivel técnico como emocional.";
    descriptionDiv.appendChild(philosophyParagraph);
  
    const closingParagraph = document.createElement("p");
    closingParagraph.textContent = "Puedes echar un vistazo a mis proyectos y habilidades concretas aquí debajo. Si deseas conocerme en profundidad, también tienes mis datos de contacto :)";
    descriptionDiv.appendChild(closingParagraph);
  }