import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EpisodeDetailsComponent, EpisodeListComponent,
    CommonModule],
  imports: [EpisodeDetailsComponent, EpisodeListComponent,
    CommonModule, RouterModule],

  exports: [EpisodeDetailsComponent, EpisodeListComponent,
    CommonModule],  
  
})
export class EpisodesModule { }
