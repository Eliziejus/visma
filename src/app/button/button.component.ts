import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public buttonText = '';

  @Input()
  set text(name: string) {
    this.buttonText = name.toUpperCase();
  }
  get name(): string {
    return this.buttonText;
  }

  @Input() color: string = '0068B4';
  @Input() type: string = 'button';
  @Output() btnClick = new EventEmitter();
  @Input() disabled = false;

  constructor() {}

  public ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
