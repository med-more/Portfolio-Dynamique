$(document).ready(function() {
    
    $('a.nav-link, a.btn').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70 //  fixed navbar
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Projects data
    const projects = [
        {
            title: "static blog", 
            description: "A static blog created with HTML and CSS, bootstrap and jquery, showcasing a clean design and an optimized user experience.", 
            image: "assets/img/blog.png", 
            link: "https://github.com/med-more/Blog-Statique",
            technologies: ["HTML", "CSS"]
        }, 
        { 
            title: "task-manager", 
            description: "a task management backend application in Node.js with Express.js and MongoDB.", 
            image: "assets/img/task.jpg", 
            link: "https://github.com/med-more/gestionnaire-des-taches",
            technologies: ["Node.js", "Express.js", "MongoDb"]
        },
        {
            title: "Inventory Manager for a Small Business", 
            description: "a Inventory Manager backend application in Node.js.", 
            image: "assets/img/Inventory.jpg", 
            link: "https://github.com/med-more/Gestionnaire-de-Stock-pour-une-Petite-Entreprise",
            technologies: ["Node.js"]
        }, 
    ];
    loadProjects(0, 3);

    //load more projects
    $('#loadMore').on('click', function() {
        loadProjects(3, 3);
        $(this).hide();
    });
});