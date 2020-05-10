import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Create1Page } from './create1.page';

describe('Create1Page', () => {
  let component: Create1Page;
  let fixture: ComponentFixture<Create1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Create1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Create1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
