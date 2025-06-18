    const canvas = document.getElementById('sparkle');
    const ctx = canvas.getContext('2d');

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let sparkles = [];

    for (let i = 0; i < 500; i++) {
      sparkles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        d: Math.random() * 1.5 + 0.5
      });
    }

    function drawSparkles() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < sparkles.length; i++) {
        const s = sparkles[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 220, 190, 0.8)";
        ctx.fill();
      }

      moveSparkles();
    }

    function moveSparkles() {
      for (let i = 0; i < sparkles.length; i++) {
        let s = sparkles[i];
        s.y -= s.d;
        if (s.y < 0) {
          s.y = h;
          s.x = Math.random() * w;
        }
      }
    }

    setInterval(drawSparkles, .3);

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

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