import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    //name: new FormControl('', [Validators.required, Validators.minLength(3)])
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    //this.formGroup.valueChanges.subscribe(value => console.log(value, this.formGroup));
  }

  onAnmelden() {
    this.router.navigate(['member', this.formGroup.get('name')?.value] );
  }

  hasErrors(): boolean {
    return this.formGroup.invalid;
  }
}
