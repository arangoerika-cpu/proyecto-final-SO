document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // 1. NAVEGACIÓN ENTRE SECCIONES
    // ============================================
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach(sec => sec.classList.remove('active'));
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.nav-menu a[data-section="${sectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            history.pushState(null, '', `#${sectionId}`);
        });
    });

    window.addEventListener('popstate', function() {
        const hash = window.location.hash.substring(1) || 'home';
        showSection(hash);
    });

    const initialHash = window.location.hash.substring(1) || 'home';
    showSection(initialHash);

    // ============================================
    // 2. LIGHTBOX PARA IMÁGENES
    // ============================================
    
    function createImageModal(imageSrc) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            cursor: pointer;
            padding: 20px;
            animation: fadeInModal 0.3s ease;
        `;

        const imgBig = document.createElement('img');
        imgBig.src = imageSrc;
        imgBig.style.cssText = `
            max-width: 92%;
            max-height: 92%;
            border-radius: 12px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
            object-fit: contain;
            animation: zoomIn 0.3s ease;
        `;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '✕';
        closeBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 30px;
            font-size: 2rem;
            color: white;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 10000;
            font-weight: bold;
            transition: transform 0.2s ease;
        `;
        closeBtn.onmouseover = function() { this.style.transform = 'scale(1.3)'; };
        closeBtn.onmouseout = function() { this.style.transform = 'scale(1)'; };

        modal.appendChild(imgBig);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);

        function closeModal() {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target === imgBig) {
                closeModal();
            }
        });

        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeModal();
        });

        function handleEscKey(e) {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', handleEscKey);
            }
        }
        document.addEventListener('keydown', handleEscKey);
    }

    const images = document.querySelectorAll('.evidencia-img');
    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            const imageSrc = this.getAttribute('src');
            if (imageSrc) {
                createImageModal(imageSrc);
            }
        });
    });

    // ============================================
    // 3. ANIMACIONES
    // ============================================
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        @keyframes fadeInModal {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(styleSheet);

    console.log('✅ Sitio web del Proyecto Final cargado correctamente');
});