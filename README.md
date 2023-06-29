# Point2D Class

Represents a 2D point with x and y coordinates.

## Table of Contents
- [Methods](#methods)
- [Static Methods](#static-methods)
- [Constructor](#constructor)

## Methods

### `getY()`
Get the y-coordinate of the point.

**Returns:** `number` - The y-coordinate.

### `getX()`
Get the x-coordinate of the point.

**Returns:** `number` - The x-coordinate.

### `move(relativeX, relativeY)`
Move the point by adding relative coordinates.

- `relativeX` (number): The relative x-coordinate.
- `relativeY` (number): The relative y-coordinate.

**Returns:** `boolean` - Returns true if the move is successful, false otherwise.

### `relocate(newX, newY)`
Relocate the point by providing new coordinates.

- `newX` (number): The new x-coordinate.
- `newY` (number): The new y-coordinate.

**Returns:** `boolean` - Returns true if the relocation is successful, false otherwise.

### `distanceFromPoint(otherPoint2D)`
Calculate the distance between this point and another 2D point.

- `otherPoint2D` (Point2D): The other Point2D object.

**Returns:** `number|null` - Returns the distance if the `otherPoint2D` is valid, null otherwise.

### `toJSON()`
Convert the Point2D object to a JSON string.

**Returns:** `string` - The JSON string representing the Point2D object.

## Static Methods

### `fromJSON(data)`
Create a Point2D object from a JSON string.

- `data` (string): The JSON string representing the Point2D object.

**Returns:** `Point2D|null` - The created Point2D object if the `data` is valid, null otherwise.

## Constructor

### `Point2D(x, y)`
Create a new Point2D object with the specified coordinates.

- `x` (number): The x-coordinate.
- `y` (number): The y-coordinate.



# Point3D Class

Represents a 3D point with x, y, and z coordinates.

## Table of Contents
- [Methods](#methods)
- [Static Methods](#static-methods)
- [Constructor](#constructor)

## Methods

### `getZ()`
Get the z-coordinate of the point.

**Returns:** `number` - The z-coordinate.

### `getY()`
Get the y-coordinate of the point.

**Returns:** `number` - The y-coordinate.

### `getX()`
Get the x-coordinate of the point.

**Returns:** `number` - The x-coordinate.

### `move(relativeX, relativeY, relativeZ)`
Move the point by adding relative coordinates.

- `relativeX` (number): The relative x-coordinate.
- `relativeY` (number): The relative y-coordinate.
- `relativeZ` (number): The relative z-coordinate.

**Returns:** `boolean` - Returns true if the move is successful, false otherwise.

### `relocate(newX, newY, newZ)`
Relocate the point by providing new coordinates.

- `newX` (number): The new x-coordinate.
- `newY` (number): The new y-coordinate.
- `newZ` (number): The new z-coordinate.

**Returns:** `boolean` - Returns true if the relocation is successful, false otherwise.

### `distanceFromPoint(otherPoint3D)`
Calculate the distance between this point and another 3D point.

- `otherPoint3D` (Point3D): The other Point3D object.

**Returns:** `number|null` - Returns the distance if the `otherPoint3D` is valid, null otherwise.

### `toJSON()`
Convert the Point3D object to a JSON string.

**Returns:** `string` - The JSON string representing the Point3D object.

## Static Methods

### `fromJSON(data)`
Create a Point3D object from a JSON string.

- `data` (string): The JSON string representing the Point3D object.

**Returns:** `Point3D|null` - The created Point3D object if the `data` is valid, null otherwise.

## Constructor



### `Point3D(x, y, z)`
Create a new Point3D object with the specified coordinates.

- `x` (number): The x-coordinate.
- `y` (number): The y-coordinate.
- `z` (number): The z-coordinate.
