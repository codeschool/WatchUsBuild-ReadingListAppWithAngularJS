# Angular Soup to Bits - Reading List

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started
To get you started you can simply clone the AngularJSSTB repository and install the dependencies:

### Prerequisites
Code School's Beginning Angular Course: [Shaping up with Angular.js](http://campus.codeschool.com/courses/shaping-up-with-angular-js/intro)

You need git to clone the angular-seed repository. You can get it by:
`git clone git@github.com:codeschool/AngularJSSTB.git`

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone angular-seed

Clone the angular-seed repository using [git][git]:

```
git clone git@github.com:codeschool/AngularJSSTB.git
cd AngularJSSTB
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:4000/app/index.html`.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[Questions or Comments for Code School](http://help.codeschool.com/)?
