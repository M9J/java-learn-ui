import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeButtonComponent } from './iframe-button.component';

describe('IframeButtonComponent', () => {
  let component: IframeButtonComponent;
  let fixture: ComponentFixture<IframeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
