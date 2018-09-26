import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFavComponent } from './news-fav.component';

describe('NewsFavComponent', () => {
  let component: NewsFavComponent;
  let fixture: ComponentFixture<NewsFavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
