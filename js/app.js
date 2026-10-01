function navigate(route) {
    location.hash = route;
    render();
}


function toggleLesson(lessonId) {

    toggleLessonCompleted(
        lessonId
    );

    render();
}


function render() {

    const route =
        location.hash.slice(1) || "home";

    if (route === "home") {

        document.querySelector("#app").innerHTML =
            createHeader() +
            `<main class="main">${renderHome()}</main>`;

        return;
    }

    if (route.startsWith("subject-")) {

        const subjectId =
            route.replace(
                "subject-",
                ""
            );

        document.querySelector("#app").innerHTML =
            createHeader() +
            `<main class="main">
                ${renderSubject(subjectId)}
            </main>`;

        return;
    }

    if (route.startsWith("lesson-")) {

        const parts =
            route.split("-");

        const subjectId =
            parts[1];

        const lessonId =
            parts
                .slice(2)
                .join("-");

        document.querySelector("#app").innerHTML =
            createHeader() +
            `<main class="main">
                ${renderLesson(
                    subjectId,
                    lessonId
                )}
            </main>`;

        return;
    }

    navigate("home");
}


window.addEventListener(
    "hashchange",
    render
);

render();