import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestErrosComponent } from './test-erros.component';

describe('TestErrosComponent', () => {
  let component: TestErrosComponent;
  let fixture: ComponentFixture<TestErrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestErrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestErrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
