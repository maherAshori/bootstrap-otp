import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bootstrap-otp',
  templateUrl: './bootstrap-otp.component.html',
  styleUrls: ['./bootstrap-otp.component.css']
})
export class BootstrapOtpComponent implements OnInit {
  @Input() configs: any;

  code = {
    codes: []
  };

  pasted: boolean;

  constructor() { }

  goToNext($event: any, next: string, prev: string) {
    let pInput = document.getElementById(prev) as HTMLInputElement;
    let nInput = document.getElementById(next) as HTMLInputElement;

    if ($event.keyCode == 37) {
      pInput.select();
    }

    if ($event.keyCode == 39) {
      nInput.select();
    }
  }

  setValue(item: any, specific: any = null) {
    if (item.index == this.code.codes.length - 1) {
      this.compile();
    }

    setTimeout(() => {
      let goTo = item.next;
      if (specific != null) {
        goTo = specific;
      }
      let input = document.getElementById(goTo) as HTMLInputElement;
      input.select();
    }, 0);
  }

  compile() {
    setTimeout(() => {
      var code = "";
      this.code.codes.forEach((item: any) => {
        code += item.value;
      });
      window['code'] = code;
    }, 0);
  }

  paste() {
    this.pasted = false;
    const getValue = setInterval(() => {
      const value = this.code.codes[0].value;
      if (value != null) {
        if (value.length == this.code.codes.length) {
          this.code.codes.forEach((item: any, index: number) => {
            item.value = value[index];
          });
        } else {
          this.code.codes.forEach((item: any) => {
            item.value = null;
          });
        }
        this.pasted = true;
        this.compile();
        clearInterval(getValue);
      }
    }, 0);
  }

  ngOnInit(): void {
    for (let index = 0; index < this.configs.length; index++) {
      const object: inner = {
        index: index,
        current: 'code' + index,
        value: null,
        prev: index == 0 ? `code${this.configs.length - 1}` : `code${index - 1}`,
        next: index == (this.configs.length - 1) ? `code${0}` : `code${index + 1}`
      }
      this.code.codes.push(object);
    }

    setTimeout(() => {
      window.addEventListener("keydown", function (e) {
        if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
        }
      }, false);

      document.removeEventListener('mousewheel', null);
      document.removeEventListener('DOMMouseScroll', null);
    }, 0);
  }
}

interface inner {
  index: number,
  current: string,
  value: string,
  prev: string,
  next: string
}