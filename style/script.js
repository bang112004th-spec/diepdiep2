const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

nyanCat.addEventListener('click', () => {
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.play();
});

const messages = [
  "Chúc em sinh nhật vui vẻ 💕", "Happy Birthday 🎂🤗", "Gặp nhiều may mắn 🥰",
  "❤️Vui vẻ mỗi ngày❤️", "Luôn luôn mỉm cười😊",
  "Ngọt ngào như kẹo 💖", "Hạnh phúc ngập tràn🌸",
  "Mãi mãi bên nhau 🎁","Trẻ mãi hông chịu lớn🫶",
  "Thương em nhìu nhìu💞","Mọi buồn phiền sẽ qua❤️",
  "Cười nhiều hơn nhé 🫶",
  "Buồn phiền thì chia sẻ với tụi anh",
  "Tụi anh chúc em sinh nhật vui vẻ!🎂"
];

function showRandomMessage(event) {
  sound.play();
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  const directions = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
  const angle = directions[Math.floor(Math.random() * directions.length)];
  const distance = 200;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  msg.style.setProperty('--dx', dx);
  msg.style.setProperty('--dy', dy);

  const rect = event.currentTarget.getBoundingClientRect();
  msg.style.left = rect.left + rect.width / 2 + "px";
  msg.style.top = rect.top + rect.height / 2 + "px";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.position = "fixed";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}
