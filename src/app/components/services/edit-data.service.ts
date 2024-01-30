import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EditDataService {
  private _editSources = {};
  private _initEdit = new Subject<any>();
  private _cancelEdit = new Subject<{ data: any; source?: any }>();
  private _saveEdit = new Subject<{ data: any; source?: any }>();
  private _remove$ = new Subject<{ data: any; source?: any }>();
  initEdit$ = this._initEdit.asObservable();
  cancelEdit$ = this._cancelEdit.asObservable();
  saveEdit$ = this._saveEdit.asObservable();
  remove$ = this._remove$.asObservable();

  initEdit(source: any, cloneType: 'none' | 'shallow' | 'deep' = 'shallow') {
    const data: any = this.clone(source, cloneType);
    this.setSource(data, source);
    this._initEdit.next(data);
  }

  protected clone(data: any, cloneType: 'none' | 'shallow' | 'deep'): any {
    if (cloneType === 'none') return data;
    if (cloneType === 'deep') return JSON.parse(JSON.stringify(data));
    return { ...data };
  }

  cancelEdit(data: any) {
    this._cancelEdit.next({ data, source: this.getSource(data) });
  }

  saveEdit(data: any) {
    this._saveEdit.next({ data, source: this.getSource(data) });
  }

  remove(data: any) {
    this._remove$.next({ data, source: this.getSource(data) });
  }

  protected setSource(data: any, source: any) {
    this._editSources[data] = source;
  }

  protected getSource(data: any): any | undefined {
    return this._editSources[data];
  }
}
