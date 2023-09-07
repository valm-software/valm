import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionRepartosPage } from './gestion-repartos.page';

describe('GestionRepartosPage', () => {
  let component: GestionRepartosPage;
  let fixture: ComponentFixture<GestionRepartosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionRepartosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
