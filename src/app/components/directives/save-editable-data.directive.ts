import { Directive, HostListener } from '@angular/core';
import { EditableRow } from 'primeng/table';
import { EditDataService } from '../services/edit-data.service';

@Directive({
  selector: '[dSaveEditableData]',
})
export class SaveEditableData {
  //@Output() onSaving = new EventEmitter<CustomEvent>();
  //@Output() onSaved = new EventEmitter<MouseEvent>();

  constructor(
    public editableRow: EditableRow,
    public editDataService: EditDataService
  ) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    console.log('dSaveEditableData data: ', this.editableRow.data);

    this.editDataService.saveEdit(this.editableRow.data);
  }
}
