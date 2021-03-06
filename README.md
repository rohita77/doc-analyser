# Document Analyser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.1.

Uses [Angular Firebase] https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md for Firebase Services 
    [Firebase Database](./docs/firebase-database.md) as the data back end with realtime synching
    [Authentication with Angular Material](./docs/firebase-auth-ng-material.md)

# Live Example
https://rohita77.github.io/ml-image-classifier/

## Development server
Run `firebase serve` for a dev server. Navigate to `http://localhost:5000/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy to Github Pages
ng build --prod --output-path docs --base-href "https://<username>.github.io/<project-name>/"
copy index.html as 404.html
Push files to Github

## Deploy to FireBase
firebase deploy --only hosting:doc-analyzer-test
