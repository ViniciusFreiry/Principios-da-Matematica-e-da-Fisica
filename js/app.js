const app = document.querySelector("#app");


/* ==============================
   ROUTING
============================== */

function navigate(route) {

    location.hash = route;
}


function getCurrentRoute() {

    return location.hash.slice(1) || "home";
}


/* ==============================
   ROUTER
============================== */

function render() {

    const route = getCurrentRoute();

    let content;


    if (route === "home") {

        content = renderHome();

    }

    else if (route.startsWith("subject-")) {

        const subjectId =
            route.replace("subject-", "");

        content =
            renderSubject(subjectId);

    }

    else if (route.startsWith("lesson-")) {

        const lessonId =
            Number(
                route.replace("lesson-", "")
            );

        content =
            renderLesson(lessonId);

    }

    else {

        navigate("home");

        return;
    }


    app.innerHTML = `
        ${createHeader()}

        <main class="main">
            ${content}
        </main>
    `;
}


/* ==============================
   LESSON ACTIONS
============================== */

function toggleLesson(lessonId) {

    toggleLessonCompleted(lessonId);

    render();
}


/* ==============================
   START APPLICATION
============================== */

window.addEventListener(
    "hashchange",
    render
);

render();