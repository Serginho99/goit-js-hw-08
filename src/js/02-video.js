import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const CURRENT_TIME_KEY = 'videoplayer-current-time';

player.on('timeupdate', Throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem(CURRENT_TIME_KEY, event.seconds);
}

setCurrentTime();

function setCurrentTime() {
  const setTime = localStorage.getItem(CURRENT_TIME_KEY);
  if (setTime) {
    player.setCurrentTime(setTime);
  }
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
