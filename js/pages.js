function getSubject(subjectId) {
    return subjects.find(
        subject => subject.id === subjectId
    );
}

function getAllLessons(subject) {
    return subject.modules.flatMap(
        module => module.lessons
    );
}

function lessonKey(subjectId, lessonId) {
    return `${subjectId}:${lessonId}`;
}


function renderHome() {
    return `
        <section class="hero">

            <div class="eyebrow">
                Meu espaço de estudos
            </div>

            <h1>
                Aprenda no seu ritmo.
            </h1>

            <p>
                Um lugar para organizar matérias,
                módulos, aulas, exercícios e anotações.
            </p>

        </section>

        <section class="grid">

            ${subjects.map(subject =>
                createSubjectCard(subject)
            ).join("")}

        </section>
    `;
}


function createSubjectCard(subject) {

    const hasModules =
        subject.modules.length > 0;

    const progress =
        getSubjectProgress(subject);

    return `
        <article class="card subject-card">

            <div>

                <div class="icon">
                    ${subject.icon}
                </div>

                <h2>
                    ${subject.name}
                </h2>

                <p class="muted">

                    ${
                        hasModules

                            ? `${subject.modules.length}
                               módulos ·
                               ${progress}%
                               concluído`

                            : subject.description
                    }

                </p>

            </div>

            ${
                hasModules

                    ? `
                        <button
                            class="btn"
                            onclick="navigate(
                                'subject-${subject.id}'
                            )"
                        >
                            Abrir
                            ${subject.name.toLowerCase()}
                        </button>
                    `

                    : `
                        <button
                            class="btn secondary"
                            disabled
                        >
                            Em breve
                        </button>
                    `
            }

        </article>
    `;
}


function renderSubject(subjectId) {

    const subject =
        getSubject(subjectId);

    if (!subject) {
        return renderHome();
    }

    const progress =
        getSubjectProgress(subject);

    return `
        <button
            class="back"
            onclick="navigate('home')"
        >
            ← Início
        </button>

        <section class="page-head">

            <div>

                <h1>
                    ${subject.name}
                </h1>

                <p>
                    ${subject.modules.length}
                    módulos organizados para seus estudos.
                </p>

            </div>

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

        </section>

        <section class="module-list">

            ${
                subject.modules.length > 0

                    ? subject.modules
                        .map(
                            (module, index) =>
                                createModuleCard(
                                    subject,
                                    module,
                                    index
                                )
                        )
                        .join("")

                    : `
                        <div class="empty">
                            Nenhum módulo disponível ainda.
                        </div>
                    `
            }

        </section>
    `;
}


function createModuleCard(
    subject,
    module,
    moduleIndex
) {

    const progress =
        getModuleProgress(
            subject.id,
            module
        );

    return `
        <article class="module">

            <div class="module-head">

                <div class="module-title">

                    <div class="module-number">
                        ${String(
                            moduleIndex + 1
                        ).padStart(2, "0")}
                    </div>

                    <div>

                        <h2>
                            ${module.title}
                        </h2>

                        <p>
                            ${module.description}
                        </p>

                    </div>

                </div>

                <div class="module-progress">

                    ${
                        module.lessons.length > 0
                            ? `${progress}%`
                            : "Sem aulas"
                    }

                </div>

            </div>

            <section class="lesson-list">

                ${
                    module.lessons.length > 0

                        ? module.lessons
                            .map(
                                (lesson, index) =>
                                    createLessonCard(
                                        subject,
                                        lesson,
                                        index
                                    )
                            )
                            .join("")

                        : `
                            <div class="empty">
                                Nenhuma aula adicionada ainda.
                            </div>
                        `
                }

            </section>

        </article>
    `;
}


function createLessonCard(
    subject,
    lesson,
    lessonIndex
) {

    const keyId =
        lessonKey(
            subject.id,
            lesson.id
        );

    const completed =
        isLessonCompleted(keyId);

    const exerciseCount =
        lesson.exercises
            ? lesson.exercises.length
            : 0;

    return `
        <article class="lesson">

            <div class="number">
                ${String(
                    lessonIndex + 1
                ).padStart(2, "0")}
            </div>

            <div>

                <h3>
                    ${lesson.title}
                </h3>

                <div class="meta">

                    ${
                        completed
                            ? "Concluída"
                            : "Ainda não concluída"
                    }

                    ${
                        exerciseCount > 0
                            ? ` · ${exerciseCount}
                               exercício(s)`
                            : ""
                    }

                </div>

            </div>

            <div>

                ${
                    completed
                        ? `
                            <span class="done">
                                ✓ Concluída
                            </span>
                        `
                        : ""
                }

                <button
                    class="btn secondary"
                    onclick="navigate(
                        'lesson-${subject.id}-${lesson.id}'
                    )"
                >
                    Estudar
                </button>

            </div>

        </article>
    `;
}


function renderLesson(
    subjectId,
    lessonId
) {

    const subject =
        getSubject(subjectId);

    const module =
        subject?.modules.find(
            module =>
                module.lessons.some(
                    lesson =>
                        lesson.id === lessonId
                )
        );

    const lesson =
        module?.lessons.find(
            lesson =>
                lesson.id === lessonId
        );

    if (!subject || !module || !lesson) {

        return subject
            ? renderSubject(subjectId)
            : renderHome();
    }

    const keyId =
        lessonKey(
            subjectId,
            lesson.id
        );

    const completed =
        isLessonCompleted(keyId);

    const allLessons =
        getAllLessons(subject);

    const currentIndex =
        allLessons.findIndex(
            item =>
                item.id === lesson.id
        );

    const previousLesson =
        allLessons[currentIndex - 1];

    const nextLesson =
        allLessons[currentIndex + 1];

    return `
        <div class="detail">

            <button
                class="back"
                onclick="navigate(
                    'subject-${subject.id}'
                )"
            >
                ← ${subject.name}
            </button>

            <section class="detail-top">

                <div class="eyebrow">
                    ${module.title}
                </div>

                <h1>
                    ${lesson.title}
                </h1>

                <p class="muted">
                    Estude o conteúdo desta aula
                    e registre suas anotações pessoais.
                </p>

            </section>

            <section class="section">

                <h2>
                    📚 Conteúdo da aula
                </h2>

                <div class="lesson-content">
                    ${lesson.content}
                </div>

            </section>

            ${
                lesson.exercises &&
                lesson.exercises.length > 0

                    ? `
                        <section class="section">

                            <h2>
                                🧠 Exercícios
                            </h2>

                            ${
                                lesson.exercises
                                    .map(
                                        (exercise, index) => `
                                            <div class="exercise">

                                                <strong>
                                                    Exercício
                                                    ${index + 1}
                                                </strong>

                                                <br>

                                                ${exercise}

                                            </div>
                                        `
                                    )
                                    .join("")
                            }

                        </section>
                    `

                    : ""
            }

            <section class="section">

                <h2>
                    📝 Minhas anotações
                </h2>

                <textarea
                    class="notes"
                    placeholder="Escreva suas dúvidas, observações, fórmulas e exemplos..."
                    oninput="saveLessonNote(
                        '${keyId}',
                        this.value
                    )"
                >${escapeHtml(
                    getLessonNote(keyId)
                )}</textarea>

            </section>

            <div class="actions">

                <button
                    class="btn ${
                        completed
                            ? "secondary"
                            : ""
                    }"
                    onclick="toggleLesson(
                        '${keyId}'
                    )"
                >
                    ${
                        completed
                            ? "✓ Aula concluída"
                            : "Marcar como concluída"
                    }
                </button>

                <div class="actions-right">

                    ${
                        previousLesson
                            ? `
                                <button
                                    class="btn secondary"
                                    onclick="navigate(
                                        'lesson-${subject.id}-${previousLesson.id}'
                                    )"
                                >
                                    ← Anterior
                                </button>
                            `
                            : ""
                    }

                    ${
                        nextLesson
                            ? `
                                <button
                                    class="btn"
                                    onclick="navigate(
                                        'lesson-${subject.id}-${nextLesson.id}'
                                    )"
                                >
                                    Próxima →
                                </button>
                            `
                            : ""
                    }

                </div>

            </div>

        </div>
    `;
}