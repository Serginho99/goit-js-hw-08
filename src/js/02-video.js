import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', Throttle(onPlay, 1000));

function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
