$(document).ready(start);

function start() {
  grid().isotope({
  // options
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});
$('.button-wrapper button').click(filter);
}

function grid() {
  return $('.grid');
}

function filter() {
  var filter_key = $(this).attr('id');
  grid().isotope( { filter: '.' + filter_key})
}
