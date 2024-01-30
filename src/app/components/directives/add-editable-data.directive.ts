import { Directive, HostListener, Input, Optional } from '@angular/core';
import { EditableRow } from 'primeng/table';
import { EditDataService } from '../services/edit-data.service';

@Directive({
  selector: '[dAddEditableData]',
})
export class AddEditableData {
  constructor(
    public editDataService: EditDataService,
    @Optional() public editableRow: EditableRow
  ) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const data: any = this.editableRow?.data || {};
    this.edit(data);
  }

  protected edit(data: any) {
    console.log('add', data.name);
    this.editDataService.initEdit(data, 'none');
  }
}
