import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

player.getCurrentTime().then(time => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  } else {
    localStorage.setItem('videoplayer-current-time', time);
  }
});

player.on('timeupdate', throttle(updateCurrentTime, 1000));

function updateCurrentTime({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
