    var bio = {
        "name": "Eddie Naff",
        "role": "Web Developer",
        "contacts": {
            "mobile": "415-200-7004",
            "email": "eddienaff@gmail.com",
            "github": "theednaffattack",
            "twitter": "@theednaffattack",
            "location": "Richmond district, San Francisco, CA"
        },
        "bioPic": "public/img/me_again.jpg",
        "welcomeMessage": "<h2>I build websites and web apps that are <em>lean, functional,</em> and <em>stylish</em>.</h2>" +
        "<p class='welcome-message'>From single page web sites to large scale web apps and gaming applications, I enjoy designing and " +
        "developing the visible portion of the web.</p> <p class='welcome-message'>Feel free to poke around at some of my Github Repos and " +
        "Gists.</p>",
        "skills": [
            '<i class="icon-html5-alt skillBadge" style="font-size:4em"></i><br />HTML', 
            '<i class="icon-css3-alt skillBadge" style="font-size:4em"></i><br />CSS', 
            '<i class="icon-javascript-alt skillBadge" style="font-size:4em"></i><br />JavaScript', 
            '<i class="icon-reactjs skillBadge" style="font-size:4em"></i><br />ReactJS', 
            '<i class="icon-angular skillBadge" style="font-size:4em"></i><br />AngularJS', 
            '<i class="icon-nodejs skillBadge" style="font-size:4em"></i><br />Node', 
            '<i class="icon-git skillBadge" style="font-size:4em;"></i><br />Git'
            ]
    };

    var work = {
        "jobs": [{
            "employer": "ClearSlide",
            "title": "Marketing Development Representative",
            "location": "Downtown, San Francisco",
            "datesWorked": "November 2013 - April 2015",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing " +
            "elit. Morbi fringilla odio sed porta feugiat. Curabitur sed rutrum " +
            " massa. Ut in convallis diam, non pharetra velit. Curabitur sit amet " +
            "condimentum orci. Cras vitae venenatis eros. Proin posuere, tellus " +
            "vitae interdum mattis, ex justo malesuada velit, et ultrices ligula " +
            "velit tincidunt mauris. Vestibulum maximus felis vel felis volutpat " +
            "dictum velit. Donec id eleifend tortor, vitae malesuada leo."
        }, {
            "employer": "Administrative Office of the Courts",
            "title": "Mid-level Flunkie",
            "location": "Superior Court of California, San Francisco",
            "datesWorked": "July 2011 - June 2013",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing " +
            "elit. Morbi fringilla odio sed porta feugiat. Curabitur sed rutrum " +
            " massa. Ut in convallis diam, non pharetra velit. Curabitur sit amet " +
            "condimentum orci. Cras vitae venenatis eros. Proin posuere, tellus " +
            "vitae interdum mattis, ex justo malesuada velit, et ultrices ligula " +
            "velit tincidunt mauris. Vestibulum maximus felis vel felis volutpat " +
            "dictum velit. Donec id eleifend tortor, vitae malesuada leo."
        }]
    };

    var projects = {
        "projects": [{
            "title": "First",
            "datesWorked": "2015",
            "description": "No desc.",
            "images": [
                "https://placehold.it/250x250",
                "https://placehold.it/250x250"
            ]
        }, {
            "title": "Second",
            "datesWorked": "2015",
            "description": "No desc.",
            "images": [
                "https://placehold.it/250x250",
                "https://placehold.it/250x250"            ]
        }, {
            "title": "Third",
            "datesWorked": "2015",
            "description": "No desc.",
            "images": [
                "https://placehold.it/250x250",
                "https://placehold.it/250x250"
            ]
        }]
    };

    var education = {
        "schools": [{
            "name": "San Francisco State University",
            "location": "San Francisco",
            "degree": "BA",
            "majors": ["Cinema"],
            "datesAttended": "2001 - 2006",
            "uri": "#"
        }],
        "onlineCourses": [{
            "title": "Full Stack Web Development Certification",
            "school": "Free Code Camp",
            "location": "San Francisco",
            "datesAttended": "December 2016 - current",
            "url": "https://www.freecodecamp.com"
        }]
    };

    // function locationizer(work_obj) {
    //     var workLocations = [];
    //     for (var i in work_obj.jobs) {
    //         workLocations.push(work.jobs[i].location);
    //     }
    //     return workLocations;
    // }

    // $('#main').append(internationalizeButton);


    // function inName(name) {
    //     var namesArray = bio.name.split(' ');
    //     var newFirst = namesArray[0].slice(0, 1) + namesArray[0].slice(1);
    //     var newLast = namesArray[1].toUpperCase();
    //     var internationalizedName = newFirst + ' ' + newLast;

    //     return internationalizedName;
    // }

    bio.display = function () {

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

        //prepare to append my name in the nav
        var formattedNavBrand = formattedName + ' - ' + formattedRole;
        // var formattedNavName = formattedName.replace('<span class="myName">', '');
        // formattedNavName = formattedNavName.replace('</span>', '');
        // var formattedNavRole = formattedRole.replace('<span class="myRole">', '');
        // formattedNavRole = formattedNavRole.replace('</span>', '');
        // var formattedNavBrand = formattedNavName + ' - ' + formattedNavRole;

        var formattedContactMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedContactEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedContactTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        var formattedContactGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        var formattedContactLinkedin = HTMLlinkedin;
        var formattedContactFacebook = HTMLfacebook;
        var formattedContactGooglePlus = HTMLgooglePlus;

        var formattedContactBlog = HTMLblog.replace('%data%', bio.contacts.blog);
        var formattedContactLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        var formattedPicture = HTMLbioPic.replace('%data%', bio.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        $('#topContacts').append(formattedContactMobile);
        $('#topContacts').append(formattedContactTwitter);
        $('#topContacts').append(formattedContactGithub);
        $('#topContacts').append(formattedContactBlog);
        $('#topContacts').append(formattedContactLocation);
        $('#topContacts').append(formattedContactEmail);
        // $('#footerContacts').append(formattedContactMobile);
        $('#footerContacts').append(formattedContactTwitter);
        $('#footerContacts').append(formattedContactGithub);
        $('#footerContacts').append(formattedContactFacebook);
        $('#footerContacts').append(formattedContactGooglePlus);
        $('#footerContacts').append(formattedContactLinkedin);

        // $('#footerContacts').append(formattedContactBlog);
        // $('#footerContacts').append(formattedContactLocation);
        // $('#footerContacts').append(formattedContactEmail);
        $('#header').append(formattedWelcomeMsg);
        $('#about').append(formattedPicture);
        $('.roleTarget').prepend(formattedRole);
        $('.nameTarget').prepend(formattedName);
        $('.appendNavBrand').append(formattedNavBrand);

        if (bio.skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            var countSkills = bio.skills.length;

            for (i = 0; i < countSkills; i++) {
                $('#skills').append(HTMLskills.replace('%data%', bio.skills[i]));
            }
        }
    };

    work.display = function() {
        for (var job in work.jobs) {
            // create new div for work experience
            $('#work-experience').append(HTMLworkStart.replace('%data%', work.jobs[job].datesWorked));
            // concat employer and title
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);

            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].datesWorked);

            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            var formmattedDateLocation = formattedDates + ', ' + formattedLocation;

            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedDescription);
        }
    };

    projects.display = function() {
        var countProjects = projects.projects.length;
        for (var i = 0; i < countProjects; i++) {
            $('#projects').append(HTMLprojectStart);

            var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
            $('.project-entry:last').append(formattedProjTitle);

            var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
            $('.project-entry:last').append(formattedProjDescription);

            var formattedProjDatesWorked = HTMLprojectDates.replace('%data%', projects.projects[i].datesWorked);
            $('.project-entry:last').append(formattedProjDatesWorked);

            for (var image in projects.projects[i].images) {
                var formattedProjImages = HTMLprojectImage.replace('%data%', projects.projects[i].images[image]);
                $('.project-entry:last').append(formattedProjImages);
            }
        }
    };

    education.display = function() {
        var countEducation = education.schools.length;
        for (var i = 0; i < countEducation; i++) {
            $('#education').append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
            var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
            var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].datesAttended);

            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;

            $('.education-entry:last').append(formattedSchoolNameDegree);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedSchoolMajor);
            $('.education-entry:last').append(formattedSchoolLocation);
        }

        var countOnlineClasses = education.onlineCourses.length;
        // include a sub-headedr for online classes
        $('#education:last').append(HTMLonlineClasses);
        for (i=0; i < countOnlineClasses; i++) {
            // input a .education-entry div for each online class
            $('#education').append(HTMLschoolStart);

            var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
            var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].datesAttended);
            var formattedOnlineURL =  HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);

            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

            // append the online class info
            $('.education-entry:last').append(formattedOnlineTitleSchool);
            // $('.education-entry:last').append(formattedOnlineTitle);
            $('.education-entry:last').append(formattedOnlineDates);
            $('.education-entry:last').append(formattedOnlineURL);
        }
    };

    bio.display();
    work.display();
    // projects.display();
    education.display();

    $('#mapDiv').append(googleMap);
