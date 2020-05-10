import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrazyPage } from './crazy.page';

describe('CrazyPage', () => {
  let component: CrazyPage;
  let fixture: ComponentFixture<CrazyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrazyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrazyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
