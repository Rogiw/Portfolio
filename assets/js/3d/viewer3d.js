import * THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

export class Viewer3D {
    constructor(container) {
        if (!container) {
            throw new Error('Container element is required to initialize Viewer3D.');
        }
        this.container = container;
        this.model = null;

        this.scene= new THREE.Scene();
        this.background = new THREE.Color(0xd6d4cc);