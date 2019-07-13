# Movie-Time
### About
 A small movie app developed with Angular, The app displays an updated list of popular movies, and gives additional movies information when             a movie on the movie table is clicked.

## Installion
* Clone the rep with:
``` git clone https://github.com/Shadirayan/Movie-Time.git```

* If you don't have AngularCLI then install it globally with
```npm install -g @angular/cli ```

* Then enter the Project's directory using:
```cd Movie-Time ```

* Then you have to install npm(node package manager) with:
``` npm install ```

* Then you have to serve(run the application) with:
``` ng serve ```



## Tools & Technologies we used


* Github - For hosting the code.
* Jquery Datatable - for the Datatable.
* Bootstrap - design.
* Angular - front-end framework.
* Angular HttpClient - to make http requests to the Api.
* themoviedb - api provider for movie data.
* NgRx store - State managment for Angular.
* Jquery - to play around with the dom and to intitate the jquery Datatable.

## Api Data

![Data](https://i.imgur.com/Pwrd6lK.png)


## Tasks Provided

- [x] The main view holds a table of Movies with columns
- [x] The second view contains info about the project and   architecture.
- [x] Allow the user to search by values inside the table.
- [x]  Allow the user to sort table columns by a-z 0-1 when
              clicking the column title.
- [ ] The table should be updated with data every 5 min(Function is written, but working on integerating the data in the table)
- [x]  Don’t re-render the page.
- [x] When a user clicks on movie name inside the row it should expand.

- [x] App Supports RTL/LTR (Should work)

* Extra
- [x] The Table gets data from the NGRX store instead of directly from a fetch request, Used Actions/Reducers/Effects.

- [x] Routing works and the data doesn't get destroyed when routing to a different page so it's a working SPA(Single Page Application)

# Screenshots from the Project
![](https://i.imgur.com/a4zAOKz.png)
![](https://i.imgur.com/cSvj7WP.png)