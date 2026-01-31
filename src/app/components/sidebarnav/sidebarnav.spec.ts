import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebarnav } from './sidebarnav';

describe('Sidebarnav', () => {
  let component: Sidebarnav;
  let fixture: ComponentFixture<Sidebarnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebarnav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebarnav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
