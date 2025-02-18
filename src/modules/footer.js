export function createFooter() {

    const footerDiv = document.createElement("footer");
    document.body.appendChild(footerDiv);
  
    const socialIconsDiv = document.createElement("div");
    socialIconsDiv.classList.add("social-icons");
  
    const socialLinks = [
      { href: "https://www.linkedin.com/in/alex-gil-spencer-848732343/", icon: "fab fa-linkedin", id: "linkedin" },
      { href: "https://github.com/AlexKingCoder", icon: "fab fa-github", id: "github" },
      { href: "https://www.youtube.com/@educandoheroes", icon: "fab fa-youtube", id: "youtube" }
    ];
  
    socialLinks.forEach(link => {
      const iconLink = document.createElement("a");
      iconLink.href = link.href;
      iconLink.target = "_blank";
  
      const icon = document.createElement("i");
      icon.classList.add(...link.icon.split(" "));
      icon.id = link.id;
  
      iconLink.appendChild(icon);
      socialIconsDiv.appendChild(iconLink);
    });
  
    footerDiv.appendChild(socialIconsDiv);
  }