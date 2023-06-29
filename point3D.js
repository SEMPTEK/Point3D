/*
  MIT License

  Copyright (c) 2023 by John McLaughlin | Shear Engineer, LLC

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/


class Point3D {
    // Private variables for storing the coordinates
    #x = 0;
    #y = 0;
    #z = 0;
  
    // Getters for accessing the individual coordinates
  
    /**
     * Get the z-coordinate of the point.
     * @returns {number} The z-coordinate.
     */
    getZ() {
      return this.#z;
    }
  
    /**
     * Get the y-coordinate of the point.
     * @returns {number} The y-coordinate.
     */
    getY() {
      return this.#y;
    }
  
    /**
     * Get the x-coordinate of the point.
     * @returns {number} The x-coordinate.
     */
    getX() {
      return this.#x;
    }
  
    /**
     * Move the point by adding relative coordinates.
     * @param {number} relativeX - The relative x-coordinate.
     * @param {number} relativeY - The relative y-coordinate.
     * @param {number} relativeZ - The relative z-coordinate.
     * @returns {boolean} Returns true if the move is successful, false otherwise.
     */
    move(relativeX, relativeY, relativeZ) {
      try {
        this.#x += parseFloat(relativeX);
        this.#y += parseFloat(relativeY);
        this.#z += parseFloat(relativeZ);
        return true;
      } catch {
        return false;
      }
    }
  
    /**
     * Calculate the distance between this point and another 3D point.
     * @param {Point3D} otherPoint3D - The other Point3D object.
     * @returns {number|null} Returns the distance if the otherPoint3D is valid, null otherwise.
     */
    distanceFromPoint(otherPoint3D) {
      if (!(otherPoint3D instanceof Point3D)) {
        return null;
      }
      let x2 = otherPoint3D.getX();
      let y2 = otherPoint3D.getY();
      let z2 = otherPoint3D.getZ();
      let xValuesSquared = Math.pow(x2 - this.#x, 2);
      let yValuesSquared = Math.pow(y2 - this.#y, 2);
      let zValuesSquared = Math.pow(z2 - this.#z, 2);
      let distance = Math.sqrt(xValuesSquared + yValuesSquared + zValuesSquared);
      return distance;
    }
  
    /**
     * Convert the Point3D object to a JSON string.
     * @returns {string} The JSON string representing the Point3D object.
     */
    toJSON() {
      return JSON.stringify({
        'x': this.#x,
        'y': this.#y,
        'z': this.#z,
      });
    }
  
    /**
     * Create a Point3D object from a JSON string.
     * @param {string} data - The JSON string representing the Point3D object.
     * @returns {Point3D|null} The created Point3D object if the data is valid, null otherwise.
     */
    static fromJSON(data) {
      try {
        const { x, y, z } = JSON.parse(data);
        return new Point3D(x, y, z);
      } catch {
        return null;
      }
    }
  
    /**
     * Create a new Point3D object with the specified coordinates.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     * @param {number} z - The z-coordinate.
     */
    constructor(x, y, z) {
      this.#x = parseFloat(x);
      this.#y = parseFloat(y);
      this.#z = parseFloat(z);
    }
  }
  
