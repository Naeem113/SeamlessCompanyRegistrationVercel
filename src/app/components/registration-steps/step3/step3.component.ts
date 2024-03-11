import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { StepBodyComponent } from '../../../common/step-body/step-body.component';
import { StepHeaderComponent } from '../../../common/step-header/step-header.component';
import { UploadButtonComponent } from '../../../common/upload-button/upload-button.component';
import { CardComponent } from '../../../common/card/card.component';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule,StepBodyComponent,StepHeaderComponent,UploadButtonComponent,CardComponent],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.css'
})
export class Step3Component {
  @Output() nextPage = new EventEmitter<number>();

}
