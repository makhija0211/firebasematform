import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbasedataComponent } from './fbasedata.component';

describe('FbasedataComponent', () => {
  let component: FbasedataComponent;
  let fixture: ComponentFixture<FbasedataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbasedataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbasedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
