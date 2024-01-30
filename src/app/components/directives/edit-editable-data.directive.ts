import { Directive, HostListener, Input } from '@angular/core';
import { EditableRow } from 'primeng/table';
import { EditDataService } from '../services/edit-data.service';

@Directive({
  selector: '[dEditEditableData]',
})
export class EditEditableData {
  @Input() cloneType: 'none' | 'shallow' | 'deep' = 'shallow';
  constructor(
    public editableRow: EditableRow,
    public editDataService: EditDataService
  ) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    if (this.editableRow.isEnabled()) this.edit();
  }

  protected edit() {
    console.log('edit', this.editableRow.data.name);
    this.editDataService.initEdit(this.editableRow.data, this.cloneType);
  }
}
