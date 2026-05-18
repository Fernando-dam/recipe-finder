#  Buscador de Recetas

Una aplicación web para buscar recetas por ingredientes. Integrada con **TheMealDB API** para acceso a miles de recetas gratuitas.

##  Características

-  **Búsqueda por ingrediente**: Encuentra recetas filtrando por ingredientes
-  **Diseño responsive**: Interfaz moderna y adaptable a cualquier dispositivo
-  **Detalles completos**: Ingredientes, medidas, instrucciones paso a paso
-  **Links a videos**: Acceso a tutoriales en YouTube
-  **Rápida y optimizada**: Construida con Next.js y TailwindCSS

## Stack Técnico

**Frontend:**
- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Estilos CSS
- **React Hooks** - State management

**Backend:**
- **Next.js Route Handlers** - API endpoints serverless
- **TheMealDB API** - Source de datos de recetas

**Base de Datos:**
- **SQLite** - Base de datos ligera (preparada para futuras features)
- **Drizzle ORM** - Type-safe database operations
- **better-sqlite3** - SQLite driver para Node.js

## Cómo Empezar

### Requisitos
- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/recipe-finder.git
cd recipe-finder

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Configurar Base de Datos (Opcional)

```bash
# Generar migrations de Drizzle
npm run db:generate

# Push schema a SQLite
npm run db:push
```

## Estructura del Proyecto

```
recipe-finder/
├── app/
│   ├── api/
│   │   ├── recipes/
│   │   │   ├── search/route.ts      # API para buscar por ingrediente
│   │   │   └── [id]/route.ts        # API para detalles de receta
│   ├── components/
│   │   ├── SearchBar.tsx             # Componente de búsqueda
│   │   └── RecipeGrid.tsx            # Grid de resultados
│   ├── recipe/
│   │   └── [id]/page.tsx             # Página de detalles
│   ├── layout.tsx
│   ├── page.tsx                      # Home
│   └── globals.css
├── lib/
│   ├── db/
│   │   ├── schema.ts                 # Drizzle schema
│   │   └── index.ts                  # Database client
│   └── types.ts                      # TypeScript types
├── drizzle.config.ts
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🔌 API Endpoints

### GET `/api/recipes/search`
Busca recetas por ingrediente.

**Query params:**
- `q` (required): Ingrediente a buscar (ej: "chicken", "pizza")

**Response:**
```json
{
  "meals": [
    {
      "idMeal": "52874",
      "strMeal": "Chicken Handi",
      "strMealThumb": "https://..."
    }
  ]
}
```

### GET `/api/recipes/[id]`
Obtiene detalles completos de una receta.

**Response:**
```json
{
  "meal": {
    "idMeal": "52874",
    "strMeal": "Chicken Handi",
    "strCategory": "Chicken",
    "strArea": "Indian",
    "strInstructions": "...",
    "strIngredient1": "Ghee",
    "strMeasure1": "100g",
    ...
  }
}
```

## Decisiones Técnicas

### Por qué Next.js?
-  SSR y SSG para mejor SEO
-  API Routes integradas (sin servidor externo)
-  Optimizaciones automáticas (images, fonts)
-  Deploy simple en Vercel

### Por qué TailwindCSS?
-  Utility-first: desarrollo más rápido
-  Diseño consistente sin escribir CSS
-  Responsive design simplificado

### Por qué Drizzle + SQLite?
-  SQLite: sin dependencias externas, perfecto para MVPs
-  Drizzle: type-safe, queries en TypeScript
-  Preparado para migrar a PostgreSQL si crece

### Por qué TheMealDB API?
-  Libre y sin autenticación
-  +1000 recetas disponibles
-  Datos estructurados (ingredientes, medidas)

### Qué hice 100% manual:
- Commits incrementales y bien descriptos
- Configuración de TypeScript y Drizzle
- Decisiones de arquitectura y API design
- README y documentación

## Deploy

La app está lista para desplegar en **Vercel**:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Nota**: SQLite en Vercel requiere usar D1 (Cloudflare) o simplemente remover la parte de base de datos ya que la API es stateless.

##Próximas Features (Ideas)

-  Guardar recetas favoritas (usar DB + autenticación)
-  Filtrar por categoría/cocina
-  Ver recetas por país
-  Share recetas en redes sociales
-  Modo oscuro
-  Rating y comentarios

##Licencia

MIT

## Autor

Creado con usando Next.js, TypeScript y TailwindCSS

---

**Commits:**
1. Setup inicial - Next.js, TypeScript, TailwindCSS
2. Schema Drizzle + SQLite
3. API routes para búsqueda de recetas (TheMealDB)
4. Componentes SearchBar y RecipeGrid
5. Página de detalles con ingredientes e instrucciones
6. README y documentación final
