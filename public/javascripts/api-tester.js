// Global variables
let token = localStorage.getItem('token');
let currentUser = null;

// DOM Elements
const authStatusEl = document.getElementById('authStatus');

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    setupTabNavigation();
    setupFilePreviewers();
    setupFormSubmitHandlers();
    setupButtonClickHandlers();
    setupAdditionalHandlers();
    updateAuthStatus();
});

// ---- Basic Setup Functions ----

function setupTabNavigation() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all buttons and content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to current button and content
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

function setupFilePreviewers() {
    // Profile picture preview
    document.getElementById('profilePic')?.addEventListener('change', function () {
        showFilePreview(this, 'profilePicPreview');
    });

    // Product image preview
    document.getElementById('productImage')?.addEventListener('change', function () {
        showFilePreview(this, 'productImagePreview');
    });

    // Rent documentation preview
    document.getElementById('rentDoc')?.addEventListener('change', function () {
        showFilePreview(this, 'rentDocPreview');
    });

    // Rent ID document preview
    document.getElementById('rentIdDoc')?.addEventListener('change', function () {
        showFilePreview(this, 'rentIdDocPreview');
    });

    document.getElementById('updateRentDoc')?.addEventListener('change', function () {
        showFilePreview(this, 'updateRentDocPreview');
    });
}

function showFilePreview(fileInput, previewId) {
    const preview = document.getElementById(previewId);

    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function setupFormSubmitHandlers() {
    // Auth forms
    document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
    document.getElementById('registerForm')?.addEventListener('submit', handleRegister);

    // Category form
    document.getElementById('createCategoryForm')?.addEventListener('submit', handleCreateCategory);

    // Product forms
    document.getElementById('getProductForm')?.addEventListener('submit', handleGetProduct);
    document.getElementById('createProductForm')?.addEventListener('submit', handleCreateProduct);

    // Cart forms
    document.getElementById('addToCartForm')?.addEventListener('submit', handleAddToCart);
    document.getElementById('updateCartItemForm')?.addEventListener('submit', handleUpdateCartItem);
    document.getElementById('removeCartItemForm')?.addEventListener('submit', handleRemoveCartItem);

    // Image upload forms
    document.getElementById('profilePicForm')?.addEventListener('submit', handleProfilePicUpload);
    document.getElementById('productImageForm')?.addEventListener('submit', handleProductImageUpload);
    document.getElementById('rentDocForm')?.addEventListener('submit', handleRentDocUpload);

    // Rental forms
    document.getElementById('createRentForm')?.addEventListener('submit', handleCreateRent);
    document.getElementById('updateRentDocForm')?.addEventListener('submit', handleUpdateRentDoc);
    document.getElementById('getRentForm')?.addEventListener('submit', handleGetRent);
    document.getElementById('updateOrderStatusForm')?.addEventListener('submit', handleUpdateOrderStatus);
}

async function handleUpdateRentDoc(e) {
    e.preventDefault();

    const rentId = document.getElementById('updateRentId').value;
    const docType = document.getElementById('updateDocType').value;
    const fileInput = document.getElementById('updateRentDoc');

    if (!fileInput.files || !fileInput.files[0]) {
        displayResponse('updateRentDocResponse', {
            ok: false,
            status: 400,
            data: { message: 'No file selected' }
        });
        return;
    }

    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    const response = await apiRequest(`/images/rent/${rentId}/${docType}`, 'POST', formData, true);
    displayResponse('updateRentDocResponse', response);
}

function setupButtonClickHandlers() {
    // Auth buttons
    document.getElementById('logoutButton')?.addEventListener('click', handleLogout);

    // User buttons
    document.getElementById('getUserProfile')?.addEventListener('click', handleGetUserProfile);
    document.getElementById('getAllUsers')?.addEventListener('click', handleGetAllUsers);

    // Category buttons
    document.getElementById('getAllCategories')?.addEventListener('click', handleGetAllCategories);

    // Product buttons
    document.getElementById('getAllProducts')?.addEventListener('click', handleGetAllProducts);

    // Cart buttons
    document.getElementById('getCart')?.addEventListener('click', handleGetCart);
    document.getElementById('clearCart')?.addEventListener('click', handleClearCart);

    // Rental buttons
    document.getElementById('getMyRentals')?.addEventListener('click', handleGetMyRentals);
    document.getElementById('getAllRentals')?.addEventListener('click', handleGetAllRentals);
}

function updateAuthStatus() {
    if (token) {
        authStatusEl.textContent = 'Authenticated';
        authStatusEl.classList.add('logged-in');

        // Try to get user information
        fetchUserProfile();
    } else {
        authStatusEl.textContent = 'Not logged in';
        authStatusEl.classList.remove('logged-in');
        currentUser = null;
    }
}

// ---- API Helper Functions ----

async function apiRequest(url, method = 'GET', data = null, isFormData = false) {
    try {
        const headers = {};

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        if (!isFormData && data) {
            headers['Content-Type'] = 'application/json';
        }

        const options = {
            method,
            headers,
        };

        if (data) {
            if (isFormData) {
                options.body = data;
            } else {
                options.body = JSON.stringify(data);
            }
        }

        const response = await fetch(url, options);

        // Try to parse as JSON, but handle text responses too
        let responseData;
        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
            responseData = await response.json();
        } else {
            responseData = await response.text();
        }

        return {
            ok: response.ok,
            status: response.status,
            data: responseData
        };
    } catch (error) {
        return {
            ok: false,
            status: 0,
            data: { message: error.message }
        };
    }
}

function displayResponse(elementId, response, isSuccess = null) {
    const element = document.getElementById(elementId);
    if (!element) return;

    // Clear existing classes
    element.classList.remove('success', 'error');

    // Determine if success based on response or parameter
    const success = isSuccess !== null ? isSuccess : response.ok;

    // Add appropriate class
    if (success) {
        element.classList.add('success');
    } else {
        element.classList.add('error');
    }

    // Format the response data
    let formattedData;
    if (typeof response.data === 'string') {
        formattedData = response.data;
    } else {
        formattedData = JSON.stringify(response.data, null, 2);
    }

    // Show status code with the data
    element.textContent = `Status: ${response.status}\n\n${formattedData}`;
    element.style.display = 'block';
}

// ---- Auth Handlers ----

async function handleLogin(e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await apiRequest('/auth/login', 'POST', { email, password });
    displayResponse('loginResponse', response);

    if (response.ok && response.data.token) {
        token = response.data.token;
        localStorage.setItem('token', token);
        updateAuthStatus();
    }
}

async function handleRegister(e) {
    e.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const response = await apiRequest('/auth/register', 'POST', { name, email, password });
    displayResponse('registerResponse', response);
}

async function handleLogout(e) {
    e.preventDefault();

    // Call the logout endpoint if it exists
    if (token) {
        const response = await apiRequest('/auth/logout', 'POST');
        displayResponse('logoutResponse', response);
    }

    // Clear token regardless of response
    token = null;
    localStorage.removeItem('token');
    updateAuthStatus();
}

// ---- User Handlers ----

async function fetchUserProfile() {
    if (!token) return;

    const response = await apiRequest('/users/me');

    if (response.ok) {
        currentUser = response.data;
        updateProfilePicDisplay(currentUser.profile_picture);
    }
}

function updateProfilePicDisplay(profilePicUrl) {
    const profileImg = document.getElementById('currentProfilePic');
    const profilePath = document.getElementById('profilePicPath');

    if (profilePicUrl) {
        // Add a timestamp to avoid browser caching
        const timestamp = new Date().getTime();
        profileImg.src = profilePicUrl + '?t=' + timestamp;
        profilePath.textContent = profilePicUrl;
    } else {
        profileImg.src = '/images/default-profile.png';
        profilePath.textContent = 'No profile picture set';
    }
}

async function handleGetUserProfile() {
    const response = await apiRequest('/users/me');
    displayResponse('userProfileResponse', response);

    if (response.ok && response.data) {
        updateProfilePicDisplay(response.data.profile_picture);
    }
}

async function handleProfilePicUpload(e) {
    e.preventDefault();

    const fileInput = document.getElementById('profilePic');
    if (!fileInput.files || !fileInput.files[0]) {
        displayResponse('profilePicResponse', {
            ok: false,
            status: 400,
            data: { message: 'No file selected' }
        });
        return;
    }

    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    const response = await apiRequest('/images/profile', 'POST', formData, true);
    displayResponse('profilePicResponse', response);

    // If successful, update the profile picture display
    if (response.ok && response.data) {
        // Check for either direct profile_picture property or nested in user object
        const profilePicture = response.data.profile_picture ||
            (response.data.user && response.data.user.profile_picture);

        if (profilePicture) {
            updateProfilePicDisplay(profilePicture);

            // Also update the current user object
            if (currentUser) {
                currentUser.profile_picture = profilePicture;
            }
        }
    }
}

// Add a new function for the refresh button
function setupAdditionalHandlers() {
    // Add refresh profile picture button handler
    document.getElementById('refreshProfilePic').addEventListener('click', function () {
        console.log('Refresh button clicked');
        console.log('Current user:', currentUser);
        if (currentUser && currentUser.profile_picture) {
            const timestamp = new Date().getTime();
            document.getElementById('currentProfilePic').src =
                currentUser.profile_picture + '?t=' + timestamp;
        } else {
            fetchUserProfile();
        }
    });
}

async function handleGetAllUsers() {
    const response = await apiRequest('/users');
    displayResponse('allUsersResponse', response);
}

// ---- Category Handlers ----

async function handleGetAllCategories() {
    const response = await apiRequest('/categories');
    displayResponse('categoriesResponse', response);
}

async function handleCreateCategory(e) {
    e.preventDefault();

    const name = document.getElementById('categoryName').value;
    const response = await apiRequest('/categories', 'POST', { name });

    displayResponse('createCategoryResponse', response);
}

// ---- Product Handlers ----

async function handleGetAllProducts() {
    const response = await apiRequest('/products');
    displayResponse('productsResponse', response);
}

async function handleGetProduct(e) {
    e.preventDefault();

    const id = document.getElementById('productId').value;
    const response = await apiRequest(`/products/${id}`);

    displayResponse('getProductResponse', response);
}

async function handleCreateProduct(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById('productName').value,
        category_id: document.getElementById('productCategory').value,
        price: document.getElementById('productPrice').value,
        quantity: document.getElementById('productQuantity').value,
        quantity_alert: document.getElementById('productQuantityAlert').value,
        brand: document.getElementById('productBrand').value,
        description: document.getElementById('productDescription').value,
        specifications: document.getElementById('productSpecs').value,
        source: document.getElementById('productSource').value,
        date_arrival: document.getElementById('productArrival').value,
        is_rentable: document.getElementById('productRentable').checked
    };

    const response = await apiRequest('/products', 'POST', data);
    displayResponse('createProductResponse', response);
}

// ---- Cart Handlers ----

async function handleGetCart() {
    const response = await apiRequest('/cart');
    displayResponse('cartResponse', response);
}

async function handleAddToCart(e) {
    e.preventDefault();

    const data = {
        productId: document.getElementById('addToCartProductId').value,
        quantity: document.getElementById('addToCartQuantity').value
    };

    const response = await apiRequest('/cart/add', 'POST', data);
    displayResponse('addToCartResponse', response);
}

async function handleUpdateCartItem(e) {
    e.preventDefault();

    const itemId = document.getElementById('updateCartItemId').value;
    const quantity = document.getElementById('updateCartQuantity').value;

    const response = await apiRequest(`/cart/item/${itemId}`, 'PUT', { quantity });
    displayResponse('updateCartResponse', response);
}

async function handleRemoveCartItem(e) {
    e.preventDefault();

    const itemId = document.getElementById('removeCartItemId').value;
    const response = await apiRequest(`/cart/item/${itemId}`, 'DELETE');

    displayResponse('removeCartResponse', response);
}

async function handleClearCart() {
    const response = await apiRequest('/cart/clear', 'DELETE');
    displayResponse('clearCartResponse', response);
}

// ---- Image Upload Handlers ----

async function handleProfilePicUpload(e) {
    e.preventDefault();

    const fileInput = document.getElementById('profilePic');
    if (!fileInput.files || !fileInput.files[0]) {
        displayResponse('profilePicResponse', {
            ok: false,
            status: 400,
            data: { message: 'No file selected' }
        });
        return;
    }

    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    const response = await apiRequest('/images/profile', 'POST', formData, true);
    displayResponse('profilePicResponse', response);
}

async function handleProductImageUpload(e) {
    e.preventDefault();

    const productId = document.getElementById('productImageId').value;
    const fileInput = document.getElementById('productImage');

    if (!fileInput.files || !fileInput.files[0]) {
        displayResponse('productImageResponse', {
            ok: false,
            status: 400,
            data: { message: 'No file selected' }
        });
        return;
    }

    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    const response = await apiRequest(`/images/product/${productId}`, 'POST', formData, true);
    displayResponse('productImageResponse', response);
}

async function handleRentDocUpload(e) {
    e.preventDefault();

    const rentId = document.getElementById('rentId').value;
    const docType = document.getElementById('docType').value;
    const fileInput = document.getElementById('rentDoc');


    if (!fileInput.files || !fileInput.files[0]) {
        displayResponse('rentDocResponse', {
            ok: false,
            status: 400,
            data: { message: 'No file selected' }
        });
        return;
    }

    const formData = new FormData();
    formData.append('image', fileInput.files[0]);

    const response = await apiRequest(`/images/rent/${rentId}/${docType}`, 'POST', formData, true);
    displayResponse('rentDocResponse', response);
}

// ---- Rental/Order Handlers ----

async function handleCreateRent(e) {
    e.preventDefault();

    // First get the current user's cart
    const cartResponse = await apiRequest('/cart', 'GET');
    if (!cartResponse.ok) {
        displayResponse('createRentResponse', {
            ok: false,
            status: 400,
            data: { message: 'Failed to retrieve your cart. Please try again.' }
        });
        return;
    }

    console.log(cartResponse.data.cart.id);

    // Check if cart exists and has items
    if (!cartResponse.data.cart || !cartResponse.data.cart.id) {
        displayResponse('createRentResponse', {
            ok: false,
            status: 400,
            data: { message: 'You need to add items to your cart before creating a rent' }
        });
        return;
    }

    const cartId = cartResponse.data.cart.id;

    // Check if cart has items
    if (!cartResponse.data.cart.cart_items || cartResponse.data.cart.cart_items.length === 0) {
        displayResponse('createRentResponse', {
            ok: false,
            status: 400,
            data: { message: 'Your cart is empty. Please add items before creating a rent.' }
        });
        return;
    }

    // Check if ID document was provided
    const idDocInput = document.getElementById('rentIdDoc');
    if (!idDocInput.files || !idDocInput.files[0]) {
        displayResponse('createRentResponse', {
            ok: false,
            status: 400,
            data: { message: 'Identification document is required' }
        });
        return;
    }

    // First upload the identification document
    const idDocFormData = new FormData();
    idDocFormData.append('image', idDocInput.files[0]);

    // Create a temporary ID for the rent - will be replaced with the actual ID later
    const tempRentId = 'temp-' + Date.now();

    // Upload the ID document first
    const uploadResponse = await apiRequest(`/images/rent/${tempRentId}/identification`, 'POST', idDocFormData, true);

    if (!uploadResponse.ok) {
        displayResponse('createRentResponse', uploadResponse);
        return;
    }

    // Get the path to the uploaded ID document
    const idPicturePath = uploadResponse.data.imagePath;

    // Format dates properly in ISO format
    const startDateInput = document.getElementById('rentStartDate').value;
    const endDateInput = document.getElementById('rentEndDate').value;
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);

    // Check if the dates are valid
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        displayResponse('createRentResponse', {
            ok: false,
            status: 400,
            data: { message: 'Invalid date format. Please use YYYY-MM-DD format.' }
        });
        return;
    }

    // Format dates as ISO strings for the API
    const formattedStartDate = startDate.toISOString().split('T')[0];
    const formattedEndDate = endDate.toISOString().split('T')[0];

    // Then create the rent with the path to the ID document
    const rentData = {
        identification: document.getElementById('rentIdentification').value,
        phone: document.getElementById('rentPhone').value,
        notes: document.getElementById('rentNotes').value,
        cart_id: cartId,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
        identification_picture: idPicturePath
    };

    const rentResponse = await apiRequest('/rent', 'POST', rentData);

    // If the rent was created successfully, update the ID document with the actual rent ID
    if (rentResponse.ok && rentResponse.data && rentResponse.data.id) {
        const rentId = rentResponse.data.id;
        const updateDocResponse = await apiRequest(`/images/rent/update-path`, 'PUT', {
            oldPath: idPicturePath,
            newRentId: rentId,
            docType: 'identification'
        });

        console.log('Document path updated:', updateDocResponse);
    }

    displayResponse('createRentResponse', rentResponse);
}

async function handleGetMyRentals() {
    const response = await apiRequest('/rent/my');
    displayResponse('myRentalsResponse', response);
}

async function handleGetAllRentals() {
    const response = await apiRequest('/rent');
    displayResponse('allRentalsResponse', response);
}

async function handleGetRent(e) {
    e.preventDefault();

    const rentId = document.getElementById('getRentId').value;
    const response = await apiRequest(`/rent/${rentId}`);

    displayResponse('getRentResponse', response);
}

async function handleUpdateOrderStatus(e) {
    e.preventDefault();

    const orderId = document.getElementById('updateOrderId').value;
    const orderStatus = document.getElementById('orderStatus').value;
    const paymentStatus = document.getElementById('paymentStatus').value;

    // Only send values that are selected
    const data = {};
    if (orderStatus) data.order_status = orderStatus;
    if (paymentStatus) data.payment_status = paymentStatus;

    if (Object.keys(data).length === 0) {
        displayResponse('updateOrderResponse', {
            ok: false,
            status: 400,
            data: { message: 'Please select at least one status to update' }
        });
        return;
    }

    const response = await apiRequest(`/orders/${orderId}/status`, 'PUT', data);
    displayResponse('updateOrderResponse', response);
}