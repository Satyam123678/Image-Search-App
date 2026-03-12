import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchEngin } from './image-search-engin';

describe('ImageSearchEngin', () => {
  let component: ImageSearchEngin;
  let fixture: ComponentFixture<ImageSearchEngin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSearchEngin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSearchEngin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
