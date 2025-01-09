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

    function loadProjects(start, count){
        for (let i = start; i < start+count && i< projects.length; i++) {
            const project = projects[i];
            const projectHtml = `
            <div class="col-md-4 mb-4 animate-fadeInUp" style="animation-delay: ${(i - start) * 0.1}s">
                    <div class="card project-card h-100">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text flex-grow-1">${project.description}</p>
                            <div class="mt-auto">
                                <p class="card-text"><small ">Technologies: ${project.technologies.join(', ')}</small></p>
                                <a href="${project.link}" class="btn btn-primary mt-2" target="_blank">See Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            $('#projectsContainer').append(projectHtml);       
        }
    }
});