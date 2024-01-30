import { Directive, HostListener, OnInit } from '@angular/core';
import { EditableRow } from 'primeng/table';
import { EditDataService } from '../services/edit-data.service';

@Directive({
  selector: '[dCancelEditableData]',
})
export class CancelEditableData {
  //@Output() onCanceling = new EventEmitter<CustomEvent>();
  //@Output() onCanceled = new EventEmitter<MouseEvent>();

  constructor(
    public editableRow: EditableRow,
    public editDataService: EditDataService
  ) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    console.log('dCancelEditableData data: ', this.editableRow.data);

    this.editDataService.cancelEdit(this.editableRow.data);
  }
}
