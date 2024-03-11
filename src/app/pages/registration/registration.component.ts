import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { Step2Component } from '../../components/registration-steps/step2/step2.component';
import { Step3Component } from '../../components/registration-steps/step3/step3.component';
import { Step4Component } from '../../components/registration-steps/step4/step4.component';
import { Step5Component } from '../../components/registration-steps/step5/step5.component';
import { Step1Component } from '../../components/registration-steps/step1/step1.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,StepperComponent,Step1Component,Step2Component,Step3Component,Step4Component,Step5Component],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  currentPage:number = 4
  constructor(){

  }

  selectedPage(page:any){
    this.currentPage = page
  }
}
