import Cube from './Cube';
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import Tree from './Tree';
import Forest from './Forest';
import { CameraFlow } from './CameraFlow';

export default class Scene {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );

        this.camera.position.x = 1;
        this.camera.position.y = 2;
        this.camera.position.z = 5;

        // this.cube = new Cube(this.scene);
        // this.tree = new Tree(this.scene);
        this.forest = new Forest(this.scene, 30, 30, 10, 5);
        this.forest.object.position.z -= 5;

        this.cameraFlow = new CameraFlow(this.camera);
        this.cameraFlow.start();
    }

    animate(time) {
        requestAnimationFrame(() => this.animate());
        TWEEN.update(time);
        this.renderer.render(this.scene, this.camera);
    }

    render() {
        this.animate();
    }

    startRotation() {
        this.cube.startRotation();
    }

    stopRotation() {
        this.cube.stopRotation();
    }

    showTexture() {
        this.cube.showTexture();
    }

    hideTexture() {
        this.cube.hideTexture();
    }
}
