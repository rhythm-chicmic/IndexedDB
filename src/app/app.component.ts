import { Component } from '@angular/core';
import { RxHeroDocument } from './RXDB';
import 'zone.js/plugins/zone-patch-rxjs';
import { DatabaseService } from './database.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RxDB';
  public editedHero?: RxHeroDocument;
  constructor(){}
   /**
   * this method exists to play around with the typings
   */
   foo() {
    // const x: number = this.editedHero.hpPercent();
  }

  editHero(hero: RxHeroDocument) {
    this.editedHero = hero;
  }
}
