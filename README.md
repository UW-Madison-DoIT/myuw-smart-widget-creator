## My UW App Seed

This is a "seed" project intended to be used as a template for creating "Apps" in My UW in a new way. 

Rather than creating a Portlet, developers can clone this project and write a Servlet 3 web application
that can deployed with My UW Madison.

### Requirements

This application assumes you are familiar with Maven, have it installed, and have a settings.xml
appropriate for interacting with UW's [Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/pages/viewpage.action?spaceKey=ST&title=Maven+Repository+Manager).

### Getting started

1. `git clone git@github.com:UW-Madison-DoIT/my-app-seed.git your-app-name`
2. `cd your-app-name`
3. `mvn install jetty:run-war`

Point your browser at http://localhost:8080 and you'll see the familiar My UW frame.

### Adding your content

The unique aspect about this project is that it overlays [angularjs-portal-frame](https://github.com/UW-Madison-DoIT/angularjs-portal).
That project provides us the frame that My UW uses: the header, the sidebar, and the footer. It provides
us an extension point in a file with a specific name: [my-app.js](my-app-seed-war/src/main/webapp/my-app.js).

In that file you can see that we reference a variable named `app`; this variable is the result of [angular.module](https://docs.angularjs.org/api/ng/type/angular.Module)
that was provided by angularjs-portal-frame.

With that reference we can use Angular to register controllers, services, directives, you name it.

The example in this project simply adds a new [Angular Route](https://docs.angularjs.org/api/ngRoute/service/$route) called
'default' that loads the contents of [my-app.html](my-app-seed-war/src/main/webapp/my-app.html) into the frame.

### Why is this a multi-module project?

Generally, projects that use this seed are a little larger in nature and have other modules encapsulating parts
of the code base. You would see other modules that are siblings of the war module like:

* api
* impl
* security
* integration

If your application won't have these things, you probably should consider a portlet instead.
