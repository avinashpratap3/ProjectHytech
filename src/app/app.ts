import { Component } from '@angular/core';

import { Footer } from './component/footer/footer';
import { Header } from './component/header/header';



@Component({
  selector: 'app-root',
  imports: [Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'hytech-pro';

  
}
