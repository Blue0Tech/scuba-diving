AFRAME.registerComponent('seahorse',{
    init: function() {
        for(var i=1;i<=20;i++) {
            var id = `seahorse${i}`;
            var posX = (Math.random()*30+(-10));
            var posY = (Math.random()*10+(-12));
            var posZ = (Math.random()*25+(-8));
            var position = {x:posX,y:posY,z:posZ};
            this.createSeahorse(id,position);
        }
    },
    createSeahorse: function(id,position) {
        var oceanElement = document.querySelector('#oceanPart');
        var SeahorseElement = document.createElement('a-entity');
        SeahorseElement.setAttribute('id',id);
        SeahorseElement.setAttribute('position',position);
        SeahorseElement.setAttribute('gltf-model','./seahorse/scene.gltf');
        SeahorseElement.setAttribute('scale',{x:0.005,y:0.005,z:0.005});
        oceanElement.append(SeahorseElement);
    }
});