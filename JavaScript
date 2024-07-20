document.getElementById('createAdvertButton').addEventListener('click', function() {
    const companyName = document.getElementById('companyName').value;
    const companyWebsite = document.getElementById('companyWebsite').value;
    const emailAddress = document.getElementById('emailAddress').value;
    const jobSpecFile = document.getElementById('jobSpec').files[0];

    if (companyName && companyWebsite && emailAddress && jobSpecFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const jobSpecContent = event.target.result;
            const jobAdvert = generateJobAdvert(companyName, companyWebsite, emailAddress, jobSpecContent);
            document.getElementById('advertContent').value = jobAdvert;
            document.getElementById('jobAdvert').classList.remove('hidden');
        };
        reader.readAsText(jobSpecFile);
    } else {
        alert('Please fill all fields and upload a job specification.');
    }
});

function generateJobAdvert(companyName, companyWebsite, emailAddress, jobSpecContent) {
    return `
    Join our team at ${companyName}!
    
    We are looking for passionate individuals to join us. Below are the job details:
    
    ${jobSpecContent}
    
    Visit us at ${companyWebsite}
    For inquiries, contact us at ${emailAddress}
    
    We look forward to your application!
    `;
}
