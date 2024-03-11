import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-header.component.html',
  styleUrl: './step-header.component.css'
})
export class StepHeaderComponent {
  @Input() title:string=''
  @Input() description:string="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
}
