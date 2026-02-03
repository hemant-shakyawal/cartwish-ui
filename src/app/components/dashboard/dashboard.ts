import { Component, inject, signal } from '@angular/core';
import { Sidebarnav } from '../sidebarnav/sidebarnav';
import { Router, RouterOutlet, } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { Authservice } from '../../shared/services/authservice';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebarnav, ...MATERIAL_IMPORTS, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private authService = inject(Authservice);
  private router = inject(Router);
  isExpanded = signal(true);

  toggle() {
    this.isExpanded.update(v => !v);
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
