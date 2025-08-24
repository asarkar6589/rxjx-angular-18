import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjxBasics } from './rxjx-basics';

describe('RxjxBasics', () => {
  let component: RxjxBasics;
  let fixture: ComponentFixture<RxjxBasics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjxBasics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjxBasics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
