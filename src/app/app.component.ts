import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'gdl';
  loadedFeature:string = 'recipe';

  onNavigate(feature)
  {
    this.loadedFeature = feature;
  }
}
