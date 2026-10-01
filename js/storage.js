const STORAGE_KEYS = {
    progress: "study-progress-v1",
    notes: "study-notes-v1"
};


function loadStorage(key) {
    return JSON.parse(
        localStorage.getItem(key) || "{}"
    );
}


function saveStorage(key, data) {
    localStorage.setItem(
        key,
        JSON.stringify(data)
    );
}


/*
 * Lesson progress
 */

let studyProgress =
    loadStorage(
        STORAGE_KEYS.progress
    );


function isLessonCompleted(
    lessonId
) {
    return !!studyProgress[lessonId];
}


function toggleLessonCompleted(
    lessonId
) {
    if (studyProgress[lessonId]) {

        delete studyProgress[lessonId];

    } else {

        studyProgress[lessonId] = true;

    }

    saveStorage(
        STORAGE_KEYS.progress,
        studyProgress
    );
}


/*
 * Personal notes
 */

let studyNotes =
    loadStorage(
        STORAGE_KEYS.notes
    );


function getLessonNote(
    lessonId
) {
    return studyNotes[lessonId] || "";
}


function saveLessonNote(
    lessonId,
    note
) {
    studyNotes[lessonId] = note;

    saveStorage(
        STORAGE_KEYS.notes,
        studyNotes
    );
}


/*
 * Subject progress
 */

function getSubjectProgress(
    subject
) {
    const lessons =
        subject.modules.flatMap(
            module => module.lessons
        );

    if (lessons.length === 0) {
        return 0;
    }

    const completed =
        lessons.filter(
            lesson =>
                isLessonCompleted(
                    `${subject.id}:${lesson.id}`
                )
        ).length;

    return Math.round(
        completed /
        lessons.length *
        100
    );
}

/*
 * Module progress
 */

function getModuleProgress(
    subjectId,
    module
) {
    if (module.lessons.length === 0) {
        return 0;
    }

    const completed =
        module.lessons.filter(
            lesson =>
                isLessonCompleted(
                    `${subjectId}:${lesson.id}`
                )
        ).length;

    return Math.round(
        completed /
        module.lessons.length *
        100
    );
}