import { MessageRetrieverService } from './../../services/message-retriever.service';
import { Component, OnInit, Input, SimpleChanges, SimpleChange, AfterViewInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-error-display',
  templateUrl: './form-error-display.component.html',
  styleUrls: ['./form-error-display.component.scss'],
  providers: [MessageRetrieverService]
})
export class FormErrorDisplayComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() form: FormGroup
  @Input() key: string;
  errors = [];
  constructor(private messageRetriever: MessageRetrieverService<Array<string>>) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.form);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const formControl = this.form.get(this.key)
    formControl.valueChanges.subscribe((data) => {
      this.errors = [];
      this.checkError(formControl);
    })
  }

  checkError(formControl: AbstractControl)  {
      const errorObject = formControl.errors;
      if(errorObject && formControl.touched)
      this.getErrorMessages(Object.keys(errorObject), errorObject);
  }

  getErrorMessages(keys, errorObject: any) {
    for(const key of keys) {
      const error = this.messageRetriever.getMessages(['forms', key],'');
      this.errors.push(error);
    }
  }


}
