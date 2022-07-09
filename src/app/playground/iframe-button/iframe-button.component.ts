import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe-button',
  templateUrl: './iframe-button.component.html',
  styleUrls: ['./iframe-button.component.scss'],
})
export class IframeButtonComponent implements OnInit {
  isIframeEnabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showIframe() {
    this.isIframeEnabled = true;

    this.next(() => {
      const iframe: HTMLIFrameElement = document.getElementById(
        'bopFrame'
      ) as HTMLIFrameElement;
      const content: any = iframe.contentWindow || iframe.contentDocument;
      const iframeDocument = content.document;
      if (iframeDocument) {
        const submitButton = iframeDocument.createElement('button');
        submitButton.id = 'submitButton';
        submitButton.innerHTML = 'Hide this';
        submitButton.addEventListener('click', () => {
          this.isIframeEnabled = false;
          // iframe.setAttribute('src', '');
          // iframe.setAttribute('hidden', 'true');
        });
        const iframeBody = iframeDocument.body;
        iframeBody.appendChild(submitButton);
        console.log('appended');
      }
    });
  }

  next(fn: Function) {
    let tmr = setTimeout(() => {
      clearTimeout(tmr);
      fn();
    }, 250);
  }
}
