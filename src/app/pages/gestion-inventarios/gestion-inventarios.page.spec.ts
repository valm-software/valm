import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionInventariosPage } from './gestion-inventarios.page';

describe('GestionInventariosPage', () => {
  let component: GestionInventariosPage;
  let fixture: ComponentFixture<GestionInventariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionInventariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
