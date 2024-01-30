import { Component } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { map, mapTo } from 'rxjs/operators';
import { EditDataService } from '../services/edit-data.service';

@Component({
  selector: 'data-edit-modal',
  templateUrl: './data-edit-modal.component.html',
  styleUrls: ['./data-edit-modal.component.scss'],
})
export class DataEditModal {
  readonly visible$: Observable<boolean> = merge(
    this.editDataService.cancelEdit$.pipe(mapTo(false)),
    this.editDataService.initEdit$.pipe(map((value) => !!value)),
    this.editDataService.saveEdit$.pipe(mapTo(false))
  );
  readonly data$: Observable<any> = this.editDataService.initEdit$;

  constructor(public editDataService: EditDataService) {}
}
