import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapOtpComponent } from './bootstrap-otp.component';

describe('CodeInputerComponent', () => {
  let component: BootstrapOtpComponent;
  let fixture: ComponentFixture<BootstrapOtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapOtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
