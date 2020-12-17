import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-public-home-page',
  templateUrl: './public-home-page.component.html',
  styleUrls: ['./public-home-page.component.scss']
})
export class PublicHomePageComponent implements OnInit {
  ngOnInit(): void {
  }

  // // tslint:disable-next-line:variable-name
  // @ViewChild('fullpageRef') fp_directive = new ElementRef<any>('fullpageRef');
  // config: any;
  // // tslint:disable-next-line:variable-name
  // fullpage_api: any;
  //
  // constructor(private renderer: Renderer2) {
  //
  //   // this is just an example => for more details on config please visit fullPage.js docs
  //   this.config = {
  //     licenseKey: 'YOUR LICENSE KEY HERE',
  //     anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
  //     menu: '#menu',
  //     navigation: true,
  //     sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
  //
  //     // events callback
  //     afterLoad: () => {
  //       // console.log(destination);
  //     },
  //     afterRender: () => {
  //       // console.log('afterRender');
  //     },
  //     afterResize: () => {
  //       // console.log('afterResize' + width + ' ' + height);
  //     },
  //     afterSlideLoad: () => {
  //       // console.log(destination);
  //     }
  //   };
  // }
  //
  //
  // getRef(fullPageRef: any): void {
  //   this.fullpage_api = fullPageRef;
  // }
  //
  // addSection(): void {
  //   // change background color
  //   this.config.sectionsColor = Array(6).fill(0).map(x => this.randomColor());
  //
  //   // creating the section div
  //   const section = this.renderer.createElement('div');
  //   this.renderer.addClass(section, 'section');
  //   this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
  //   // adding section
  //   this.renderer.appendChild(this.fp_directive.nativeElement, section);
  //
  //   this.fullpage_api.build();
  // }
  //
  // removeLast(): void {
  //   const lastSection = this.fp_directive.nativeElement.lastChild;
  //
  //   if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
  //     this.fullpage_api.moveSectionUp();
  //   }
  //   lastSection.remove();
  //
  //   this.fullpage_api.build();
  // }
  //
  // randomColor(): string {
  //   return '#' + Math.random().toString(16).slice(-3);
  // }

  // @ViewChild('htmlContainer') htmlContainer: ElementRef;
  // arr = Array(50).fill(5);


  // public scrollTo(id: string): void {
  //   console.log(id);
  //   const pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({
  //     document: this.document,
  //     scrollTarget: `#` + id,
  //     scrollingViews: [this.htmlContainer.nativeElement],
  //   });
  //   console.log(pageScrollInstance.scrollTarget);
  //   this.pageScrollService.start(pageScrollInstance);
  // }


}
