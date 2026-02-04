import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // Import the provider
import { Sidebarnav } from './sidebarnav';

describe('Sidebarnav', () => {
  let component: Sidebarnav;
  let fixture: ComponentFixture<Sidebarnav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidebarnav],
      // Add this to satisfy any routerLink directives in your HTML
      providers: [provideRouter([])] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidebarnav);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});