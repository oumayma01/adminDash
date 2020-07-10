import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouHaveToLoginComponent } from './you-have-to-login.component';

describe('YouHaveToLoginComponent', () => {
  let component: YouHaveToLoginComponent;
  let fixture: ComponentFixture<YouHaveToLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouHaveToLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouHaveToLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
