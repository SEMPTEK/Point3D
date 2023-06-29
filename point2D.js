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


class Point2D {
    // Private variables for storing the coordinates
    #x = 0;
    #y = 0;
  
    // Getters for accessing the individual coordinates
  
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
     * @returns {boolean} Returns true if the move is successful, false otherwise.
     */
    move(relativeX, relativeY) {
      try {
        this.#x += parseFloat(relativeX);
        this.#y += parseFloat(relativeY);
        return true;
      } catch {
        return false;
      }
    }
  
    /**
     * Relocate the point by providing new coordinates.
     * @param {number} newX - The new x-coordinate.
     * @param {number} newY - The new y-coordinate.
     * @returns {boolean} Returns true if the relocation is successful, false otherwise.
     */
    relocate(newX, newY) {
        try {
            this.#x = parseFloat(newX);
            this.#y = parseFloat(newY);
            return true;
        } catch {
            return false;
        }
    }

    /**
     * Calculate the distance between this point and another 3D point.
     * @param {Point2D} otherPoint2D - The other Point2D object.
     * @returns {number|null} Returns the distance if the otherPoint2D is valid, null otherwise.
     */
    distanceFromPoint(otherPoint2D) {
      if (!(otherPoint2D instanceof Point2D)) {
        return null;
      }
      let x2 = otherPoint2D.getX();
      let y2 = otherPoint2D.getY();
      let xValuesSquared = Math.pow(x2 - this.#x, 2);
      let yValuesSquared = Math.pow(y2 - this.#y, 2);
      let distance = Math.sqrt(xValuesSquared + yValuesSquared);
      return distance;
    }
  
    /**
     * Convert the Point2D object to a JSON string.
     * @returns {string} The JSON string representing the Point2D object.
     */
    toJSON() {
      return JSON.stringify({
        'x': this.#x,
        'y': this.#y,
      });
    }
  
    /**
     * Create a Point2D object from a JSON string.
     * @param {string} data - The JSON string representing the Point2D object.
     * @returns {Point2D|null} The created Point2D object if the data is valid, null otherwise.
     */
    static fromJSON(data) {
      try {
        const { x, y } = JSON.parse(data);
        return new Point2D(x, y);
      } catch {
        return null;
      }
    }
  
    /**
     * Create a new Point2D object with the specified coordinates.
     * @param {number} x - The x-coordinate.
     * @param {number} y - The y-coordinate.
     */
    constructor(x, y) {
      this.#x = parseFloat(x);
      this.#y = parseFloat(y);
    }
  }
  
