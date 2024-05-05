/** A class that is used to define a Matrix which is a multidimensional array in this case 2 dimensional*/
export class Matrix2 {
  rows: number;
  cols: number;
  data: Vector3[][];

  constructor(x: number, z: number) {
    this.rows = x;
    this.cols = z;
    this.data = Array.from({ length: x }, () =>
      Array.from({ length: z }, () => ({ x: 0, y: 0, z: 0 }))
    );
  }
  x: number;
  y: number;
  z: number;
  /**set an element in the array*/
  set(x: number, z: number, vector: Vector3) {
    this.data[x][z] = vector;
  }
  /**gets an element based on the position in the Matrix similar to how getting an element out of an array usually works with the exception that the matrix is 2 dimensional*/
  get(x: number, z: number): Vector3 {
    return this.data[x][z];
  }
  /** This method iterates through all elements in the Matrix and spits out a boolean value if the given vector has been found in the matrix*/
  containsVector(vector: Vector3): boolean {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (
          this.data[i][j].x === vector.x &&
          this.data[i][j].y === vector.y &&
          this.data[i][j].z === vector.z
        ) {
          return true;
        }
      }
    }
    return false;
  }
}

/** A class that is used to define a Matrix which is a multidimensional array in this case 3 dimensional*/
export class Matrix3 {
  rows: number;
  cols: number;
  depth: number;
  data: Vector3[][][];

  constructor(rows: number, cols: number, depth: number) {
    this.rows = rows;
    this.cols = cols;
    this.depth = depth;
    this.data = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () =>
        Array.from({ length: depth }, () => ({ x: 0, y: 0, z: 0 }))
      )
    );
  }

  /**set an element in the array*/
  set(x: number, y: number, z: number, vector: Vector3) {
    this.data[x][y][z] = vector;
  }

  /**gets an element based on the position in the Matrix similar to how getting an element out of an array usually works with the exception that the matrix is 3 dimensional*/
  get(x: number, y: number, z: number): Vector3 {
    return this.data[x][y][z];
  }
  /** This method iterates through all elements in the Matrix and spits out a boolean value if the given vector has been found in the matrix*/
  containsVector(vector: Vector3): boolean {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        for (let k = 0; k < this.depth; k++) {
          if (
            this.data[i][j][k].x === vector.x &&
            this.data[i][j][k].y === vector.y &&
            this.data[i][j][k].z === vector.z
          ) {
            return true;
          }
        }
      }
    }
    return false;
  }
}
