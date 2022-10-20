import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDimEstoqueComponent } from './dialog-dim-estoque.component';

describe('DialogDimEstoqueComponent', () => {
  let component: DialogDimEstoqueComponent;
  let fixture: ComponentFixture<DialogDimEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDimEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDimEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
