const data = {
	slackProfilePicturePath: "./ayo.jpeg",
	DisplayName: "Adeniji Ayomide Deborah",
	email: "adenijiayomideay@gmail.com",
};

const slackProfilePicture = document.querySelector(
	'[data-testid="slackProfilePicture"]'
);

const slackEmail = document.querySelector('[data-testid="slackEmail"]');
const slackDisplayName = document.querySelector(
	'[data-testid="slackDisplayName"]'
);

slackProfilePicture.src = data.slackProfilePicturePath;
slackProfilePicture.alt = data.DisplayName;
slackProfilePicture.style.width = "100%";
slackDisplayName.textContent = data.DisplayName;
slackEmail.textContent = data.email;


const socialIcons = [
  { name: "twitter", url: "https://twitter.com" },
  { name: "linkedin", url: "https://linkedin.com" },
  { name: "instagram", url: "https://instagram.com" },
  { name: "whatsapp", url: "https://wa.me/1234567890" },
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
