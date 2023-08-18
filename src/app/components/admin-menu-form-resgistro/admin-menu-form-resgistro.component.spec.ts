import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenuFormResgistroComponent } from './admin-menu-form-resgistro.component';

describe('AdminMenuFormResgistroComponent', () => {
  let component: AdminMenuFormResgistroComponent;
  let fixture: ComponentFixture<AdminMenuFormResgistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminMenuFormResgistroComponent]
    });
    fixture = TestBed.createComponent(AdminMenuFormResgistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
