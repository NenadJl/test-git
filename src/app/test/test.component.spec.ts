import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NenoComponent } from './neno.component';

describe('NenoComponent', () => {
  let component: NenoComponent;
  let fixture: ComponentFixture<NenoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NenoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
