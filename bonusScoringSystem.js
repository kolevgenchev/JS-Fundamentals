function bonusScoringSystem(arr){
let numberOfStudents=Number(arr.shift())
let numberOfLecturesInTheCourse=Number(arr.shift())
let addedBonus=Number(arr.shift())
let maxBonus=0
let numberOfAttendancies=0
for(let i=0;i<numberOfStudents;i++){
    let currentStudentAttendances=Number(arr[i])
    let totalBonus=(currentStudentAttendances/numberOfLecturesInTheCourse)*(5+(addedBonus))
    if(totalBonus>maxBonus){
        maxBonus=totalBonus
        numberOfAttendancies=currentStudentAttendances
    }
}
console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`)
console.log(`The student has attended ${numberOfAttendancies} lectures.`)
}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])