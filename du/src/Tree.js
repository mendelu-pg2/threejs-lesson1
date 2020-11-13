import * as THREE from "three";

export default class Tree {
    constructor(parent, x, z, size) {
        this.parent = parent;
        this.object = null;

        this.initObject(x, z, size);
    }

    initObject(x, z, size) {
        const trunkHeight = 2;
        const geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 8 );
        const material = new THREE.MeshBasicMaterial( { color: 0x99805d } );
        const trunk = new THREE.Mesh( geometry, material );

        const crownHeight = 2;
        const geometry2 = new THREE.ConeGeometry( 1, crownHeight, 8 );
        const material2 = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
        const crown = new THREE.Mesh( geometry2, material2 );

        trunk.scale.y = size; // trunk is resizing only vertically
        crown.position.y = (trunkHeight * size); // place crown above the trunk
        crown.scale.set(size, size, size);

        this.object = new THREE.Group();
        this.object.add(trunk);
        this.object.add(crown);

        this.object.position.set(x, 0, z);

        this.parent.add(this.object);
    }

}
