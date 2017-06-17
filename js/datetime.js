window.onload = function () {
  var interval = setInterval(function () {
    var momentNow = moment();
    document.getElementById('date-part').innerHTML = momentNow.format('dddd').substring(0, 3).toLowerCase() + ' | ' + momentNow.format('DD MMM YYYY');
    // $('#date-part').html();
    document.getElementById('time-part').innerHTML = momentNow.format('HHmmss');
    // $('#time-part').html();
  }, 100);
}
