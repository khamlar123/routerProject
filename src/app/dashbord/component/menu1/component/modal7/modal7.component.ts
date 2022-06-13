import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardService } from 'src/app/dashbord/dashboard.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-modal7',
  templateUrl: './modal7.component.html',
  styleUrls: ['./modal7.component.scss']
})
export class Modal7Component implements OnInit {
  @Output() close = new EventEmitter<string>();
  private subs = new SubSink();

  constructor(private api: DashboardService) { }

  ngOnInit(): void {
  }

  coloseFunc():void{
    this.close.emit('');
  }

}
