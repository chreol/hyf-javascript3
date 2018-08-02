let average;
class Movie {
    constructor(title, director) {
      this.title = title;
      this.director = director;
      this.star =[] ;
      this.writer = [];
      this.rating = [];
      this.average = average;
    }
  
    getTitle() {
      return this.title;
    }
  
    getDirector() {
      return this.director;
    }
  
    addStar(star) {
        this.star.push(star);
      
    }
  
    getStars() {
      return this.star;
    }
  
    addWriter(writer) {
        this.writer.push(writer);
    }
  
    getWriters() {
        return this.writer;
    }
  
    addRating(rating) {
      this.rating.push(rating);
    }
  
    getAverageRating() {
      let sum = 0;
      for (i = 0; i = rating.length; i++){
          sum += parseInt(rating[i], 10);
      }
      average = sum/rating.length;
      return this.average;
    }
        
  }

//====Print This =======
function PrintMyMovie() {
    let title = document.createElement('h3');
    document.body.appendChild(title);
    title.innerHTML = this.title;

    let director = document.createElement('h5');
    document.body.appendChild(director);
    director.innerHTML = `Director: ${this.getDirector()}`;

    let writers = document.createElement('h5');
    document.body.appendChild(writers);
    writers.innerHTML = `Writers: ${this.getWriters()}`;

    let stars = document.createElement('h4');
    document.body.appendChild(stars);
    stars.innerHTML = `${this.getStars().map(actor => actor.renderStuff())}`;
  }

//=======Staff Member======== 
  class StaffMember {
    constructor(name, role, dateOfBirth) {
        this.name = name;
        this.role = role;
        this.dateOfBirth = dateOfBirth;

    }
  
    addMovie(movie) {
        this.movie.push;
      
    }
  
    getName() {
        return this.name;
    }
  
    getRole() {
        return this.role;
    }
  
    getAge() {
        let years = 2018;
        return years - this.dateOfBirth;
    }
    

  }
  
  function SortOnScreen() {
    let staffName = document.createElement('h2');
    document.body.appendChild(staffName);
    staffName.innerHTML = `Actor: ${this.name}`;

    let staffRole = document.createElement('h3');
    document.body.appendChild(staffRole);
    staffRole.innerHTML = `Role: ${this.role}`;

    let staffAge = document.createElement('h4');
    document.body.appendChild(staffAge);
    staffAge.innerHTML = `${this.getAge()} years old`;
  }
  // Pick your favorite movie from http://www.imdb.com/
  // pick a movie, and create it using the constructor you wrote earlier

  const catchMeIfYouCan = new Movie("Catch me if you can", "Frank Abagnale Jr.", 2002);

  const ChristopherWalken = new StaffMember('Christopher Walken', 'Frank Abagnale', 1943);
  const MartinSheen = new StaffMember('Martin Sheen', 'Roger Strong', 1940);
  const NathalieBayes = new StaffMember('Nathalie Baye', 'Paula Abagnale', 1948);
  const AmyAdams = new StaffMember('Amy Adams', 'Brenda Strong', 1974);
  const EllenPompeo = new StaffMember('Ellen Pompeo', 'Marci', 1969);
  const NancyLenehan = new StaffMember('Nancy Lenehan', 'Carole Strong', 1953);

    catchMeIfYouCan.addWriter('Jeff Nathanson');
    catchMeIfYouCan.addWriter('Frank Abagnale Jr.');
    
    catchMeIfYouCan.addStar(AmyAdams);
    catchMeIfYouCan.addStar(EllenPompeo);
    catchMeIfYouCan.addStar(NancyLenehan);
    catchMeIfYouCan.addStar(NathalieBayes);
    catchMeIfYouCan.addStar(MartinSheen);
    catchMeIfYouCan.addStar(ChristopherWalken);

    // catchMeIfYouCan.printMyMovie();
    

  catchMeIfYouCan.director = ("Steven Spielberg",1946);
  const firstActor = new StaffMember("Leonardo DiCaprio", "Frank W. Abagnale Jr.", 1974);
  catchMeIfYouCan.addStar(firstActor);
  
  
  console.log(catchMeIfYouCan.getStars().map(actor => `${actor.getName()} ${actor.getAge()}`));
  const director = catchMeIfYouCan.getDirector();
  console.log(`Director: ${getDirector()}`);



  //===========================InnerAllContent=======
