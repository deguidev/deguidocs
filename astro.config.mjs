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
		},
		optimizeDeps: {
			include: ['monaco-editor']
		}
	},
	integrations: [
		starlight({
			customCss: ['./src/style/starlight.css'],
			title: 'HoneyCode',
			components: {
				// Inyectar animaciones honey en el footer de cada página
				Footer: './src/components/HoneyFooter.astro',
			},

			logo: {
				src: '@assets/HoneyCode.png',
				alt: 'Logo de la documentación'
			},
			favicon: '/hc.png',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/deguidev/deguidocs' }
			],
			sidebar: [
				{
					label: '🏠 Inicio',
					items: [
						{ label: 'Bienvenida', link: '/' },
					],
				},
				{
					label: '📖 Guías',
					link: '/guides/'
				},

				{
					label: '💾 Base de datos',
					collapsed: false,
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
					label: '🔄 Control de Versiones',
					collapsed: true,
					items: [
						{
							label: '🐈 GitHub ',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Git y GitHub', link: '/guides/git-github/introduccion-git-github/' },
								{ label: '2. Configuración inicial', link: '/guides/git-github/configuracion-inicial/' },
								{ label: '3. Fundamentos de Git', link: '/guides/git-github/fundamentos-git/' },
								{ label: '4. Repositorios remotos', link: '/guides/git-github/repositorios-remotos/' },
								{ label: '5. Ramas en Git', link: '/guides/git-github/ramas-git/' },
								{ label: '6. Trabajo colaborativo', link: '/guides/git-github/trabajo-colaborativo/' },
								{ label: '7. Flujo básico', link: '/guides/git-github/flujo-basico/' },
							]
						},
					]
				},

				{
					label: '💻 Lenguajes de Programación',
					collapsed: false,
					items: [
						{
							label: '📂 SQL',
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
							label: '🐘 PHP',
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
								{ label: '11. Manejo de errores y excepciones', link: '/lenguajes/php/errores-excepciones/' },
								{ label: '12. AJAX', link: '/lenguajes/php/ajax-php/' },
								{ label: '13. Buenas prácticas', link: '/lenguajes/php/buenas-practicas/' },
							]
						},
						{
							label: '🦊 Java',
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
							label: '🐍 Python',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Python', link: '/lenguajes/python/introduccion/' },
								{ label: '2. Variables y Tipos de Datos', link: '/lenguajes/python/variables-tipos-datos/' },
								{ label: '3. Operadores y Expresiones', link: '/lenguajes/python/operadores-expresiones/' },
								{ label: '4. Entrada y Salida de Datos', link: '/lenguajes/python/entrada-salida/' },
								{ label: '5. Control de Flujo Condicionales', link: '/lenguajes/python/condicionales/' },
								{ label: '6. Control de Flujo Bucles', link: '/lenguajes/python/bucles/' },
								{ label: '7. Listas y Colecciones de Datos', link: '/lenguajes/python/listas-colecciones/' },
								{ label: '8. Funciones en Python', link: '/lenguajes/python/funciones/' },
								{ label: '9. Módulos y Librerías Básicas', link: '/lenguajes/python/modulos-librerias/' },
								{ label: '10. Manejo de Cadenas de Texto', link: '/lenguajes/python/cadenas-texto/' },
								{ label: '11. Programación Orientada a Objetos', link: '/lenguajes/python/poo/' },
							]
						},
						{
							label: '🐛 HTML',
							collapsed: true,
							items: [
								{ label: '1. Introducción a HTML', link: '/lenguajes/html/introduction/' },
								{ label: '2. Elementos Básicos de HTML', link: '/lenguajes/html/elementos-basicos/' },
								{ label: '3. Cabecera del Documento', link: '/lenguajes/html/cabecera-documento/' },
								{ label: '4. Contenido del Cuerpo', link: '/lenguajes/html/contenido-cuerpo/' },
								{ label: '5. Enlaces e Imágenes', link: '/lenguajes/html/enlaces-imagenes/' },
								{ label: '6. Tablas en HTML', link: '/lenguajes/html/tablas/' },
								{ label: '7. Formularios y Controles', link: '/lenguajes/html/formularios/' },
								{ label: '8. Multimedia en HTML', link: '/lenguajes/html/multimedia/' },
								{ label: '9. Etiquetas Semánticas', link: '/lenguajes/html/etiquetas-semanticas/' },
								{ label: '10. Estructura Avanzada', link: '/lenguajes/html/estructura-avanzada/' },
							],
						},
						{
							label: '🐌 CSS',
							collapsed: true,
							items: [
								{ label: '1. Introducción a CSS', link: '/lenguajes/css/introduccion/' },
								{ label: '2. Selectores y Especificidad', link: '/lenguajes/css/selectores-especificidad/' },
								{ label: '3. Colores y Unidades', link: '/lenguajes/css/colores-unidades/' },
								{ label: '4. Tipografía y Texto', link: '/lenguajes/css/tipografia-texto/' },
								{ label: '5. Cajas y Modelo de Caja', link: '/lenguajes/css/modelo-caja/' },
								{ label: '6. Posicionamiento y Display', link: '/lenguajes/css/posicionamiento-display/' },
								{ label: '7. Flexbox', link: '/lenguajes/css/flexbox/' },
								{ label: '8. Grid Layout', link: '/lenguajes/css/grid-layout/' },
								{ label: '9. Estilos Avanzados', link: '/lenguajes/css/estilos-avanzados/' },
								{ label: '10. Transiciones y Animaciones', link: '/lenguajes/css/transiciones-animaciones/' },
								{ label: '11. Responsive Design y Media Queries', link: '/lenguajes/css/responsive-design/' },
							],
						},
						{
							label: '🌟 JavaScript',
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
					label: '🛠️ Frameworks',
					collapsed: false,
					items: [
						{
							label: "☕ Astro",
							collapsed: true,
							items: [
								{ label: "01. Introducción a Astro", link: "/frameworks/astro/01-introduccion/" },
								{ label: "02. Estructura del Proyecto", link: "/frameworks/astro/02-estructura-proyecto/" },
								{ label: "03. Creación de Páginas", link: "/frameworks/astro/03-creacion-paginas/" },
								{ label: "04. Componentes en Astro", link: "/frameworks/astro/04-componentes/" },
								{ label: "05. Estilos y Diseño", link: "/frameworks/astro/05-estilos-diseno/" },
								{ label: "06. Integración con Frameworks", link: "/frameworks/astro/06-integracion-frameworks/" },
								{ label: "07. Contenido Dinámico", link: "/frameworks/astro/07-contenido-dinamico/" },
								{ label: "08. SEO y Metadatos", link: "/frameworks/astro/08-seo-metadatos/" },
								{ label: "09. Optimizaciones de Rendimiento", link: "/frameworks/astro/09-optimizaciones-rendimiento/" },
								{ label: "10. Configuración Avanzada", link: "/frameworks/astro/10-configuracion-avanzada/" },
								{ label: "11. Integraciones Externas", link: "/frameworks/astro/11-integraciones-externas/" },
								{ label: "12. Despliegue y Producción", link: "/frameworks/astro/12-despliegue-produccion/" }
							]
						},
						{
							label: '🐊 Vue 3',
							collapsed: true,
							items: [
								{ label: '01. Introducción a Vue 3', link: '/frameworks/vue/introduction/' },
								{ label: '02. Estructura del Componente', link: '/frameworks/vue/component-structure/' },
								{ label: '03. Reactividad', link: '/frameworks/vue/reactivity/' },
								{ label: '04. Props y Eventos', link: '/frameworks/vue/props-events/' },
								{ label: '05. Computadas y Observadores', link: '/frameworks/vue/computed-watchers/' },
								{ label: '06. Ciclo de Vida', link: '/frameworks/vue/lifecycle/' },
								{ label: '07. Métodos y Funciones', link: '/frameworks/vue/methods-functions/' },
								{ label: '08. Formularios y Modelos', link: '/frameworks/vue/forms-models/' },
								{ label: '09. Directivas y Bindings', link: '/frameworks/vue/directives-bindings/' },
								{ label: '10. Slots', link: '/frameworks/vue/slots/' },
								{ label: '11. Comunicación entre Componentes', link: '/frameworks/vue/component-communication/' },
								{ label: '12. Estilos y CSS', link: '/frameworks/vue/styles-css/' },
								{ label: '13. Composables', link: '/frameworks/vue/composables/' },
								{ label: '14. Transiciones y Animaciones', link: '/frameworks/vue/transitions-animations/' },
								{ label: '15. Vue Router con Composition API', link: '/frameworks/vue/vue-router/' },
								{ label: '16. Pinia (Reemplazo de Vuex)', link: '/frameworks/vue/pinia/' },
								{ label: '17. Manejo de APIs y Fetch', link: '/frameworks/vue/api-fetch/' },
								{ label: '18. levantar un proyecto astro tailwind vue supabase', link: '/frameworks/vue/levantar-proyecto-vue-supabase/' },
							],
						},
						{
							label: '🦋 Laravel',
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
							label: '🐳 Inertia',
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
							label: '🪸 Java Swing',
							collapsed: true,
							items: [
								{ label: '1. Introducción a Java y Java Swing', link: '/frameworks/java-swing/introduccion/' },
								{ label: '2. Componentes Básicos de Swing', link: '/frameworks/java-swing/componentes-basicos/' },
								{ label: '3. Organización de Interfaces', link: '/frameworks/java-swing/organizacion-interfaces/' },
								{ label: '4. Tablas y Modelos Personalizados', link: '/frameworks/java-swing/tablas-modelos/' },
								{ label: '5. CRUD con Base de Datos', link: '/frameworks/java-swing/crud-bd/' },
								{ label: '6. Patrones de Diseño y Arquitecturas', link: '/frameworks/java-swing/patrones-arquitecturas/' }
							]
						},
						{
							label: '🦉 Alpine.js',
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
						{
							label: '⚡ FastAPI',
							collapsed: true,
							items: [
								{ label: '01. Introducción a FastAPI', link: '/frameworks/fastapi/introduccion/' },
								{ label: '02. Instalación y configuración del entorno', link: '/frameworks/fastapi/instalacion/' },
								{ label: '03. Creación de la primera API', link: '/frameworks/fastapi/primera-api/' },
								{ label: '04. Métodos HTTP en FastAPI', link: '/frameworks/fastapi/metodos-http/' },
								{ label: '05. Parámetros en las rutas', link: '/frameworks/fastapi/parametros-rutas/' },
								{ label: '06. Validación de datos con Pydantic', link: '/frameworks/fastapi/pydantic/' },
								{ label: '07. Envío y recepción de datos (Request Body)', link: '/frameworks/fastapi/request-body/' },
								{ label: '08. Documentación automática de FastAPI', link: '/frameworks/fastapi/documentacion/' },
								{ label: '09. Organización de proyectos FastAPI', link: '/frameworks/fastapi/organizacion-proyectos/' },
								{ label: '10. Conexión con base de datos', link: '/frameworks/fastapi/base-datos/' },
								{ label: '11. Autenticación y seguridad', link: '/frameworks/fastapi/autenticacion-seguridad/' }
							]
						},
					],
				},
				{
					label: '🐞 UML',
					collapsed: true,
					items: [
						{
							label: '🦉 Diag. Clases',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Clases', link: '/uml/diagramas-clases/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Clases', link: '/uml/diagramas-clases/elementos-basicos/' },
								{ label: '3. Relaciones Entre Clases', link: '/uml/diagramas-clases/relaciones/' },
								{ label: '4. Notación UML para Clases', link: '/uml/diagramas-clases/notacion/' },
							]
						},
						{
							label: '🦌 Diag. Casos de Uso',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Casos de Uso', link: '/uml/diagramas-casos-uso/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Casos de Uso', link: '/uml/diagramas-casos-uso/elementos-basicos/' },
								{ label: '3. Tipos de Relaciones en Casos de Uso', link: '/uml/diagramas-casos-uso/relaciones/' },
								{ label: '4. Ejemplos de Diagramas de Casos de Uso', link: '/uml/diagramas-casos-uso/ejemplos/' },
							]
						},
						{
							label: '🐢 Diag. Secuencia',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Secuencia', link: '/uml/diagramas-secuencia/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Secuencia', link: '/uml/diagramas-secuencia/elementos-basicos/' },
								{ label: '3. Tipos de Mensajes en un Diagrama de Secuencia', link: '/uml/diagramas-secuencia/tipos-mensajes/' },
								{ label: '4. Ejemplos de Diagramas de Secuencia', link: '/uml/diagramas-secuencia/ejemplos/' },
							]
						},
						{
							label: '🐝 Diag. Actividades',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Actividades', link: '/uml/diagramas-actividades/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Actividades', link: '/uml/diagramas-actividades/elementos-basicos/' },
								{ label: '3. Ejemplos de Diagramas de Actividades', link: '/uml/diagramas-actividades/ejemplos/' },
							]
						},
						{
							label: '🦋 Diag. Componentes',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Componentes', link: '/uml/diagramas-componentes/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Componentes', link: '/uml/diagramas-componentes/elementos-basicos/' },
								{ label: '3. Tipos de Relaciones en un Diagrama de Componentes', link: '/uml/diagramas-componentes/relaciones/' },
								{ label: '4. Notación UML para Diagramas de Componentes', link: '/uml/diagramas-componentes/notacion/' },
							]
						},
						{
							label: '🐏 Diag. Despliegue',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Despliegue', link: '/uml/diagramas-despliegue/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Despliegue', link: '/uml/diagramas-despliegue/elementos-basicos/' },
								{ label: '3. Tipos de Relaciones en un Diagrama de Despliegue', link: '/uml/diagramas-despliegue/relaciones/' },
								{ label: '4. Notación UML para Diagramas de Despliegue', link: '/uml/diagramas-despliegue/notacion/' },
							]
						},
						{
							label: '🐟 Diag. Entidad-Relación',
							collapsed: true,
							items: [
								{ label: '1. Introducción al Diagrama de Entidad-Relación', link: '/uml/diagramas-entidad-relacion/introduccion/' },
								{ label: '2. Elementos Básicos de un Diagrama de Entidad-Relación', link: '/uml/diagramas-entidad-relacion/elementos-basicos/' },
								{ label: '3. Tipos de Relaciones en un Diagrama de Entidad-Relación', link: '/uml/diagramas-entidad-relacion/relaciones/' },
								{ label: '4. Notación UML para Diagramas de Entidad-Relación', link: '/uml/diagramas-entidad-relacion/notacion/' },
							]
						},
					]
				},
				{
					label: '📚 Ingeniería de Software',
					collapsed: true,
					items: [
						{
							label: '💻 Ingeniería de Software',
							collapsed: true,
							items: [
								{ label: '1 Concepto y Propósito', link: '/is/ingenieria/concepto-y-proposito/' },
								{ label: '2 Alcance de la Ingeniería de Software', link: '/is/ingenieria/alcance/' },
								{ label: '3 Diferencia entre Programación e Ingeniería de Software', link: '/is/ingenieria/diferencia-programar-ingeniar/' },
								{ label: '4 Principales Desafíos del Desarrollo de Software', link: '/is/ingenieria/desafios-desarrollo/' },
							]
						},
						{
							label: '🐘 Ingeniería de Requerimientos',
							collapsed: true,
							items: [
								{ label: '1 Concepto y Propósito', link: '/is/requerimientos/concepto-proposito/' },
								{ label: '2 Tipos de Requerimientos', link: '/is/requerimientos/tipos-requerimientos/' },
								{ label: '3 Captura de Requerimientos', link: '/is/requerimientos/captura-requerimientos/' },
								{ label: '4 Análisis y Priorización', link: '/is/requerimientos/analisis-priorizacion/' },
								{ label: '5 Documentación de Requerimientos', link: '/is/requerimientos/documentacion/' },
							]
						},
						{
							label: '🦒 Ciclo de Vida del Software',
							collapsed: true,
							items: [
								{ label: '1 Concepto General del Ciclo de Vida', link: '/is/ciclo/concepto-general/' },
								{ label: '2 Fases del Ciclo de Vida del Software', link: '/is/ciclo/fases-principales/' },
								{ label: '3 Modelos de Desarrollo de Software', link: '/is/ciclo/modelos-desarrollo/' },
							]
						}
					]
				},
				{
					label: '💚 Metodologías',
					collapsed: true,
					items: [

					]
				},
				{
					label: '🍿 Utilidades',
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
					label: '📑 Referencia',
					collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
