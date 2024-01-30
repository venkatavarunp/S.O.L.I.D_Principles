# Single Responsibility Principle

Class should have single responsibility

```javascript
class Student {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  save() {
    // code to save srudent to db
  }

  email(subject, body) {
    // code to email student
  }

  enrollCourses(courses) {
    // code to enroll courses
  }
}
```

In the above example student class has multiple responsibilies to be handled inside it.

Instead we can split up the responsibilies into different services which can be reused later.

### Student Class

```javascript
class Student {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}
```

### Service to add student to db

```javascript
  save(){

    // code to save srudent to db

  }
```

### Service to email student

```javascript
  email(subject,body){

    // code to email student

  }
```

### Service to enroll student to courses

```javascript
  enrollCourses(courses){

    // code to enroll courses

  }

```

By this we can avoid addition of bugs to the code.

**Single responsibilt model doesn't mean the class should do a single job it means everything the class does should be closely related so that we don't end with bloated classes.**
