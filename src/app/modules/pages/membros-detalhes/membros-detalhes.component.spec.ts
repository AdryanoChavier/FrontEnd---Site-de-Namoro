import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosDetalhesComponent } from './membros-detalhes.component';

describe('MembrosDetalhesComponent', () => {
  let component: MembrosDetalhesComponent;
  let fixture: ComponentFixture<MembrosDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MembrosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
