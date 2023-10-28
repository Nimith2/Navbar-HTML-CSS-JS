const getUsersBtn = document.querySelector('.get-users-btn');
const loader = document.querySelector('.loader');
const userCardGrid = document.getElementById('user-card-grid');

getUsersBtn.addEventListener('click', () => {
    loader.style.display = 'block';
    userCardGrid.innerHTML = '';

    fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((data) => {
            loader.style.display = 'none';
            data.data.forEach((user) => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');
                userCard.innerHTML = `
                    <img src="${user.avatar}" alt="${user.first_name}">
                    <h3>${user.first_name} ${user.last_name}</h3>
                    <p>Email: ${user.email}</p>
                `;
                userCardGrid.appendChild(userCard);
            });
        })
        .catch((error) => {
            loader.style.display = 'none';
            console.error('Error:', error);
        });
});
