## MyUW Smart Widget Creator

This simple maven application is a development tool to create smart widgets without having the burden of trying to startup your own uPortal instance.

### Requirements

This application assumes you are familiar with Maven, have it installed, and have a settings.xml
appropriate for interacting with UW's [Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/pages/viewpage.action?spaceKey=ST&title=Maven+Repository+Manager).

### Getting started

#### Running Locally

`mvn install jetty:run-war`

Point your browser at http://localhost:8080 and you'll see the familiar My UW frame with the widget creator. 

#### Running on Codenvy

* Create an account on `https://codenvy.com/`
* Clone this repo [![alt](https://codenvy.com/factory/resources/factory-white.png)](https://codenvy.com/ide-resources/share/project/timlevett/myuw-smart-widget-creator)
* Click the permissions tab on the right side.  You'll need to copy the project into one of your named workspace to edit.
* You will need to allow popups for everything to work.
* Clicking the giant green play button will launch application in a docker instance and give you a url to test
* Run it as a maven project


#### Permanant Home
* Coming soon

#### What is this?

This app has 2 pages for now:

* Widget Creator
* Example Widgets

