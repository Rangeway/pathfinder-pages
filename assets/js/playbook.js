const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('menuToggle');
const sections = document.querySelectorAll('.main-content .section');
const playbookNavLinks = document.querySelectorAll('.sidebar .nav-link');

const setSidebarOpen = (open) => {
    if (!sidebar || !menuToggle) return;
    sidebar.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close playbook contents' : 'Open playbook contents');
    menuToggle.textContent = open ? 'Close' : 'Contents';
};

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
        setSidebarOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    playbookNavLinks.forEach((link) => link.addEventListener('click', () => setSidebarOpen(false)));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setSidebarOpen(false);
    });
    document.addEventListener('click', (event) => {
        if (window.innerWidth > 900 || !sidebar.classList.contains('active')) return;
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) setSidebarOpen(false);
    });
}

if ('IntersectionObserver' in window && sections.length) {
    const activeObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            playbookNavLinks.forEach((link) => {
                const active = link.getAttribute('href') === `#${entry.target.id}`;
                link.classList.toggle('active', active);
                if (active) link.setAttribute('aria-current', 'true');
                else link.removeAttribute('aria-current');
            });
        });
    }, { rootMargin: '-20% 0px -68% 0px', threshold: 0 });

    sections.forEach((section) => activeObserver.observe(section));
}
