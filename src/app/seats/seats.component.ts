import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let seatnametemp = "";
    $(".cinema-seats .seat").on("click", function () {
      seatnametemp = "";
      $(this).toggleClass("active");
      let active = $(".seat.active");
      active.each(function () {
        if (!$(this).closest(".cinema-seats").hasClass("right")) {
          let prevRows =
            $(this).parent(".cinema-row").prevAll(".cinema-row").length - 1;
          seatnametemp +=
            (prevRows + 1).toString() +
            ($(this).index() + 9).toString(36).toUpperCase() +
            " ";
        } else {
          let prevRows = $(this).parent(".cinema-row").prevAll(".cinema-row")
            .length;
          seatnametemp +=
            (prevRows + 8).toString() +
            ($(this).index() + 9).toString(36).toUpperCase() +
            " ";
        }
      });
    });
  } 
}
