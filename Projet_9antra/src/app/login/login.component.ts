import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  contactForm: FormGroup;
 
  constructor(private fb: FormBuilder,private router: Router,private authService: AuthService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  
  ngOnInit(): void {
    
  }
  onSubmit() {
    this.contactForm.markAllAsTouched();  
    
    if (this.contactForm.valid) {
      
      console.log(this.contactForm.value);
    } else {
    
      console.error('Le formulaire n\'est pas valide.');
    }
 // Mettez à jour cela avec votre propre logique

    // Si l'utilisateur est un administrateur, redirigez-le vers l'interface admin
    
      this.router.navigate(['/admin']);
    
      // Sinon, effectuez d'autres actions, par exemple, affichez un message d'erreur
    }
  }


