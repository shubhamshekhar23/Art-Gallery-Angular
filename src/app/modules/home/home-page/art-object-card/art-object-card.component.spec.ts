import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtObjectCardComponent } from './art-object-card.component';

describe('ArtObjectCardComponent', () => {
  let component: ArtObjectCardComponent;
  let fixture: ComponentFixture<ArtObjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtObjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtObjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
