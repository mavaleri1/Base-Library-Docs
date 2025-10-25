# Mathematical Formula Rendering

Base Library provides comprehensive support for mathematical formula rendering using LaTeX syntax and KaTeX engine. This system enables the creation of educational materials with complex mathematical expressions, equations, and scientific notation.

## Overview

The mathematical formula rendering system supports:

- **LaTeX Syntax** - Full LaTeX mathematical notation support
- **Inline Formulas** - Mathematical expressions within text
- **Display Formulas** - Centered, block-level mathematical expressions
- **Complex Mathematics** - Integrals, derivatives, matrices, and systems of equations
- **Scientific Notation** - Proper rendering of scientific and engineering notation
- **Code Highlighting** - Syntax highlighting for programming examples

## Supported Formula Types

### Basic Mathematical Operations

#### Arithmetic Operations
```latex
$a + b = c$                    % Addition
$x^2 + y^2 = r^2$             % Pythagorean theorem
$\sqrt{x}$                    % Square root
$\frac{a}{b}$                 % Fractions
```

#### Exponents and Powers
```latex
$x^2$                         % Superscript
$x^{n+1}$                     % Complex superscript
$x_1$                         % Subscript
$x_{i,j}$                     % Complex subscript
```

#### Fractions and Ratios
```latex
$\frac{1}{2}$                 % Simple fraction
$\frac{x^2 + 1}{x - 1}$      % Complex fraction
$\sqrt{\frac{a}{b}}$          % Fraction under radical
```

### Advanced Mathematical Concepts

#### Calculus
```latex
% Derivatives
$\frac{dy}{dx}$               % First derivative
$\frac{d^2y}{dx^2}$           % Second derivative
$\frac{\partial f}{\partial x}$ % Partial derivative

% Integrals
$\int_0^1 x^2 dx$             % Definite integral
$\int_{-\infty}^{\infty} e^{-x^2} dx$ % Improper integral
$\iint_D f(x,y) dx dy$        % Double integral
$\oint_C \vec{F} \cdot d\vec{r}$ % Line integral
```

#### Linear Algebra
```latex
% Matrices
$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$                % 2x2 matrix

$\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}$                % 3x3 matrix

% Determinants
$\det(A) = \begin{vmatrix}
a & b \\
c & d
\end{vmatrix}$                % 2x2 determinant
```

#### Systems of Equations
```latex
$\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}$                  % System of equations

$\begin{align}
x + y &= 5 \\
2x - y &= 1
\end{align}$                  % Aligned equations
```

### Scientific Notation

#### Physics Formulas
```latex
$E = mc^2$                    % Einstein's mass-energy equivalence
$F = ma$                      % Newton's second law
$E = \frac{1}{2}mv^2$         % Kinetic energy
$U = mgh$                     % Potential energy
```

#### Chemistry Formulas
```latex
$H_2O$                        % Water molecule
$CO_2$                        % Carbon dioxide
$CH_4$                        % Methane
$C_6H_{12}O_6$                % Glucose
```

#### Engineering Notation
```latex
$P = VI$                      % Electrical power
$R = \frac{V}{I}$             % Ohm's law
$P = \frac{V^2}{R}$           % Power formula
```

## Implementation

### Component Usage

#### Basic Implementation
```tsx
import { MarkdownViewer } from '@/components/common';

function MyComponent() {
  const content = `
    # Mathematical Concepts
    
    The quadratic formula is: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
    
    The integral of $x^2$ is:
    $$
    \int x^2 dx = \frac{x^3}{3} + C
    $$
  `;

  return <MarkdownViewer content={content} />;
}
```

#### Advanced Implementation
```tsx
import { MarkdownViewer } from '@/components/common';

function AdvancedMathComponent() {
  const complexContent = `
    # Advanced Mathematics
    
    ## Calculus
    
    The derivative of $f(x) = x^2$ is:
    $$
    f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} = 2x
    $$
    
    ## Linear Algebra
    
    The matrix multiplication:
    $$
    \begin{pmatrix}
    1 & 2 \\
    3 & 4
    \end{pmatrix}
    \begin{pmatrix}
    x \\
    y
    \end{pmatrix}
    =
    \begin{pmatrix}
    x + 2y \\
    3x + 4y
    \end{pmatrix}
    $$
  `;

  return (
    <div className="math-content">
      <MarkdownViewer content={complexContent} />
    </div>
  );
}
```

### Styling and Customization

#### Custom CSS Classes
```css
/* Mathematical formula styling */
.math-content {
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
}

.math-content .katex {
  font-size: 1.1em;
}

.math-content .katex-display {
  margin: 1.5em 0;
  text-align: center;
}

.math-content .katex-inline {
  margin: 0 0.2em;
}
```

#### Theme Integration
```tsx
import { useTheme } from '@/hooks/useTheme';

function ThemedMathComponent() {
  const { theme } = useTheme();
  
  return (
    <div className={`math-content ${theme}`}>
      <MarkdownViewer content={mathContent} />
    </div>
  );
}
```

## Formula Examples

### Basic Algebra
```latex
% Quadratic formula
$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

% Factoring
$(x + 1)(x - 1) = x^2 - 1$

% Completing the square
$x^2 + 2x + 1 = (x + 1)^2$
```

### Geometry
```latex
% Circle area
$A = \pi r^2$

% Circle circumference
$C = 2\pi r$

% Pythagorean theorem
$a^2 + b^2 = c^2$
```

### Trigonometry
```latex
% Basic trig functions
$\sin^2 \theta + \cos^2 \theta = 1$

% Law of sines
$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}$

% Law of cosines
$c^2 = a^2 + b^2 - 2ab\cos C$
```

### Statistics
```latex
% Mean
$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$

% Standard deviation
$\sigma = \sqrt{\frac{1}{n}\sum_{i=1}^{n} (x_i - \bar{x})^2}$

% Normal distribution
$f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$
```

## Advanced Features

### Multi-line Equations
```latex
$$
\begin{align}
f(x) &= x^2 + 2x + 1 \\
&= (x + 1)^2 \\
&= (x + 1)(x + 1)
\end{align}
$$
```

### Piecewise Functions
```latex
$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\
-x^2 & \text{if } x < 0
\end{cases}
$$
```

### Summations and Products
```latex
% Summation
$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$

% Product
$\prod_{i=1}^{n} i = n!$

% Nested operations
$\sum_{i=1}^{n} \sum_{j=1}^{m} a_{ij}$
```

## Performance Optimization

### Lazy Loading
```tsx
import { lazy, Suspense } from 'react';

const MarkdownViewer = lazy(() => import('@/components/common/MarkdownViewer'));

function OptimizedMathComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MarkdownViewer content={mathContent} />
    </Suspense>
  );
}
```

### Memoization
```tsx
import { memo } from 'react';

const MemoizedMarkdownViewer = memo(MarkdownViewer);

function MemoizedMathComponent({ content }) {
  return <MemoizedMarkdownViewer content={content} />;
}
```

## Testing and Validation

### Formula Validation
```typescript
// Validate LaTeX syntax
function validateLatex(latex: string): boolean {
  try {
    // Basic validation logic
    return /^\$.*\$$/.test(latex) || /^\$\$.*\$\$$/.test(latex);
  } catch (error) {
    return false;
  }
}
```

### Error Handling
```tsx
function SafeMathComponent({ content }) {
  try {
    return <MarkdownViewer content={content} />;
  } catch (error) {
    return (
      <div className="error">
        <p>Error rendering mathematical content</p>
        <pre>{error.message}</pre>
      </div>
    );
  }
}
```

## Best Practices

### Content Organization
- **Use Clear Headings** - Organize mathematical content with headings
- **Group Related Formulas** - Keep related equations together
- **Provide Context** - Explain what each formula represents
- **Use Examples** - Include worked examples

### Performance Considerations
- **Lazy Load** - Load mathematical content on demand
- **Memoize Components** - Prevent unnecessary re-renders
- **Optimize Images** - Compress mathematical diagrams
- **Cache Results** - Cache rendered mathematical content

### Accessibility
- **Alt Text** - Provide alternative text for mathematical content
- **Screen Reader Support** - Ensure compatibility with screen readers
- **Keyboard Navigation** - Support keyboard navigation
- **High Contrast** - Ensure sufficient contrast for readability

## Troubleshooting

### Common Issues

#### Formulas Not Rendering
- **Check Syntax** - Verify LaTeX syntax is correct
- **Escape Characters** - Ensure proper character escaping
- **CSS Loading** - Verify KaTeX CSS is loaded
- **JavaScript Errors** - Check browser console for errors

#### Styling Issues
- **CSS Conflicts** - Check for CSS conflicts
- **Font Loading** - Ensure mathematical fonts are loaded
- **Theme Issues** - Verify theme compatibility
- **Responsive Design** - Check mobile compatibility

#### Performance Issues
- **Large Documents** - Consider pagination for large documents
- **Complex Formulas** - Optimize complex mathematical expressions
- **Memory Usage** - Monitor memory usage for large documents
- **Loading Times** - Implement lazy loading for better performance

## Integration Examples

### Educational Materials
```tsx
function EducationalMaterial({ topic, content }) {
  return (
    <div className="educational-content">
      <h1>{topic}</h1>
      <MarkdownViewer content={content} />
      <div className="exercises">
        <h2>Practice Problems</h2>
        <MarkdownViewer content={exercises} />
      </div>
    </div>
  );
}
```

### Research Papers
```tsx
function ResearchPaper({ paper }) {
  return (
    <article className="research-paper">
      <header>
        <h1>{paper.title}</h1>
        <p>{paper.abstract}</p>
      </header>
      <section className="methodology">
        <MarkdownViewer content={paper.methodology} />
      </section>
      <section className="results">
        <MarkdownViewer content={paper.results} />
      </section>
    </article>
  );
}
```

---

**Mathematical formula rendering** in Base Library provides powerful tools for creating comprehensive educational materials with complex mathematical expressions and scientific notation.
