// Array of available pets
const pets = [
    {
        name: 'Buddy',
        breed: 'Golden Retriever',
        age: '2 years old',
        image: 'images/pet1.jpg'
    },
    {
        name: 'Luna',
        breed: 'Tabby Cat',
        age: '3 years old',
        image: 'images/pet2.jpg'
    },
    {
        name: 'Max',
        breed: 'Bulldog',
        age: '4 years old',
        image: 'images/pet3.jpg'
    },
    // Add more pets as needed
];

// Function to display pets
function displayPets() {
    const petsList = document.getElementById('pets-list');
    petsList.innerHTML = ''; // Clear previous pets if any

    pets.forEach(pet => {
        // Create a div for each pet
        const petCard = document.createElement('div');
        petCard.classList.add('pet-card');

        // Add pet image
        const petImage = document.createElement('img');
        petImage.src = pet.image;
        petImage.alt = pet.name;

        // Add pet name
        const petName = document.createElement('h4');
        petName.innerText = pet.name;

        // Add pet breed
        const petBreed = document.createElement('p');
        petBreed.innerText = pet.breed;

        // Add pet age
        const petAge = document.createElement('p');
        petAge.innerText = pet.age;

        // Append image, name, breed, and age to pet card
        petCard.appendChild(petImage);
        petCard.appendChild(petName);
        petCard.appendChild(petBreed);
        petCard.appendChild(petAge);

        // Append the pet card to the pets-list container
        petsList.appendChild(petCard);
    });

}


// Function to scroll to the browse pets section
function browsePets() {
    // Display the pets
    displayPets();
    
    // Scroll to the browse pets section
    scrollToSection('browse-pets');
}

// Function to scroll to any section smoothly
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}






