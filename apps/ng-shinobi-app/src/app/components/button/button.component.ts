import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ng-shinobi-app-button',
  templateUrl: 'button.component.html'
})

export class ButtonComponent implements OnInit {
  @Input() public text: string;
  @Input() public type: 'default' | 'primary' | 'warning' | 'alert';
  @Input() public size: 'default' | 'large' | 'small';
  @Input() public hasBorder: boolean;
  @Output() public clicked = new EventEmitter<void>();
  public readonly classList: string[] = ['button--default'];

  public ngOnInit() {
    switch (this.type) {
      case 'primary':
        this.classList.push('button--primary');
        break;
      case 'warning':
        this.classList.push('button--warning');
        break;
      case 'alert':
        this.classList.push('button--alert');
        break;
      case 'default':
        break;
      default: {
        const _type: never = this.type;
        console.error(_type);
      }
    }
    switch (this.size) {
      case 'large':
        this.classList.push('button--large');
        break;
      case 'small':
        this.classList.push('button--small');
        break;
      case 'default':
        break;
      default: {
        const _size: never = this.size;
        console.error(_size);
      }
    }
    if (this.hasBorder) {
      this.classList.push('button--border');
    }
  }

  public onClick() {
    this.clicked.emit();
  }
}
