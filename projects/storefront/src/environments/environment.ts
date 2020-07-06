// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:8888/api',
  firebase:  {
    apiKey: 'AIzaSyAenNxgKrg1Hpg_Y673NW7HG4nxf6OXVuo',
    authDomain: 'studio85.firebaseapp.com',
    databaseURL: 'https://studio85.firebaseio.com',
    projectId: 'studio85',
    storageBucket: 'studio85.appspot.com',
    messagingSenderId: '190070081729',
    appId: '1:190070081729:web:b011ae12bdecb4d211ec40',
    measurementId: 'G-4F6Y68GE6L'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
