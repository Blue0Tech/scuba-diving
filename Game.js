    AFRAME.registerComponent('gameplay',{
        schema: {
            elementId: {type:'string',default:'#fish1'},
        },
        update: function() {
            this.isCollided(this.data.elementId);
        },
        isCollided: function(elemntId) {
            const element = document.querySelector(elemntId);
            const timer = document.querySelector('#timerentity');
            element.addEventListener('collide',(e)=>{
                if(elemntId.includes('#fish')&&element.getAttribute('visible')==true) {
                    element.setAttribute('visible',false);
                    this.updateScore();
                    this.updateFishes();
                } else {
                    this.gameOver();
                    timer.setAttribute('visible',false);
                }
            });
        },
        init: function() {
            var duration = 120;
            const timerEl = document.querySelector('#timer');
            this.startTimer(duration,timerEl);
        },
        startTimer: function(duration,timerEl) {
            var minutes;
            var seconds;
            const timer = document.querySelector('#timerentity');
            setInterval(() => {
                if(duration>=0) {
                    minutes = parseInt(duration/60);
                    seconds = parseInt(duration%60);
                    if(minutes<10) {
                        minutes = "0" + minutes;
                    }
                    if(seconds<10) {
                        seconds = "0" + seconds;
                    }
                    timerEl.setAttribute('text',{
                        value:minutes+":"+seconds
                    });
                    duration-=1;
                } else {
                    this.gameOver();
                    clearInterval(timer);
                    timer.setAttribute('visible',false);
                }
            }, 1000);
        },
        gameOver: function() {
            const diver = document.querySelector('#diver');
            const gameovertext = document.querySelector('#gameovertext');
            gameovertext.setAttribute('visible',true);
            diver.setAttribute('dynamic-body',{mass:0.1});
        },
        updateScore: function() {
            const element = document.querySelector('#score');
            var count = element.getAttribute('text').value;
            var currentScore = parseInt(count)+50;
            element.setAttribute('text',{value:currentScore});
        },
        updateFishes: function() {
            const element = document.querySelector('#fishes');
            var count = element.getAttribute('text').value;
            var fishes = parseInt(count)-1;
            element.setAttribute('text',{value:fishes});
        }
    });