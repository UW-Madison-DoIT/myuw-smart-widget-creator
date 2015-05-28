## MyUW Smart Widget Creator

![https://travis-ci.org/UW-Madison-DoIT/myuw-smart-widget-creator.svg?branch=master](https://travis-ci.org/UW-Madison-DoIT/myuw-smart-widget-creator.svg?branch=master)

This simple maven application is a development tool to create smart widgets without having the burden of trying to startup your own uPortal instance.

### Requirements

If you just want to make use it, [a smart widget creator instance is available online](https://tools.my.wisc.edu/widget-creator/).

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

* [MyUW hosts a Smart Widget Creator instance among its supporting tools](https://tools.my.wisc.edu/widget-creator/)

#### What is this?

This app has 2 pages for now:

* Widget Creator
* Example Widgets

#### Additional Notes

Created using the my app seed at commit [88fc40594747](https://github.com/UW-Madison-DoIT/my-app-seed/commit/88fc4059474707b8efebca789c4b04def36884d3)

