let responses = {};

function nextStep(answer, step) {
    responses[step] = answer;

    document.getElementById('step' + step).classList.add('hidden');

    let nextStep = step + 1;
    if (document.getElementById('step' + nextStep)) {
        document.getElementById('step' + nextStep).classList.remove('hidden');
    } else if (step === 3) {
        document.getElementById('summary').classList.remove('hidden');
        document.getElementById('summaryText').innerText = `Scelte:
            - Cibo: ${responses['food']}
            - Bevanda: ${responses['drink']}
            - Attività: ${responses['activity']}`;
    }
}

function submitForm() {
    let mailtoLink = `mailto:hakim@example.com?subject=San%20Valentino&body=Cibo:%20${responses['food']}%0A
        Bevanda:%20${responses['drink']}%0A
        Attività:%20${responses['activity']}`;
    window.location.href = mailtoLink;
}
