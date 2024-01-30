import { Directive, Input } from '@angular/core';
import { EditableRow, Table } from 'primeng/table';
import { EditDataService } from '../services/edit-data.service';
import { RemoveEditableData } from './remove-editable-data.directive';

@Directive({
  selector: '[dRemoveRowData]',
})
export class RemoveRowData extends RemoveEditableData {
  @Input() autoTableUpdate: boolean = true;

  constructor(
    public table: Table,
    public editableRow: EditableRow,
    public editDataService: EditDataService
  ) {
    super(editableRow, editDataService);
  }

  protected remove(event: MouseEvent) {
    if (this.autoTableUpdate) this.updateTable();
    super.remove(event);
  }

  protected updateTable() {
    const index: number = this.table.value.indexOf(this.editableRow.data);
    this.table.value.splice(index, 1);
  }
}
