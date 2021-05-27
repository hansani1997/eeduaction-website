import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinowComponent } from './joinow.component';

describe('JoinowComponent', () => {
  let component: JoinowComponent;
  let fixture: ComponentFixture<JoinowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
