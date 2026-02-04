import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router'; // 1. Import this
import { Dashboard } from './dashboard';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashboard],
      // 2. Provide a mock or empty route configuration
      providers: [provideRouter([])] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Use detectChanges() to trigger lifecycle hooks
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});