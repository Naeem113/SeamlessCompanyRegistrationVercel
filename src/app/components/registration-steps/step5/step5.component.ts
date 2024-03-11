import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { StepHeaderComponent } from '../../../common/step-header/step-header.component';
import { StepBodyComponent } from '../../../common/step-body/step-body.component';
import { CardComponent } from '../../../common/card/card.component';

@Component({
  selector: 'app-step5',
  standalone: true,
  imports: [CommonModule,StepHeaderComponent,StepBodyComponent,CardComponent],
  templateUrl: './step5.component.html',
  styleUrl: './step5.component.css'
})
export class Step5Component {
  @Output() nextPage = new EventEmitter<number>();
  constructor(){

  }

  submitForm(){
    alert('Form submitted!')
  }

}
