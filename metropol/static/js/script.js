// Function to handle form submissions
function handleFormSubmit(event, formId, endpoint, resultId, additionalData = {}) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Get the form and result elements
    const form = document.getElementById(formId);
    const result = document.getElementById(resultId);
    const formData = new FormData(form);

    // Append additional data if provided
    for (const key in additionalData) {
        formData.append(key, additionalData[key]);
    }

    // Send AJAX request to the API endpoint
    fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value,
        },
    })
        .then(response => response.json())
        .then(data => {
            // Display the result in the UI
            result.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
            result.textContent = 'An error occurred. Please try again.';
        });
}

// Identity Verification
document.getElementById('identityForm').addEventListener('submit', (event) => {
    const idNumber = document.getElementById('identity_id').value;
    handleFormSubmit(event, 'identityForm', `/metropol/identity-verification/${idNumber}/`, 'identityResult');
});

// Delinquency Status
document.getElementById('delinquencyForm').addEventListener('submit', (event) => {
    const idNumber = document.getElementById('delinquency_id').value;
    const loanAmount = document.getElementById('loan_amount').value;
    handleFormSubmit(event, 'delinquencyForm', `/metropol/deliquency-status/${idNumber}/${loanAmount}/`, 'delinquencyResult');
});

// Credit Info
document.getElementById('creditForm').addEventListener('submit', (event) => {
    const idNumber = document.getElementById('credit_id').value;
    const loanAmount = document.getElementById('credit_loan_amount').value;
    handleFormSubmit(event, 'creditForm', `/metropol/credit-info/${idNumber}/${loanAmount}/`, 'creditResult');
});

// Consumer Score
document.getElementById('consumerForm').addEventListener('submit', (event) => {
    const idNumber = document.getElementById('consumer_id').value;
    handleFormSubmit(event, 'consumerForm', `/metropol/consumer-score/${idNumber}/`, 'consumerResult');
});