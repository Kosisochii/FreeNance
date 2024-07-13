document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch and populate countries
    async function populateCountries() {
        try {
            console.log('Fetching countries...');
            const response = await fetch('https://api.first.org/data/v1/countries');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const countries = data.data;
            console.log('Countries fetched:', countries);

            const countrySelect = document.getElementById('country');
            Object.keys(countries).forEach(key => {
                const country = countries[key];
                const option = document.createElement('option');
                option.value = key; // ISO 3166-1 alpha-2 country code
                option.textContent = country.country; // Common name of the country
                countrySelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    }

    // Call the function to populate the dropdown
    populateCountries();
});