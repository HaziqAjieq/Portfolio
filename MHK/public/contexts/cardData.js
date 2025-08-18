

// class for getting the card project
class CardProject {
  constructor({
    id,
    title,
    paragraph,
    tech_stack = [],
    featured_image = null,
    source_link = "#",
  }) {
    (this.id = id),
      (this.title = title),
      (this.paragraph = paragraph),
      (this.tech_stack = tech_stack),
      (this.featured_image = featured_image);
    this.source_link = source_link;
  }

  render(projectContainer) {
    const card = document.createElement("div");
    card.classList.add("projects-container");
    card.dataset.id = this.id;

    // handle image - placeholder if not provided
    const imageHTML = this.featured_image
      ? `<img src="${this.featured_image}" alt="${this.title}"class="project-img">`
      : '<div class="image-placeholder">No Image</div>';

    // generate teach stack list
    const techList = this.tech_stack
      .map((tech) => {
        const techName = tech.split("/").pop().split(".")[0];
        return `<li><img src="${tech}" alt=${techName} icon></li>`;
      })
      .join("");

    // create inner HTML with image and text on the right describe the project
    card.innerHTML = `
        <div class='image-project-container'>
          ${imageHTML}
        </div>
        <div class='text-project-container'>
          <h2>${this.title}</h2>
          <p>${this.paragraph}</p>
          <ul>
            ${techList}
          </ul id="itemList">
          <button class="project-source-btn" >
          <a href='${this.source_link}'>
            Source Link
            </a>
           </button>

        </div>

      `;
    if (projectContainer) {
      projectContainer.appendChild(card);
    } else {
      console.error("Error: projectContainer element not found.");
    }
  }
}

// this for create an array of card project
// adding see more btn functionality
class CardsProjects {
  constructor(containerId) {
    this.cards = [];
    this.container = document.getElementById(containerId);
    this.initialItemsShow = 4;
    this.isExpanded = false;
    this.seeMoreBtn = document.getElementById("seeMoreBtn");

    // event listener for see more btn
    if (this.seeMoreBtn) {
      this.seeMoreBtn.addEventListener("click", () => this.toggleView());
    }
  }

  addProject({ title, paragraph, tech_stack, featured_image, source_link }) {
    const id = `${this.cards.length + 1}`;
    const newCard = new CardProject({
      id,
      title,
      paragraph,
      tech_stack,
      featured_image,
      source_link,
    });
    this.cards.push(newCard);
    newCard.render(this.container);
  }

  renderProjects() {
    this.container.innerHTML = "";

    // get the first four projects
    const projectsToRender = this.isExpanded
      ? this.cards
      : this.cards.slice(0, this.initialItemsShow);

    // render each project
    projectsToRender.forEach((card) => {
      card.render(this.container);
    });

    // update button text
    this.updateButtonState();
  }

  toggleView() {
    this.isExpanded = !this.isExpanded;
    this.renderProjects();
  }

  updateButtonState() {
    if (!this.seeMoreBtn) return;
    if (this.cards.length <= this.initialItemsShow) {
      this.seeMoreBtn.style.display = "none";
    } else {
      this.seeMoreBtn.style.display = "flex";
      this.seeMoreBtn.innerHTML = this.isExpanded
        ? '<i class="fas fa-chevron-up"></i> See Less'
        : '<i class="fas fa-chevron-down"></i> See More';
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const projects = new CardsProjects("projects-container");

  projects.addProject({
    title: "HC-CHURROS",
    paragraph:
      "A full-stack website built for a small churros business, focusing on managing multiple store locations with ease. The platform includes simple user authentication for stall owners to create new outlets and add promotional content through a customizable slideshow. It’s designed to help the business grow while staying user-friendly.",
    tech_stack: [
      "./public/assets/javascript.svg",
      "./public/assets/tailwindcss.svg",
      "./public/assets/react.svg",
      "./public/assets/nodejs.svg",
      "./public/assets/mysql.svg",
    ],
    featured_image: "./public/assets/project/hc-churros.png",
    source_link: "https://github.com/HaziqAjieq/Hc-churros2025",
  }),
    projects.addProject({
      title: "CMS Blog (Work in Progress) ",
      paragraph:
        "A blogging platform tailored for the gaming industry, featuring role-based authentication with Admin and Editor accounts. Admins can create and manage new users, while Editors focus on publishing content. The goal is to build a custom CMS for managing posts, tags, and categories — still in progress, but a step toward mastering real-world content systems.",
      tech_stack: [
        "./public/assets/react.svg",
        "./public/assets/tailwindcss.svg",
        "./public/assets/javascript.svg",
        "./public/assets/nodejs.svg",
        "./public/assets/mysql.svg",
      ],
      featured_image: "./public/assets/project/blog/blog3.png",
      source_link: "https://github.com/HaziqAjieq/blog-cms",
    }),
    projects.addProject({
      title: "Expense Tracker ",
      paragraph:
        "A simple yet practical JavaScript project to track daily expenses. Users can input their spending, categorize it, and see a clear overview of their financial habits. Built to sharpen my core JavaScript skills while solving a real everyday problem.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/expense-tracker.png",
      source_link: "https://codesandbox.io/p/sandbox/expense-tracker-jkjvxq?file=%2Fsrc%2Findex.html",
    }),
    projects.addProject({
      title: "Quiz ",
      paragraph:
       "A fun interactive quiz game where users answer multiple-choice questions and receive instant scores. This project was built to strengthen my understanding of JavaScript logic and DOM manipulation. The quizzes are locally stored, making it a lightweight and quick-to-play app.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/quiz/quiz2.png",
      source_link: "https://codesandbox.io/p/sandbox/quiz-rz465y",
    }),
    projects.addProject({
      title: "Color Palette ",
      paragraph:
        "A creative tool that generates unique color palettes at the click of a button. Users can explore and save color combinations locally for design inspiration. This project was a great way to practice JavaScript while mixing functionality with creativity.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/color-palette-generator.png",
      source_link: "https://codesandbox.io/p/sandbox/color-palette-generator-lfz5kh",
    }),
    projects.addProject({
      title: "KanbanBoard Todo List ",
      paragraph:
        "A task management tool inspired by the Kanban method, where users can create, organize, and move tasks across columns. It was a hands-on project to improve my JavaScript skills while building something practical for productivity.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/kanbanBoard.png",
      source_link: "https://codesandbox.io/p/sandbox/kanban-todo-app-wy48yj",
    });
      projects.renderProjects();
});
