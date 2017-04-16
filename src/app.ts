import { NgModule, Component } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

@Component({
	selector: 'demo-app',
	template: `
	  <h1>Universal Demo</h1>
      <p>This is a test for server-side rendering.</p>
      <p><a href="javascript: void 0" (click)="visible = !visible">Toggle</a></p>
      <p *ngIf="visible">Toggle</p>
	`
})
export class AppComponent {
    public visible: boolean = false;
}

@NgModule({
	imports: [
		BrowserModule.withServerTransition({
		  appId: 'demo-app'
		})
	],
	declarations: [ AppComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}