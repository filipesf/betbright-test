<?php
function next_draw_date($other_day = null) {
  $draw_day;
  $next_draw;

  /* Set the draw day to the function's argument */
  $other_day
    ? $draw_day = strtotime($other_day)
    : $draw_day = strtotime("now");

  /* Check when is the next Wednesday and Sunday draws */
  $wed_draw = strtotime("next wednesday 20:00", $draw_day);
  $sun_draw = strtotime("next saturday 20:00", $draw_day);

  /* Check which draw is the closest */
  $draw_day === $wed_draw || $draw_day === $sun_draw
    ? $next_draw = strtotime("now")
    : $next_draw = min($sun_draw, $wed_draw);

  /* Returns the next draw date */
  return date("l, jS M Y, H:i", $next_draw);
}



echo "The next draw date will be " .next_draw_date(). "\n";
echo "The next draw date 2 days from today will be " .next_draw_date("+2 days"). "\n";
echo "The next draw date 3 weeks from today will be " .next_draw_date("+3 weeks"). "\n";
?>
