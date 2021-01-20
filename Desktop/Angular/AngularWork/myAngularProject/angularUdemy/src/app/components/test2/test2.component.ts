import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {

  selectedItem: any;

  constructor(private dialogHelper: TestService) { }

  ngOnInit(): void {
    this.selectedItem = this.dialogHelper.itemSelected$.getValue();
  }

}
