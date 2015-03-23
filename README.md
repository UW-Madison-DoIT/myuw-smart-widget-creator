## My UW Home Simple

This simple maven application is a development tool to create smart widgets without having the burden of trying to startup your own uPortal instance.

### Requirements

This application assumes you are familiar with Maven, have it installed, and have a settings.xml
appropriate for interacting with UW's [Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/pages/viewpage.action?spaceKey=ST&title=Maven+Repository+Manager).

### Getting started

#### Running Locally

`mvn install jetty:run-war`

Point your browser at http://localhost:8080 and you'll see the familiar My UW frame. 

#### Running on Codenvy [![alt](https://codenvy.com/factory/resources/factory-white.png)](https://codenvy.com/ide-resources/share/project/timlevett/myuw-home-simple)

* Create an account on `https://codenvy.com/`
* Clone this repo
* run it as a maven project

#### What is this?

This app has 2 pages for now:

* Widget Creator
* Example Widgets

