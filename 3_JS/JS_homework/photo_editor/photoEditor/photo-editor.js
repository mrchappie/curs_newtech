//
//
//
// <=================================================>
//                    CONSTANTS
// <=================================================>
//
//
//

/**
 * An object containing all the photo filters
 * as 3x3 matrixes.
 *
 * @type {Object}
 *
 * @property {Number[][]} boxBlur      - A simple blur, aproximation of a gaussian blur
 * @property {Number[][]} gaussianBlur - A blurring effect, reduces the noise and detail in images
 * @property {Number[][]} edge0        - A ridge detection filter, identifies sudden shifts in color
 * @property {Number[][]} edge1        - A ridge detection filter, identifies sudden shifts in color
 * @property {Number[][]} edge2        - A ridge detection filter, identifies sudden shifts in color
 * @property {Number[][]} sharpen      - A sharpening effect, increases the noise and detail in images
 * @property {Number[][]} emboss       - A filter which produces a 3D effect similar to folding paper
 * @property {Number[][]} topSobel     - An edge detection filter, emphasizes the top edges of entities
 * @property {Number[][]} bottomSobel  - An edge detection filter, emphasizes the bottom edges of entities
 * @property {Number[][]} leftSobel    - An edge detection filter, emphasizes the left edges of entities
 * @property {Number[][]} rightSobel   - An edge detection filter, emphasizes the right edges of entities
 * @property {Number[][]} grayscale    - The classical grayscale filter, turns the image into black and white
 * @property {Number[][]} sepia        - The classical sepia filter, turns the image into hues of brown
 */
const filters = {
  boxBlur: [
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9],
    [1 / 9, 1 / 9, 1 / 9],
  ],
  gaussianBlur: [
    [1 / 16, 2 / 16, 1 / 16],
    [2 / 16, 4 / 16, 2 / 16],
    [1 / 16, 2 / 16, 1 / 16],
  ],
  edge0: [
    [1, 0, -1],
    [0, 0, 0],
    [-1, 0, 1],
  ],
  edge1: [
    [0, 1, 0],
    [1, -4, 1],
    [0, 1, 0],
  ],
  edge2: [
    [-1, -1, -1],
    [-1, 8, -1],
    [-1, -1, -1],
  ],
  sharpen: [
    [0, -1, 0],
    [-1, 5, -1],
    [0, -1, 0],
  ],
  emboss: [
    [-2, -1, 0],
    [-1, 1, 1],
    [0, 1, 2],
  ],
  topSobel: [
    [1, 2, 1],
    [0, 0, 0],
    [-1, -2, -1],
  ],
  bottomSobel: [
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1],
  ],
  leftSobel: [
    [1, 0, -1],
    [2, 0, -2],
    [1, 0, -1],
  ],
  rightSobel: [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1],
  ],
  grayscale: [
    [0.3, 0.59, 0.11],
    [0.3, 0.59, 0.11],
    [0.3, 0.59, 0.11],
  ],
  sepia: [
    [0.39, 0.769, 0.189],
    [0.349, 0.686, 0.168],
    [0.272, 0.534, 0.131],
  ],
};

/**
 * The input type="file" element which allows
 * the user to select an image file.
 *
 * @type {HTMLInputElement}
 */
const imagePicker = document.getElementById("imagePicker");

/**
 * The select element which allows the user
 * to select an image filter to apply.
 *
 * @type {HTMLSelectElement}
 */
const filterPicker = document.getElementById("filterPicker");

/**
 * The image element which displays the image file
 * previously selected by the user.
 *
 * @type {HTMLImageElement}
 */
const imgEl = document.getElementById("image-before");

/**
 * The canvas element which displays the processed image
 * and allows us to retrieve the RGB and ALPHA values
 * of each pixel in the selected image, for processing.
 *
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("image-after");

/**
 * This variable holds the ImageData object retrieved
 * from the loaded image, the unprocessed RGB and ALPHA
 * values of all the pixels in the image.
 *
 * @type {ImageData}
 *
 * @param {Number} height           - the actual height in pixels of the image
 * @param {Number} width            - the actual width in pixels of the image
 * @param {Uint8ClampedArray} data  - an Array containing 4 * pixels of 0-255 numerical values (R, G, B, ALPHA of each pixel in a flat array)
 */
let imageData;

//
//
//
// <=================================================>
//            DRAWING AND IMAGE FUNCTIONS
// <=================================================>
//
//
//

/**
 * Retrieves an image in the local file system and
 * loads it in the image element, then also draws
 * it on the canvas element, in order to retrieve
 * the pixel data of the image. This data gets stored
 * in the imageData variable.
 *
 * @param {String} path - the path to the local image file
 *
 * @see imgEl
 * @see canvas
 * @see imageData
 */
function drawImageFromPath(path) {
  imgEl.src = path;

  // Creates a temporary HTMLIMageElement in order to get
  // the correct height and width values of the image.
  const img = new Image();
  img.src = path;
  img.onload = function () {
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);

    imageData = ctx.getImageData(0, 0, img.width, img.height);
  };
}

/**
 * Draws an imageData object on the canvas element.
 *
 * @param {ImageData} imageData - an ImageData object containing the picture to be drawn on the canvas
 *
 * @see canvas
 */
function drawImageData(imageData) {
  const ctx = canvas.getContext("2d");

  ctx.putImageData(imageData, 0, 0);
}

/**
 * Receives the image file selected from the input element and
 * gets its path in the local file system , then loads the image.
 *
 * @param {File} file
 *
 * @see imagePicker
 * @see drawImageFromPath
 */
function onImageSelected(file) {
  const path = URL.createObjectURL(file);
  drawImageFromPath(path);
}

/**
 * Gets the selected filter and applies it over the selected image.
 * Draws the processed data on the canvas element.
 *
 * @param {SubmitEvent} event - the event generated when submitting the form
 *
 * @see Event.prototype.preventDefault
 */
function applySelectedFilter(event) {
  event.preventDefault();

  const filter = filters[filterPicker.value];

  const initialData = PixelData.fromImageData(imageData);

  const processedData = initialData.applyFilter(filter);

  drawImageData(processedData.toImageData());
}

//
//
//
// <=================================================>
//                USEFUL DATA STRUCTURES
// <=================================================>
//
// <=================================================>
//                  THE PIXEL CLASS
// <=================================================>
//
//
//

/**
 * The Pixel class represents a pixel from a picture,
 * split into its RGB values and opacity (alpha).
 *
 * @param {number} red    - the RED component of the pixel
 * @param {number} green  - the GREEN component of the pixel
 * @param {number} blue   - the BLUE component of the pixel
 * @param {number} alpha  - the ALPHA component of the pixel
 */
function Pixel(red = 0, green = 0, blue = 0, alpha = 255) {
  this.red = red;
  this.green = green;
  this.blue = blue;
  this.alpha = alpha;
}

/**
 * Creates an empty black Pixel.
 *
 * @returns {Pixel} a new black Pixel
 */
Pixel.empty = () => new Pixel();
/**
 * Creates a Pixel object from an array containing its values in order.
 *
 * @param {Number[]} values - an [R, G, B, ALPHA] array
 * @returns {Pixel} a pixel object
 */
Pixel.fromArray = (values) => new Pixel(...values);
/**
 * Transforms a pixel into an array of its values.
 *
 * @returns {Number[]} an [R, G, B, ALPHA] array
 */
Pixel.prototype.toArray = function () {
  return [this.red, this.green, this.blue, this.alpha];
};
/**
 * Rounds the RGB values to integers.
 */
Pixel.prototype.normalize = function () {
  this.red = Math.max(0, Math.min(255, Math.round(this.red)));
  this.green = Math.max(0, Math.min(255, Math.round(this.green)));
  this.blue = Math.max(0, Math.min(255, Math.round(this.blue)));
};
/**
 * FOR TESTING
 * Checks if this pixel and the given one have the same values.
 *
 * @param {Pixel} other - a pixel object to compare with
 * @returns {Boolean} true if the pixels have the same values, false if otherwise
 */
Pixel.prototype.equals = function (other) {
  if (other === undefined || other === null) return false;

  return (
    this.constructor.name === other.constructor.name &&
    this.red === other.red &&
    this.green === other.green &&
    this.blue === other.blue &&
    this.alpha === other.alpha
  );
};

//
//
//
// <=================================================>
//                THE PIXELDATA CLASS
// <=================================================>
//
//
//

/**
 * The PixelData class contains all pixels in an image,
 * structured as a matrix of Pixel objects.
 *
 * @param {number} height         - the actual heigth of the loaded image
 * @param {number} width          - the actual width of the loaded image
 * @param {Pixel[][]} pixels - the values of each pixel structured in a height lines x width columns matrix
 */
function PixelData(height, width, pixels = []) {
  this.height = height;
  this.width = width;
  this.pixels = pixels;
}
/**
 * Initialises a PixelData object from an ImageData object.
 *
 * @param {ImageData} imageData - the data of the image to be processed
 * @returns {PixelData} a PixelData object
 */
PixelData.fromImageData = (imageData) => {
  height = imageData.height;
  width = imageData.width;
  pixels = imageData.data
    .reduce((accumulator, current, index) => {
      if (index % 4 === 0) accumulator.push([]);
      accumulator[Math.floor(index / 4)].push(current);
      return accumulator;
    }, [])
    .map((el) => Pixel.fromArray(el))
    .reduce((accumulator, current, index) => {
      if (index % this.width === 0) accumulator.push([]);
      accumulator[Math.floor(index / this.width)].push(current);
      return accumulator;
    }, []);
  return new PixelData(height, width, pixels);
};
/**
 * Converts a PixelData object to an ImageData object,
 * which can then be drawn on a canvas HTMl element.
 *
 * @returns {ImageData} an ImageData object
 */
PixelData.prototype.toImageData = function () {
  const data = this.pixels
    .flat()
    .map((pixel) => pixel.toArray())
    .flat();
  return new ImageData(Uint8ClampedArray.from(data), this.width, this.height);
};
/**
 * Adds the given pixel object to the image, at the end of the current line.
 * Adds a new line if the line reached the width of the image.
 *
 * @param {Pixel} pixel - the pixel object to be added to the image data
 */
PixelData.prototype.addPixel = function (pixel) {
  if (
    this.pixels.length === 0 ||
    this.pixels[this.pixels.length - 1].length === this.width
  ) {
    this.pixels.push([]);
  }
  this.pixels[this.pixels.length - 1].push(pixel);
};
/**
 * FOR TESTING
 * Checks if this pixelData and the given one have the same values.
 *
 * @param {PixelData} other - a pixel object to compare with
 * @returns {Boolean} true if the pixelData objects have the same values, false if otherwise
 */
PixelData.prototype.equals = function (other) {
  if (this.constructor.name !== other.constructor.name) return false;

  if (this.height !== other.height || this.width != other.width) {
    console.log(`
Expected: height= ${this.height} X width= ${this.width}
Actual: height= ${other.height} X width= ${other.width}`);
    return false;
  }

  for (let i = 0; i < this.height; i++) {
    for (let j = 0; j < this.width; j++) {
      if (!this.pixels[i][j].equals(other.pixels[i][j])) {
        console.log(`Incorrect pixel at (${i}, ${j})
        Expected: (r: ${this.pixels[i][j].red}, g: ${this.pixels[i][j].green}, b: ${this.pixels[i][j].blue})
        Actual: (r: ${other.pixels[i][j].red}, g: ${other.pixels[i][j].green}, b: ${other.pixels[i][j].blue})`);
        return false;
      }
    }
  }

  return true;
};
/**
 * Retrieves the values of the pixels surrounding the pixel at the given coordinates.
 *
 * @param {Number} x - the vertical coordinate of the pixel
 * @param {Number} y - the horizontal coordinate of the pixel
 * @returns {Pixel[][]} - a 3x3 matrix of pixels from the image, with the pixel at (x, y) in the center
 *
 * @todo STEP 1: Implement this
 */
PixelData.prototype.getNeighbours = function (x, y) {
  // TODO
  //
  // 1) Create an empty list
  // 2) Add to it the neighbours of the pixel
  //  The neighbours of pixel (X, Y) would be:
  //    (X-1, Y-1)  (X-1, Y)  (X-1, Y+1)
  //     (X, Y-1)    (X, Y)    (X, Y+1)
  //    (X+1, Y-1)  (X+1, Y)  (X+1, Y+1)
  //
  //    Example for X = 2, Y = 1:
  //     ___________         ___________
  //    |__|__|__|__|       |__|__|__|__|       [
  //    |__|__|__|__|       |10|11|12|__|        [P10, P11, P12],
  //    |__|XY|__|__|   =>  |20|21|22|__|   =>   [P20, P21, P22],
  //    |__|__|__|__|       |30|31|32|__|        [P30, P31, P32]
  //    |__|__|__|__|       |__|__|__|__|       ]
  //
  //  Be careful if the pixel is on an edge or a corner,
  //  you may have to add empty Pixels to fill the empty positions.
  //
  // 3) Return the completed list (it should be 3x3)

  return [];
};

/**
 * Calculates the values of a processed pixel by applying the kernel filter
 * over the pixel and its neighbours.
 *
 * @param {Pixel[][]} neighbours     - a 3x3 Pixel matrix with the pixel to be processed in the middle
 * @param {Number[][]} filterMatrix  - the 3x3 matrix of the filter, containing the weigth of each pixel in the average
 * @returns {Pixel} the processed pixel object
 *
 * @todo STEP 2: Implement this
 */
Pixel.fromKernelFilter = (neighbours, filterMatrix) => {
  // TODO
  //
  // 1) Create a new pixel
  //
  // 2) Calculate its RGB values
  //  Multiply each value of a pixel with the
  //  corresponding weight in the filterMatrix
  //  *** THIS IS NOT MATRIX MULTIPLICATION ***
  //
  //  P00 P01 P02       W00 W01 W02
  //  P10 P11 P12   X   W10 W11 W12   =   P00 * W00 + P01 * W01 + ... + P22 * W22
  //  P20 P21 P22       W20 W21 W22
  //
  //  This needs to be done for each color separately.
  //  Do not mix the colors.
  //
  // 3) Normalize the pixel
  //    *The RGB values can only be between 0 and 255.
  //     However, our calculations may produce negative values
  //     or values over 255, so we need to round them to valid values.
  //
  // 4) Return the pixel

  return new Pixel();
};

/**
 * Calculates the values of a processed pixel by applying the color filter
 * over the pixel and its color values.
 *
 * ********************************************
 * *** This is only for GRAYSCALE and SEPIA ***
 * ********************************************
 *
 * @param {Number[][]} filterMatrix - the 3x3 matrix of the filter, containing the weigth of each color in the average
 * @returns {Pixel} the processed pixel object
 *
 * @todo STEP 3: Implement this
 */
Pixel.prototype.fromColorFilter = function (filterMatrix) {
  // TODO
  //
  // 1) Create a new pixel
  //
  // 2) Calculate its RGB values
  //          Wrr Wrg Wrb       P.red   = P.red * Wrr + P.green * Wrg + P.blue * Wrb
  //  P   *   Wgr Wgg Wgb   =>  P.green = P.red * Wgr + P.green * Wgg + P.blue * Wgb
  //          Wbr Wbg Wbb       P.blue  = P.red * Wbr + P.green * Wbg + P.blue * Wbb
  //
  // 3) Normalize the pixel
  //    *The RGB values can only be between 0 and 255.
  //     However, our calculations may produce negative values
  //     or values over 255, so we need to round them to valid values.
  //
  // 4) Return the pixel

  return new Pixel();
};

/**
 * Creates a new PixelData object from the original one,
 * by applying the selected filter over the original image.
 *
 * @param {Number[][]} filter - the filter to apply
 * @returns {PixelData} the processed pixels that form the image with the filter applied to it
 *
 * @todo STEP 4: Implement this
 */
PixelData.prototype.applyFilter = function (filter) {
  // TODO
  //
  // 1) Create a new PixelData object the same height and width
  //
  // 2) Loop over every line and then over every pixel in the line
  //
  // 3) For GRAYSCALE and SEPIA, add a new pixel to the matrix,
  // calculated by calling Pixel.fromColorFilter
  //
  // 4) For all other filters:
  //    4.1) Get the list of the neighbours of the pixel
  //    4.2) Add a new pixel to the matrix,
  //    calculated by calling Pixel.fromKernelFilter
  //
  // 5) Return the new PixelData object

  return new PixelData();
};

//
//
//
// <=================================================>
//                   TEST FUNCTIONS
// <=================================================>
//
//
//

function logTestCase(testNo, testName) {
  console.log(
    `--->
%cTest ${testNo}
%c ${testName}`,
    "background: yellow",
    "background: transparent"
  );
}

function logTestResult(testCase, passed) {
  console.log(
    `
%c${passed ? "PASSED" : "FAILED"}: ${testCase}`,
    `background: ${passed ? "green" : "red"}; color: white`
  );
}

function assert(testCase, condition, errorMessage, logAny = false) {
  console.assert(condition, errorMessage);
  if (logAny || !condition) logTestResult(testCase, condition);
  return condition;
}

/**
 * Run this to check the implementation of the first step.
 *
 * @see PixelData.prototype.getNeighbours
 */
function testStep1() {
  console.log(
    `
<------------------------>
 Running tests for Step 1 
<------------------------>`
  );

  const pixelData = new PixelData(4, 5);
  for (let i = 0; i < 4 * 5; i++) {
    pixelData.addPixel(new Pixel(i, 20 + i, 40 + i));
  }
  console.log("Pixel data for this test:");
  console.log(pixelData);

  function checkPixels() {
    let testRes = true;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          !assert(
            message,
            expected[i][j].equals(actual?.[i]?.[j]),
            `Incorrect pixel at (${i}, ${j})
Expected: (r: ${expected[i][j].red}, g: ${expected[i][j].green}, b: ${expected[i][j].blue})
Actual: (r: ${actual?.[i]?.[j]?.red}, g: ${actual?.[i]?.[j]?.green}, b: ${actual?.[i]?.[j]?.blue})`
          )
        ) {
          testRes = false;
          break;
        }
      }
      if (!testRes) break;
    }
    if (testRes) logTestResult(message, true);
  }

  let message, actual, expected;

  // Test 1
  message = "Check neighbours of CENTER pixel";
  logTestCase(1, message);
  actual = pixelData.getNeighbours(1, 1);
  expected = [
    [new Pixel(0, 20, 40), new Pixel(1, 21, 41), new Pixel(2, 22, 42)],
    [new Pixel(5, 25, 45), new Pixel(6, 26, 46), new Pixel(7, 27, 47)],
    [new Pixel(10, 30, 50), new Pixel(11, 31, 51), new Pixel(12, 32, 52)],
  ];
  checkPixels();

  // Test 2
  message = "Check neighbours of TOP-EDGE pixel";
  logTestCase(2, message);
  actual = pixelData.getNeighbours(0, 1);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(0, 20, 40), new Pixel(1, 21, 41), new Pixel(2, 22, 42)],
    [new Pixel(5, 25, 45), new Pixel(6, 26, 46), new Pixel(7, 27, 47)],
  ];
  checkPixels();

  // Test 3
  message = "Check neighbours of RIGHT-EDGE pixel";
  logTestCase(3, message);
  actual = pixelData.getNeighbours(1, 4);
  expected = [
    [new Pixel(3, 23, 43), new Pixel(4, 24, 44), new Pixel(0, 0, 0)],
    [new Pixel(8, 28, 48), new Pixel(9, 29, 49), new Pixel(0, 0, 0)],
    [new Pixel(13, 33, 53), new Pixel(14, 34, 54), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 4
  message = "Check neighbours of BOTTOM-EDGE pixel";
  logTestCase(4, message);
  actual = pixelData.getNeighbours(3, 3);
  expected = [
    [new Pixel(12, 32, 52), new Pixel(13, 33, 53), new Pixel(14, 34, 54)],
    [new Pixel(17, 37, 57), new Pixel(18, 38, 58), new Pixel(19, 39, 59)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 5
  message = "Check neighbours of LEFT-EDGE pixel";
  logTestCase(5, message);
  actual = pixelData.getNeighbours(2, 0);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(5, 25, 45), new Pixel(6, 26, 46)],
    [new Pixel(0, 0, 0), new Pixel(10, 30, 50), new Pixel(11, 31, 51)],
    [new Pixel(0, 0, 0), new Pixel(15, 35, 55), new Pixel(16, 36, 56)],
  ];
  checkPixels();

  // Test 6
  message = "Check neighbours of TOP-LEFT-CORNER pixel";
  logTestCase(6, message);
  actual = pixelData.getNeighbours(0, 0);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(0, 0, 0), new Pixel(0, 20, 40), new Pixel(1, 21, 41)],
    [new Pixel(0, 0, 0), new Pixel(5, 25, 45), new Pixel(6, 26, 46)],
  ];
  checkPixels();

  // Test 7
  message = "Check neighbours of TOP-RIGHT-CORNER pixel";
  logTestCase(7, message);
  actual = pixelData.getNeighbours(0, 4);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(3, 23, 43), new Pixel(4, 24, 44), new Pixel(0, 0, 0)],
    [new Pixel(8, 28, 48), new Pixel(9, 29, 49), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 8
  message = "Check neighbours of BOTTOM-RIGHT-CORNER pixel";
  logTestCase(8, message);
  actual = pixelData.getNeighbours(3, 4);
  expected = [
    [new Pixel(13, 33, 53), new Pixel(14, 34, 54), new Pixel(0, 0, 0)],
    [new Pixel(18, 38, 58), new Pixel(19, 39, 59), new Pixel(0, 0, 0)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  checkPixels();

  // Test 9
  message = "Check neighbours of BOTTOM-LEFT-CORNER pixel";
  logTestCase(9, message);
  actual = pixelData.getNeighbours(3, 0);
  expected = [
    [new Pixel(0, 0, 0), new Pixel(10, 30, 50), new Pixel(11, 31, 51)],
    [new Pixel(0, 0, 0), new Pixel(15, 35, 55), new Pixel(16, 36, 56)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  checkPixels();
}

/**
 * Run this to check the implementation of the second step.
 *
 * @see Pixel.fromKernelFilter
 */
function testStep2() {
  console.log(
    `
%c<------------------------>
 Running tests for Step 2 
<------------------------>`,
    "background: black; color: white"
  );

  function checkPixel() {
    if (
      assert(
        message,
        expected.equals(actual),
        `
Expected: (r: ${expected.red}, g: ${expected.green}, b: ${expected.blue})
Actual: (r: ${Math.floor(actual.red)}, g: ${Math.floor(
          actual.green
        )}, b: ${Math.floor(actual.blue)})`
      )
    ) {
      logTestResult(message, true);
    }
  }

  let message, expected, actual, neighbours;

  // Test 1
  message = "Apply filter BOX-BLUR on CENTER pixel";
  logTestCase(1, message);
  neighbours = [
    [new Pixel(0, 20, 40), new Pixel(1, 21, 41), new Pixel(2, 22, 42)],
    [new Pixel(5, 25, 45), new Pixel(6, 26, 46), new Pixel(7, 27, 47)],
    [new Pixel(10, 30, 50), new Pixel(11, 31, 51), new Pixel(12, 32, 52)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.boxBlur);
  expected = new Pixel(6, 26, 46);
  checkPixel();

  // Test 2
  message = "Apply filter GAUSSIAN-BLUR on TOP-EDGE pixel";
  logTestCase(2, message);
  neighbours = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(0, 20, 40), new Pixel(1, 21, 41), new Pixel(2, 22, 42)],
    [new Pixel(5, 25, 45), new Pixel(6, 26, 46), new Pixel(7, 27, 47)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.gaussianBlur);
  expected = new Pixel(2, 17, 32);
  checkPixel();

  // Test 3
  message = "Apply filter EDGE0 on RIGHT-EDGE pixel";
  logTestCase(3, message);
  neighbours = [
    [new Pixel(30, 230, 143), new Pixel(4, 24, 44), new Pixel(0, 0, 0)],
    [new Pixel(8, 28, 48), new Pixel(9, 29, 49), new Pixel(0, 0, 0)],
    [new Pixel(13, 33, 53), new Pixel(14, 34, 54), new Pixel(0, 0, 0)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.edge0);
  expected = new Pixel(17, 197, 90);
  checkPixel();

  // Test 4
  message = "Apply filter EDGE1 on BOTTOM-EDGE pixel";
  logTestCase(4, message);
  neighbours = [
    [new Pixel(12, 32, 52), new Pixel(130, 233, 253), new Pixel(14, 34, 54)],
    [new Pixel(17, 37, 57), new Pixel(18, 38, 58), new Pixel(19, 39, 59)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.edge1);
  expected = new Pixel(94, 157, 137);
  checkPixel();

  // Test 5
  message = "Apply filter EDGE2 on LEFT-EDGE pixel";
  logTestCase(5, message);
  neighbours = [
    [new Pixel(0, 0, 0), new Pixel(5, 25, 45), new Pixel(6, 26, 46)],
    [new Pixel(0, 0, 0), new Pixel(10, 30, 50), new Pixel(11, 31, 51)],
    [new Pixel(0, 0, 0), new Pixel(15, 35, 55), new Pixel(16, 36, 56)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.edge2);
  expected = new Pixel(27, 87, 147);
  checkPixel();

  // Test 6
  message = "Apply filter SHARPEN on TOP-LEFT-CORNER pixel";
  logTestCase(6, message);
  neighbours = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(0, 0, 0), new Pixel(0, 20, 40), new Pixel(1, 21, 41)],
    [new Pixel(0, 0, 0), new Pixel(5, 25, 45), new Pixel(6, 26, 46)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.sharpen);
  expected = new Pixel(0, 54, 114);
  checkPixel();

  // Test 7
  message = "Apply filter EMBOSS on TOP-RIGHT-CORNER pixel";
  logTestCase(7, message);
  neighbours = [
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
    [new Pixel(3, 23, 43), new Pixel(4, 24, 44), new Pixel(0, 0, 0)],
    [new Pixel(8, 28, 48), new Pixel(9, 29, 49), new Pixel(0, 0, 0)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.emboss);
  expected = new Pixel(10, 30, 50);
  checkPixel();

  // Test 8
  message = "Apply filter TOP-SOBEL on BOTTOM-RIGHT-CORNER pixel";
  logTestCase(8, message);
  neighbours = [
    [new Pixel(13, 33, 53), new Pixel(14, 34, 54), new Pixel(0, 0, 0)],
    [new Pixel(18, 38, 58), new Pixel(19, 39, 59), new Pixel(0, 0, 0)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.topSobel);
  expected = new Pixel(41, 101, 161);
  checkPixel();

  // Test 9
  message = "Apply filter RIGHT-SOBEL on BOTTOM-LEFT-CORNER pixel";
  logTestCase(9, message);
  neighbours = [
    [new Pixel(0, 0, 0), new Pixel(10, 30, 50), new Pixel(11, 31, 51)],
    [new Pixel(0, 0, 0), new Pixel(15, 35, 55), new Pixel(16, 36, 56)],
    [new Pixel(0, 0, 0), new Pixel(0, 0, 0), new Pixel(0, 0, 0)],
  ];
  actual = Pixel.fromKernelFilter(neighbours, filters.rightSobel);
  expected = new Pixel(43, 103, 163);
  checkPixel();
}

/**
 * Run this to check the implementation of the third step.
 *
 * @see Pixel.fromColorFilter
 */
function testStep3() {
  console.log(
    `
%c<------------------------>
 Running tests for Step 3 
<------------------------>`,
    "background: black; color: white"
  );

  function checkPixel(expected) {
    if (
      assert(
        message,
        expected.equals(actual),
        `
Expected: (r: ${expected.red}, g: ${expected.green}, b: ${expected.blue})
Actual: (r: ${Math.floor(actual.red)}, g: ${Math.floor(
          actual.green
        )}, b: ${Math.floor(actual.blue)})`
      )
    )
      logTestResult(message, true);
  }

  let message, actual;
  const initial = [];
  for (let i = 0; i < 10; i++) {
    initial.push(new Pixel(5 * i, 100 + 5 * i, 200 + 5 * i));
  }

  // Test 1
  message = "Apply filter GRAYSCALE on CENTER pixel";
  logTestCase(1, message);
  actual = initial[1].fromColorFilter(filters.grayscale);
  checkPixel(new Pixel(86, 86, 86));

  // Test 2
  message = "Apply filter SEPIA on TOP-EDGE pixel";
  logTestCase(2, message);
  actual = initial[2].fromColorFilter(filters.sepia);
  checkPixel(new Pixel(128, 114, 89));

  // Test 3
  message = "Apply filter GRAYSCALE on RIGHT-EDGE pixel";
  logTestCase(3, message);
  actual = initial[3].fromColorFilter(filters.grayscale);
  checkPixel(new Pixel(96, 96, 96));

  // Test 4
  message = "Apply filter SEPIA on BOTTOM-EDGE pixel";
  logTestCase(4, message);
  actual = initial[4].fromColorFilter(filters.sepia);
  checkPixel(new Pixel(142, 126, 98));

  // Test 5
  message = "Apply filter GRAYSCALE on LEFT-EDGE pixel";
  logTestCase(5, message);
  actual = initial[5].fromColorFilter(filters.grayscale);
  checkPixel(new Pixel(106, 106, 106));

  // Test 6
  message = "Apply filter SEPIA on TOP-LEFT-CORNER pixel";
  logTestCase(6, message);
  actual = initial[6].fromColorFilter(filters.sepia);
  checkPixel(new Pixel(155, 138, 108));

  // Test 7
  message = "Apply filter GRAYSCALE on TOP-RIGHT-CORNER pixel";
  logTestCase(7, message);
  actual = initial[7].fromColorFilter(filters.grayscale);
  checkPixel(new Pixel(116, 116, 116));

  // Test 8
  message = "Apply filter SEPIA on BOTTOM-RIGHT-CORNER pixel";
  logTestCase(8, message);
  actual = initial[8].fromColorFilter(filters.sepia);
  checkPixel(new Pixel(169, 150, 117));

  // Test 9
  message = "Apply filter GRAYSCALE on BOTTOM-LEFT-CORNER pixel";
  logTestCase(9, message);
  actual = initial[9].fromColorFilter(filters.grayscale);
  checkPixel(new Pixel(126, 126, 126));
}

function checkTestImages(imageName, imageExtension, filter) {
  let path = window.location.pathname;
  const originalImage = new Image(),
    expectedImage = new Image(),
    originalCanvas = document.createElement("canvas"),
    expectedCanvas = document.createElement("canvas");

  path = path.substring(0, path.lastIndexOf("/"));

  originalImage.onload = () => {
    expectedImage.onload = () => {
      originalCanvas.width = originalImage.naturalWidth;
      originalCanvas.height = originalImage.naturalHeight;
      expectedCanvas.width = expectedImage.naturalWidth;
      expectedCanvas.height = expectedImage.naturalHeight;

      originalCanvas
        .getContext("2d")
        .drawImage(
          originalImage,
          0,
          0,
          originalImage.naturalWidth,
          originalImage.naturalHeight
        );
      expectedCanvas
        .getContext("2d")
        .drawImage(
          expectedImage,
          0,
          0,
          expectedImage.naturalWidth,
          expectedImage.naturalHeight
        );

      const originalPixelData = PixelData.fromImageData(
        originalCanvas
          .getContext("2d")
          .getImageData(0, 0, originalImage.width, originalImage.height)
      );
      const actualPixelData = originalPixelData.applyFilter(filters[filter]);

      const expectedPixelData = PixelData.fromImageData(
        expectedCanvas
          .getContext("2d")
          .getImageData(0, 0, expectedImage.width, expectedImage.height)
      );

      assert(
        `Applying the ${filter.toUpperCase()} filter on image testImages/${imageName}.${imageExtension}`,
        expectedPixelData.equals(actualPixelData),
        `Processed version of image testImages/${imageName}.${imageExtension} does not match the image testImages/expected/${imageName}-${filter}.png`,
        true
      );
    };
    expectedImage.src = `${path}/testImages/expected/${imageName}-${filter}.png`;
  };
  originalImage.src = `${path}/testImages/${imageName}.${imageExtension}`;
}

function testGaussianBlur() {
  console.log(
    `
%c<---------------------->
 Running tests for Blur 
<---------------------->`,
    "background: black; color: white"
  );
  checkTestImages("wikipedia-test", "png", "gaussianBlur");
}

function testSharpen() {
  console.log(
    `
%c<------------------------->
 Running tests for Sharpen 
<------------------------->`,
    "background: black; color: white"
  );
  checkTestImages("city", "jpg", "sharpen");
}

function testEmboss() {
  console.log(
    `
%c<------------------------>
 Running tests for Emboss 
<------------------------>`,
    "background: black; color: white"
  );
  checkTestImages("forest_path", "jpg", "emboss");
}

function testEdge2() {
  console.log(
    `
%c<------------------------>
 Running tests for Edge2 
<------------------------>`,
    "background: black; color: white"
  );
  checkTestImages("Lenna", "png", "edge2");
}

function testBottomSobel() {
  console.log(
    `
%c<------------------------------>
 Running tests for Bottom Sobel 
<------------------------------>`,
    "background: black; color: white"
  );
  checkTestImages("shapes", "jpg", "bottomSobel");
}

function testGrayscale() {
  console.log(
    `
%c<--------------------------->
 Running tests for Grayscale 
<--------------------------->`,
    "background: black; color: white"
  );
  checkTestImages("dancer", "jpg", "grayscale");
}

function testSepia() {
  console.log(
    `
%c<----------------------->
 Running tests for Sepia 
<----------------------->`,
    "background: black; color: white"
  );
  checkTestImages("route_66", "jpg", "sepia");
}

function testAll() {
  testStep1();
  testStep2();
  testStep3();
  testGaussianBlur();
  testSharpen();
  testEmboss();
  testEdge2();
  testBottomSobel();
  testGrayscale();
  testSepia();
}

const tests = {
  step1: testStep1,
  step2: testStep2,
  step3: testStep3,
  blur: testGaussianBlur,
  sharpen: testSharpen,
  emboss: testEmboss,
  edge2: testEdge2,
  bottomSobel: testBottomSobel,
  grayscale: testGrayscale,
  sepia: testSepia,
  all: testAll,
};

function runTest(event) {
  event.preventDefault();

  const test = document.getElementById("testPicker").value;

  tests[test]();
}
