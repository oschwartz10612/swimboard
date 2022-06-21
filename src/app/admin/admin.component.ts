import { Component, OnInit } from '@angular/core';
import { APIService, ListLanesQuery } from '../API.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  lanes!: ListLanesQuery;

  constructor(private api: APIService ) { }

  async ngOnInit() {
    this.lanes = await this.api.ListLanes();
  }

  async makeChange(id: string, name: string, score: string, version: number) {
    const res = await this.api.UpdateLane({ id: id, currentOccupant: name, currentScore: score, _version: version});
    //find the lane in the list and update it
    const index = this.lanes.items.findIndex((item) => item?.id === id);
    if (index === -1) {
      console.log('lane not found');
      return;
    }
    if (res) {
      this.lanes.items[index] = res;
    }
  }

}
