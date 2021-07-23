import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from '@app/shared/interfaces/character.interface';


@Component({
    selector:'app-character',
    template:`
    <div class="card">
      <div class="image">
        <a [routerLink]="['/character-details', character.id]">
          <img
            [src]="character.image"
            [alt]="character.name"
            class="card-img-top"
          />
        </a>
      </div>
      <div class="card-inner">
        <div class="header">
          <a [routerLink]="['/character-details', character.id]">
            <h2>{{ character.name | slice: 0:15}}</h2>
          </a>
          <h5 class="text-muted">{{ character.species }}</h5>
          <h5 class="text-muted">{{ character.status }}</h5>
          <h5 class="text-muted">{{ character.gender }}</h5>
          <a [routerLink]="['/episodes']">
            <h5>{{ character.episode | slice: 0:15}}</h5>
            </a>

        </div>
      </div>
    </div>`,
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class CharacterComponent{
    @Input() character:Character;
}