import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KekkeiGenkaiComponent } from './kekkei-genkai.component';

describe('KekkeiGenkaiComponent', () => {
  let component: KekkeiGenkaiComponent;
  let fixture: ComponentFixture<KekkeiGenkaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KekkeiGenkaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KekkeiGenkaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
