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
  @Input() submitted = false;
  errors = [];
  constructor(private messageRetriever: MessageRetrieverService<Array<string>>) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let formControl = null;
    if(this.key) {
      formControl = this.form.get(this.key)
    } else {
      formControl = this.form;
    }
    formControl.valueChanges.subscribe((data) => {
      this.errors = [];
      this.checkError(formControl);
    })
  }

  checkError(formControl)  {
      const errorObject = formControl.errors;
      if(errorObject && this.submitted)
      this.getErrorMessages(Object.keys(errorObject), errorObject);
  }

  getErrorMessages(keys, errorObject: any) {
    for(const key of keys) {
      const error = this.messageRetriever.getMessages(['forms', key],'');
      this.errors.push(error);
    }
  }


}
