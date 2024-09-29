// Function to filter products based on category
function filterProducts(category) {
    var products = document.querySelectorAll('.product-card');
    for (var i = 0; i < products.length; i++) {
        var productCategory = products[i].getAttribute('data-category');
        products[i].style.display = (category === 'all' || productCategory === category) ? 'block' : 'none';
    }
}

// Function to handle Learn More button click
function handleLearnMoreClick() {
    var name = prompt("What's your name?");
    if (name) {
        var skinType = prompt("What's your skin type? (e.g., sensitive, dry, oily, aging)");
        if (skinType) {
            var recommendations = getRecommendations(skinType.trim().toLowerCase());
            showRecommendations(name, recommendations);
        }
    }
}

// Function to get skincare recommendations based on skin type
function getRecommendations(skinType) {
    switch (skinType) {
        case 'sensitive': return [
            { name: "Calming Moisturizer", image: "product1js.jpg", description: "Perfect for sensitive skin." },
            { name: "Gentle Cleanser", image: "product2js.jpg", description: "A mild cleanser for sensitive skin." }
        ];
        case 'dry': return [
            { name: "Hydrating Serum", image: "product3js.webp", description: "Deep hydration for dry skin." },
            { name: "Moisturizing Cream", image: "product4js.webp", description: "Rich cream for moisture." }
        ];
        case 'oily': return [
            { name: "Oil-Free Cleanser", image: "product5js.jpg", description: "For oily and acne-prone skin." },
            { name: "Mattifying Gel", image: "product6js.avif", description: "Reduces excess oil." }
        ];
        case 'aging': return [
            { name: "Anti-Aging Cream", image: "product7js.webp", description: "Reduces fine lines and wrinkles." },
            { name: "Retinol Serum", image: "product8js.jpg", description: "Promotes skin renewal." }
        ];
        default: return [];
    }
}

// Function to show recommendations in a modal
function showRecommendations(name, recommendations) {
    var modal = document.getElementById('recommendation-modal');
    var list = document.getElementById('recommendation-list');
    list.innerHTML = '<h3>Hello, ' + name + '!</h3>' + (recommendations.length ? 
        recommendations.map(p => 
            '<div class="recommendation-item">' +
                '<img src="' + p.image + '" alt="' + p.name + '">' +
                '<div><h4>' + p.name + '</h4><p>' + p.description + '</p></div>' +
            '</div>'
        ).join('') : '<p>No recommendations available.</p>');
    modal.style.display = 'flex';
}

// Event listeners
document.getElementById('learn-more-btn').addEventListener('click', handleLearnMoreClick);
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('recommendation-modal').style.display = 'none';
});
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('recommendation-modal')) {
        document.getElementById('recommendation-modal').style.display = 'none';
    }
});

// Function to filter products based on category
function filterProducts(category) {
    var products = document.querySelectorAll('.product-card');
    
    for (var i = 0; i < products.length; i++) {
        var productCategory = products[i].getAttribute('data-category');
        if (category === 'all' || productCategory === category) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}

// Function to handle filter button clicks
function handleFilterClick(event) {
    var category = event.target.getAttribute('data-category');
    filterProducts(category);
}

// Attach event listeners to filter buttons
var filterButtons = document.querySelectorAll('.filter-btn');
for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', handleFilterClick);
}

var boxes = document.querySelectorAll('.box');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function() {
        this.style.backgroundColor = '#e9f5f5'; // Change background color on click
    });
}

var showMembers = document.getElementById('show-members');
var membersList = document.getElementById('members-list');

showMembers.onclick = function (event) {
    event.preventDefault();
    if (membersList.classList.contains('hidden')) {
        membersList.classList.remove('hidden');
    } else {
        membersList.classList.add('hidden');
    }
};

