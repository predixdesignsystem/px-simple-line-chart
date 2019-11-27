/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-code-editor.js';
import 'px-demo/px-demo-component-snippet.js';
import '../px-simple-line-chart.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-simple-line-chart" description="The Simple Line Chart provides a quick way to visualize linear data. Configuration options include
      setting the minimum and maximum values for the Y-axis, whether or not to include a orange horizontal line
      at a certain threshold value, setting the number of vertical and horizontal grid marks; and customizing
      the labels of the min, max, and threshold." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Code Editor -->
      <px-demo-code-editor slot="px-demo-code-editor" props="{{props}}"></px-demo-code-editor>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <div>
          <px-simple-line-chart width="{{props.width.value}}" height="{{props.height.value}}" min="{{props.min.value}}" max="{{props.max.value}}" columns="{{props.columns.value}}" rows="{{props.rows.value}}" line-data="{{props.lineData.value}}" threshold="{{props.threshold.value}}" min-label="{{props.minLabel.value}}" max-label="{{props.maxLabel.value}}" threshold-label="{{props.thresholdLabel.value}}" max-data-points="{{props.maxDataPoints.value}}">
          </px-simple-line-chart>
        </div>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-simple-line-chart" scripts-includes="[[scriptsIncludes]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-simple-line-chart"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-simple-line-chart-demo',

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    scriptsIncludes: {
      type: Array,
      value: function(){ return ['https://d3js.org/d3.v3.min.js'];}
    },

    configs: {
      type: Array,
      value: function(){
        var data = [
          [1397102460000, 1.99],
          [1397139660000, 1.92],
          [1397177400000, 1.97],
          [1397228040000, 1.12],
          [1397248260000, 1.09],
          [1397291280000, 1],
          [1397318100000, 1.99],
          [1397342100000, 1.75],
          [1397390820000, 1.11],
          [1397408100000, 1.93],
          [1397458800000, 1.84],
          [1397522940000, 1.99]
        ];
        return [
          { configName: "Simple",
            configShowProps: ['lineData','width','height','columns','rows'],
            configReset: true },

          { configName: "Full config",
            lineData: data,
            width: "350",
            height: "250",
            min: "0.5",
            max: "3.0",
            columns: "5",
            rows: "3",
            threshold: "1.8",
            minLabel: "min",
            maxLabel: "max",
            thresholdLabel: "avg" }
        ]
      }
    }
  },

  // TODO: future enhancement? add demo of live data updating
  //   var chart = Polymer.dom(document).querySelector('#chart3');
  //   var lineData = [ [(new Date()).getTime(), Math.random()] ];
  //
  //   chart.lineData = lineData;
  //   setInterval(function() {
  //       var point = [(new Date()).getTime(), (Math.random() * 1.4) - 0.8]
  //       chart.addPoint(point);
  //   }, 150);
  // },

  demoProps: {

    lineData: {
      type: Array,
      defaultValue: [ [1,2], [2,3], [3,4] ],
      inputType: 'code:JSON'
    },

    width: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    height: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    min: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    max: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    columns: {
      type: String,
      defaultValue: '7',
      inputType: 'text'
    },

    rows: {
      type: String,
      defaultValue: '7',
      inputType: 'text'
    },

    threshold: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    minLabel: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    maxLabel: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    },

    thresholdLabel: {
      type: String,
      defaultValue: '',
      inputType: 'text'
    }
  }
});
