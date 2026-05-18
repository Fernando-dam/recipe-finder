#  GUÍA COMPLETA: RECIPE FINDER

> Pasos detallados para ejecutar el Proyecto 1

---

##  TABLA DE CONTENIDOS

1. [Requisitos previos](#requisitos-previos)
2. [Descargar el proyecto](#descargar-el-proyecto)
3. [Instalar dependencias](#instalar-dependencias)
4. [Ejecutar en desarrollo](#ejecutar-en-desarrollo)
5. [Usar la aplicación](#usar-la-aplicación)
6. [Solución de problemas](#solución-de-problemas)

---

##  REQUISITOS PREVIOS

### Paso 1: Verificar Node.js

Abre tu terminal y ejecuta:

```bash
node --version
npm --version
```

**Deberías ver algo como:**
```
v18.17.0
9.6.7
```

**Si ves "command not found":**
- Descarga Node.js desde: https://nodejs.org/
- Instala la versión LTS
- Reinicia tu computadora
- Intenta de nuevo

---

##  DESCARGAR EL PROYECTO

### Opción A: Desde el ZIP descargado

**Paso 1:** Descarga `TODOS-LOS-PROYECTOS.zip`

**Paso 2:** Descomprime el archivo

**Paso 3:** Dentro encontrarás la carpeta `recipe-finder`

```
TODOS-LOS-PROYECTOS/
├── recipe-finder/          ← Este es el que necesitas
├── workout-logger/
└── documentacion/
```

---

### Opción B: Desde carpeta local

Si ya tienes los archivos:

```bash
# Navega a la carpeta
cd /ruta/a/recipe-finder
```

Reemplaza `/ruta/a/recipe-finder` con la ruta real en tu computadora.

**Ejemplo Windows:**
```bash
cd C:\Users\tuusuario\Descargas\recipe-finder
```

**Ejemplo Mac/Linux:**
```bash
cd ~/Descargas/recipe-finder
```

---

##  INSTALAR DEPENDENCIAS

### Paso 1: Abre Terminal en la carpeta del proyecto

**Windows:**
- Botón derecho en la carpeta → "Abrir terminal aquí"
- O: `CTRL + SHIFT + Click derecho` → "Abrir PowerShell aquí"

**Mac:**
- Abre Terminal
- Escribe: `cd /ruta/a/recipe-finder`

**Linux:**
- Botón derecho → "Abrir en terminal"
- O: `CTRL + ALT + T`

---

### Paso 2: Instalar paquetes

Escribe en la terminal:

```bash
npm install
```

**¿Qué sucede?**
- Se descargan todas las librerías necesarias
- Se crea una carpeta `node_modules`
- Toma 2-5 minutos
- Muestra mensajes mientras descarga

**Cuando termine verás:**
```
added XXX packages in 2m 15s
```

---

### Paso 3: Verifica la instalación

Si todo está bien, continúa al siguiente paso. 

Si hay error, ve a [Solución de problemas](#solución-de-problemas)

---

##  EJECUTAR EN DESARROLLO

### Paso 1: Inicia el servidor

En la misma terminal, escribe:

```bash
npm run dev
```

**¿Qué sucede?**
- Next.js se inicia
- Compila el código
- Escucha cambios en archivos
- Toma 10-15 segundos

---

### Paso 2: Espera a que aparezca

Verás algo como esto:

```
  ▲ Next.js 14.0.0

  - Local:        http://localhost:3000
  - Environments: .env.local

✓ Ready in 2s
```

**Cuando veas "Ready in..." significa que está listo.** 

---

### Paso 3: Abre el navegador

1. Abre tu navegador favorito (Chrome, Firefox, Safari, etc)
2. Ve a: `http://localhost:3000`
3. **Deberías ver:**


---

##  USAR LA APLICACIÓN

### Paso 1: Ingresa un ingrediente

En el cuadro de búsqueda, escribe un ingrediente:

**Ejemplos que funcionan:**
- `chicken` (pollo)
- `pizza` (pizza)
- `pasta` (pasta)
- `fish` (pescado)
- `beef` (carne)
- `vegetable` (verdura)

---

### Paso 2: Haz click en "Search"

```
┌────────────────────────┐
│ chicken                │
└────────────────────────┘
        [Search Button]
```

---

### Paso 3: Espera los resultados

Después de 2-3 segundos aparecerán recetas:



### Paso 4: Haz click en una receta

Click en cualquier tarjeta para ver detalles:



### Paso 5: Vuelve a buscar

Click "Back to search" para hacer otra búsqueda.

---

##  ESTRUCTURA DEL PROYECTO

Esto es lo que verás en la carpeta:

```
recipe-finder/
├── app/
│   ├── api/
│   │   └── recipes/           (API endpoints)
│   │       ├── search/route.ts
│   │       └── [id]/route.ts
│   ├── components/             (Componentes React)
│   │   ├── SearchBar.tsx
│   │   └── RecipeGrid.tsx
│   ├── recipe/                 (Páginas dinámicas)
│   │   └── [id]/page.tsx
│   ├── page.tsx                (Página principal)
│   ├── layout.tsx              (Layout base)
│   └── globals.css             (Estilos)
├── lib/
│   ├── db/
│   │   ├── schema.ts           (Schema Drizzle)
│   │   └── index.ts            (Cliente DB)
│   └── types.ts                (Tipos TypeScript)
├── public/                      (Imágenes estáticas)
├── package.json                (Dependencias)
├── tsconfig.json               (Config TypeScript)
├── tailwind.config.ts          (Config Tailwind)
├── next.config.js              (Config Next.js)
└── README.md                   (Documentación)
```

---

##  EDITAR Y MODIFICAR

### Ver archivo de búsqueda

Abre en tu editor (VS Code, etc):

```
app/components/SearchBar.tsx
```

Aquí puedes cambiar:
- Textos del formulario
- Estilos
- Validaciones

### Ver API

Abre:

```
app/api/recipes/search/route.ts
```

Aquí está la lógica de búsqueda.

### Ver páginas

Abre:

```
app/page.tsx          (Página principal)
app/recipe/[id]/page.tsx  (Detalles de receta)
```

---

##  FLUJO DE LA APLICACIÓN

```
1. Usuario ingresa ingrediente en SearchBar
   ↓
2. Click "Search"
   ↓
3. Llamada a /api/recipes/search?q=ingrediente
   ↓
4. API consulta TheMealDB
   ↓
5. Retorna recetas en JSON
   ↓
6. RecipeGrid muestra resultados
   ↓
7. User click en receta
   ↓
8. Va a /recipe/[id]
   ↓
9. API obtiene detalles desde TheMealDB
   ↓
10. Muestra página completa con ingredientes e instrucciones
```

---

##  SOLUCIÓN DE PROBLEMAS

### Problema 1: "npm: command not found"

**Causa:** Node.js no está instalado

**Solución:**
1. Descarga Node.js desde https://nodejs.org/
2. Instala normalmente
3. Reinicia tu computadora
4. Vuelve a intentar

---

### Problema 2: "npm install tarda mucho"

**Causa:** Conexión lenta

**Solución:**
```bash
# Limpia cache
npm cache clean --force

# Intenta de nuevo
npm install
```

---

### Problema 3: "Port 3000 already in use"

**Causa:** Otro programa usa el puerto 3000

**Solución:**
```bash
# Usa otro puerto
npm run dev -- --port 3001

# Luego abre:
http://localhost:3001
```

---

### Problema 4: "Cannot GET /api/recipes/search"

**Causa:** API no responde

**Solución:**
1. Verifica conexión a internet
2. Recarga la página (F5)
3. Verifica que TheMealDB esté online

---

### Problema 5: "No recipes found"

**Causa:** Ingrediente inválido o no existe

**Solución:**
- Intenta otros ingredientes: chicken, pizza, pasta, fish, beef
- Escribe en inglés
- Intenta con nombres más comunes

---

### Problema 6: "Cannot find module 'next'"

**Causa:** node_modules no instalado correctamente

**Solución:**
```bash
# Elimina node_modules
rm -rf node_modules

# Limpia cache
npm cache clean --force

# Reinstala
npm install
```

---

##  GUARDAR CAMBIOS

Después de editar archivos:

1. **Guarda el archivo** (CTRL + S en editor)
2. **Recarga navegador** (F5 o CTRL + R)
3. **Cambios aparecen automáticamente**

NextJS tiene "hot reload" - se actualiza solo.

---

##  DETENER EL SERVIDOR

Cuando quieras parar la aplicación:

**En la terminal presiona:** `CTRL + C`

Verás:
```
^C
$
```

Listo. El servidor se detiene.

---

## INFORMACIÓN DE LA API

### TheMealDB API

La aplicación usa TheMealDB (gratis):
- **URL:** https://www.themealdb.com/api.php
- **Sin autenticación requerida**
- **+1000 recetas disponibles**

---

## USAR EN MÓVIL

1. En tu computadora ejecuta: `npm run dev`
2. En móvil, ve a: `http://[TU-IP]:3000`
   - Reemplaza [TU-IP] con tu IP local
   - Ej: `http://192.168.1.100:3000`

---

## SIGUIENTES PASOS

Después de que funcione:

1. **Explora el código** en VS Code
2. **Modifica estilos** en `app/globals.css`
3. **Cambiar colores** en `tailwind.config.ts`
4. **Agregar features** como guardar favoritos
5. **Deploy en Vercel** (opcional)

---

##  RESUMEN RÁPIDO

```bash
# 1. Navega a carpeta
cd /ruta/a/recipe-finder

# 2. Instala dependencias
npm install

# 3. Ejecuta
npm run dev

# 4. Abre navegador
http://localhost:3000

# ¡LISTO! 
```

---

##  SOPORTE

Si algo no funciona:
1. Lee [Solución de problemas](#solución-de-problemas)
2. Verifica los requisitos previos
3. Intenta en otra terminal
4. Reinicia tu computadora

---


