import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  contactForm: FormGroup;

  courses = [

      { name: 'Spring Boot / Angular', price: '350 DT/Month', image: 'assets/Images/spring.PNG' },
      { name: 'Node JS / React', price: '350 DT/Month', image: 'assets/Images/react.PNG' },
      { name: 'Flutter / Firebase', price: '350 DT/Month', image: 'assets/Images/flutter.PNG' },
      { name: 'Business Intelligence', price: '350 DT/Month', image: 'assets/Images/bi.PNG' },
      { name: 'Artificial Intelligence', price: '350 Dt/Month', image: 'assets/Images/IA.PNG' },
      { name: 'DevOps', price: '350 DT/Month', image: 'assets/Images/dev.PNG' },
    
  ];
 
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    this.contactForm.markAllAsTouched();  
    
    if (this.contactForm.valid) {
      
      console.log(this.contactForm.value);
    } else {
    
      console.error('Le formulaire n\'est pas valide.');
    }
  }
  
    
  
}
