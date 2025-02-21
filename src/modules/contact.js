export function createContact() {

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact-container");
  
    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contacto";
    contactDiv.appendChild(contactTitle);
  
    const emailCard = document.createElement("div");
    emailCard.classList.add("contact-card");
  
    const emailTitle = document.createElement("h3");
    emailTitle.textContent = "Correo electrónico";
    emailCard.appendChild(emailTitle);
  
    const emailLink = document.createElement("a");
    emailLink.href = "mailto:agz.articulos@gmail.com";
    emailLink.textContent = "agz.articulos@gmail.com";
    emailCard.appendChild(emailLink);
  
    contactDiv.appendChild(emailCard);
  
    document.body.appendChild(contactDiv);
  }