firebase deploy --only hosting:e-schoolland
firebase deploy --only hosting

1. ionic build
2. transfer file from www to public
3. cd functions
4. firebase init if first time, else firebase deploy --only hosting

Package version
npm install
npm --version 6.13.0 64
node --version 10.18.0 64
firebase 7.11.0

<!-- /* firebase deploy functions
NPM: 6.13.4 (64)
Node: v10.18.0 (32)
firebase: 7.11.0
*/ -->

 <!-- "@ionic/angular": "^4.7.4", -->

firebase rule

<!-- rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // This rule allows anyone on the internet to view, edit, and delete
    // all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // your app will lose access to your Firestore database
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2020, 1, 22);
    }
  }
} -->

# Ionic 4 Full App PRO Version

The most advanced and complete Mobile & PWA starter app template

# Documentation

You can find the documentation in https://ionic-4-full-starter-app-docs.ionicthemes.com

## Install dependencies

Run `npm install` to install the project dependencies.

## Development Workflow

Run `ionic build` or `ionic build --prod` to build the project

### To test the app in the browser

Run `ionic serve` to start a live-reload dev server

### To test the app as a Native App

This project uses [Capacitor](https://capacitor.ionicframework.com/docs/) (spiritual successor to Cordova).

Before starting make sure to read the [Capacitor Required Dependencies](https://capacitor.ionicframework.com/docs/getting-started/dependencies).

The Capacitor workflow involves a few consistent tasks:

- [Develop and build your Web App](https://capacitor.ionicframework.com/docs/basics/workflow/#1-develop-and-build-your-web-app)
- [Copy your Web Assets](https://capacitor.ionicframework.com/docs/basics/workflow/#2-copy-your-web-assets)
- [Open your Native IDE](https://capacitor.ionicframework.com/docs/basics/workflow/#3-open-your-native-ide)
- [Periodic Maintenance](https://capacitor.ionicframework.com/docs/basics/workflow/#4-periodic-maintenance)

#### iOS Platform

This app has an ios folder which contains the iOS native app.
Read how to [build this app for iOS](https://capacitor.ionicframework.com/docs/basics/building-your-app#ios).

#### Android Platform

This app has an android folder which contains the Android native app.
Read how to [build this app for Android](https://capacitor.ionicframework.com/docs/basics/building-your-app#android).

### Want to use Cordova?

The PRO version of the template uses Capacitor instead of Cordova, however, if you are not yet ready to use it, in the following link we show you how to remove Capacitor and add Cordova to this project: https://ionic-4-full-starter-app-docs.ionicthemes.com/capacitor#steps-to-remove-capacitor-and-add-cordova

## Support

Drop us a line to contact@ionicthemes.com

## Acknowledgements

This template uses some icons inspired in [Flaticon](https://www.flaticon.com/). If you want to use the original icons in your app, please make sure you grab a new license that fit your use case when modifying this template. We currently use the `Free for commercial use WITH ATTRIBUTION` license in this template as a way to showcase and promote the awesome work and [designs by **catkuro** from Flaticon](https://www.flaticon.com/packs/home-decor).

### Committing code

To ensure code quality, we follow and enforce the [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines)
These guidelines define a Commit Message Format and certain rules that will help teams achieve consistency with version control and source code management practices.

#### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/angular/angular/commits/master))

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

#### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

#### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

The following is the list of supported scopes:

- **walkthrough-page**
- **login-page**
- **preload-image-component**

There are currently a few exceptions:

- **packaging**: used for changes that change the npm package layout in all of our packages, e.g.
  public path changes, package.json changes done to all packages, d.ts file/format changes, changes
  to bundles, etc.
- **changelog**: used for updating the release notes in CHANGELOG.md
- none/empty string: useful for `style`, `test` and `refactor` changes that are done across all
  packages (e.g. `style: add missing semicolons`) and for docs changes that are not related to a
  specific package (e.g. `docs: fix typo in tutorial`).

#### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

## Troubleshooting

### See what dependencies and versions you have installed in your project

This is useful to track compilation ERRORS

- Run `npm ls` to list all installed packages
- To find the installed version of a specific package run `npm list package_name` (ex: `npm list @ionic/core`)
- To find out which packages need to be updated, you can use `npm outdated -g --depth=0`
- In particular, run `ng version` to output Angular CLI version and all Angular related installed packages and versions

15/11 -- add custom form to each segment(customer, items, estimates, invoices)
15/11 -- add icon to each header
15/11 -- add dashboard hightchart.js
15/11 -- add each segment detail page
15/11 -- change the url link path 'firebase' to 'iMakerInvoice'
15/11 -- navigatebackward('/')
16/11 -- invoice PDF template

18/11 -- ionic g page firebase/invoice/details
18/11 -- ionic g page firebase/quotes/details

23/12 -- ionic g page firebase/creditnotes/create
23/12 -- ionic g page firebase/creditnotes/details
23/12 -- ionic g page firebase/creditnotes/creditnotes
23/12 -- ionic g page firebase/creditnotes/update

23/12 -- ionic g page firebase/paymentsrec/create
23/12 -- ionic g page firebase/paymentsrec/details
23/12 -- ionic g page firebase/paymentsrec/paymentsrec
23/12 -- ionic g page firebase/paymentsrec/update

28/12 -- firestore "Contacts" CRUD
28/12 -- firestore "Items" CRUD
28/12 -- firestore "Estimates" CRUD
28/12 -- firestore "Invoices" CRUD
28/12 -- firestore "Paymentreceived" CRUD
28/12 -- firestore "Creditnotes" CRUD

CRUD "Contacts"

  <!-- createContact() {
    console.log(this.uid, this.email, this.createContactForm.value);
    this.firebaseService.createContacts(this.uid, this.email, this.createContactForm.value).then(() => {
      // this.dismissModal();
    });
  }

  readContact() {
    console.log(this.email, this.uid);
    this.firebaseService.readContacts(this.email).subscribe((res) => {
      console.log(res);

      // this.dismissModal();
    });
  }

  updateContact() {
    console.log(this.email, this.uid), this.createContactForm.value;
    this.firebaseService.updateContacts(this.email, this.createContactForm.value).then(() => {
      //  this.dismissModal();
    });
  }

  deleteContact() {
    console.log(this.email, this.uid);
    this.firebaseService.deleteContacts(this.email).then(() => {
      //  this.dismissModal();
    });
  } -->



amazon web service
npm install -g @aws-amplify/cli

papa parse
npm install ngx-papaparse@4 --save


6/1/2021 -- add contacts automatically to firestore
6/1/2021 -- convert estimate to invoice store estimate number to property to invoice number  -- one click

getCsvData() ==> 

1. bulk import data as csv file
2. convert csv data to json data
3. show json data onto ngx datatable
4. export csv data to local computer 

how to execute a function after a function is complete

 <!--// 1. Create a new function that returns a promise
    function firstFunction() {
      return new Promise((resolve, reject) => {
          let y = 0
          setTimeout(() => {
            for(i=0; i<10; i++){
               y++
            }
             console.log('loop completed')  
             resolve(y)
          }, 2000)
      })
    }
    
    //2. Create an async function
    async function secondFunction() {
        console.log('before promise call')
        //3. Await for the first function to complete
        let result = await firstFunction()
        console.log('promise resolved: ' + result)
        console.log('next step')
    }; 

    secondFunction() -->

    29/1 add data to quote detail page
    29/1 add a button to convert quotation to invoice

    cloud function calculate

26/4 
 
// added status 'void' to 'invoices' 
// 'total receivables' replaced by 'total sales' on 'dashboard'
// added delivery note (downloadable)
// added status 'overdue' on 'mark as sent'

new features
// added e-signature function
// added new themes to 'templates'

// adding (last 3 changes) status of invoicing (one day)
-- design layout
-- add function

// adding create receipt/ record payment (three/four days)

// preset invoice  