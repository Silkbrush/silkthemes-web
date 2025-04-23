let domain = window.location.hostname;

if (domain.startsWith("next.")) {
    // this is the beta subdomain, let's remove it
    domain = domain.substring(5);
}

const navbarData = {
    "links": [
        {
            "href": "/",
            "text": "Home"
        },
        {
            "href": "https://github.com/Silkbrush",
            "text": "GitHub"
        },
        {
            "href": "https://discord.gg/QJJaQuuDfp",
            "text": "Discord"
        }
    ]
}

function scriptInit() {
    // Assign button actions

    // Navbar toggle
    document.getElementById('navbar-mobile-toggle').addEventListener('click', toggleNavbarList);

    // Set navbar
    const navbarLinksElement = document.getElementById('navbar-links-container');

    for (let i = 0; i < navbarData.links.length; i++) {
        const link = navbarData.links[i];
        const linkTemplate = document.getElementById('navbar-link-template')
        const linkElement = linkTemplate.content.cloneNode(true);
        const linkElementAnchor = linkElement.querySelector('a');
        linkElementAnchor.href = link.href;
        linkElementAnchor.innerHTML = link.text;

        // Add element to navbar list
        navbarLinksElement.appendChild(linkElement);
    }
}

function toggleNavbarList() {
    // NOTE: this is not a linked list (linked lists are fake /j)
    const linksList = document.getElementById('navbar-links-container');
    const toggleElement = document.getElementById('navbar-mobile-toggle');

    if (linksList.classList.contains('active')) {
        linksList.classList.remove('active');
        toggleElement.classList.remove('active');
    } else {
        linksList.classList.add('active');
        toggleElement.classList.add('active');
    }
}
window.onload = scriptInit;
