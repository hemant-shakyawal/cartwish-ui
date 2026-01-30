import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';

@Component({
  selector: 'app-header',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private router: Router) { }

  onClick(): void {
    this.router.navigate(['/login']);
  }
}
