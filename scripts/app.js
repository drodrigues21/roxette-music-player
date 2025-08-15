const playBtn = document.querySelector(".player-control--btn.play i");
const song = document.querySelector(".player-audio--controls");
const thumbnail = document.querySelector(".player-cover--thumbnail");
const songTitle = document.querySelector(".player-info--song");
const foward = document.querySelector(".player-control--btn.forward");
const backward = document.querySelector(".player-control--btn.backward");

const songs = [
	"./musics/Roxette - (I Could Never) Give You Up.mp3",
	"./musics/Roxette - Church Of Your Heart.mp3",
	"./musics/Roxette - Come Back (Before You Leave).mp3",
	"./musics/Roxette - Crazy About You.mp3",
	"./musics/Roxette - Dressed For Success.mp3",
	"./musics/Roxette - Fading Like A Flower.mp3",
	"./musics/Roxette - Fingertips 93.mp3",
	"./musics/Roxette - Fireworks.mp3",
	"./musics/Roxette - From A Distance.mp3",
	"./musics/Roxette - Go To Sleep.mp3",
	"./musics/Roxette - How Do You Do!.mp3",
	"./musics/Roxette - I Was So Lucky.mp3",
	"./musics/Roxette - June Afternoon.mp3",
	"./musics/Roxette - Looking For Jane.mp3",
	"./musics/Roxette - Love Is All (Shine Your Light On Me).mp3",
	"./musics/Roxette - Milk and Toast and Honey.mp3",
	"./musics/Roxette - No one Makes it on Her Own.mp3",
	"./musics/Roxette - One Wish.mp3",
	"./musics/Roxette - Paint.mp3",
	"./musics/Roxette - Place Your Love.mp3",
	"./musics/Roxette - Real Sugar.mp3",
	"./musics/Roxette - Run To You.mp3",
	"./musics/Roxette - Small Talk.mp3",
	"./musics/Roxette - The Centre Of The Heart.mp3",
	"./musics/Roxette - Turn To Me.mp3",
];

const songTitles = [
	"(I Could Never) Give You Up",
	"Church Of Your Heart",
	"Come Back (Before You Leave)",
	"Crazy About You",
	"Dressed For Success",
	"Fading Like A Flower",
	"Fingertips 93",
	"Fireworks",
	"From A Distance",
	"Go To Sleep",
	"How Do You Do!",
	"I Was So Lucky",
	"June Afternoon",
	"Looking For Jane",
	"Love Is All (Shine Your Light On Me",
	"Milk and Toast and Honey",
	"No one Makes it on Her Own",
	"One Wish",
	"Paint",
	"Place Your Love",
	"Real Sugar",
	"Run To You",
	"Small Talk",
	"The Centre Of The Heart",
	"Turn To Me",
];

const thumbnails = [
	"./images/look sharp 300x300.jpg",
	"./images/joyride 300x300.jpg",
	"./images/tourism 300x300.jpg",
	"./images/CrashBoomBang 300x300.jpg",
	"./images/look sharp 300x300.jpg",
	"./images/joyride 300x300.jpg",
	"./images/rarities 300x300.jpg",
	"./images/CrashBoomBang 300x300.jpg",
	"./images/Roxette-Good-Karma 300x300.jpg",
	"./images/CrashBoomBang 300x300.jpg",
	"./images/tourism 300x300.jpg",
	"./images/Roxette_Have_a_nice_day 300x300.jpg",
	"./images/dont-bore-us-get-to-the-chorus 300x300.jpg",
	"./images/room service 300x300.jpg",
	"./images/CrashBoomBang 300x300.jpg",
	"./images/room service 300x300.jpg",
	"./images/charm-school 300x300.jpg",
	"./images/Their 20 Greatest Songs 300x300.jpg",
	"./images/look sharp 300x300.jpg",
	"./images/CrashBoomBang 300x300.jpg",
	"./images/room service 300x300.jpg",
	"./images/CrashBoomBang 300x300.jpg",
	"./images/joyride 300x300.jpg",
	"./images/room service 300x300.jpg",
	"./images/pearls of passion 300x300.jpg",
];

// Song index
let songIndex = 0;

// Play and pause music
const playMusic = () => {
	if (playBtn.classList.contains("fa-play")) {
		playBtn.classList.remove("fa-play");
		playBtn.classList.add("fa-pause");
		song.play();
	} else {
		playBtn.classList.add("fa-play");
		playBtn.classList.remove("fa-pause");
		song.pause();
	}
};

playBtn.addEventListener("click", () => {
	playMusic();
});

// Next song
const nextSong = () => {
	songIndex++;
	if (songIndex > 24) {
		songIndex = 0;
	}

	song.src = songs[songIndex];
	thumbnail.src = thumbnails[songIndex];
	songTitle.textContent = songTitles[songIndex];

	if (playBtn.classList.contains("fa-play")) {
		playBtn.classList.remove("fa-play");
		playBtn.classList.add("fa-pause");
		song.play();
	} else {
		song.play();
	}
};

foward.addEventListener("click", () => {
	nextSong();
});

// Previous song
const previousSong = () => {
	songIndex--;
	if (songIndex < 0) {
		songIndex = 24;
	}

	song.src = songs[songIndex];
	thumbnail.src = thumbnails[songIndex];
	songTitle.textContent = songTitles[songIndex];

	if (playBtn.classList.contains("fa-play")) {
		playBtn.classList.remove("fa-play");
		playBtn.classList.add("fa-pause");
		song.play();
	} else {
		song.play();
	}
};

backward.addEventListener("click", () => {
	previousSong();
});

// automatically play the next song
song.addEventListener("ended", () => {
	nextSong();
});
