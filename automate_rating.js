var event = new MouseEvent("mouseover", {
  view: window,
  bubbles: true,
  cancelable: true,
});

class Automate{
  constructor(){
    this.STARS = 5
    this.TA_CRITERIA = 15
    this.OVERALL_CRITERIA = 9
    this.course = {
      lecture:{
        criteria_num: this.TA_CRITERIA,
        stars_id: "ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_${criteria}_Star_${star}",
        hidden_id: "ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_RatingExtender_ClientState_${criteria}",
      },
      lab:{
        check_instructors: document.getElementById("ContentPlaceHolder1_UcCourseEval1_DataListLapEval") === null,
        instructors: 0,
        criteria_num: this.TA_CRITERIA,
        stars_id: "ContentPlaceHolder1_UcCourseEval1_DataListLectureEval_GrdViewinstEval_0_Rating1_${criteria}_Star_${star}",
        hidden_id: "ContentPlaceHolder1_UcCourseEval1_DataListLapEval_GrdViewlabEval_${instructor}_Rating1_RatingExtender_ClientState_${criteria}",
      },
      overall:{
        criteria_num: this.OVERALL_CRITERIA,
        stars_id: "ContentPlaceHolder1_UcCourseEval1_GrdViewcourseEval_Rating1_${criteria}_Star_${star}",
        hidden_id: "ContentPlaceHolder1_UcCourseEval1_GrdViewcourseEval_Rating1_RatingExtender_ClientState_${criteria}"
      }
    }
    if(!this.course.lab.check_instructors)
    this.course.lab = parseInt(document.getElementById("ContentPlaceHolder1_UcCourseEval1_DataListLapEval").rows.length)
  }
  instructor_rating(value, overallStars=5){
      let lecture = this.course.lecture
      for(let criteria = 0; criteria< lecture.criteria_num; criteria++){
        let hidden_id = lecture.hidden_id.replace("${criteria}", criteria)
        document.getElementById(hidden_id).setAttribute("value", value);
        let stars_id = lecture.stars_id.replace("${criteria}", criteria)
        stars_id = stars_id.replace("${star}", value)
        document.getElementById(stars_id).dispatchEvent(event);
      }
  }

  lab_rating(value, overallStars=5){
    let lab = this.course.lab
    for(let instructor = 0; instructor<lab.instructors; instructor++){
      for(let criteria = 0; criteria< lab.criteria_num; criteria++){
        let id = lab.hidden_id.replace("${instructor}", instructor)
        id = id.replace("${criteria}", criteria)
        document.getElementById(id).setAttribute("value", value);
        let stars_id = lecture.stars_id.replace("${criteria}", criteria)
        stars_id = stars_id.replace("${star}", value)
        document.getElementById(stars_id).dispatchEvent(event);
      }
    }
  }

  overall_rating(value, overallStars=5){
    let overall = this.course.overall
    for(let criteria = 0; criteria< overall.criteria_num; criteria++){
      let id = overall.hidden_id.replace("${criteria}", criteria)
      document.getElementById(id).setAttribute("value", value);
      let stars_id = overall.stars_id.replace("${criteria}", criteria)
      stars_id = stars_id.replace("${star}", value)
      document.getElementById(stars_id).dispatchEvent(event);
    }
  }
}


function main(rate){
  auto = new Automate()
  auto.instructor_rating(rate)
  auto.lab_rating(rate)
  auto.overall_rating(rate)
}
main(5)

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


