import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { UsersDetails } from './users-details';
import { User } from '../../shared/services/user';
import { MATERIAL_IMPORTS } from '../../shared/material/material.imports';

describe('UsersDetails', () => {
  let component: UsersDetails;
  let fixture: ComponentFixture<UsersDetails>;

  const mockUserService = {
    getUser: () =>
      of([
        {
          _id: '1',
          name: 'Hemant',
          email: 'hemant@gmail.com',
          deliveryAddress: 'xyz',
        },
      ]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UsersDetails,              // standalone component
        HttpClientTestingModule,   // required by services
        ...MATERIAL_IMPORTS,       // mat-table, etc.
      ],
      providers: [
        { provide: User, useValue: mockUserService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersDetails);
    component = fixture.componentInstance;
    fixture.detectChanges(); // 🔥 triggers ngOnInit safely
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
