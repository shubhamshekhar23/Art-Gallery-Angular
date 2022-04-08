import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectDetailsDialogComponent } from './art-object-details-dialog.component';

describe('ArtObjectDetailsDialogComponent', () => {
  let component: ArtObjectDetailsDialogComponent;
  let fixture: ComponentFixture<ArtObjectDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtObjectDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
