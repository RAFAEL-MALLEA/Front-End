# 📚 Documentación Completa del Dashboard Kalifind

## 🏗️ Estructura del Proyecto

```
src/
├── components/           # Componentes reutilizables
│   ├── dashboard/       # Componentes específicos del dashboard
│   │   ├── Charts.tsx           # Gráficos interactivos (donut y barras)
│   │   ├── FilterPanel.tsx      # Panel de filtros avanzados
│   │   ├── Header.tsx           # Cabecera del dashboard
│   │   ├── KPICard.tsx          # Tarjetas de indicadores clave
│   │   ├── SearchHistoryTable.tsx # Tabla de historial de búsquedas
│   │   └── Sidebar.tsx          # Barra lateral de navegación
│   └── ui/              # Componentes de interfaz base
│       └── button.tsx           # Componente botón reutilizable
├── context/             # Contextos de React para estado global
│   └── DashboardContext.tsx     # Estado global del dashboard
├── lib/                 # Utilidades y funciones helper
│   ├── utils.ts                # Funciones utilitarias
│   └── utils.spec.ts           # Tests para las utilidades
├── pages/              # Páginas principales de la aplicación
│   ├── Dashboard.tsx           # Página principal del dashboard
│   └── NotFound.tsx           # Página de error 404
├── App.tsx             # Componente raíz con routing
├── main.tsx           # Punto de entrada de la aplicación
├── index.css         # Estilos globales
├── App.css          # Estilos específicos de App
└── vite-env.d.ts    # Declaraciones de tipos para Vite
```

---

## 📂 Documentación por Carpetas

### 🎯 /src/components/dashboard/

Esta carpeta contiene todos los componentes específicos del dashboard, cada uno con una responsabilidad clara y definida.

#### 📊 Charts.tsx

**Propósito:** Renderiza los gráficos principales del dashboard (donut y barras) con interactividad completa.

**Funcionalidades:**

- **Gráfico Donut:** Muestra los productos más clickeados con tooltips personalizados
- **Gráfico de Barras:** Visualiza datos de empresa por mes con múltiples métricas
- **Interactividad:** Efectos hover, tooltips informativos, animaciones suaves
- **Responsivo:** Se adapta automáticamente a diferentes tamaños de pantalla

**Datos Utilizados:**

```javascript
// Datos estáticos del gráfico donut
donutData = [
  { name: "Red Hat", value: 10000, percentage: 33.3% },
  { name: "Cricket bat", value: 20000, percentage: 66.7% }
]

// Datos estáticos del gráfico de barras (por mes)
barData = [JAN, FEB, MAR, APR, MAY] con métricas de búsquedas, clicks y carrito
```

**Librerías:** Recharts, Lucide React

---

#### 🔍 FilterPanel.tsx

**Propósito:** Panel de filtros interactivo que permite filtrar los datos de la tabla de historial.

**Características:**

- **Filtro por nombre:** Búsqueda de texto en tiempo real
- **Filtros numéricos:** Valores máximos para cantidad, clicks, conversión y ventas
- **UI intuitiva:** Dropdown desplegable con botones de reset y cierre
- **Feedback visual:** Contador de resultados filtrados y estado activo

**Estados Manejados:**

- `isOpen`: Controla la visibilidad del panel
- Conexión con `DashboardContext` para filtros globales

---

#### 🏠 Header.tsx

**Propósito:** Cabecera superior del dashboard con título y controles.

**Elementos:**

- **Título principal:** "Dashboard"
- **Selector de fechas:** Rango temporal (11 may 2022 - 3 june 2022)
- **Botón de cuenta:** Acceso a configuración de usuario

**Responsividad:** Adaptable a móvil y desktop

---

#### 📈 KPICard.tsx

**Propósito:** Tarjetas que muestran indicadores clave de rendimiento con gráficos circulares.

**Props Recibidas:**

```typescript
interface KPICardProps {
  title: string; // Título del KPI
  value: string; // Valor principal
  percentage: number; // Porcentaje para el gráfico circular
  color: "red" | "blue" | "green"; // Color del tema
}
```

**Funcionalidades:**

- **Gráfico circular SVG:** Progreso visual del porcentaje
- **Colores temáticos:** Rojo, azul, verde según el tipo de métrica
- **Animaciones:** Cálculo dinámico del stroke-dasharray

---

#### 🗂️ SearchHistoryTable.tsx

**Propósito:** Tabla principal que muestra el historial de búsquedas con datos filtrados.

**Características:**

- **Datos dinámicos:** Se actualiza según filtros aplicados
- **Columnas:** Nombre, Cantidad, Clicks, Tasa de conversión, Ventas totales
- **Estado vacío:** Mensaje amigable cuando no hay resultados
- **Formateo:** Números con separadores de miles y formato de moneda

**Integración:** Utiliza `DashboardContext` para datos filtrados

---

#### 🔧 Sidebar.tsx

**Propósito:** Barra lateral de navegación con perfil de usuario y menú.

**Secciones:**

1. **Perfil de usuario:**

   - Avatar real de Sophie Devine (imagen responsiva)
   - Nombre y rol
   - Diseño adaptativo móvil/desktop

2. **Menú de navegación:**

   - Dashboard (activo)
   - My E-commerce
   - Search Lab
   - Filter State
   - Real Time State
   - Boosting Rules
   - Setting

3. **Logo corporativo:**
   - Imagen del logo Kalifind responsiva

**Responsividad:** Panel colapsable en móvil con overlay

---

### 🧩 /src/components/ui/

#### 🔘 button.tsx

**Propósito:** Componente botón reutilizable y customizable.

**Características:**

- **Variantes:** default, destructive, outline, secondary, ghost, link
- **Tamaños:** default, sm, lg, icon
- **Accesibilidad:** Focus states, ring indicators
- **Flexibilidad:** Acepta children y props de HTML button

**Implementación:** Utiliza `class-variance-authority` para variantes tipadas

---

### 🌐 /src/context/

#### 🔄 DashboardContext.tsx

**Propósito:** Estado global del dashboard y lógica de filtrado.

**Interfaces Principales:**

```typescript
interface SearchData {
  id: string;
  name: string;
  quantity: number;
  clicks: number;
  conversionRate: number;
  totalSales: number;
  category: string;
  month: string;
}

interface FilterState {
  searchName: string;
  maxQuantity: number;
  maxClicks: number;
  maxConversionRate: number;
  maxTotalSales: number;
}
```

**Funcionalidades:**

- **Datos mock:** 10 productos con datos realistas distribuidos por meses
- **Filtrado reactivo:** useMemo para optimización de rendimiento
- **Gestión de estado:** useState para filtros
- **Provider pattern:** Distribuye estado a componentes hijos

**Métodos Expuestos:**

- `updateFilter()`: Actualiza filtros individuales
- `resetFilters()`: Restaura filtros a valores iniciales
- `getChartData()`: Procesa datos para gráficos (no usado actualmente)

---

### 🛠️ /src/lib/

#### ⚙️ utils.ts

**Propósito:** Funciones utilitarias para el proyecto.

**Función Principal:**

```typescript
function cn(...inputs: ClassValue[]): string;
```

- **Combina:** clsx + tailwind-merge
- **Optimiza:** Conflictos de clases de Tailwind
- **Flexibilidad:** Acepta strings, objetos, arrays de clases

#### 🧪 utils.spec.ts

**Propósito:** Tests unitarios para las funciones utilitarias.

**Framework:** Vitest
**Cobertura:** Función `cn` y casos edge

---

### 📄 /src/pages/

#### 🏠 Dashboard.tsx

**Propósito:** Página principal que ensambla todos los componentes del dashboard.

**Estructura:**

1. **Layout principal:** Flex horizontal
2. **Sidebar:** Navegación lateral con panel móvil
3. **Contenido principal:**
   - Header superior
   - Grid de KPI cards
   - Gráficos (Charts)
   - Tabla de historial

**Estado Local:**

- `sidebarOpen`: Control del panel móvil

**Responsividad:**

- Desktop: Sidebar fijo
- Móvil: Sidebar overlay con backdrop

#### ❌ NotFound.tsx

**Propósito:** Página de error 404 para rutas no encontradas.

**Características:**

- **Diseño limpio:** Centrado con mensaje claro
- **Logging:** useEffect que registra intentos de acceso
- **Navegación:** Link de retorno al home

---

### 🔗 /src/ (Archivos Raíz)

#### 🎯 App.tsx

**Propósito:** Componente raíz con configuración de rutas.

**Rutas Definidas:**

- `/` → Dashboard (principal)
- `*` → NotFound (catch-all)

**Tecnología:** React Router 6

#### 🚀 main.tsx

**Propósito:** Punto de entrada de la aplicación React.

**Configuración:**

- Modo StrictMode para desarrollo
- Montaje en elemento root del DOM
- Importación de estilos globales

#### 🎨 index.css

**Propósito:** Estilos globales y configuración de Tailwind.

**Contenido:**

- Directivas de Tailwind (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
- Variables CSS personalizadas para temas
- Estilos de scrollbar personalizados
- Reset básico de estilos

#### 🎨 App.css

**Propósito:** Estilos específicos del componente App (actualmente vacío).

#### 📝 vite-env.d.ts

**Propósito:** Declaraciones de tipos para Vite.

**Contenido:** `/// <reference types="vite/client" />`

---

## 🔧 Tecnologías Utilizadas

### Frontend Framework

- **React 18:** Librería principal de UI
- **TypeScript:** Tipado estático
- **Vite:** Build tool y dev server

### UI y Styling

- **Tailwind CSS:** Framework de utilidades CSS
- **Radix UI:** Componentes primitivos accesibles
- **Class Variance Authority:** Variantes de componentes tipadas
- **Lucide React:** Librería de iconos

### Gráficos y Visualización

- **Recharts:** Librería de gráficos basada en D3
- **SVG:** Gráficos circulares personalizados

### Navegación y Estado

- **React Router 6:** Enrutamiento client-side
- **React Context:** Manejo de estado global
- **React Hooks:** useState, useMemo, useEffect

### Testing y Desarrollo

- **Vitest:** Framework de testing
- **ESLint + Prettier:** Linting y formateo

---

## 🎨 Patrones de Diseño Implementados

### 1. **Provider Pattern**

- `DashboardContext` provee estado global
- Evita prop drilling entre componentes

### 2. **Compound Components**

- Componentes que trabajan juntos (`FilterPanel` + `SearchHistoryTable`)
- Separación clara de responsabilidades

### 3. **Custom Hooks**

- `useDashboard()` encapsula lógica del contexto
- Reutilización de lógica entre componentes

### 4. **Responsive Design**

- Mobile-first approach
- Breakpoints consistentes (`lg:`, `md:`)
- Componentes adaptables

### 5. **Atomic Design**

- Atoms: `Button`, `KPICard`
- Molecules: `FilterPanel`, `Header`
- Organisms: `Sidebar`, `Charts`
- Pages: `Dashboard`

---

## 🚀 Características Destacadas

### ⚡ Performance

- **Memoización:** useMemo en filtros para evitar recálculos
- **Lazy Loading:** Componentes cargados bajo demanda
- **SVG optimizado:** Gráficos circulares con CSS puro

### 📱 Accesibilidad

- **ARIA labels:** En botones e interacciones
- **Focus states:** Indicadores visuales claros
- **Semantic HTML:** Estructura semánticamente correcta

### 🎯 UX/UI

- **Feedback visual:** Estados de hover, loading, empty
- **Animaciones suaves:** Transiciones CSS optimizadas
- **Consistencia visual:** Sistema de design cohesivo

### 🔒 Tipado

- **Interfaces claras:** TypeScript en toda la aplicación
- **Props tipadas:** Validación en tiempo de compilación
- **Type safety:** Prevención de errores en runtime

---

## 🔄 Flujo de Datos

```
Usuario aplica filtro
    ↓
FilterPanel actualiza estado
    ↓
DashboardContext procesa cambio
    ↓
useMemo recalcula filteredData
    ↓
SearchHistoryTable re-renderiza
    ↓
UI actualizada con nuevos datos
```

---

## 📊 Datos del Dashboard

### KPI Cards

1. **Total Search:** 50,000 (67% progreso)
2. **CTR:** 50% (60% progreso)
3. **Total Sales:** $9,000.00 (85% progreso)

### Gráficos

- **Donut:** Red Hat (10K), Cricket bat (20K)
- **Barras:** Datos mensuales de búsquedas, clicks y carrito

### Tabla de Historial

- **10 productos** con datos completos
- **Filtrable** por todos los campos
- **Responsiva** en todas las pantallas

---

Esta documentación refleja el estado actual del proyecto y puede servir como guía para futuros desarrolladores o mantenimiento del código.
