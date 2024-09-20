import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KekkeiGenkaiDetailsComponent } from './kekkei-genkai-details.component';

describe('KekkeiGenkaiDetailsComponent', () => {
  let component: KekkeiGenkaiDetailsComponent;
  let fixture: ComponentFixture<KekkeiGenkaiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KekkeiGenkaiDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KekkeiGenkaiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
