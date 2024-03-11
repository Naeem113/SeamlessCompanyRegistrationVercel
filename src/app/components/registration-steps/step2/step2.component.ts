import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { StepHeaderComponent } from '../../../common/step-header/step-header.component';
import { StepBodyComponent } from '../../../common/step-body/step-body.component';
import { CardComponent } from '../../../common/card/card.component';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule,StepHeaderComponent,StepBodyComponent,CardComponent],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.css'
})
export class Step2Component {
  @Output() nextPage = new EventEmitter<number>();

}
