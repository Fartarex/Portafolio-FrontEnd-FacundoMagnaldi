import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagSegComponent } from './pag-seg.component';

describe('PagSegComponent', () => {
  let component: PagSegComponent;
  let fixture: ComponentFixture<PagSegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagSegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagSegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
