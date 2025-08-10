// class for getting the card project
class CardProject {
  constructor({
    id,
    title,
    paragraph,
    tech_stack = null,
    featured_image = null,
    source_link = null
  }){
      this.id = id,
      this.title = title,
      this.paragraph = paragraph,
      this.tech_stack = tech_stack,
      this.featured_image = featured_image
      this.source_link = source_link
      // feature image can axcept other if image is null
    }

    render(projectContainer){
      const div = document.createElement('div');
      div.classList.add('project-container');

      // create inner HTML with image and text on the right describe the project
      div.innerHTML = `
        <div class='image-project-container'>
          ${this.featured_image}
        </div>
        <div class='text-project-container'>
          <h2>${this.title}</h2>
          <p>${this.paragraph}</p>
          <ul>
            <li><img src='${tech_stack}'></li>
          </ul>
          <button class="project-source-btn" href='${source_link}'>
            Source Link
            
           </button>

        </div>

      `;
      projectContainer.appendChild(div);

    }
}


// this for create an array of card project

export class CardsProjects {
  constructor(){
    this.cards = [];
    this.container = document.getElementById('projects')
  }

  addProject(title,paragraph,tech_stack,featured_image,source_link){
    const id = this.cards.length + 1 ;
    const newCard = new CardProject({
    id,
    title ,
    paragraph , 
    tech_stack,
    featured_image,
    source_link
   })
   this.cards.push(newCard);
   newCard.render(this.container)

  }

}