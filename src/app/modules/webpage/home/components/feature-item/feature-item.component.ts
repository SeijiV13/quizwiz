import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {
  @Input() icon = "";
  @Input() title = "";
  @Input() description = "";
  constructor() { }

  ngOnInit(): void {
  }

}
