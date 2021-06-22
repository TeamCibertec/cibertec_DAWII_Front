import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,) { }

  ngOnInit(): void {
  }
  
  cancelar() {
    this.activeModal.close({ 'accion': 1 });
    // $('a[data-toggle="tooltip"]').tooltip('hide');
  }
}