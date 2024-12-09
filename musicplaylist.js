const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
  ];

  const shiftedMusicPlaylist = musicPlaylist.shift();
  const poppedMusicPlaylist = musicPlaylist.pop();
  musicPlaylist.unshift("Bad");
  musicPlaylist.push("How will I know");
  musicPlaylist.push("I Don't Want to Miss a Thing");

    console.log(musicPlaylist);

