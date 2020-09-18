var progressBarOptions = {
    thickness: "4",
    startAngle: -1.55,
    size: 120,
    value: 0,
    animation: { duration: 1600, easing: "circleProgressEasing" },
    fill: { color: "#0481ff" }
}

$('.skill-item').circleProgress(progressBarOptions).on('circle-animation-progress');
   
$('.skill-item').each(function() {
    let level = $(this).attr('level') / 100;
    setTimeout(() => $(this).circleProgress('value', level), 1000);
})


$(".skill-item").mouseover(function() {
    $(this).find('img').toggle();
    $(this).find('span').toggle();
}).mouseout(function() {
    $(this).find('img').toggle();
    $(this).find('span').toggle();
});