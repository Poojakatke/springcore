import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfcovertcomponentComponent } from './pdfcovertcomponent.component';

describe('PdfcovertcomponentComponent', () => {
  let component: PdfcovertcomponentComponent;
  let fixture: ComponentFixture<PdfcovertcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfcovertcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfcovertcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
