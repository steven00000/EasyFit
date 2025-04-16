let condition = "";
let muscleGroup = "";
let sessionType = "";

// Fonction pour définir l'état physique de l'utilisateur
function setCondition(state) {
    condition = state;
    document.querySelector('.question').style.display = 'none'; // Cacher la première question
    document.getElementById('muscle-question').style.display = 'block'; // Afficher la deuxième question
}

// Fonction pour définir le groupe musculaire choisi
function setMuscle(muscle) {
    muscleGroup = muscle;
    document.getElementById('muscle-question').style.display = 'none'; // Cacher les options de muscles
    document.getElementById('session-choice').style.display = 'block'; // Afficher la sélection de séance
}

// Fonction pour définir la séance choisie
function setSession(session) {
    sessionType = session;
    document.getElementById('session-choice').style.display = 'none'; // Cacher les options de séance
    redirectToPDF(); // Rediriger l'utilisateur vers le PDF
}

// Fonction pour rediriger l'utilisateur vers le bon PDF
function redirectToPDF() {
    let pdfLink = "";

    // Vérifier le type d'hypertrophie et le groupe musculaire
    if (condition === 'form') {
        // Hypertrophie myofibrillaire
        if (muscleGroup === 'dos-epaules') {
            if (sessionType === 'session-a') {
                pdfLink = "PDF/Dos-Epaules-Force.pdf";
            } else if (sessionType === 'session-b') {
                pdfLink = "path/to/hypertrophie_myofibrillaire_dos_epaules_session_b.pdf";
            } else {
                pdfLink = "path/to/hypertrophie_myofibrillaire_dos_epaules_session_c.pdf";
            }
        } else if (muscleGroup === 'biceps-avant-bras') {
            if (sessionType === 'session-a') {
                pdfLink = "path/to/hypertrophie_myofibrillaire_biceps_avant_brats_session_a.pdf";
            } else if (sessionType === 'session-b') {
                pdfLink = "path/to/hypertrophie_myofibrillaire_biceps_avant_brats_session_b.pdf";
            } else {
                pdfLink = "path/to/hypertrophie_myofibrillaire_biceps_avant_brats_session_c.pdf";
            }
        } else if (muscleGroup === 'pecs-triceps') {
            if (sessionType === 'session-a') {
                pdfLink = "path/to/hypertrophie_myofibrillaire_pecs_triceps_session_a.pdf";
            } else if (sessionType === 'session-b') {
                pdfLink = "path/to/hypertrophie_myofibrillaire_pecs_triceps_session_b.pdf";
            } else {
                pdfLink = "path/to/hypertrophie_myofibrillaire_pecs_triceps_session_c.pdf";
            }
        } else {
            pdfLink = "path/to/programmation_myofibrillaire_autre_session_a.pdf"; // Autre
        }
    } else {
        // Hypertrophie sarcoplasmique
        if (muscleGroup === 'dos-epaules') {
            if (sessionType === 'session-a') {
                pdfLink = "";
            } else if (sessionType === 'session-b') {
                pdfLink = "path/to/hypertrophie_sarcoplasme_dos_epaules_session_b.pdf";
            } else {
                pdfLink = "path/to/hypertrophie_sarcoplasme_dos_epaules_session_c.pdf";
            }
        } else if (muscleGroup === 'biceps-avant-bras') {
            if (sessionType === 'session-a') {
                pdfLink = "path/to/hypertrophie_sarcoplasme_biceps_avant_brats_session_a.pdf";
            } else if (sessionType === 'session-b') {
                pdfLink = "path/to/hypertrophie_sarcoplasme_biceps_avant_brats_session_b.pdf";
            } else {
                pdfLink = "path/to/hypertrophie_sarcoplasme_biceps_avant_brats_session_c.pdf";
            }
        } else if (muscleGroup === 'pecs-triceps') {
            if (sessionType === 'session-a') {
                pdfLink = "path/to/hypertrophie_sarcoplasme_pecs_triceps_session_a.pdf";
            } else if (sessionType === 'session-b') {
                pdfLink = "path/to/hypertrophie_sarcoplasme_pecs_triceps_session_b.pdf";
            } else {
                pdfLink = "path/to/hypertrophie_sarcoplasme_pecs_triceps_session_c.pdf";
            }
        } else {
            pdfLink = "path/to/programmation_sarcoplasme_autre_session_a.pdf"; // Autre
        }
    }

    // Rediriger vers le lien PDF
    window.location.href = pdfLink;
}
