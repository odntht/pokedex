import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeracaoDetalhesComponent } from './geracao-detalhes.component';

describe('GeracaoDetalhesComponent', () => {
  let component: GeracaoDetalhesComponent;
  let fixture: ComponentFixture<GeracaoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeracaoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeracaoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
