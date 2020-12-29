import {Component, HostListener} from '@angular/core';
import {DisplayContentService} from '../../../lib/tools/src/lib/display-content.service';
import {lyl, StyleRenderer, ThemeVariables} from '@alyle/ui';

const STYLES = (theme: ThemeVariables) => ({
  $global: lyl`{
    body {
      color: ${theme.text.default}
      margin: 0
    }
  }`,
  root: lyl`{
    display: block
  }`
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [StyleRenderer]
})
export class AppComponent {
  readonly classes = this.sRenderer.renderSheet(STYLES, true);

  constructor(private displayContentService: DisplayContentService, readonly sRenderer: StyleRenderer) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.displayContentService.isMobile = window.screen.width <= 411;
  }
}
