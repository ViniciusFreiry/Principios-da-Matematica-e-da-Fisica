const STORAGE_KEYS = {
    progress: "study-progress-v1",
    notes: "study-notes-v1"
};


/* ==============================
   GENERIC STORAGE
============================== */

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


/* ==============================
   PROGRESS
============================== */

let studyProgress = loadStorage(
    STORAGE_KEYS.progress
);

function isLessonCompleted(lessonId) {
    return !!studyProgress[lessonId];
}

function toggleLessonCompleted(lessonId) {

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


/* ==============================
   NOTES
============================== */

let studyNotes = loadStorage(
    STORAGE_KEYS.notes
);

function getLessonNote(lessonId) {
    return studyNotes[lessonId] || "";
}

function saveLessonNote(lessonId, note) {

    studyNotes[lessonId] = note;

    saveStorage(
        STORAGE_KEYS.notes,
        studyNotes
    );
}


/* ==============================
   PROGRESS CALCULATION
============================== */

function getSubjectProgress(subject) {

    if (subject.lessons.length === 0) {
        return 0;
    }

    const completed = subject.lessons.filter(
        lesson => isLessonCompleted(lesson.id)
    ).length;

    return Math.round(
        completed / subject.lessons.length * 100
    );
}