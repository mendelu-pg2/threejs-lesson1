import * as THREE from "three";
import Tree from "./Tree";

export default class Forest {
    constructor(scene, sizeX, sizeY, treeCount, spread) {
        this.scene = scene;
        this.object = null;
        this.trees = [];

        this.minSize = 0.5;
        this.maxSize = 1.5;

        this.seedTrees(sizeX, sizeY, treeCount, spread);
    }

    seedTrees(sizeX, sizeY, count, spread) {
        this.object = new THREE.Group();
        let seededTrees = 0;

        while (seededTrees < count) {
            const size = Math.random() * (this.maxSize - this.minSize) + this.minSize;

            const randomX = Math.random() * sizeX - (sizeX / 2);
            const randomZ = Math.random() * sizeY - (sizeY / 2);
            const x = spread * Math.round(randomX / spread);
            const z = spread * Math.round(randomZ / spread);
 
            if (this.isPositionEmpty(x, z)) {
                console.log('Seeding tree ' + seededTrees + '...');
                const tree = new Tree(this.object, x, z, size);
                this.trees.push(tree);
                seededTrees++;
            }
        }

        this.scene.add(this.object);
    }

    isPositionEmpty(x, z) {
        for (const tree of this.trees) {
            if (tree.object.position.x == x && tree.object.position.z == z) {
                return false;
            }
        }

        return true;
    }

}
