AFRAME.registerComponent('movement',{
    init: function() {
        window.addEventListener('keydown',(event) => {
            var pos = this.el.getAttribute('position');
            if(pos.y>-5 && event.key=="q") pos.y-=0.1;
            if(pos.y<5 && event.key=="e") pos.y+=0.1;
            if(event.key=="w") pos.z-= 0.25;
            if(event.key=="s") pos.z+= 0.25;
            if(event.key=="d") pos.x+= 0.25;
            if(event.key=="a") pos.x-= 0.25;
            this.el.setAttribute('position',pos);
        });
    }
});