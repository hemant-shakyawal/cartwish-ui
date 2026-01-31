import { Component, signal } from '@angular/core';
import { Sidebarnav } from '../sidebarnav/sidebarnav';
import { RouterOutlet, } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';

@Component({
  selector: 'app-dashboard',
  imports: [Sidebarnav, ...MATERIAL_IMPORTS, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  isExpanded = signal(true);
  toggle() {
    this.isExpanded.update(v => !v);
  }
}
