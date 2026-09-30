/* ==============================
   HOME
============================== */

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
                Um lugar para organizar aulas,
                anotações e progresso.
                A estrutura já está preparada
                para crescer de Matemática para
                Física e outras áreas.
            </p>

        </section>


        <section class="grid">

            ${subjects
                .map(createSubjectCard)
                .join("")}

        </section>
    `;
}


/* ==============================
   SUBJECT CARD
============================== */

function createSubjectCard(subject) {

    const hasLessons =
        subject.lessons.length > 0;

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
                        hasLessons
                            ? `${subject.lessons.length} conteúdos · ${progress}% concluído`
                            : "Área preparada para adicionar novos conteúdos."
                    }
                </p>

            </div>

            ${
                hasLessons

                    ? `
                        <button
                            class="btn"
                            onclick="navigate('subject-${subject.id}')"
                        >
                            Abrir ${subject.name.toLowerCase()}
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


/* ==============================
   SUBJECT PAGE
============================== */

function renderSubject(subjectId) {

    const subject = getSubject(subjectId);

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
                    ${subject.lessons.length}
                    aulas organizadas para estudar
                    em sequência.
                </p>

            </div>

            ${createProgressBar(progress)}

        </section>


        <section class="lesson-list">

            ${
                subject.lessons.length > 0

                    ? subject.lessons
                        .map(createLessonCard)
                        .join("")

                    : `
                        <div class="empty">
                            Nenhum conteúdo disponível ainda.
                        </div>
                    `
            }

        </section>
    `;
}


/* ==============================
   LESSON CARD
============================== */

function createLessonCard(lesson) {

    const completed =
        isLessonCompleted(lesson.id);

    return `
        <article class="lesson">

            ${createLessonNumber(lesson.id)}


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
                        lesson.size
                            ? ` · ${lesson.size}`
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
                    onclick="navigate('lesson-${lesson.id}')"
                >
                    Estudar
                </button>

            </div>

        </article>
    `;
}


/* ==============================
   LESSON PAGE
============================== */

function renderLesson(lessonId) {

    const subject = subjects.find(
        subject =>
            subject.lessons.some(
                lesson =>
                    lesson.id === lessonId
            )
    );

    if (!subject) {
        return renderHome();
    }

    const lesson = subject.lessons.find(
        lesson =>
            lesson.id === lessonId
    );

    if (!lesson) {
        return renderSubject(subject.id);
    }

    const completed =
        isLessonCompleted(lesson.id);

    const previousLesson =
        subject.lessons.find(
            item =>
                item.id === lesson.id - 1
        );

    const nextLesson =
        subject.lessons.find(
            item =>
                item.id === lesson.id + 1
        );


    return `
        <div class="detail">

            <button
                class="back"
                onclick="navigate('subject-${subject.id}')"
            >
                ← ${subject.name}
            </button>


            <section class="detail-top">

                <div class="eyebrow">
                    Aula ${String(lesson.id).padStart(2, "0")}
                </div>

                <h1>
                    ${lesson.title}
                </h1>

                <p class="muted">
                    Use esta página para assistir à aula,
                    registrar suas anotações e acompanhar
                    a conclusão.
                </p>

            </section>


            <section class="section">

                <h2>
                    🎥 Aula
                </h2>

                <div class="video">

                    <div>

                        <div class="video-icon">
                            ▶
                        </div>

                        <div class="muted">
                            O conteúdo da aula
                            está hospedado externamente.
                        </div>

                        ${
                            lesson.url

                                ? `
                                    <a
                                        class="btn"
                                        href="${lesson.url}"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Abrir aula
                                    </a>
                                `

                                : `
                                    <div
                                        class="muted"
                                        style="margin-top: 14px"
                                    >
                                        Link da aula
                                        ainda não informado.
                                    </div>
                                `
                        }

                    </div>

                </div>

            </section>


            <section class="section">

                <h2>
                    📝 Minhas anotações
                </h2>

                <textarea
                    class="notes"
                    placeholder="Escreva aqui o que você aprendeu, dúvidas, fórmulas e exemplos..."
                    oninput="saveLessonNote(${lesson.id}, this.value)"
                >${escapeHtml(getLessonNote(lesson.id))}</textarea>

            </section>


            <div class="actions">

                <button
                    class="btn ${completed ? "secondary" : ""}"
                    onclick="toggleLesson(${lesson.id})"
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
                                    onclick="navigate('lesson-${previousLesson.id}')"
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
                                    onclick="navigate('lesson-${nextLesson.id}')"
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


/* ==============================
   DATA HELPERS
============================== */

function getSubject(subjectId) {

    return subjects.find(
        subject =>
            subject.id === subjectId
    );
}