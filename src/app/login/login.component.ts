import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private renderer: Renderer2, 
    private fb: FormBuilder, 
    private authService: AuthService) {}

  ngOnInit(): void {
    this.addstyle()
    this.initForm();
  }

  addstyle() {
    this.renderer.addClass(document.body, 'bg-color');
  }

  initForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.authService.doLogin(this.loginForm.value);
  }


  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'bg-color');
  }
}
