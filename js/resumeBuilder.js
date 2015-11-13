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
        $("#topContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
        $("#header").append(formattedBioPic, formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        $("#skills").append(formattedSkills);
    }
};


var education = {

    "schools": [
        {
            "schoolName": "Glasgow Caledonian University",
            "schoolLocation": "Glasgow, UK",
            "schoolDegree": "Audio Technology w/ Multimedia",
            "schoolMajor": "Audio Theory",
            "schoolDates": 2014,
            "schoolURL": "http://www.gcu.ac.uk/"
        },
        {
            "schoolName": "UMass Boston University",
            "schoolLocation": "Boston, USA",
            "schoolDegree": "International Student Exchange Programme",
            "schoolMajor": "Circuit Theory & Programming",
            "schoolDates": 2012,
            "schoolURL": "https://www.umb.edu/"
        }
    ],

    "onlineCourses": [
        {
            "onlineTitle": "Front-end Web Developer",
            "onlineSchool": "Udacity",
            "onlineDates": 2015,
            "onlineURL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],

    "display": function () {

        $("#education").append(HTMLschoolStart);

        // Schools
        for (school in education.schools) {

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].schoolName).replace("#", education.schools[school].schoolURL);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].schoolDegree);
            var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].schoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].schoolMajor);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].schoolDates);

            $(".education-entry:last").append(formattedSchoolNameDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        // Online Courses
        for (course in education.onlineCourses) {

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].onlineTitle).replace("#", education.onlineCourses[course].onlineURL);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].onlineSchool);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].onlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].onlineURL);

            $(".education-entry:last").append(formattedOnlineTitleSchool);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};


var work = {

    "jobs": [
        {
            "workEmployer": "Cohaesus",
            "workTitle": "Junior Developer",
            "workLocation": "London, UK",
            "workDates": "Feb 2015 - Present",
            "workDescription": "Cohaesus is the trusted technical partner to some of the world's leading advertising & communication agencies",
            "workURL": "http://www.cohaesus.co.uk"
        },
        {
            "workEmployer": "Rockstar North",
            "workTitle": "QA",
            "workLocation": "Edinburgh, UK",
            "workDates": "Apr 2014 - Feb 2015",
            "workDescription": "Worked on Grand Theft Auto V: Online.",
            "workURL": "http://www.rockstarnorth.com/"
        },
        {
            "workEmployer": "Freelance",
            "workTitle": "Sound Technician",
            "workLocation": "Glasgow, UK",
            "workDates": "Apr 2012 - Feb 2014",
            "workDescription": "Focused on location recording, game SFX, and post-production editing.",
            "workURL": "https://uk.linkedin.com/in/andrew-james-dick-a0511958"
        }
    ],

    "display": function () {

        $("#workExperience").append(HTMLworkStart);

        for (employer in work.jobs) {

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[employer].workEmployer).replace("#", work.jobs[employer].workURL);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[employer].workTitle);
            var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[employer].workLocation);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[employer].workDates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[employer].workDescription);

            $(".work-entry:last").append(formattedWorkEmployerTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};


var projects = {

    "project": [
        {
            "projectTitle": "Monday Night Gaming",
            "projectDates": "Aug 2015 - Present",
            "projectDescription": "A small team of friends that works with C# in Unity to design computer games.",
            "projectImages": ["images/project1a.jpg", "images/project1b.jpg"],
            "projectURL": "https://github.com/mondaynightgaming"
        }
    ],

    "display": function () {

        $("#projects").append(HTMLprojectStart);

        for (task in projects.project) {

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[task].projectTitle).replace("#", projects.project[task].projectURL);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[task].projectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[task].projectDescription);

            // Project Images
            var formattedProjectImages = function () {

                var imageArray = [];
                projects.project[task].projectImages.forEach(function (image) {
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

// google Map
$('#mapDiv').append(googleMap);

// Functions
bio.display();
education.display();
work.display();
projects.display();

