import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DgvrfComponent } from './dgvrf.component';

describe('DgvrfComponent', () => {
  let component: DgvrfComponent;
  let fixture: ComponentFixture<DgvrfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DgvrfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DgvrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
