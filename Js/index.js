const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `\u00A9 ${thisYear} Adilson Borges Cardoso`;
footer.appendChild(copyright);

const skills = [
  "JavaScript",
  "HTML",
  "CSS",
  " MySQL",
  "Archimate",
  "Python",
  "Fortran",
  "C++",
  " Matlab",
  "GeoGebra",
  "R",
  "Latex",
  "Balsamiq",
  "GitHub",
];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");
for (let i = 0; i < skills.length; i++) {
  const skillsItem = document.createElement("li");
  skillsItem.textContent = skills[i];
  skillsList.appendChild(skillsItem);
}
