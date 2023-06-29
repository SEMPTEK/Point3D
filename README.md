
# Point3D Class

The `Point3D` class represents a point in three-dimensional space. It stores the x, y, and z coordinates of the point and provides methods for manipulating and accessing these coordinates.

## Installation

There is no specific installation required to use the `Point3D` class. Simply include the class in your JavaScript project, and you're ready to go.

## Usage

To use the `Point3D` class, follow these steps:

1. Import or include the `Point3D` class in your JavaScript file.

```js
// Import the Point3D class (assuming the class is in a separate file named 'Point3D.js')
import { Point3D } from './Point3D.js';
```

2. Create an instance of the `Point3D` class by providing the x, y, and z coordinates.

```js
// Create a new Point3D object with coordinates (1, 2, 3)
const point = new Point3D(1, 2, 3);
```

3. Use the available methods to manipulate and access the coordinates of the point.

```js
// Move the point by adding relative coordinates
point.move(2, 3, -1);

// Get the x, y, and z coordinates of the point
const x = point.getX();
const y = point.getY();
const z = point.getZ();

// Calculate the distance between two points
const otherPoint = new Point3D(4, 5, 6);
const distance = point.distanceFromPoint(otherPoint);

// Convert the Point3D object to a JSON string
const json = point.toJSON();

// Create a Point3D object from a JSON string
const newPoint = Point3D.fromJSON(json);


## API

### `getX()`

Returns the x-coordinate of the point.

**Returns:** `number` - The x-coordinate.

### `getY()`

Returns the y-coordinate of the point.

**Returns:** `number` - The y-coordinate.

### `getZ()`

Returns the z-coordinate of the point.

**Returns:** `number` - The z-coordinate.

### `move(relativeX, relativeY, relativeZ)`

Moves the point by adding relative coordinates.

- `relativeX` (`number`): The relative x-coordinate to add.
- `relativeY` (`number`): The relative y-coordinate to add.
- `relativeZ` (`number`): The relative z-coordinate to add.

**Returns:** `boolean` - Returns `true` if the move is successful, `false` otherwise.

### `distanceFromPoint(otherPoint3D)`

Calculates the distance between this point and another 3D point.

- `otherPoint3D` (`Point3D`): The other `Point3D` object to calculate the distance to.

**Returns:** `number|null` - Returns the distance between the points if the `otherPoint3D` is valid, `null` otherwise.

### `toJSON()`

Converts the `Point3D` object to a JSON string.

**Returns:** `string` - The JSON string representing the `Point3D` object.

### `static fromJSON(data)`

Creates a `Point3D` object from a JSON string.

- `data` (`string`): The JSON string representing the `Point3D` object.

**Returns:** `Point3D|null` - The created `Point3D` object if the `data` is valid, `null` otherwise.

## License

This code is released under the [MIT License](LICENSE).
```
