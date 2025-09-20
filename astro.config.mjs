// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	vite: {
        resolve: {
            alias: {
                '@docs': '/content/docs',
                '@es': '/content/docs/es',
                '@assets': '/src/assets',
                '@components': '/src/components',
            }
        }
    },
	integrations: [
		starlight({
			customCss: ['./src/style/starlight.css'],
			title: 'deguidocs',
			logo: {
                src: '@assets/deguidocs.png',
                alt: 'Logo de la documentación'
            },
			favicon: '/degui.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/deguidev/deguidocs' }
			],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Bienvenida', link: '/' },
					],
				},
				{
					label: 'Guías',
					link: '/guides/'
				},

				{
					label: 'Base de datos',
					collapsed: true,
					items: [
						{
							label: 'Oracle ❤️',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Oracle', link: '/db/oracle/introduccion/' },
								{ label: '2. Tipos de Datos en Oracle', link: '/db/oracle/tipos-datos/' },
								{ label: '3. Restricciones (Constraints)', link: '/db/oracle/restricciones/' },
								{ label: '4. DDL (Data Definition Language)', link: '/db/oracle/ddl/' },
								{ label: '5. DML (Data Manipulation Language)', link: '/db/oracle/dml/' },
								{ label: '6. DCL (Data Control Language)', link: '/db/oracle/dcl/' },
								{ label: '7. TCL (Transaction Control Language)', link: '/db/oracle/tcl/' },
								{ label: '8. Administración de Usuarios, Permisos y Roles', link: '/db/oracle/usuarios-permisos/' },
								{ label: '9. Funciones Oracle', link: '/db/oracle/funciones/' },
								{ label: '10. Procesamientos, Funciones y Vistas', link: '/db/oracle/procesamientos-funciones-vistas/' },
								{ label: '11. Programación con PL/SQL', link: '/db/oracle/plsql/' },
								{ label: '12. Triggers, secuencias, índices y otros objetos avanzados', link: '/db/oracle/objetos-avanzados/' }
							]
						},
						{
							label: 'MySQL 🤗',
							collapsed: true,
							items: []
						}
					]
				},
				{
					label: 'Control de Versiones',
					collapsed: true,
					items: [
						{
							label: 'GitHub 🐈‍⬛',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Git', link: '/versiones/git/introduccion/' },
								{ label: '2. Comandos básicos', link: '/versiones/git/comandos-basicos/' },
								{ label: '3. Ramas y fusiones', link: '/versiones/git/ramas-fusiones/' },
								{ label: '4. Repositorios remotos', link: '/versiones/git/repositorios-remotos/' },
								{ label: '5. Flujos de trabajo', link: '/versiones/git/flujos-trabajo/' }
							]
						},
					]
				},
			
				{
					label: 'Lenguajes de Programación',
					collapsed: false,
					items: [
						{
							label: 'SQL',
							collapsed: true,
							items: [
								{ label: '1. Introducción a SQL', link: '/lenguajes/sql/introduccion/' },
								{ label: '2. Fundamentos de SQL (DDL)', link: '/lenguajes/sql/fundamentos/' },
								{ label: '3. Manipulación de Datos (DML)', link: '/lenguajes/sql/manipulacion/' },
								{ label: '4. Consultas Avanzadas', link: '/lenguajes/sql/consultas-avanzadas/' },
								{ label: '5. Vistas, Procedimientos y Funciones', link: '/lenguajes/sql/vistas-procedimientos/' },
								{ label: '6. Seguridad y Control de Accesos (DCL)', link: '/lenguajes/sql/seguridad-control/' },
								{ label: '7. Gestión de Transacciones (TCL)', link: '/lenguajes/sql/transacciones/' },
								{ label: '8. Optimización y Buenas Prácticas', link: '/lenguajes/sql/optimizacion/' },
							]
						},
						{
							label: 'PHP',
							collapsed: true,
							items: [
								{ label: '1. Introducción a PHP', link: '/lenguajes/php/introduccion/' },
								{ label: '2. Sintaxis básica', link: '/lenguajes/php/sintaxis-basica/' },
								{ label: '3. Control de flujo', link: '/lenguajes/php/control-flujo/' },
								{ label: '4. Funciones', link: '/lenguajes/php/funciones/' },
								{ label: '5. Arreglos y strings', link: '/lenguajes/php/arreglos-strings/' },
								{ label: '6. Formularios y métodos HTTP', link: '/lenguajes/php/formularios-http/' },
								{ label: '7. Manejo de archivos', link: '/lenguajes/php/manejo-archivos/' },
								{ label: '8. Base de datos (MySQL)', link: '/lenguajes/php/base-datos/' },
								{ label: '9. Programación orientada a objetos', link: '/lenguajes/php/poo/' },
								{ label: '10. Manejo de sesiones y cookies', link: '/lenguajes/php/sesiones-cookies/' },
								{ label: '11. Buenas prácticas', link: '/lenguajes/php/buenas-practicas/' },
							]
						},
						{
							label: 'Java',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Java', link: '/lenguajes/java/introduccion/' },
								{ label: '2. Tipos de Datos y Variables', link: '/lenguajes/java/tipos-datos/' },
								{ label: '3. Operadores en Java', link: '/lenguajes/java/operadores/' },
								{ label: '4. Entrada y Salida en Consola', link: '/lenguajes/java/entrada-salida/' },
								{ label: '5. Estructuras de Control', link: '/lenguajes/java/estructuras-control/' },
								{ label: '6. Programación Orientada a Objetos', link: '/lenguajes/java/poo/' },
								{ label: '7. Manejo de Arreglos y Colecciones', link: '/lenguajes/java/arreglos-colecciones/' },
								{ label: '8. Manejo de Excepciones', link: '/lenguajes/java/excepciones/' },
								{ label: '9. Entrada y Salida de Archivos', link: '/lenguajes/java/archivos/' },
								{ label: '10. Acceso a Bases de Datos con JDBC', link: '/lenguajes/java/jdbc/' },
								{ label: '11. Buenas Prácticas y Herramientas', link: '/lenguajes/java/buenas-practicas/' },
							]
						},
						{
							label: 'Python',
							collapsed: true,
							items: [
								{ label: 'Introducción a Python', link: '/lenguajes/python/introduction/' },
								{ label: 'Estructura básica', link: '/lenguajes/python/basic-structure/' },
								{ label: 'Estilos de Texto', link: '/lenguajes/python/text-styling/' },
								{ label: 'Elementos y etiquetas', link: '/lenguajes/python/elements-tags/' },
								{ label: 'Formularios', link: '/lenguajes/python/forms/' },
								{ label: 'Vinculos e imágenes', link: '/lenguajes/python/links-images/' },
								{ label: 'Listas', link: '/lenguajes/python/lists/' },
								{ label: 'Tablas', link: '/lenguajes/python/tables/' },
								{ label: 'Multimedia', link: '/lenguajes/python/multimedia/' },
								{ label: 'Metadatos SEO', link: '/lenguajes/python/meta-seo/' },
								{ label: 'Python5 y semántica', link: '/lenguajes/python/py5-semantic/' },
							]
						},
						{
							label: 'HTML',
							collapsed: true,
							items: [
								{ label: 'Introducción a HTML', link: '/guides/html/introduction/' },
								{ label: 'Estructura básica', link: '/guides/html/basic-structure/' },
								{ label: 'Estilos de Texto', link: '/guides/html/text-styling/' },
								{ label: 'Elementos y etiquetas', link: '/guides/html/elements-tags/' },
								{ label: 'Formularios', link: '/guides/html/forms/' },
								{ label: 'Vinculos e imágenes', link: '/guides/html/links-images/' },
								{ label: 'Listas', link: '/guides/html/lists/' },
								{ label: 'Tablas', link: '/guides/html/tables/' },
								{ label: 'Multimedia', link: '/guides/html/multimedia/' },
								{ label: 'Metadatos SEO', link: '/guides/html/meta-seo/' },
								{ label: 'HTML5 y semántica', link: '/guides/html/html5-semantic/' },
							],
						},
						{
							label: 'CSS',
							collapsed: true,
							items: [
								{ label: 'Introducción a CSS', link: '/guides/css/introduction/' },
								{ label: 'Selectores', link: '/guides/css/selectors/' },
								{ label: 'Modelo de caja', link: '/guides/css/box-model/' },
								{ label: 'Flexbox', link: '/guides/css/flexbox/' },
								{ label: 'Grid', link: '/guides/css/grid/' },
								{ label: 'Responsive Design', link: '/guides/css/responsive/' },
								{ label: 'Animaciones', link: '/guides/css/animations/' },
								{ label: 'Variables CSS', link: '/guides/css/variables/' },
							],
						},
						{
							label: 'JavaScript',
							collapsed: true,
							items: [
								{ label: '1. Introducción a JavaScript', link: '/lenguajes/javascript/introduction/' },
								{ label: '2. Sintaxis y estructura básica', link: '/lenguajes/javascript/syntax/' },
								{ label: '3. Variables y constantes', link: '/lenguajes/javascript/variables/' },
								{ label: '4. Tipos de datos', link: '/lenguajes/javascript/data-types/' },
								{ label: '5. Operadores', link: '/lenguajes/javascript/operators/' },
								{ label: '6. Estructuras de control', link: '/lenguajes/javascript/control-structures/' },
								{ label: '7. Funciones', link: '/lenguajes/javascript/functions/' },
								{ label: '8. Arrays', link: '/lenguajes/javascript/arrays/' },
								{ label: '9. Objetos', link: '/lenguajes/javascript/objects/' },
								{ label: '10. Cadenas de texto', link: '/lenguajes/javascript/strings/' },
								{ label: '11. Manipulación del DOM', link: '/lenguajes/javascript/dom/' },
								{ label: '12. Eventos', link: '/lenguajes/javascript/events/' },
								{ label: '13. Formularios y validaciones', link: '/lenguajes/javascript/forms/' },
								{ label: '14. JSON y almacenamiento local', link: '/lenguajes/javascript/storage/' },
								{ label: '15. Programación asíncrona', link: '/lenguajes/javascript/async/' },
								{ label: '16. Clases y POO', link: '/lenguajes/javascript/oop/' },
								{ label: '17. Módulos', link: '/lenguajes/javascript/modules/' },
								{ label: '18. Expresiones regulares', link: '/lenguajes/javascript/regex/' },
								{ label: '19. Manejo de errores', link: '/lenguajes/javascript/error-handling/' },
								{ label: '20. Fetch API', link: '/lenguajes/javascript/fetch-api/' }
							],
						},
					],
				},
				{
					label: 'Frameworks',
					collapsed: true,
					items: [
						{
							label: 'Vue 3',
							collapsed: true,
							items: [
								{ label: '01. Introducción a Vue 3', link: '/guides/vue/introduction/' },
								{ label: '02. Estructura del Componente', link: '/guides/vue/component-structure/' },
								{ label: '03. Reactividad', link: '/guides/vue/reactivity/' },
								{ label: '04. Props y Eventos', link: '/guides/vue/props-events/' },
								{ label: '05. Computadas y Observadores', link: '/guides/vue/computed-watchers/' },
								{ label: '06. Ciclo de Vida', link: '/guides/vue/lifecycle/' },
								{ label: '07. Métodos y Funciones', link: '/guides/vue/methods-functions/' },
								{ label: '08. Formularios y Modelos', link: '/guides/vue/forms-models/' },
								{ label: '09. Directivas y Bindings', link: '/guides/vue/directives-bindings/' },
								{ label: '10. Slots', link: '/guides/vue/slots/' },
								{ label: '11. Comunicación entre Componentes', link: '/guides/vue/component-communication/' },
								{ label: '12. Estilos y CSS', link: '/guides/vue/styles-css/' },
								{ label: '13. Composables', link: '/guides/vue/composables/' },
								{ label: '14. Transiciones y Animaciones', link: '/guides/vue/transitions-animations/' },
								{ label: '15. Vue Router con Composition API', link: '/guides/vue/vue-router/' },
								{ label: '16. Pinia (Reemplazo de Vuex)', link: '/guides/vue/pinia/' },
								{ label: '17. Manejo de APIs y Fetch', link: '/guides/vue/api-fetch/' },
							],
						},
						{
							label: 'Laravel',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Laravel', link: '/guides/laravel/introduction/' },
								{ label: '2. Instalación y Configuración', link: '/guides/laravel/installation/' },
								{ label: '3. Rutas (Routing)', link: '/guides/laravel/routing/' },
								{ label: '4. Controladores', link: '/guides/laravel/controllers/' },
								{ label: '5. Modelos', link: '/guides/laravel/models/' },
								{ label: '6. Vistas con Blade', link: '/guides/laravel/blade/' },
								{ label: '7. Eloquent ORM', link: '/guides/laravel/eloquent/' },
								{ label: '8. Formularios y Validación', link: '/guides/laravel/forms-validation/' },
								{ label: '9. Autenticación y Autorización', link: '/guides/laravel/auth/' },
								{ label: '10. Migraciones y Base de Datos', link: '/guides/laravel/migrations-database/' },
								{ label: '11. Relaciones y Claves Foráneas', link: '/guides/laravel/relationships/' },
								{ label: '12. Factories y Seeders', link: '/guides/laravel/factories-seeders/' },
								{ label: '13. API REST y JSON', link: '/guides/laravel/api-rest/' },
								{ label: '14. Archivos, Storage y Uploads', link: '/guides/laravel/storage-uploads/' },
								{ label: '15. Eventos, Listeners y Observers', link: '/guides/laravel/events-listeners/' },
								{ label: '16. Jobs, Queues y Workers', link: '/guides/laravel/jobs-queues/' },
								{ label: '17. Notificaciones y Correos', link: '/guides/laravel/notifications-mail/' }
							]	
						},
						{
							label: 'Inertia',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Inertia.js', link: '/guides/inertia/introduction/' },
								{ label: '2. Instalación y configuración inicial', link: '/guides/inertia/installation/' },
								{ label: '3. Rutas y controladores en Laravel', link: '/guides/inertia/routes-controllers/' },
								{ label: '4. Componentes en Vue 3', link: '/guides/inertia/vue-components/' },
								{ label: '5. Layouts y estructura de páginas', link: '/guides/inertia/layouts/' },
								{ label: '6. Navegación entre páginas', link: '/guides/inertia/navigation/' },
								{ label: '7. Formularios y useForm', link: '/guides/inertia/forms/' },
								{ label: '8. Manejo de respuestas y redirecciones', link: '/guides/inertia/responses-redirects/' },
								{ label: '9. Props compartidas (Shared Props)', link: '/guides/inertia/shared-props/' },
								{ label: '10. Carga diferida y Lazy Loading', link: '/guides/inertia/lazy-loading/' },
								{ label: '11. Middlewares y autenticación', link: '/guides/inertia/middleware-auth/' },
								{ label: '12. Integración con otras librerías', link: '/guides/inertia/integrations/' }
							]	
						},
						{
							label:'Java Swing',
							collapsed:true,
							items:[
								{ label: '1. Introducción a Java y Java Swing', link: '/frameworks/java-swing/introduccion/' },
								{ label: '2. Componentes Básicos de Swing', link: '/frameworks/java-swing/componentes-basicos/' },
								{ label: '3. Organización de Interfaces', link: '/frameworks/java-swing/organizacion-interfaces/' },
								{ label: '4. Tablas y Modelos Personalizados', link: '/frameworks/java-swing/tablas-modelos/' },
								{ label: '5. CRUD con Base de Datos', link: '/frameworks/java-swing/crud-bd/' },
								{ label: '6. Patrones de Diseño y Arquitecturas', link: '/frameworks/java-swing/patrones-arquitecturas/' }
							]
						},
						{
							label: 'Alpine.js',
							collapsed: true,
							items: [
								{ label: '01. Introducción a Alpine.js', link: '/guides/alpine/introduction/' },
								{ label: '02. Instalación y configuración', link: '/guides/alpine/installation/' },
								{ label: '03. Sintaxis básica y directivas', link: '/guides/alpine/syntax/' },
								{ label: '04. Reactividad y estado', link: '/guides/alpine/reactivity/' },
								{ label: '05. Eventos y manejo de acciones', link: '/guides/alpine/events/' },
								{ label: '06. Ciclo de vida', link: '/guides/alpine/lifecycle/' },
								{ label: '07. Componentes y scopes', link: '/guides/alpine/components/' },
								{ label: '08. Plugins y extensiones', link: '/guides/alpine/plugins/' },
								{ label: '09. Integración con otras librerías', link: '/guides/alpine/integrations/' },
								{ label: '10. Casos de uso y ejemplos', link: '/guides/alpine/examples/' }
							]
						},
					],
				},
				{
					label: 'UML',
					collapsed: true,
					items: [
						{ 
							label: 'Diagramas de Clases',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Clases', link: '/uml/diagramas-clases/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Clases', link: '/uml/diagramas-clases/elementos-basicos/' },
								{ label: '3. Relaciones Entre Clases', link: '/uml/diagramas-clases/relaciones/' },
								{ label: '4. Notación UML para Clases', link: '/uml/diagramas-clases/notacion/' },
								{ label: '5. Aplicaciones del Diagrama de Clases', link: '/uml/diagramas-clases/aplicaciones/' }
							]
						},
						{ 
							label: 'Diagramas de Casos de Uso',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Casos de Uso', link: '/uml/diagramas-casos-uso/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Casos de Uso', link: '/uml/diagramas-casos-uso/elementos-basicos/' },
								{ label: '3. Tipos de Relaciones en Casos de Uso', link: '/uml/diagramas-casos-uso/relaciones/' },
								{ label: '4. Notación UML para Casos de Uso', link: '/uml/diagramas-casos-uso/notacion/' },
								{ label: '5. Aplicaciones del Diagrama de Casos de Uso', link: '/uml/diagramas-casos-uso/aplicaciones/' }
							]
						}
					]
				},
				{
					label: 'Utilidades',
					collapsed: true,
					items: [
						{
							label: 'Librerías',
							collapsed: true,
							items: [
								{ label: 'tailwindcss', link: '/guides/libraries/tailwindcss/' },
								{ label: 'bootstrap icons', link: '/guides/libraries/bootstrap-icons/' },
								{ label: 'bootstrap', link: '/guides/libraries/bootstrap/' },
								{ label: 'bulma', link: '/guides/libraries/bulma/' },
								{ label: 'fontawesome', link: '/guides/libraries/fontawesome/' },
								{ label: 'sweetalert', link: '/guides/libraries/sweetalert/' },
								{ label: 'animations', link: '/guides/libraries/animations/' },
								{ label: 'tailwindcss animations', link: '/guides/libraries/tailwindcss-animations/' },
								{ label: 'plugin tailwindcss animations', link: '/guides/libraries/tailwindcss-animations-plugin/' },
							],
						},
						{
							label: 'Ziggy',
							collapsed: true,
							items: [
								{ label: '01. Introducción a Ziggy.js', link: '/guides/ziggy/introduction/' },
								{ label: '02. Instalación y configuración básica', link: '/guides/ziggy/installation/' },
								{ label: '03. Uso básico en JavaScript puro', link: '/guides/ziggy/basic-usage/' },
								{ label: '04. Uso de Ziggy en Vue 3', link: '/guides/ziggy/vue-integration/' },
								{ label: '05. Configuración avanzada', link: '/guides/ziggy/configuration/' },
								{ label: '06. Interacción con rutas y API REST', link: '/guides/ziggy/api-rest/' }
							]
						},
					],
				},
				{
					label: 'Referencia',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
