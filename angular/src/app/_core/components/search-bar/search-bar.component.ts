import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
  imports: [ReactiveFormsModule],
})
export class SearchBarComponent {
  @Input() keywords!: UntypedFormControl;
}
