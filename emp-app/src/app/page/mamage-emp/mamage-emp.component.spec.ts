import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamageEmpComponent } from './mamage-emp.component';

describe('MamageEmpComponent', () => {
  let component: MamageEmpComponent;
  let fixture: ComponentFixture<MamageEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MamageEmpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamageEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
