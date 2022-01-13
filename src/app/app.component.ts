import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bio-web';

  loadedFeature = 'date-page';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}

