STARS = 5
TA_CRITERIA = 15
OVERALL_CRITERIA = 9
course = {
  lecture:{
    criteria_num: TA_CRITERIA,
    stars_id: "ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_${criteria}_Star_${star}",
    hidden_id: "ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_RatingExtender_ClientState_${criteria}",
  },
  lab:{
    instructors: parseInt(document.getElementById("ContentPlaceHolder1_UcCourseEval1_DataListLapEval").rows.length),
    criteria_num: TA_CRITERIA,
    stars_id: "ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_${criteria}_Star_${star}",
    hidden_id: "ContentPlaceHolder1_UcCourseEval1_DataListLapEval_GrdViewlabEval_${instructor}_Rating1_RatingExtender_ClientState_${criteria}",
  },
  overall:{
    criteria_num: OVERALL_CRITERIA,
    stars_id: "ContentPlaceHolder1_UcCourseEval1_GrdViewcourseEval_Rating1_${criteria}_Star_${star}",
    hidden_id: "ContentPlaceHolder1_UcCourseEval1_GrdViewcourseEval_Rating1_RatingExtender_ClientState_${criteria}"
  }
}


function instructor_rating(lecture, value, overallStars=5){
    for(let criteria = 0; criteria< TA_CRITERIA; criteria++){
      let id = lecture.hidden_id.replace("${criteria}", criteria)
      document.getElementById(id).setAttribute("value", value);
    }
}

function lab_rating(lab, value, overallStars=5){
  for(let instructor = 0; instructor<lab.instructors; instructor++){
    for(let criteria = 0; criteria< TA_CRITERIA; criteria++){
      let id = lab.hidden_id.replace("${instructor}", instructor)
      id = id.replace("${criteria}", criteria)
      document.getElementById(id).setAttribute("value", value);
    }
  }
}

function overall_rating(overall, value, overallStars=5){
  for(let criteria = 0; criteria< TA_CRITERIA; criteria++){
    let id = overall.hidden_id.replace("${criteria}", criteria)
    document.getElementById(id).setAttribute("value", value);
  }
}


// Structure
// =========
// Lecturer
"ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_RatingExtender_ClientState_0"
"ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_RatingExtender_ClientState_${criteria}"

// Lab Instructors Eval
// Instructor 3
  "ContentPlaceHolder1_UcCourseEval1_DataListLapEval_GrdViewlabEval_${instructor}_Rating1_RatingExtender_ClientState_{criteria}"
  "ContentPlaceHolder1_UcCourseEval1_DataListLapEval_GrdViewlabEval_3_Rating1_RatingExtender_ClientState_1"
// Instructor 4
  "ContentPlaceHolder1_UcCourseEval1_DataListLapEval_GrdViewlabEval_4_Rating1_RatingExtender_ClientState_0"
  "ContentPlaceHolder1_UcCourseEval1_DataListLapEval_GrdViewlabEval_4_Rating1_RatingExtender_ClientState_1"

// Course Eval
"ContentPlaceHolder1_UcCourseEval1_GrdViewcourseEval_Rating1_RatingExtender_ClientState_0"
"ContentPlaceHolder1_UcCourseEval1_GrdViewcourseEval_Rating1_RatingExtender_ClientState_1"


