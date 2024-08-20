import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembroEditComponent } from './membro-edit.component';

describe('MembroEditComponent', () => {
  let component: MembroEditComponent;
  let fixture: ComponentFixture<MembroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembroEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
