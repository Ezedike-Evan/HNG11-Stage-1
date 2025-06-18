const data = {
	profilePicturePath: "./me-564px.jpg",
	displayName: "Chidi Treasure Ebube",
	email: "chidikom@gmail.com",
};

const profilePicture = document.querySelector(
	'[data-testid="profilePicture"]'
);

const email = document.querySelector('[data-testid="email"]');
const displayName = document.querySelector(
	'[data-testid="displayName"]'
);

profilePicture.src = data.profilePicturePath;
profilePicture.alt = data.displayName;
displayName.textContent = data.displayName;
email.textContent = data.email;


const socialIcons = [
  { name: "twitter", url: "https://twitter.com" },
  { name: "facebook", url: "https://twitter.com" },
  { name: "linkedin", url: "https://linkedin.com" },
  { name: "instagram", url: "https://instagram.com" },
];

const container = document.getElementById("social-links");

socialIcons.forEach(({ name, url }) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
  a.innerHTML = `<img src="icons/${name}.svg" alt="${name}" />`;
  container.appendChild(a);
});
