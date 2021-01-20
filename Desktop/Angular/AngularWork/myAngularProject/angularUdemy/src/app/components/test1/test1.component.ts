import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from '../../services/test.service';
import { Test2Component } from '../test2/test2.component';
import { ARRAY_ITEMS } from './test1.constant';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.scss']
})
export class Test1Component implements OnInit {

  arrayItems = ARRAY_ITEMS

  constructor(public dialog: MatDialog, private dialogHelper: TestService) { }

  ngOnInit(): void {
  }

  onClick(item){
    this.dialogHelper.itemSelected$.next(item)
    const dialogRef = this.dialog.open(Test2Component);
  }

}
