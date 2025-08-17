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
          <button class="project-source-btn" href='${this.source_link}'>
            Source Link
            
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tech_stack: [
      "./public/assets/javascript.svg",
      "./public/assets/tailwindcss.svg",
      "./public/assets/react.svg",
      "./public/assets/nodejs.svg",
      "./public/assets/mysql.svg",
    ],
    featured_image: "./public/assets/project/hc-churros.png",
    source_link: "https://github.com/yourproject",
  }),
    projects.addProject({
      title: "CMS Blog ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech_stack: [
        "./public/assets/react.svg",
        "./public/assets/tailwindcss.svg",
        "./public/assets/javascript.svg",
        "./public/assets/nodejs.svg",
        "./public/assets/mysql.svg",
      ],
      featured_image: "./public/assets/project/blog/blog3.png",
      source_link: "https://github.com/yourproject",
    }),
    projects.addProject({
      title: "Expense Tracker ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/expense-tracker.png",
      source_link: "https://github.com/yourproject",
    }),
    projects.addProject({
      title: "Quiz ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/quiz/quiz2.png",
      source_link: "https://github.com/yourproject",
    }),
    projects.addProject({
      title: "Color Palette ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/color-palette-generator.png",
      source_link: "https://github.com/yourproject",
    }),
    projects.addProject({
      title: "KanbanBoard Todo List ",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tech_stack: [
        "./public/assets/html.svg",
        "./public/assets/css.svg",
        "./public/assets/javascript.svg",
      ],
      featured_image: "./public/assets/project/kanbanBoard.png",
      source_link: "https://github.com/yourproject",
    });
      projects.renderProjects();
});
