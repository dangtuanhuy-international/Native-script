import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from 'nativescript-angular/modal-dialog';

@Component({
  selector: 'ns-day-modal',
  templateUrl: './day-modal.component.html',
  styleUrls: ['./day-modal.component.css'],
  moduleId: module.id
})
export class DayModalComponent implements OnInit {
  loadedDate: Date;

  constructor(private modalParams: ModalDialogParams) {}

  ngOnInit() {
    this.loadedDate = (this.modalParams.context as { date: Date }).date;
  }

  onHandleInput(action: 'complete' | 'fail' | 'cancel') {
    this.modalParams.closeCallback(action);
  }
}
