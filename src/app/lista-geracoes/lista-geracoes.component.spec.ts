import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGeracoesComponent } from './lista-geracoes.component';

describe('ListaGeracoesComponent', () => {
  let component: ListaGeracoesComponent;
  let fixture: ComponentFixture<ListaGeracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaGeracoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGeracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
