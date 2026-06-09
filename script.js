document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Lógica do Menu Hambúrguer (Mobile)
    // ==========================================
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('is-active');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (mobileMenu) mobileMenu.classList.remove('is-active');
        });
    });

    // ==========================================
    // 2. Smooth Scroll (Rolagem Suave)
    // ==========================================
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
  
                window.scrollTo({
                     top: offsetPosition,
                     behavior: "smooth"
                });
            }
        });
    });

    // ==========================================
    // 3. Integração Dinâmica com WhatsApp API
    // ==========================================
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    // Número do Sidnei com DDI (55) e DDD (17), apenas números
    const phoneNumber = "5517981579182"; 
    
    // Mensagem pré-definida para quebrar o gelo
    const message = "Olá, Sidnei! Visitei o site da SC Engenharia e gostaria de conversar sobre um projeto ou solicitar um orçamento.";

    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Transforma o texto para o formato aceito por links de internet
            const encodedMessage = encodeURIComponent(message);
            // Monta o link oficial do WhatsApp
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            
            // Abre o WhatsApp em uma nova aba para o cliente não sair do seu site
            window.open(whatsappUrl, '_blank');
        });
    });
});

// ==========================================
    // 4. Aviso de Cookies (LGPD)
    // ==========================================
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');

    // Verifica no navegador se o usuário já aceitou antes
    if (!localStorage.getItem('cookiesAccepted')) {
        // Um pequeno atraso de 1 segundo para a barra subir suavemente
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    acceptCookiesBtn.addEventListener('click', () => {
        // Salva a escolha no navegador e esconde a barra
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('show');
    });