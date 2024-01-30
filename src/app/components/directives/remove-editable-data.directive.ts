import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { EditableRow, Table } from 'primeng/table';
import { EditDataService } from '../services/edit-data.service';

@Directive({
  selector: '[dRemoveEditableData]',
})
export class RemoveEditableData {
  @Output() onRemoving = new EventEmitter<CustomEvent>();
  @Output() onRemoved = new EventEmitter<MouseEvent>();

  constructor(
    public editableRow: EditableRow,
    public editDataService: EditDataService
  ) {}

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const removeEvent = this.emitOnRemoving();

    console.log(
      'dRemoveEditableData canceled: ',
      removeEvent.defaultPrevented,
      this.editableRow.data
    );

    if (removeEvent.defaultPrevented) this.cancelEvent(event);
    else this.remove(event);
  }

  protected emitOnRemoving() {
    const event = new CustomEvent('removing-data', {
      cancelable: true,
      detail: {
        data: this.editableRow.data,
      },
    });
    this.onRemoving.emit(event);
    return event;
  }

  protected cancelEvent(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
  }

  protected remove(event: MouseEvent) {
    this.editDataService.remove(this.editableRow.data);
    this.onRemoved.emit(event);
  }
}
