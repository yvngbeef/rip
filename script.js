const card = document.querySelector('.profile-card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  const rotateX = (0.5 - y) * 40; // más rotación aún
  const rotateY = (x - 0.5) * 40;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});


const audio = document.getElementById("audio");
const playPause = document.getElementById("playPause");
const progressBar = document.getElementById("progressBar");

playPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPause.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    playPause.innerHTML = '<i class="fas fa-play"></i>';
  }
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${percent}%`;
});

audio.addEventListener("ended", () => {
  playPause.innerHTML = '<i class="fas fa-play"></i>';
});


const saveButton = document.querySelector('#saveButton'); // Asegúrate de tener un botón con id 'saveButton'

saveButton.addEventListener('click', () => {
  const displayName = document.querySelector('#displayName').value;
  const description = document.querySelector('#description').value;
  const avatar = document.querySelector('#avatar').value; // O la ruta de la imagen
  const socialLinks = {
    roblox: document.querySelector('#robloxLink').value,
    discord: document.querySelector('#discordLink').value,
    telegram: document.querySelector('#telegramLink').value,
    youtube: document.querySelector('#youtubeLink').value
  };

  // Preparar los datos
  const userData = {
    displayName,
    description,
    avatar,
    socialLinks
  };

  // Guardar los datos en localStorage
  localStorage.setItem('userData', JSON.stringify(userData));

  console.log('Datos guardados localmente:', userData);
});

// Recuperar los datos guardados en localStorage
const savedUserData = JSON.parse(localStorage.getItem('userData'));

if (savedUserData) {
  // Pre-poblar los campos con los datos guardados
  document.querySelector('#displayName').value = savedUserData.displayName;
  document.querySelector('#description').value = savedUserData.description;
  document.querySelector('#avatar').value = savedUserData.avatar;
  document.querySelector('#robloxLink').value = savedUserData.socialLinks.roblox;
  document.querySelector('#discordLink').value = savedUserData.socialLinks.discord;
  document.querySelector('#telegramLink').value = savedUserData.socialLinks.telegram;
  document.querySelector('#youtubeLink').value = savedUserData.socialLinks.youtube;

  console.log('Datos cargados desde localStorage:', savedUserData);
}
