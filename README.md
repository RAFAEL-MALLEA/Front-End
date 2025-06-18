# 🚀 Dashboard Kalifind - Vendor Analytics Platform

## 📋 Descripción del Proyecto

Dashboard interactivo para análisis de datos de vendors con gráficos dinámicos, filtros avanzados y visualización de KPIs en tiempo real. Construido con React 18, TypeScript y Tailwind CSS.

## ✨ Características Principales

### 📊 **Visualización de Datos**

- **Gráficos Interactivos:** Donut y barras con tooltips personalizados
- **KPI Cards:** Indicadores clave con progreso circular
- **Tabla Dinámica:** Historial de búsquedas con paginación

### 🔍 **Sistema de Filtros Avanzados**

- **Búsqueda por texto:** Filtrado en tiempo real
- **Filtros numéricos:** Rangos personalizables
- **Reset automático:** Limpieza de filtros con un click

### 📱 **Diseño Responsivo**

- **Mobile First:** Optimizado para dispositivos móviles
- **Desktop Enhanced:** Experiencia rica en pantallas grandes
- **Touch Friendly:** Interfaces táctiles optimizadas

### 🎨 **Sistema de Design**

- **Sidebar Blanco:** Navegación limpia y moderna
- **Componentes Reutilizables:** Arquitectura modular
- **Accesibilidad:** ARIA labels y navegación por teclado

## 🛠️ Tecnologías

| Categoría    | Tecnología   | Versión | Propósito              |
| ------------ | ------------ | ------- | ---------------------- |
| **Core**     | React        | 18.3.1  | Framework principal    |
| **Tipos**    | TypeScript   | 5.5.3   | Tipado estático        |
| **Build**    | Vite         | 6.2.2   | Bundler y dev server   |
| **Estilos**  | Tailwind CSS | 3.4.11  | Utilidades CSS         |
| **Gráficos** | Recharts     | 2.12.7  | Visualización de datos |
| **Iconos**   | Lucide React | 0.462.0 | Librería de iconos     |
| **Routing**  | React Router | 6.26.2  | Navegación client-side |
| **Testing**  | Vitest       | 3.1.4   | Framework de pruebas   |

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd dashboard-kalifind

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en navegador
# http://localhost:8080
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con HMR

# Producción
npm run build        # Build optimizado para producción

# Calidad de Código
npm run typecheck    # Verificación de tipos TypeScript
npm run format.fix   # Formateo automático con Prettier

# Testing
npm test            # Ejecutar tests unitarios
```

## 📁 Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── components/
│   ├── dashboard/          # Componentes específicos del dashboard
│   │   ├── Charts.tsx      # 📊 Gráficos interactivos
│   │   ├── FilterPanel.tsx # 🔍 Panel de filtros
│   │   ├── Header.tsx      # 🏠 Cabecera del dashboard
│   │   ├── KPICard.tsx     # 📈 Tarjetas de KPIs
│   │   ├── SearchHistoryTable.tsx # 🗂️ Tabla de datos
│   │   └── Sidebar.tsx     # 🧩 Navegación lateral
│   └── ui/
│       └── button.tsx      # 🔘 Componente botón base
├── context/
│   └── DashboardContext.tsx # 🌐 Estado global
├── lib/
│   ├── utils.ts           # ⚙️ Utilidades
│   └── utils.spec.ts      # 🧪 Tests de utilidades
└── pages/
    ├── Dashboard.tsx      # 🏠 Página principal
    └── NotFound.tsx       # ❌ Página 404
```

### Patrones de Arquitectura

#### 🔄 **Context + Provider Pattern**

```typescript
// Estado global distribuido a través de Context
<DashboardProvider>
  <Dashboard />
</DashboardProvider>
```

#### 🧩 **Compound Components**

```typescript
// Componentes que colaboran entre sí
<SearchHistoryTable>
  <FilterPanel />
</SearchHistoryTable>
```

#### 🎯 **Custom Hooks**

```typescript
// Encapsulación de lógica reutilizable
const { filteredData, updateFilter } = useDashboard();
```

## 📊 Componentes Principales

### 1. 📈 **KPICard Component**

Tarjeta que muestra un indicador clave con gráfico circular de progreso.

```typescript
interface KPICardProps {
  title: string;        // "Total Search"
  value: string;        // "50,000"
  percentage: number;   // 67
  color: "red" | "blue" | "green";
}

// Uso
<KPICard
  title="Total Sales"
  value="$9,000.00"
  percentage={85}
  color="green"
/>
```

**Características:**

- Gráfico SVG circular animado
- Colores temáticos configurables
- Responsive design
- Efectos hover suaves

### 2. 📊 **Charts Component**

Sistema de gráficos interactivos con tooltips personalizados.

```typescript
// Gráficos incluidos
- Donut Chart: Top productos clickeados
- Bar Chart: Métricas mensuales por categoría

// Interactividad
- Tooltips informativos
- Efectos hover
- Animaciones CSS
- Grid de referencia
```

**Datos Mostrados:**

- **Donut:** Red Hat (10K clicks), Cricket bat (20K clicks)
- **Barras:** Searches, Clicks, Cart por mes (ENE-MAY)

### 3. 🔍 **FilterPanel Component**

Panel de filtros avanzados para la tabla de datos.

```typescript
// Filtros disponibles
- searchName: string          // Búsqueda por texto
- maxQuantity: number        // Cantidad máxima
- maxClicks: number          // Clicks máximos
- maxConversionRate: number  // Tasa conversión máxima
- maxTotalSales: number      // Ventas máximas

// Funcionalidades
- Búsqueda en tiempo real
- Validación de rangos
- Reset de filtros
- Contador de resultados
```

### 4. 🗂️ **SearchHistoryTable Component**

Tabla dinámica con datos filtrados y estado de carga.

```typescript
// Columnas mostradas
- Search Name: Nombre del producto
- Search Quantity: Cantidad de búsquedas
- Clicks: Número de clicks
- Conversion Rate: Porcentaje de conversión
- Total Sales: Ventas en dólares

// Estados manejados
- Datos filtrados dinámicos
- Estado vacío con mensaje
- Formateo de números
- Responsive design
```

### 5. 🧩 **Sidebar Component**

Navegación lateral con perfil y menú.

```typescript
// Secciones incluidas
1. Perfil Usuario:
   - Avatar real (imagen)
   - Nombre: Sophie Devine
   - Rol: Admin

2. Menú Navegación:
   - Dashboard (activo)
   - My E-commerce
   - Search Lab
   - Filter State
   - Real Time State
   - Boosting Rules
   - Setting

3. Logo Corporativo:
   - Imagen Kalifind responsiva
```

**Responsividad:**

- Desktop: Sidebar fijo 256px
- Móvil: Overlay con backdrop
- Avatar: 32px móvil, 40px desktop

## 🎨 Sistema de Design

### Colores Principales

```css
/* Sidebar y acentos */
--sidebar: #6366f1;
--sidebar-dark: #4f46e5;

/* Dashboard backgrounds */
--dashboard-bg: #f8fafc;
--dashboard-card: #ffffff;
--dashboard-border: #e5e7eb;

/* Texto */
--text-primary: #1f2937;
--text-secondary: #6b7280;
--text-muted: #9ca3af;

/* Acentos de gráficos */
--accent-red: #ef4444;
--accent-green: #10b981;
--accent-blue: #3b82f6;
```

### Espaciado y Tipografía

```css
/* Espacios */
padding: 1rem (16px) - 1.5rem (24px)
margin: 0.5rem (8px) - 2rem (32px)

/* Tamaños de texto */
text-xs: 12px    /* Labels secundarios */
text-sm: 14px    /* Texto principal */
text-base: 16px  /* Texto destacado */
text-lg: 18px    /* Títulos de sección */
text-xl: 20px    /* Títulos principales */
```

### Breakpoints Responsivos

```css
/* Mobile first approach */
default: 0px+        /* Móvil */
md: 768px+          /* Tablet */
lg: 1024px+         /* Desktop */
xl: 1280px+         /* Desktop grande */
```

## 🔄 Flujo de Datos

### Estado Global (DashboardContext)

```typescript
// Datos principales
const sampleSearchData: SearchData[] = [
  // 10 productos con datos realistas
  { id, name, quantity, clicks, conversionRate, totalSales, category, month },
];

// Filtros aplicados
const [filters, setFilters] = useState<FilterState>({
  searchName: "",
  maxQuantity: 1000,
  maxClicks: 50000,
  maxConversionRate: 20,
  maxTotalSales: 5000000,
});

// Datos procesados
const filteredData = useMemo(() => {
  return sampleSearchData.filter(/* lógica de filtrado */);
}, [filters]);
```

### Proceso de Filtrado

```
1. Usuario modifica filtro
   ↓
2. FilterPanel llama updateFilter()
   ↓
3. DashboardContext actualiza estado
   ↓
4. useMemo recalcula filteredData
   ↓
5. SearchHistoryTable re-renderiza
   ↓
6. UI actualizada instantáneamente
```

## 🧪 Testing

### Configuración de Tests

```typescript
// Framework: Vitest
// Ubicación: src/lib/utils.spec.ts

describe("utils", () => {
  test("cn combines classes correctly", () => {
    expect(cn("class1", "class2")).toBe("class1 class2");
  });
});
```

### Ejecutar Tests

```bash
# Tests unitarios
npm test

# Tests con coverage
npm run test:coverage

# Tests en modo watch
npm run test:watch
```

## 🚀 Deploy y Producción

### Build de Producción

```bash
# Crear build optimizado
npm run build

# Estructura generada
dist/
├── index.html           # HTML principal
├── assets/
│   ├── index-[hash].css # Estilos compilados
│   └── index-[hash].js  # JavaScript bundled
```

### Optimizaciones Incluidas

- **Tree shaking:** Eliminación de código no usado
- **Code splitting:** División automática de chunks
- **Minificación:** CSS y JS comprimidos
- **Asset optimization:** Imágenes y fuentes optimizadas

## 🔧 Personalización

### Añadir Nuevos Filtros

```typescript
// 1. Actualizar interface FilterState
interface FilterState {
  // ... filtros existentes
  newFilter: number;
}

// 2. Añadir al FilterPanel
<input
  value={filters.newFilter}
  onChange={(e) => updateFilter("newFilter", Number(e.target.value))}
/>

// 3. Implementar lógica en filteredData
item.newField <= filters.newFilter
```

### Crear Nuevos Componentes

```typescript
// 1. Crear en src/components/dashboard/
// 2. Seguir patrón de props tipadas
interface NewComponentProps {
  title: string;
  data: DataType[];
}

// 3. Implementar responsividad
className="p-4 lg:p-6 text-sm lg:text-base"

// 4. Añadir al Dashboard principal
<NewComponent title="Mi Componente" data={filteredData} />
```

## 📚 Recursos Adicionales

### Documentación de Dependencias

- [React 18 Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Recharts](https://recharts.org/en-US/)
- [Vite Guide](https://vitejs.dev/guide/)

### Patrones Recomendados

- **Atomic Design:** Estructura de componentes
- **Container/Presenter:** Separación de lógica y UI
- **Custom Hooks:** Reutilización de lógica
- **Context Pattern:** Estado global

---

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork del repositorio
2. Crear branch de feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Kalifind Analytics Platform**
