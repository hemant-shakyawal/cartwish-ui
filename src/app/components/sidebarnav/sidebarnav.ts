import { Component } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebarnav',
  imports: [...MATERIAL_IMPORTS, RouterModule   ],
  templateUrl: './sidebarnav.html',
  styleUrl: './sidebarnav.scss',
})
export class Sidebarnav {

}
