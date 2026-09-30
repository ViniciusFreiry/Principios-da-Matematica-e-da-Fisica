function createHeader() {

    return `
        <header class="header">

            <div class="header-inner">

                <div class="brand">

                    <div class="brand-mark">
                        ∑
                    </div>

                    Estudos

                </div>

                <nav class="nav">

                    <button
                        onclick="navigate('home')"
                    >
                        Início
                    </button>

                    <button
                        onclick="navigate('subject-math')"
                    >
                        Matemática
                    </button>

                </nav>

            </div>

        </header>
    `;
}


function createProgressBar(progress) {

    return `
        <div class="progress-wrap">

            <div class="progress-label">

                <span>
                    Progresso
                </span>

                <strong>
                    ${progress}%
                </strong>

            </div>

            <div class="progress">

                <span
                    style="width: ${progress}%"
                ></span>

            </div>

        </div>
    `;
}


function createLessonNumber(number) {

    return `
        <div class="number">
            ${String(number).padStart(2, "0")}
        </div>
    `;
}


function escapeHtml(value) {

    return value.replace(
        /[&<>"']/g,

        character => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        })[character]
    );
}