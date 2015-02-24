## My UW App Seed

This is a "seed" project intended to be used as a template for creating "Apps" in My UW in a new way. 

Rather than creating a Portlet, developers can clone this project and write a Servlet 3 web application
that can deployed with My UW Madison.

### Requirements

This application assumes you are familiar with Maven, have it installed, and have a settings.xml
appropriate for interacting with UW's [Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/pages/viewpage.action?spaceKey=ST&title=Maven+Repository+Manager).

### Getting started

1. git clone git@github.com:UW-Madison-DoIT/my-app-seed.git your-app-name
2. cd your-app-name
3. mvn install jetty:run-war

Point your browser at http://localhost:8080 and you'll see the familiar My UW frame.

### Adding your content

TODO

### Why is this a multi-module project?

Generally, projects that use this seed are a little larger in nature and have other modules encapsulating parts
of the code base. You would see other modules that are siblings of the war module like:

* api
* impl
* security
* integration

If your application won't have these things, you probably should consider a portlet instead.
