import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFeatureComponent } from './basic-feature.component';

describe('BasicFeatureComponent', () => {
  let component: BasicFeatureComponent;
  let fixture: ComponentFixture<BasicFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
