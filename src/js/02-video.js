import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');

const player = new Player(iframe);


const onPlay = function (data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data.seconds))
    
};

player.on('timeupdate', throttle(onPlay, 1000));
    const saveTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

player.setCurrentTime(saveTime).then(function (seconds) {
    
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            
            break;

        default:
            
            break;
    }
});