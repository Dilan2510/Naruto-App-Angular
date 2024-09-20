import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailedBeastComponent } from './tailed-beast.component';

describe('TailedBeastComponent', () => {
  let component: TailedBeastComponent;
  let fixture: ComponentFixture<TailedBeastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailedBeastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TailedBeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
