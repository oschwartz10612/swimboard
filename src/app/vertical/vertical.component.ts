import { Component, OnInit } from '@angular/core';
import { APIService, ListLanesQuery } from '../API.service';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css']
})
export class VerticalComponent implements OnInit {

  lanes!: ListLanesQuery;

  constructor(private api: APIService) { }

  async ngOnInit() {

    this.lanes = await this.api.ListLanes();
    console.log(this.lanes);

    this.api.OnUpdateLaneListener.subscribe((lane) => {
      const index = this.lanes.items.findIndex((item) => item?.id === lane.value.data?.onUpdateLane.id);
      console.log(index);
      
      if (index === -1) {
        console.log('lane not found');
        return;
      }
      if (lane.value.data) {
        this.lanes.items[index] = lane.value.data?.onUpdateLane;
      }
    }); 
  }

}
