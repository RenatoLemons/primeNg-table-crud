import { Directive, OnInit, Input } from '@angular/core';
import { Table, EditableRow } from 'primeng/table';
import { filter, tap } from 'rxjs/operators';
import { EditDataService } from '../services/edit-data.service';
import { EditEditableData } from './edit-editable-data.directive';

@Directive({
  selector: '[dEditRowData]',
})
export class EditRowData extends EditEditableData {
  constructor(
    public table: Table,
    public editableRow: EditableRow,
    public editDataService: EditDataService
  ) {
    super(editableRow, editDataService);
  }
}
