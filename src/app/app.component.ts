import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//selector belongs to here,server can understand the selector and compare this selector with the selector in the index.html,
                       // if yes selector will replace the corresponding html file of the component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'remainder';
}
