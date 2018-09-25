import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLabComponent } from './book-lab.component';

describe('BookLabComponent', () => {
  let component: BookLabComponent;
  let fixture: ComponentFixture<BookLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
