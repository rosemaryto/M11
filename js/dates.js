//STEP 1
// const daysInMonth = (year, month) => new Date(year, month, 0).getDate();
// console.log(daysInMonth(2023, 5))

//STEP 2
let dt = new Date(prompt('enter a date xx/xx/xxx'))
// dt = dt.getMonth()
// switch (dt) {
//     case 0:
//         console.log('January')
//         break;
//     case 1:
//         console.log('February')
//         break;
//     case 2:
//         console.log('March')
//         break;
//     case 3:
//         console.log('April')
//         break;
//     case 4:
//         console.log('May')
//         break;
//     case 5:
//         console.log('June')
//         break;
//     case 6:
//         console.log('July')
//         break;
//     case 7:
//         console.log('August')
//         break;
//     case 8:
//         console.log('September')
//         break;
//     case 9:
//         console.log('October')
//         break;
//     case 10:
//         console.log('November')
//         break;
//     case 11:
//         console.log('December')
//         break;
//     default:
//         break;
// }



//STEP 3
// dt = dt.getDay()
// if (dt === 6 || dt === 0) {
//     console.log('weekend')
// } else {
//     console.log('weekday')
// }

//STEP 4
/* 0-sun, 1-mon, 2-tue, 3-wed, 4-thu, 5-fri, 6-sat */
// dt = Math.abs(dt.getDay() - 1)
// switch (dt) {
//         case 0:
//             console.log('Sunday')
//             break;
//         case 1:
//             console.log('Monday')
//             break;
//         case 2:
//             console.log('Tuesday')
//             break;
//         case 3:
//             console.log('Wednesday')
//             break;
//         case 4:
//             console.log('Thursday')
//             break;
//         case 5:
//             console.log('Friday Saturday04')
//             break;
            
//         default:
//             console.log('Sunday')
//             break;
// }

//STEP 5
dt = Math.abs(dt.getDay())
switch (dt) {
        case 0:
            console.log('S')
            break;
        case 1:
            console.log('M')
            break;
        case 2:
            console.log('T')
            break;
        case 3:
            console.log('W')
            break;
        case 4:
            console.log('T')
            break;
        case 5:
            console.log('F')
            break;
        case 6: 
            console.log('S')
            break;
        default:
            break;
}

