import { Component, Input } from '@angular/core';
import { EditDataService } from '../services/edit-data.service';

@Component({
  selector: 'table-editable-modal',
  templateUrl: './table-editable-modal.component.html',
  styleUrls: ['./table-editable-modal.component.scss'],
  providers: [EditDataService],
})
export class TableEditableModal {
  @Input() dataKey: string;
  @Input() value: any[];

  constructor() {}
}
