import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroCardComponent } from './membro-card.component';

describe('MembroCardComponent', () => {
  let component: MembroCardComponent;
  let fixture: ComponentFixture<MembroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembroCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
