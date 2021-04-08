import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarGeneratorComponent } from './avatar-generator.component';

describe('AvatarGeneratorLibComponent', () => {
  let component: AvatarGeneratorComponent;
  let fixture: ComponentFixture<AvatarGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
