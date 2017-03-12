// Create a new SVG pattern with Trianglify.
var pattern = Trianglify({
  width: 300,
  height: 300,
  cell_size: 40,
  x_colors: 'YlOrRd',
  variance: 1,
  stroke_width: 2
}).svg(); // Render as SVG.

// Add pattern to DOM.
var container = document.querySelector('.trianglify');
container.insertBefore(pattern, container.firstChild);