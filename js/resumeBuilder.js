var bio = {

    "name": "Andrew James Dick",
    "role": "Junior Developer",
    "welcomeMsg": "Welcome to my online resume.",
    "skills": ["HTML", "CSS", "Javascript", "QA", "Sound Design", "Location Recording"],
    "bioPic": "images/Andrew.gif",
    "contacts": {
        "mobile": "+44 (0) 7480 468 006",
        "email": "andrew.dick@cohaesus.co.uk",
        "twitter": "@funk_renegade_",
        "github": "AndrewJDick",
        "location": "London, UK"
    },

    "display": function () {

        // Basic Information
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

        // Top Contacts
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        // Skills
        var formattedSkills = function () {
            var skillArray = [];
            bio.skills.forEach(function (skill) {
                skillArray.push(HTMLskills.replace('%data%', skill));
            });
            return skillArray;
        };

        $("#header").prepend(formattedName, formattedRole);
        $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
        $("#header").append(formattedBioPic, formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        $("#skills").append(formattedSkills);
    }
};


var education = {

    "schools": [
        {
            "name": "Glasgow Caledonian University",
            "location": "Glasgow, UK",
            "degree": "Audio Technology w/ Multimedia",
            "majors": "Audio Theory",
            "dates": 2014,
            "url": "http://www.gcu.ac.uk/"
        },
        {
            "name": "UMass Boston University",
            "location": "Boston, USA",
            "degree": "International Student Exchange Programme",
            "majors": "Circuit Theory & Programming",
            "dates": 2012,
            "url": "https://www.umb.edu/"
        }
    ],

    "onlineCourses": [
        {
            "title": "Front-end Web Developer",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],

    "display": function () {

        $("#education").append(HTMLschoolStart);

        // Schools
        for (school in education.schools) {

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

            $(".education-entry:last").append(formattedSchoolNameDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        // Online Courses
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        for (course in education.onlineCourses) {

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);

            $(".education-entry:last").append(formattedOnlineTitleSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};


var work = {

    "jobs": [
        {
            "employer": "Cohaesus",
            "title": "Junior Developer",
            "location": "London, UK",
            "dates": "Feb 2015 - Present",
            "description": "Cohaesus is the trusted technical partner to some of the world's leading advertising & communication agencies",
            "url": "http://www.cohaesus.co.uk"
        },
        {
            "employer": "Rockstar North",
            "title": "QA",
            "location": "Edinburgh, UK",
            "dates": "Apr 2014 - Feb 2015",
            "description": "Worked on the QA team for Grand Theft Auto V: Online.",
            "url": "http://www.rockstarnorth.com/"
        },
        {
            "employer": "Freelance",
            "title": "Sound Technician",
            "location": "Glasgow, UK",
            "dates": "Apr 2012 - Feb 2014",
            "description": "Focused on location recording, game SFX, and post-production editing.",
            "url": "https://uk.linkedin.com/in/andrew-james-dick-a0511958"
        }
    ],

    "display": function () {

        $("#workExperience").append(HTMLworkStart);

        for (employer in work.jobs) {

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[employer].employer).replace("#", work.jobs[employer].url);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[employer].title);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[employer].location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[employer].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[employer].description);

            $(".work-entry:last").append(formattedWorkEmployerTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};


var projects = {

    "projects": [
        {
            "title": "Monday Night Gaming",
            "dates": "Aug 2015 - Present",
            "description": "A small team of friends that works with C# in Unity to design computer games.",
            "images": ["images/project1a.jpg", "images/project1b.jpg"],
            "url": "https://github.com/mondaynightgaming"
        }
    ],

    "display": function () {

        $("#projects").append(HTMLprojectStart);

        for (task in projects.projects) {

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[task].title).replace("#", projects.projects[task].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[task].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[task].description);

            // Project Images
            var formattedProjectImages = function () {

                var imageArray = [];
                projects.projects[task].images.forEach(function (image) {
                    imageArray.push(HTMLprojectImage.replace('%data%', image));
                });
                return imageArray;
            };

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImages);
        }
    }
};


// Google Map
$('#mapDiv').append(googleMap);


// Functions
bio.display();
education.display();
work.display();
projects.display();

