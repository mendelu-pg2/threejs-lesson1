import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";

export class CameraFlow {
    constructor(camera) {
        this.camera = camera;
        this.animation = null;
    }

    start() {
        let attributes = {
            x: 0, 
            z: 0,
            rotationY: 0
        };

        const target = {
            z: -20,
            rotationY: Math.PI
        };

        this.animation = new TWEEN.Tween(attributes)
            .to(target, 3000)
            .onUpdate(() => {
                this.camera.position.z = attributes.z;
                this.camera.rotation.y = attributes.rotationY;
            })
            .yoyo(true)
            .repeat(Infinity)
            .start();
    }

    stop() {
        this.animation.stop();
    }
}