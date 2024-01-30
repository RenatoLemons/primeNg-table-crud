import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { TableEditableModal } from './components/table-editable-modal/table-editable-modal.component';
import { DataEditModal } from './components/data-edit-modal/data-edit-modal.component';

import { AddEditableData } from './components/directives/add-editable-data.directive';
import { EditRowData } from './components/directives/edit-row-data.directive';
import { RemoveRowData } from './components/directives/remove-row-data.directive';
import { SaveEditableData } from './components/directives/save-editable-data.directive';
import { CancelEditableData } from './components/directives/cancel-editable-data.directive';
import { EditableTable } from './components/directives/editable-table.directive';

import { ProductService } from './services/productservice';

const components = [AppComponent, TableEditableModal, DataEditModal];
const directives = [
  AddEditableData,
  EditRowData,
  RemoveRowData,
  SaveEditableData,
  CancelEditableData,
  EditableTable,
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }]),
  ],
  declarations: [...components, ...directives],
  bootstrap: [AppComponent],
  providers: [ProductService, MessageService, ConfirmationService],
})
export class AppModule {}
