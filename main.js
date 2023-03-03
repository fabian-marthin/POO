class Comment {
  constructor({
    userName,
    userRole = "Estudiante",
    comentario
  }) {
    this.userName = userName;
    this.userRole = userRole;
    this.comentario = comentario;
    this.likes = 0;
  }
  publicar (){
      console.log(this.userName + "(" + this.userRole + ")");
      console.log(this.comentario);
      console.log(this.likes + "likes");
  }
}

function videoPlay(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Se está reproduciendo desde la url " + urlSecreta);
  }
  function videoStop(id) {
    const urlSecreta = "https://platziultrasecretomasquelanasa.com/" + id;
    console.log("Pausamos la url " + urlSecreta);
  }
  
  class PlatziClass {
    constructor({
      name,
      videoID,
    }) {
      this.name = name;
      this.videoID = videoID;
    }
  
    reproducir() {
      videoPlay(this.videoID);
    }
    pausar() {
      videoStop(this.videoID);
    }
  }
  
  class Course {
    constructor({
      name,
      classes = [],
      isFree = false,
      lang = "spanish"
    }) {
      this._name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang = lang;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === "Curso Malito de Programación Básica") {
        console.error("Web... no");
      } else {
        this._name = nuevoNombrecito; 
      }
    }
  }
  
  const cursoProgBasica = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
  });
  
  const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
  });
  
  
  class LearningPath {
    constructor({
      name,
      courses = [],
    }) {
      this.name = name;
      this.courses = courses;
    }
  }
  
  const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses: [
      cursoProgBasica,
      cursoDefinitivoHTML,
      cursoPracticoHTML,
    ],
  });
  
  const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
      cursoProgBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });
  
  const escuelaVgs = new LearningPath({
    name: "Escuela de Vidweojuegos",
    courses: [
      cursoProgBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  })
  
  class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
    publicarComentario(nuevoComentario){
      const contenido = new Comment ({
        comentario: nuevoComentario,
        userName: this.name
      })
      contenido.publicar();
    }
  }

  class FreeStudent extends Student{
    constructor(probs){
      super(probs)
    }
    approveCourse(newCourse){
      console.log(newCourse);
      if(newCourse.isFree){
        this.approvedCourses.push(newCourse);
      } else{
        console.warn( "lo sentimos" + this.name + ", solo puedes acceder a cursos abiertos");
      }
    }
  }
  class BasicStudent extends Student{
constructor(probs){
    super(probs)
    }
    approveCourse(newCourse){
      console.log(newCourse);
      if(newCourse.lang !== "english"){
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("lo sentimos" + this.name + ", solo puedes acceder a cursos en español");
      }
    }
  }
  class ExpertStudent extends Student{
    constructor(probs){
      super(probs)
    }
    approveCourse(newCourse){
      this.approvedCourses.push(newCourse);
    }
  }
  class TeacherStudent extends Student{
    constructor(probs){
      super(probs)
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(nuevoComentario){
      const contenido = new Comment ({
        comentario: nuevoComentario,
        userName: this.name,
        userRole: "Teacher"
      })
      contenido.publicar();
    }
  }
  

  const juan = new BasicStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  const miguelito = new FreeStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });
  const carlos = new ExpertStudent({
    name: "Carlos",
    username: "Carlrojo",
    email: "carson@gmail.com",
    twitter: "ccarl",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  const Freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "Freddier",
    email: "freddyn@gmail.com",
    twitter: "FreddyVega",
    learningPaths: [
    ],
  });