## MyUW Widget Creator

![https://travis-ci.org/UW-Madison-DoIT/myuw-smart-widget-creator.svg?branch=master](https://travis-ci.org/UW-Madison-DoIT/myuw-smart-widget-creator.svg?branch=master)

This simple application is a development tool to create widgets without having the burden of trying to startup your own uPortal instance.

### Requirements

If you just want to make use of it, [a widget creator instance is available online](https://tools.my.wisc.edu/widget-creator/).

This application assumes you are familiar with Maven, have it installed, and have a settings.xml
appropriate for interacting with UW's [Maven Artifact Repository](https://wiki.doit.wisc.edu/confluence/pages/viewpage.action?spaceKey=ST&title=Maven+Repository+Manager).

#### Permanant Home

* [MyUW hosts a Widget Creator instance among its supporting tools](https://tools.my.wisc.edu/widget-creator/)

#### What is this?

This app has 2 pages for now:

* Widget Creator
* Example Widgets
* Bookmarks page for MyUW Toolbox

#### Additional Notes

AJAX Calls: Work with the portal team to set up proxy json service to avoid the browser being blocking for a cross-orgin request.  The actual web service must be accessible without headers (shib or otherwise); thus should be protect in other ways like IP restricted, password protected, and/or security certificates.
