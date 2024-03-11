import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { StepHeaderComponent } from '../../../common/step-header/step-header.component';
import { StepBodyComponent } from '../../../common/step-body/step-body.component';

const priceTable= [
  {
    service:{
      title:"Document Housing",
      desc:"Provides you with the most up to date safety documents such as SDS sheets & Virtual Health and Safety Board Templates but also allows admin and each individual user to house their own Personal Documents. Be able to send and receive documents within the system to your own users, or to users outside the system using the linked E-mailing system of the portal."
    },
    basic:"$29.99",
    team:"$39.99",
    corporate:"$49.99"
  },
  {
    service:{
      title:"Forms",
      desc:"Create your own customized forms, or have us make them for you, house them, send them, have users fill them, send it back and house the information in the portal’s history with complimentary mobile app."
    },
    basic:"$39.99",
    team:"$49.99",
    corporate:"$59.99"
  },
  {
    service:{
      title:"Virtual Training",
      desc:"Virtual Training, Online Courses with in House Auto-generated Certifications available as well as capability to create your own course, quiz, and auto-generated certificate  as well as Uploading and housing all your external certifications for all your users and workers.  Complimentary statistics and notifications on performance, completions, notifications and E-mails to admin staff and users for certifications that are close to expiry or expired. Capability of sending courses to users, or courses available by role in the institution."
    },
    basic:"$39.99",
    team:"$49.99",
    corporate:"$59.99"
  },
  {
    service:{
      title:"External Certification Housing and upload",
      desc:"Complimentary statistics and notifications on performance, completions, notifications and E-mails to admin staff and users for certifications that are close to expiry or expired."
    },
    basic:"$29.99",
    team:"$29.99",
    corporate:"$29.99"
  },
  {
    service:{
      title:"Safety Talks",
      desc:"Filtering process based on company role of who can start a safety talk. Add as many individuals to the talks, have them sign on their own device with signatures auto-transferred to the person who initiated safety talks OR have people sign on the same device, whether laptop, tablet, or mobile phone.  Send notifications to those who need to sign, track notifications, and activity log of who was added and signed or subtracted from the talks."
    },
    basic:"$29.99",
    team:"$29.99",
    corporate:"$29.99"
  },
  {
    service:{
      title:"Projects & their Location Specific Health & Safety board",
      desc:"Government related safety documents that are auto-populated whenever a location is chosen for any project. Have users, upload documents, fill out forms, fill out safety talks, with options to have auto-forwarding of forms to any managers or supervisors or other users to conduct subsequent signatures on submitted forms for approval.  Capabilities of having a vigorous filtering system of who involved in the project, can or cannot see documents or forms submitted by members before submission or individualized visibility of documents or forms after submission. Full history of activity log of the project available to admin, or customize whichever members you wish to allow viewership to."
    },
    basic:"$39.99",
    team:"$49.99",
    corporate:"$59.99"
  }

]

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule,StepHeaderComponent,StepBodyComponent],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.css'
})
export class Step1Component {
  priceTable = priceTable
  @Output() nextPage = new EventEmitter<number>();
}
