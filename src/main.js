import { HungryBear } from './../src/bear-buffet';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#name-form').submit(function(event) {
  event.preventDefault();
  const name = $("#name").val();
  $("#name-form").hide();
  $(".game").show();

  let bear = new HungryBear(name);
  bear.setHunger();

  $("#bear-name").text(bear.name);
  bear.displayResults();
  bear.refreshPage();

  $("#feed-meal").click(function() {
    $("#food").text(bear.feed());
    bear.refreshPage();
   });

  $("#pause-game").click(function() {

  });

  $("#wake-bear").click(function() {
   });
 });
});
