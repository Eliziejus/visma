import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {
  }

  public ngOnInit(): void {
  }

  public closeModal(): void {
    this.activeModal.close('Modal Closed');
  }
}
