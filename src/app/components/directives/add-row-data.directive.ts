import { Directive, Input, OnInit, Optional } from '@angular/core';
import { EditableRow, Table } from 'primeng/table';
import { tap } from 'rxjs/operators';
import { EditDataService } from '../services/edit-data.service';
import { AddEditableData } from './add-editable-data.directive';

@Directive({
  selector: '[dAddRowData]',
})
export class AddRowData extends AddEditableData {
  //implements OnInit {
  @Input() table: Table;

  // protected saveSubscription;
  // protected readonly save$ = this.editDataService.saveEdit$.pipe(
  //   tap((savedData) => console.log('add table row')),
  //   //filter(() => this.autoTableUpdate),
  //   tap((savedData) => this.updateTable(savedData.data, savedData.source))
  // );

  constructor(
    public editDataService: EditDataService,
    @Optional() public editableRow: EditableRow,
    @Optional() public tableInjected: Table
  ) {
    super(editDataService, editableRow);
  }

  // ngOnInit() {
  //   this.saveSubscription = this.save$.subscribe();
  // }

  // protected updateTable(data: any, source: any) {
  //   const index: number = this.table.value.indexOf(source);
  //   console.log('add', index, data.name);
  //   this.table.value = [data, ...this.table.value];
  // }

  // ngOnDestroy() {
  //   this.saveSubscription.unsubscribe();
  // }
}
