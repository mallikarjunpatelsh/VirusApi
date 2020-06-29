import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendingRequestComponent } from './sending-request.component';

describe('SendingRequestComponent', () => {
  let component: SendingRequestComponent;
  let fixture: ComponentFixture<SendingRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendingRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
