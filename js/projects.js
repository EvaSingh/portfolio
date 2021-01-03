fetch("js/projects.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        displayProjects(json);
    });

function displayProjects(projects) {
    let newHTML = "";
    
    projects.forEach(function(project) {
        
        newHTML += `<div class="col col-xs-12 col-md-6 col-lg-4">
                        <div class="project">
                            <a class="project__link" href="${project.url}">
                                <img class="project__image" src="${project.image}" alt="project-image">
                                <div class="">
                                    <a href="${project.url} "class="project__description">${project.name}<a> 
                                </div>
                            </a>
                        </div>
                    </div>`;   
    });
       
    const projectContainer = document.querySelector('.projects');
    projectContainer.innerHTML = newHTML;
}