import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-iframe-button',
  templateUrl: './iframe-button.component.html',
  styleUrls: ['./iframe-button.component.scss'],
})
export class IframeButtonComponent implements OnInit, OnDestroy {
  isIframeEnabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('message', this.onMessageHandler.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('message', this.onMessageHandler.bind(this));
  }

  onMessageHandler(e: any) {
    if (e.data === 'hideIframe') {
      this.isIframeEnabled = false;
    }
  }

  showIframe() {
    this.isIframeEnabled = true;
    this.next(() => {
      const iframe: HTMLIFrameElement = document.getElementById(
        'bopFrame'
      ) as HTMLIFrameElement;
      iframe.onload = () => {
        console.log('iframe loaded');
        const content: any = iframe.contentWindow || iframe.contentDocument;
        const iframeDocument = content.document;
        if (iframeDocument) {
          const submitButton = iframeDocument.createElement('button');
          submitButton.id = 'submitButton';
          submitButton.innerHTML = 'Hide this';
          submitButton.addEventListener('click', () => {
            console.log('submitButton: clicked');
            window.parent.postMessage('hideIframe', '*');
          });
          const iframeBody = iframeDocument.body;
          iframeBody.appendChild(submitButton);
          console.log('appended');
        }
      };
    }, 500);
  }

  next(fn: Function, ms: number) {
    let tmr = setTimeout(() => {
      clearTimeout(tmr);
      fn();
    }, ms);
  }
}
