import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomp1Component } from './testcomp1.component';

describe('Testcomp1Component', () => {
  let component: Testcomp1Component;
  let fixture: ComponentFixture<Testcomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testcomp1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testcomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
