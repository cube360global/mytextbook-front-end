import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DisplayContentService} from '../../../../../../lib/tools/src/lib/display-content.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit {

  // @ViewChild('signContent') content = {} as ElementRef;

  constructor(public displayContentService: DisplayContentService) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //   const nativeElement = this.content.nativeElement;
    //   const scene = new THREE.Scene();
    //   const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //
    //   const renderer = new THREE.WebGLRenderer();
    //   renderer.setSize(100, 500);
    //
    //   // this.content?.appendChild(renderer.domElement);
    //   const x = document.querySelector('#signContent');
    //
    //   nativeElement.appendChild(renderer.domElement);
    //   // document.body.appendChild(renderer.domElement);
    //
    //   const geometry = new THREE.BoxGeometry(1, 1, 1);
    //   const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
    //
    //   camera.position.z = 5;
    //
    //   // tslint:disable-next-line:only-arrow-functions typedef
    //   const animate = function() {
    //     requestAnimationFrame(animate);
    //
    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;
    //
    //     renderer.render(scene, camera);
    //   };
    //   animate();
    // }
  }
}
