import {Component, View, bootstrap, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
    selector: 'my-app'
})
@View({
    template: `
	<h1>{{name}}\'s First Angular 2 App</h1>
	<input [(ng-model)]="name"></input>
	`,
    directives: [FORM_DIRECTIVES]
})
class AppComponent {
    name = 'John Doe';
}

bootstrap(AppComponent);
