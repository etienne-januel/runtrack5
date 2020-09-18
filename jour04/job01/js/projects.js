/* Project Slider */
var projectArray = new Array;
var sliderIndex = 0;
var oldSliderIndex = 0;

if(projectArray.length == 0) {
    $('.project-item').each(function() {
        projectArray.push($(this));
        $(this).remove();
    });
    
    $('.project-container').append(projectArray[sliderIndex]);
    projectArray[sliderIndex].removeClass('slider-item-hidden');
}

$('.project-slider-arrow').click(function(a) {
    oldSliderIndex = sliderIndex;
    var thisHandler = $(this);
    a.preventDefault();
    switch ($(thisHandler).attr('id')) {
        case 'prev':
            projectArray[sliderIndex].addClass('slider-item-fadeout');//On déclenche l'anim du projet actuel
            if (sliderIndex == 0) {
                sliderIndex = projectArray.length - 1;
            } else {
                sliderIndex--;
            }
        break;
        case 'next':
            projectArray[sliderIndex].addClass('slider-item-fadeout');//On déclenche l'anim du projet actuel
            if (sliderIndex == (projectArray.length - 1)) {
                sliderIndex = 0;
            } else {
                sliderIndex++;
            }
        break;
    };

    setTimeout(
        function(){
            projectArray[oldSliderIndex].addClass('slider-item-hidden');
            projectArray[oldSliderIndex].remove();//Au bout d'1s on cut le projet actuel
            $('.project-container').append(projectArray[sliderIndex]);//Au bout d'1s on insere le nouveau projet
            projectArray[sliderIndex].addClass('slider-item-fadein');//on déclenche l'anim du nouveau projet
            setTimeout(
                function(){
                    projectArray[sliderIndex].removeClass('slider-item-hidden');
                    projectArray[oldSliderIndex].removeClass('slider-item-fadeout');
                    projectArray[sliderIndex].removeClass('slider-item-fadein');
                }, 300
            );
        }, 500
    );
});   