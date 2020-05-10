import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Recipe1Page } from './recipe1.page';

describe('Recipe1Page', () => {
  let component: Recipe1Page;
  let fixture: ComponentFixture<Recipe1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Recipe1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Recipe1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
