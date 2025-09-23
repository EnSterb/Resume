document.addEventListener('DOMContentLoaded', function() {
    // Language toggle functionality
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = 'ru';
    
    // Translations object
    const translations = {
        ru: {
            title: "Дмитрий Адамович - Backend Developer",
            name: "Дмитрий Адамович",
            position: "Backend Developer",
            about: "О себе",
            aboutText: "Backend-разработчик с коммерческим опытом и достаточным количеством пет-проектов. Решал сложные задачи, где нужно копать вглубь: оптимизировать запросы, проектировать API или разбираться в чужом коде. Помимо используемого стека интересуюсь фронтенд разработкой. В некоммерческих проектах и хакатонах приобрел навыки аналитики и управления — умею быстро входить в контекст и вести команду к результату.",
            skills: "Навыки",
            programmingLanguages: "Языки программирования",
            databases: "Базы данных",
            technologies: "Технологии",
            tools: "Инструменты",
            languages: "Языки",
            experience: "Опыт работы",
            footer: "© 2025 Дмитрий Адамович. Все права защищены.",
            russian: "Русский - Родной",
            belarusian: "Белорусский - Свободно",
            english: "Английский - B1",
            german: "Немецкий - B1"
        },
        en: {
            title: "Dmitry Adamovich - Backend Developer",
            name: "Dmitry Adamovich",
            position: "Backend Developer",
            about: "About Me",
            aboutText: "Backend developer with commercial experience and numerous pet projects. Solved complex tasks requiring deep diving: optimizing queries, designing APIs, or understanding someone else's code. Besides my main tech stack, I'm interested in frontend development. In non-commercial projects and hackathons, I acquired analytics and management skills - I can quickly get into context and lead a team to results.",
            skills: "Skills",
            programmingLanguages: "Programming Languages",
            databases: "Databases",
            technologies: "Technologies",
            tools: "Tools",
            languages: "Languages",
            experience: "Work Experience",
            footer: "© 2025 Dmitry Adamovich. All rights reserved.",
            russian: "Russian - Native",
            belarusian: "Belarusian - Fluent",
            english: "English - B1",
            german: "German - B1"
        }
    };
    
    // Experience data for both languages
    const experienceData = {
        ru: [
            {
                company: "ООО 'ТОДЭС'",
                position: "Backend Developer",
                period: "Июнь 2025 - Август 2025",
                responsibilities: [
                    "Реализовал модуль управления БД с поддержкой миграций",
                    "Разработал систему валидации и сериализации данных с использованием Pydantic",
                    "Спроектировал и внедрил REST API на FastAPI",
                    "Интегрировал OpenSearch для полнотекстового поиска"
                ]
            },
            {
                company: "StartUp Space",
                position: "Developer, Analyst, Project Manager",
                period: "Апрель 2025 - Май 2025",
                responsibilities: [
                    "Анализ целевого продукта и написание требований",
                    "Управление командой для реализации продукта в срок",
                    "Настройка и дообучение локальных LLM",
                    "Написание модуля для программы Blender"
                ]
            },
            {
                company: "Аналог игры Geoguesser",
                position: "Fullstack Developer",
                period: "Февраль 2025 - Апрель 2025",
                responsibilities: [
                    "Написание документации и проектирование БД",
                    "Подключение внешних API",
                    "Разработка на FastApi, Pydantic + MySQL",
                    "Создание фронтенд части"
                ]
            }
        ],
        en: [
            {
                company: "TODES LLC",
                position: "Backend Developer",
                period: "June 2025 - August 2025",
                responsibilities: [
                    "Implemented a database management module with migration support",
                    "Developed a data validation and serialization system using Pydantic",
                    "Designed and implemented REST API on FastAPI",
                    "Integrated OpenSearch for full-text search"
                ]
            },
            {
                company: "StartUp Space",
                position: "Developer, Analyst, Project Manager",
                period: "April 2025 - May 2025",
                responsibilities: [
                    "Analysis of the target product and writing requirements",
                    "Team management for on-time product delivery",
                    "Setup and fine-tuning of local LLMs",
                    "Writing a module for Blender software"
                ]
            },
            {
                company: "Geoguesser-like Game",
                position: "Fullstack Developer",
                period: "February 2025 - April 2025",
                responsibilities: [
                    "Writing documentation and database design",
                    "Integration of external APIs",
                    "Development with FastApi, Pydantic + MySQL",
                    "Frontend implementation"
                ]
            }
        ]
    };
    
    // Function to update content based on language
    function updateContent(lang) {
        document.querySelector('title').textContent = translations[lang].title;
        document.querySelector('h1').textContent = translations[lang].name;
        document.querySelector('.header-info h2').textContent = translations[lang].position;
        document.querySelector('.about h3').textContent = translations[lang].about;
        document.querySelector('.about p').textContent = translations[lang].aboutText;
        document.querySelector('.skills h3').textContent = translations[lang].skills;
        document.querySelector('.experience h3').textContent = translations[lang].experience;
        document.querySelector('footer p').textContent = translations[lang].footer;
        
        // Update skill categories headers
        const skillHeaders = document.querySelectorAll('.skill-header h4');
        skillHeaders[0].textContent = translations[lang].programmingLanguages;
        skillHeaders[1].textContent = translations[lang].databases;
        skillHeaders[2].textContent = translations[lang].technologies;
        skillHeaders[3].textContent = translations[lang].tools;
        skillHeaders[4].textContent = translations[lang].languages;
        
        // Update languages tags
        const languagesContainer = document.getElementById('languages-container');
        languagesContainer.innerHTML = `
            <span class="skill-tag">${translations[lang].russian}</span>
            <span class="skill-tag">${translations[lang].belarusian}</span>
            <span class="skill-tag">${translations[lang].english}</span>
            <span class="skill-tag">${translations[lang].german}</span>
        `;
        
        // Update experience items
        const experienceItems = document.querySelectorAll('.carousel-item');
        experienceItems.forEach((item, index) => {
            const data = experienceData[lang][index];
            item.querySelector('h4').textContent = data.company;
            item.querySelector('h5').textContent = data.position;
            item.querySelector('.date').textContent = data.period;
            
            const listItems = item.querySelectorAll('li');
            listItems.forEach((li, i) => {
                li.textContent = data.responsibilities[i];
            });
        });
        
        // Update button text
        languageToggle.textContent = lang === 'ru' ? 'EN' : 'RU';
    }
    
    // Toggle language on button click
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        updateContent(currentLanguage);
    });
    
    // Skills accordion functionality
    const skillHeaders = document.querySelectorAll('.skill-header');
    
    skillHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle active class
            content.classList.toggle('active');
            
            // Rotate icon
            if (content.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });
    
    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    
    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    });
    
    // Initialize carousel
    showSlide(currentIndex);
    
    // Open first skill category by default
    document.querySelector('.skill-content').classList.add('active');
    document.querySelector('.skill-header i').style.transform = 'rotate(180deg)';
    
    // Initialize language
    updateContent(currentLanguage);
});