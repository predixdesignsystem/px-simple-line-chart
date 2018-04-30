/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

document.addEventListener("WebComponentsReady", function() {
  runCustomTests();
});

function getElem(comp, tag) {
  return comp.shadowRoot ? comp.shadowRoot.querySelector(tag) : comp.querySelector(tag);
}

function runCustomTests() {
  suite('default <px-simple-line-chart> basic features', function() {
    var fixture, div, svg, boundingBox;

    suiteSetup(function(done) {
      setTimeout(function() {
        debugger
        fixture = document.getElementById('fixture');
        svg = getElem(fixture,'svg');
        boundingBox = svg.getBoundingClientRect();
        done();
      }, 500);
    });

    test('fixture exists', function() {
      assert.isTrue(fixture !== null);
    });
    test('SVG element has default height', function() {
      assert.equal(boundingBox.height, 150);
    });
    test('SVG element has default width', function() {
      assert.equal(boundingBox.width, 283);
    });
  });

  suite('default <px-simple-line-chart> basic features', function() {
    var fixture, div, svg, boundingBox;

    suiteSetup(function(done) {
      setTimeout(function() {
        fixture = document.getElementById('fixture1');
        svg = getElem(fixture,'svg');
        boundingBox = svg.getBoundingClientRect();
        done();
      }, 500);
    });

    test('fixture exists', function() {
      assert.isTrue(fixture !== null);
    });
    test('SVG element has default height', function() {
      assert.equal(Math.round(boundingBox.height), 100);
    });
    test('SVG element has default width', function() {
      assert.equal(Math.round(boundingBox.width), 320);
    });
  });
}