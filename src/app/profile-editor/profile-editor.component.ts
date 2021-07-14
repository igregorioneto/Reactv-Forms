import { Component } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
// import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
  
  // criando a instancia do grupo de forms
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // })
  constructor(private fb: FormBuilder) {}

  // Refatorando o form
  // possui um número indefinido de controls
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    aliases: this.fb.array([
      this.fb.control('') 
    ])
  })

  get aliases() {
    return this.profileForm.get('aliases') as FormArray
  }

  addAlias() {
    this.aliases.push(this.fb.control(''))
  }
  
  // Gerenciando os forms para melhorar a performance

  onSubmit() {
    console.warn(this.profileForm.value)
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    })
  }

}
