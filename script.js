
        // const coursesfetch = async () => {
        //     const response = await fetch('./data.json');
        //     const json = await response.json();
        //     courses = json['courses'];
        //     return courses
        // };

        // let courses = coursesfetch();
        // courses.then((result) => {
        //     console.log(courses)
        //     const courseMarkup = courses.map(course => `
        // <div class="course-card">
        //         <img src="images/${course.image}">
        //         <div class="course-details">
        //             <div class="course-heading"><span class="course-name">Acceleration</span> 
        //                 <img class="active  ${course.favourite ? '' : `disabled`}" src="icons/favourite.svg"></div>
        //             <div class="course-subject"><span>Physics</span><span>&nbsp;|&nbsp</span> <span> Grade 7
        //                 </span><span>&nbsp;</span></span><span class="green"> +2 </span></div>
        //             <div class="course-content"><b>4&nbsp;</b>Units &nbsp;&nbsp; <b>18&nbsp;</b>lessons &nbsp;&nbsp;<b>
        //                     24&nbsp;</b>topics</div>
        //             <div class="course-teacher">Mr. Franks Class B <img src="icons/arrow-down.svg"></div>
        //             <div class="course-info">50 Students | 21-Jan-2020 - 21-Aug-2020</div>
        //         </div>
        //         <div class="course-actions">
        //             <img class="course-preview" src="icons/preview.svg">
        //             <img class="course-manage" src="icons/manage course.svg">
        //             <img class="couse-grade" src="icons/grade submissions.svg">
        //             <img class="course-report" src="icons/reports.svg">
        //         </div>
        //     </div>
        //     `).join('');

        //     document.getElementById("courses").innerHTML = courseMarkup;
        //     document.getElementById("list-detail").innerHTML = `Showing ${courses.length} of ${courses.length} courses`
        // })
        //     .catch((error) => {
        //         console.log(error);
        //     });


        // const alertsfetch = async () => {
        //     const response = await fetch('./data.json');
        //     const json = await response.json();
        //     alerts = json['alerts'];
        //     return alerts
        // };

        // let alerts = alertsfetch();
        // alerts.then((result) => {
        //     console.log(alerts)
        //     const alertMarkup = alerts.map(alert => `
        //     <div class="alert-preview ${alert.checked ? `alert-preview-selected` :'' }">
        //                     <div class="flex">
        //                         <div class="alert-preview-heading">${alert.message}</div>
        //                         <i class="zmdi ${alert.checked ? `zmdi-check-circle`:`zmdi-minus-circle-outline`}  green right announcement-preview-icon"></i>
        //                     </div>

        //                     ${alert.course !=undefined ?` <div class="flex alert-preview-course">
        //                         Course: ${alert.course}
        //                     </div>
        //                     `:'' }

        //                     <div class="flex alert-preview-info">
        //                         ${alert.attachments!=null?  `<span>
        //                             <i class="zmdi zmdi-attachment-alt"></i>
        //                             ${alert.attachments} files are attached
        //                         </span>`
        //                         :''}
        //                         <span class='alert-preview-date'>
        //                             ${alert.datetime}
        //                         </span>
        //                     </div>
        //                 </div>
        //     `).join('');
            
        //     document.getElementById("alert-preview-render").innerHTML = alertMarkup;

        // })
        //     .catch((error) => {
        //         console.log(error);
        //     });




        // var dropdown = document.getElementsByClassName("dropdown-btn");
        // var i;
        // for (i = 0; i < dropdown.length; i++) {
        //     dropdown[i].addEventListener("click", function () {
        //         this.classList.toggle("nav-dropdown-active");
        //         //    console.log(this.children[0].classList)
        //         this.children[0].classList.toggle('nav-dropdown-icon-expanded')
        //         var dropdownContent = this.nextElementSibling;
        //         if (dropdownContent.style.display === "flex") {
        //             dropdownContent.style.display = "none";
        //         } else {
        //             dropdownContent.style.display = "flex";
        //         }
        //     });
        // }
