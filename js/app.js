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

        initializeParallelDemo();

        return;
    }

    navigate("home");
}


window.addEventListener(
    "hashchange",
    render
);

render();

function initializeParallelDemo() {
    document.querySelectorAll(".parallel-demo").forEach(demo => {
        if (demo.dataset.initialized) return;
        demo.dataset.initialized = "true";

        const svg = demo.querySelector("svg");

        const transversal = svg.querySelector(".transversal");
        const pointA = svg.querySelector("#point-a");
        const pointB = svg.querySelector("#point-b");

        const sectorA = svg.querySelector("#sector-a");
        const sectorB = svg.querySelector("#sector-b");

        const slider = demo.querySelector("#transversal-angle");

        const title = demo.querySelector("#parallel-demo-title");
        const description = demo.querySelector("#parallel-demo-description");
        const equation = demo.querySelector("#parallel-demo-equation");

        const buttons = demo.querySelectorAll("[data-mode]");

        const centerX = 350;
        const yA = 140;
        const yB = 340;
        const radius = 42;

        let mode = "alternate";

        function polarPoint(cx, cy, angle, distance) {
            const radians = angle * Math.PI / 180;

            return {
                x: cx + Math.cos(radians) * distance,
                y: cy + Math.sin(radians) * distance
            };
        }

        function createSector(cx, cy, start, end) {
            const first = polarPoint(cx, cy, start, radius);
            const last = polarPoint(cx, cy, end, radius);

            let difference = end - start;

            while (difference < 0) difference += 360;

            const largeArc = difference > 180 ? 1 : 0;

            return [
                `M ${cx} ${cy}`,
                `L ${first.x} ${first.y}`,
                `A ${radius} ${radius} 0 ${largeArc} 1 ${last.x} ${last.y}`,
                "Z"
            ].join(" ");
        }

        function positionNumber(id, cx, cy, angle) {
            const position = polarPoint(cx, cy, angle, 67);
            const element = svg.querySelector(`#number-${id}`);

            element.setAttribute("x", position.x);
            element.setAttribute("y", position.y);
        }

        function updateDiagram() {
            const slope = Number(slider.value);

            const xA = centerX;
            const xB = centerX + slope * (yB - yA);

            const angle = Math.atan(slope) * 180 / Math.PI;
            const downRight = 90 - angle;
            const upLeft = downRight + 180;

            // Transversal
            const xTop = xA + slope * (0 - yA);
            const xBottom = xA + slope * (480 - yA);

            transversal.setAttribute("x1", xTop);
            transversal.setAttribute("y1", 0);
            transversal.setAttribute("x2", xBottom);
            transversal.setAttribute("y2", 480);

            // Intersection points
            pointA.setAttribute("cx", xA);
            pointA.setAttribute("cy", yA);

            pointB.setAttribute("cx", xB);
            pointB.setAttribute("cy", yB);

            // Line label
            const label = svg.querySelector("#label-t");
            label.setAttribute("x", xBottom - 12);
            label.setAttribute("y", 465);

            // Angle numbers: upper-left, upper-right,
            // lower-right, lower-left at each intersection.
            positionNumber(1, xA, yA, (180 + upLeft) / 2);
            positionNumber(2, xA, yA, (upLeft + 360) / 2);
            positionNumber(3, xA, yA, downRight / 2);
            positionNumber(4, xA, yA, (downRight + 180) / 2);

            positionNumber(5, xB, yB, (180 + upLeft) / 2);
            positionNumber(6, xB, yB, (upLeft + 360) / 2);
            positionNumber(7, xB, yB, downRight / 2);
            positionNumber(8, xB, yB, (downRight + 180) / 2);

            if (mode === "alternate") {
                // Angle 3 and angle 5
                sectorA.setAttribute(
                    "d",
                    createSector(xA, yA, 0, downRight)
                );

                sectorB.setAttribute(
                    "d",
                    createSector(xB, yB, 180, upLeft)
                );

                title.textContent = "Ângulos alternos internos";

                description.textContent =
                    "Os ângulos 3 e 5 estão entre as retas paralelas " +
                    "e em lados opostos da transversal. " +
                    "Eles possuem a mesma medida.";

                equation.textContent = "∠3 = ∠5";

            } else {
                // Angle 1 and angle 5
                sectorA.setAttribute(
                    "d",
                    createSector(xA, yA, 180, upLeft)
                );

                sectorB.setAttribute(
                    "d",
                    createSector(xB, yB, 180, upLeft)
                );

                title.textContent = "Ângulos correspondentes";

                description.textContent =
                    "Os ângulos 1 e 5 ocupam a mesma posição " +
                    "relativa nas duas interseções. " +
                    "Eles possuem a mesma medida.";

                equation.textContent = "∠1 = ∠5";
            }
        }

        function selectMode(newMode) {
            mode = newMode;

            buttons.forEach(button => {
                button.classList.toggle(
                    "active",
                    button.dataset.mode === mode
                );
            });

            updateDiagram();
        }

        buttons.forEach(button => {
            button.addEventListener("click", () => {
                selectMode(button.dataset.mode);
            });
        });

        slider.addEventListener("input", updateDiagram);

        selectMode("alternate");
    });
}