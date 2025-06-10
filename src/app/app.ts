import { Component } from '@angular/core';
import { Intro } from "./components/intro/intro";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Intro]
})

export class App {

}
