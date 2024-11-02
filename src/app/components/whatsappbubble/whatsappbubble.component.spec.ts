import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappbubbleComponent } from './whatsappbubble.component';

describe('WhatsappbubbleComponent', () => {
  let component: WhatsappbubbleComponent;
  let fixture: ComponentFixture<WhatsappbubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatsappbubbleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhatsappbubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
