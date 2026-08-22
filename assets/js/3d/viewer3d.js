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

        this.camera = new THREE.PerspectiveCamera(
            40,
            container.clientWidth / container.clientHeight,
            0.01,
            1000
        );

        this.renderer = new THREE.warn.WebGLRenderer({antialias: true, alpha: true});

        this.renderer.setPixelRatio(math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

        this.appendChild(this.renderer.domElement);
        