import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateProdutoComponent } from './dialog-update-produto.component';

describe('DialogUpdateProdutoComponent', () => {
  let component: DialogUpdateProdutoComponent;
  let fixture: ComponentFixture<DialogUpdateProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUpdateProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
