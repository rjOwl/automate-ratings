var event = new MouseEvent('mouseover', {
  'view': window,
  'bubbles': true,
  'cancelable': true
});



for(let i = 0; i<7; i++){
  for(let j = 0; j < 15;j++){
        for(let star = 1; star<4; star++){
document.getElementById(`ContentPlaceHolder1_UcCourseEval1_DataListLapEval_GrdViewlabEval_${i}_Rating1_${j}_Star_${star}`).dispatchEvent(event);
}
}
}
for(let j = 0; j < 15;j++){
        for(let star = 1; star<4; star++){
document.getElementById(`ContentPlaceHolder1_UcCourseEval1_GrdViewcourseEval_Rating1_${j}_Star_${star}`).dispatchEvent(event);
}
}

$('#target').on('click mouseover', function () {
    // Do something for both
});