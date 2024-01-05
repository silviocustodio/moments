import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  // Todo search

  constructor(private momentService: MomentService) {}
  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;
      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-PT'
        );
      });

      this.allMoments = data;
      this.moments = data;
    });
  }
}
