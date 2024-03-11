import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'app-upload-button',
  standalone: true,
  imports: [],
  templateUrl: './upload-button.component.html',
  styleUrl: './upload-button.component.css'
})
export class UploadButtonComponent {
  @Input() buttonDescription: string = '';
  @Input() buttonLabel: string = '';
  @Input() formErrorMessage: string = '';
  @Input() formSuccessMessage: string = '';
  @Output() file  = new EventEmitter<File>()
  selectedFile: File | null = null;
  fileType:string = '';
  errorMessage:string = ''
  // allowed :String[]=['jpeg','jpg', 'png', 'gif',"vnd.openxmlformats-officedocument.wordprocessingml.document", "msword", "pdf"]
  @Input() allowFileList: string[] = [];
  filePreview: any | string | ArrayBuffer | null = null;

  imageProcessing(fileEvent: Event){
    this.formErrorMessage = ''
    const inputElement = fileEvent.target as HTMLInputElement;
    const files = inputElement.files;
    this.selectedFile = (inputElement.files && inputElement.files[0]);
    if (this.selectedFile != null) {
      var t = this.selectedFile.type.split("/").pop()?.toLowerCase() as string;
      this.fileType = t;
      if (!this.allowFileList.includes(t)) {
        alert('Please select a valid file')
        return;
      }
      this.file.emit(this.selectedFile)
    }
  }
}
