AFRAME.registerComponent('fish',{
    init: function() {
        for(var i=1;i<=20;i++) {
            var id = `fish${i}`;
            var posX = (Math.random()*26+(-12));
            var posY = (Math.random()*10+(-12));
            var posZ = (Math.random()*30+(-10));
            var position = {x:posX,y:posY,z:posZ};
            this.createFish(id,position);
        }
    },
    createFish: function(id,position) {
        var oceanElement = document.querySelector('#oceanPart');
        var FishElement = document.createElement('a-entity');
        FishElement.setAttribute('id',id);
        FishElement.setAttribute('position',position);
        FishElement.setAttribute('gltf-model','./guppy_fish/scene.gltf');
        FishElement.setAttribute('scale',{x:0.5,y:0.5,z:0.5});
        oceanElement.append(FishElement);
    }
});