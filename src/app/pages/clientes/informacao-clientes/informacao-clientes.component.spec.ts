import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacaoClientesComponent } from './informacao-clientes.component';

describe('InformacaoClientesComponent', () => {
  let component: InformacaoClientesComponent;
  let fixture: ComponentFixture<InformacaoClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacaoClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacaoClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
