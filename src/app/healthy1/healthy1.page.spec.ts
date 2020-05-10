import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Healthy1Page } from './healthy1.page';

describe('Healthy1Page', () => {
  let component: Healthy1Page;
  let fixture: ComponentFixture<Healthy1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Healthy1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Healthy1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
