AFRAME.registerComponent('movement',{
    init: function() {
        window.addEventListener('keydown',(event) => {
            var pos = this.el.getAttribute('position');
            if(pos.y>-5 && event.key=="q") pos.y-=0.1;
            if(pos.y<5 && event.key=="e") pos.y+=0.1;
            if(pos.z>-10 && event.key=="w") pos.z-= 0.25;
            if(pos.z<10 &&event.key=="s") pos.z+= 0.25;
            if(pos.x<10 && event.key=="d") pos.x+= 0.25;
            if(pos.x>-10 && event.key=="a") pos.x-= 0.25;
            this.el.setAttribute('position',pos);
        });
    }
});