import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../shared/services/user';
import { UserModel } from '../../shared/models/user';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-details',
  imports: [CommonModule, ...MATERIAL_IMPORTS],
  templateUrl: './users-details.html',
  styleUrl: './users-details.scss',
})
export class UsersDetails implements OnInit {
  userDetails = inject(User);
  users: UserModel[] = [];
  displayedColumns: string[] = ['name', 'email', 'deliveryAddress'];
   dataSource = new MatTableDataSource<UserModel>([]);

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userDetails.getUser().subscribe((users) => {
      console.log(users );
      this.dataSource.data = users ;
    });
  }
}
