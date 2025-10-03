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

// *********** Message Form **************
const messageForm = document.querySelector("form[name=leave_message]");
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); //prevent page refresh

  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  console.log("Name:", userName);
  console.log("Email:", userEmail);
  console.log("Message:", userMessage);

  const messageSection = document.getElementById("messages"); //select the message section

  const messageList = messageSection.querySelector("ul"); //select the ul

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}
  </a>: <span>${userMessage}</span>`;

  // create a edit button
  const editButton = document.createElement("button");
  editButton.innerText = "edit";
  editButton.className = "edit-btn";
  editButton.type = "button";

  //Add a click event listenner to edit the message

  editButton.addEventListener("click", function () {
    const messageSpan = newMessage.querySelector("span"); //find message for edit
    const newtext = prompt("Edit your message:", messageSpan.innerText);
    //update message
    if (newtext !== null) {
      messageSpan.innerText = newtext;
    }
  });
  //append the edit button to the message
  newMessage.appendChild(editButton);
  // create a remove button
  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.className = "remove-btn";
  removeButton.type = "button";
  hideMessageSection(); // hide function if no message

  //Add a click event listenner to remove the message
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode; // find the li
    entry.remove();
    hideMessageSection(); // hide function if no message
  });

  //append the remove button to the message
  newMessage.appendChild(removeButton);

  //append the new message to the message list
  messageList.appendChild(newMessage);
  hideMessageSection(); // hide function if no message

  messageForm.reset(); //clear  forma after submittion
});

// hide function

function hideMessageSection() {
  const messageSection = document.getElementById("messages");
  const messageList = messageSection.querySelector("ul");
  if (messageList.children.length === 0) {
    messageSection.style.display = "none";
  } else {
    messageSection.style.display = "block";
  }
}
hideMessageSection(); // hide function if no message
