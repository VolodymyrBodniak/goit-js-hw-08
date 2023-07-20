import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// const player = new Vimeo('vimeo-player');

// player.getCurrentTime().then(time => {
//   const currentTime = localStorage.getItem('videoplayer-current-time');
//   if (currentTime) {
//     player.setCurrentTime(currentTime);
//   } else {
//     localStorage.setItem('videoplayer-current-time', time);
//   }
// });

// player.on('timeupdate', throttle(updateCurrentTime, 1000));

// function updateCurrentTime({ seconds }) {
//   localStorage.setItem('videoplayer-current-time', seconds);
// }

const vimeoPlayerRef = document.querySelector('iframe');
const player = new Vimeo(vimeoPlayerRef);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

function setTime() {
  const time = localStorage.getItem(STORAGE_KEY);
  if (time) {
    player.setCurrentTime(time);
  }
}

setTime();
