import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';

@Component({
  selector: 'app-login',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
