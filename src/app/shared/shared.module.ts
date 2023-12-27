import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ImageLoaderComponent } from './components/image-loader/image-loader.component';
@NgModule({
  declarations: [ImageLoaderComponent],
  imports: [CommonModule, NgbModule, FormsModule],
  exports: [
    /* module exports */
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    ImageLoaderComponent,
  ],
})
export class SharedModule {}
