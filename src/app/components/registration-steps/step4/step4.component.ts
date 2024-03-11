import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { StepBodyComponent } from '../../../common/step-body/step-body.component';
import { StepHeaderComponent } from '../../../common/step-header/step-header.component';
import { CardComponent } from '../../../common/card/card.component';

@Component({
  selector: 'app-step4',
  standalone: true,
  imports: [CommonModule,StepHeaderComponent,StepBodyComponent,CardComponent],
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css'
})
export class Step4Component {
  @Output() nextPage = new EventEmitter<number>();

}
