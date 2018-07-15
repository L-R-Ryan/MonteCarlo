/* MoMath Math Square Behavior
 *
 *        Title: P5 Example
 *  Description: Display user blobs and sensors (same as debug)
 * Scheduler ID:
 *    Framework: P5
 *       Author: Dylan Simon <dylan@dylex.net>
 *      Created: 2017-04
 *       Status: works
 */

import P5Behavior from 'p5beh';
import * as Display from 'display'
const pb = new P5Behavior();

// for WEBGL: pb.renderer = 'webgl';

pb.preload = function (p) {
  /* this == pb.p5 == p */
  // ...
}

pb.setup = function (p) {
  /* this == pb.p5 == p */
  /* P5Behavior already calls createCanvas for us */
  // setup here...
};

pb.draw = function (floor, p) {
  /* this == pb.p5 == p */
  // draw here...
  this.clear();
  this.ellipse(Display.width/2,Display.height/2,Display.width/2,Display.height/2)
  for (let u of floor.users) {
    pb.drawUser(u);
  }
  this.fill(128, 128, 128, 128);
  this.noStroke();
  pb.drawSensors(floor.sensors);
};

export const behavior = {
  title: "Monte Carlo Simulation",
  init: pb.init.bind(pb),
  frameRate: 'sensors',
  render: pb.render.bind(pb),
  numGhosts: 4
};
export default behavior
