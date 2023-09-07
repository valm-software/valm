import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionCobrosPage } from './gestion-cobros.page';

describe('GestionCobrosPage', () => {
  let component: GestionCobrosPage;
  let fixture: ComponentFixture<GestionCobrosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionCobrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
