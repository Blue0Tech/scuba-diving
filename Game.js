    AFRAME.registerComponent('gameplay',{
        schema: {
            elementId: {type:'string',default:'#fish1'},
        },
        update: function() {
            this.isCollided(this.data.elementId);
        },
        isCollided: function(elemntId) {
            const element = document.querySelector(elemntId);
            element.addEventListener('collide',(e)=>{
                if(elemntId.includes('#seahorse')) {
                    element.setAttribute('visible',false);
                }
            });
        }
    });