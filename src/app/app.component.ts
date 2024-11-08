
import { RouterOutlet } from '@angular/router';
import { ContactformComponent } from "./contactform/contactform.component";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { WhatsappbubbleComponent } from "./components/whatsappbubble/whatsappbubble.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactformComponent, MatButtonModule, WhatsappbubbleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'smashthoughts';
}
