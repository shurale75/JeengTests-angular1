import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testcomp2Component } from './testcomp2.component';

describe('Testcomp2Component', () => {
  let component: Testcomp2Component;
  let fixture: ComponentFixture<Testcomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Testcomp2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testcomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
