export function createHeader() {

    const header = document.createElement('header');
    document.body.prepend(header);

  const h1 = document.createElement('h1');
  h1.textContent = "Alex Gil Spencer";

  const logo = document.createElement('img');
  logo.src = "/KingCoderLogoSmall.png";
  logo.alt = 'Logo de Alex Gil Spencer';
  logo.width = 100;

  header.innerHTML = '';
  header.appendChild(h1);
  header.appendChild(logo);
}