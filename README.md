#Px-Simple-Line-Chart [![Build Status](https://travis-ci.org/PredixDev/px-simple-line-chart.svg?branch=master)](https://travis-ci.org/PredixDev/px-simple-line-chart)

## Overview

Px-Simple-Line-Chart is a Predix UI component.

Use the px-simple-line-chart component to visualize a series of numeric values as a line chart. The series is represented by a thin blue line connecting a sequence of points, the position of each proportionally point representing a single coordinate value.

Optionally, a `threshold` value may be defined to draw a thin orange line horizontally at the y-axis point representing the value. By default a threshold label will be drawn in an axis bar on the left side of the chart. If a custom threshold label is necessary a string may also be passed to the component as `threshold-label`.

In addition, a `min` and `max` may be configured in order to scope the chart to a specific range of y values. By default these will also be represented by labels in an axis bar on the left side of the chart. If custom labels are necessary they can be passed as strings to the component as `min-label` and `max-label`.

The `width` and `height` of the component are also configurable as well as the vertical columns and horizontal rows drawn in the background of the coordinate space.

We recommend viewing the Demo page to become aware of the configuration possibilities. We also recommend using the default settings as they are designed for proper performance.

<hr />
## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line.

```
bower install px-simple-line-chart --save
```

Second, import the component to your application with the following tag in your head.

```
<link rel="import" href="bower_components/px-simple-line-chart.html" />
```

Finally, use the component in your application:

```
<px-simple-line-chart line-data="[ [1,2], [2,3], [3,4] ]"></px-simple-line-chart>
```


<br />
<hr />

## documentation

Read the full API and view the demo [here](https://predixdev.github.io/px-simple-line-chart).

## Local Development

From the component's directory...

```
$ npm install
$ bower install
$ grunt sass
```

From the component's directory, to start a local server run:

```
$ grunt depserve
```

Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.


### DevMode
Devmode runs `grunt depserve` and `grunt watch` concurrently so that when you make a change to your source files and save them, your preview will be updated in any browsers you have opened and turned on LiveReload.
From the component's directory run:

```
$ grunt devmode
```

### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/PredixDev/px-simple-line-chart/issues) to submit any bugs you might find.
