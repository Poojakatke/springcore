import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamictabledataComponent } from './dynamictabledata.component';

describe('DynamictabledataComponent', () => {
  let component: DynamictabledataComponent;
  let fixture: ComponentFixture<DynamictabledataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamictabledataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamictabledataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
