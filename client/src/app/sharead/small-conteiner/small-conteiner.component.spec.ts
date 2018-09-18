import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallConteinerComponent } from './small-conteiner.component';

describe('SmallConteinerComponent', () => {
  let component: SmallConteinerComponent;
  let fixture: ComponentFixture<SmallConteinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallConteinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
