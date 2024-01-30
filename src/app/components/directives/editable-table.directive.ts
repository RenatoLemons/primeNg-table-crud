import { Directive, OnInit, Input } from '@angular/core';
import { Table } from 'primeng/table';
import { tap } from 'rxjs/operators';
import { EditDataService } from '../services/edit-data.service';

@Directive({
  selector: '[dEditableTable]',
})
export class EditableTable implements OnInit {
  @Input() dEditableTableDisabled: boolean | undefined;

  protected saveSubscription;
  protected readonly save$ = this.editDataService.saveEdit$.pipe(
    tap((savedData) => console.log(savedData.data, savedData.source)),
    tap((savedData) => this.updateTable(savedData.data, savedData.source))
  );

  constructor(public table: Table, public editDataService: EditDataService) {}

  ngOnInit() {
    this.saveSubscription = this.save$.subscribe();
  }

  protected updateTable(data: any, source: any) {
    const index: number = this.table.value.indexOf(source);
    console.log('update', index, data.name);
    if (index > -1) this.table.value.splice(index, 1, data);
    else this.table.value.unshift(data);
  }

  ngOnDestroy() {
    this.saveSubscription.unsubscribe();
  }
}
