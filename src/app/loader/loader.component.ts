import {Component} from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
    <div class="loaderWrapper">
      <div class="spinner-wrapper">
        <div class="spinner-grow text-success" role="status" >
        </div>
        <div>Loading...</div>
      </div>
    </div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  constructor() {}
}
