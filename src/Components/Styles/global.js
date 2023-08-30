import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body{
    background:${({ theme }) => theme.background};
    color: ${({ theme }) => theme.title};
    padding:0;
    margin:0;
    transition: all 0.25s linear;
    overflow-y: scroll;
    width: 100%;

}
.canvas{
    min-height:100%
padding-bottom:20px
}

/* footer.css */

.footer-container {
    padding: 4px 0;
    text-align: center;
    width: 100%;
    margin-bottom:0;
     position: relative; /* Add this line */
    z-index: 2; /* Add this line */

}

.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-content p {
    margin: 5px 0;
    font-size: 14px;
    color: ${({ theme }) => theme.typeBoxText};
}

/* Additional styles to push content above the footer */
.app-container {
    min-height: 60vh;

    padding-bottom: 80px;
    /* Adjust the padding value based on your footer's height */
}

/* header.css */
.header-container {
    color: ${({ theme }) => theme.background}
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: #454545;
    white-space: pre-wrap;
    transition: color 0.3s ease;
    /* Prevents the logo from wrapping to the next line */
}

.logo:hover {

    color: ${({ theme }) => theme.title};

}

.nav-links-container {
    flex-grow: 1;
    /* Allow the nav-links container to grow and take available space */
    overflow: hidden;
    /* Hides overflowing content */
}

.nav-links {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    /* Align the links to the right */
    gap: 20px;
}

.nav-links li {
    display: inline-block;
}

.nav-links a {
    box-sizing: border-box;
    position: relative;
    top:10px;
    bottom:10px;
    text-decoration: none;
    color: #454545;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: ${({ theme }) => theme.title};
}

/* Additional styles to push content below the header */
.app-container {
    padding-top: 80px;
    /* Adjust the padding value based on your header's height */
}

// Loader
.loading-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 18px;
    color: #555;
}

.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    margin-bottom: 10px;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

// repository list

* {
    margin: 0;
    padding: 0%;
}

h3 {
    text-align: center;
    margin: 1rem;
}

.repository-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.repository-list li {
    width: 25%;
    padding: 5px;
    box-sizing: border-box;
}
.repository-list a:hover{
    color:${({ theme }) => theme.title};
}
.profile-desc a:hover{
    color:${({ theme }) => theme.stats};
}
/* Responsive Styling */
@media screen and (max-width: 768px) {
    .repository-list li {
        width: 50%;
    }
}

@media screen and (max-width: 480px) {
    .repository-list li {
        width: 100%;
    }
}


.searchBar-container{
    width: 99%;
    align-items: center;
}

form {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form h1 {
    margin-top: 0;
    color: #727272;
}

form input {
    margin-top: 1rem;
    color: white;
    transition: 0.3s ease;
    border: none;
    border-radius: 20px;
    width: 30rem;
    height: 2.5rem;
    padding-left: 30px;
    background-color: ${({ theme }) => theme.typeBoxText};
}

form input:hover {
    color:  ${({ theme }) => theme.typeBoxText};
    background-color: ${({ theme }) => theme.background};
    
}

form input:focus {
    outline: 2px solid ${({ theme }) => theme.title};
}


form button {
    color: #727272;
    background-color: #444444;
    border-radius: 15px;
    width: 5rem;
    height: 1.8rem;
    border: 1px solid #393838;
    transition: 0.3s ease;
}

form button:hover {
    color: #848484;
    background: ${({ theme }) => theme.title};
    border: 1px solid #393838;
}

.search-icon-container {
    position: relative;
    top: -1.9rem;
    left: 8px;
    /* transform: translateY(-2%); */
}

.search-icon {
    font-size: 20px;
    color: rgb(117, 117, 117);
}

.search-icon-container {
    width: 4%;
}


// search form
.searchBar-container {
    display: flex;
    flex-direction: column;
    height: 90vh;
    align-items: center;
}

.image-container img {
    margin-top: 5rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 180px;
    opacity: 0.8;
    /* Adjust the opacity value as needed */
}

@media (max-width:820px) {
    form input {
        width: 21rem;
    }

    form h1 {
        margin-top: 1rem;
    }

    .repoList li {
        display: flex;
        flex-wrap: wrap;
        padding: 20px;
        justify-content: space-between;
    }

    .image-container img {
        margin-top: 8rem;
        width: 20%;
    }
}

@media (max-width:499px) {
    form h1 {
        font-size: 24px;
    }

    .image-container img {
        margin-top: 10rem;
        width: 50%;
    }

    .logo {
        font-size: 18px;

    }

    form input {

        width: 17rem;
        height: 2.5rem;
    }

    .detail-card {
        margin-left:auto;
        margin-right:auto;
        text-align: left;
    }

    .profile-desc {
        text-align: left;
    }
}

// userProfile

.details-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    gap: 20px;
    color: white;
    position: relative; /* Add this line */
    z-index: 1; /* Add this line */
}

.detail-card {
    background-color: #292929;
    padding: 20px;
    width: 100%;
    height: 30%;
    border-radius: 10px;
}

.card-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.profile-desc {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card-body img {
    box-sizing: border-box;
    float: right;
    width: 20%;
    border-radius: 10px;
    margin-bottom: 10px;

    margin-right: 2rem;
}

.card-subtitle {
    font-size: 18px;
    margin-bottom: 5px;
}

a {
    color: white;
    text-decoration: none;
    cursor: pointer;
}
`;