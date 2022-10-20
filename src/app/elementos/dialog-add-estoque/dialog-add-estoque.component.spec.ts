import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddEstoqueComponent } from './dialog-add-estoque.component';

describe('DialogAddEstoqueComponent', () => {
  let component: DialogAddEstoqueComponent;
  let fixture: ComponentFixture<DialogAddEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddEstoqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
