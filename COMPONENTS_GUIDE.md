# Quick Reference - DaisyUI & Animation Usage

## 🎨 DaisyUI Components

### Buttons
```tsx
// Primary button
<button className="btn btn-primary">Click me</button>

// Accent button (gold)
<button className="btn btn-accent">Contact Us</button>

// Outline button
<button className="btn btn-outline">Learn More</button>

// Large button
<button className="btn btn-lg">Get Started</button>

// Button with icon
<button className="btn btn-primary gap-2">
  <Icon className="h-5 w-5" />
  Text
</button>
```

### Badges
```tsx
// Primary badge
<span className="badge badge-primary">New</span>

// Accent badge
<span className="badge badge-accent">Featured</span>

// Success badge
<span className="badge badge-success">Completed</span>

// Warning badge
<span className="badge badge-warning">In Progress</span>

// Info badge
<span className="badge badge-info">Planning</span>

// Large badge
<span className="badge badge-lg">Large</span>
```

### Forms
```tsx
// Form input
<div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input 
    type="text" 
    className="input input-bordered input-lg" 
    placeholder="Your name"
  />
</div>

// Select dropdown
<select className="select select-bordered select-lg">
  <option>Option 1</option>
  <option>Option 2</option>
</select>

// Textarea
<textarea 
  className="textarea textarea-bordered textarea-lg" 
  placeholder="Message"
/>

// Checkbox
<input type="checkbox" className="checkbox checkbox-primary" />
```

### Alerts
```tsx
// Success alert
<div className="alert alert-success">
  <svg>...</svg>
  <span>Success message!</span>
</div>

// Error alert
<div className="alert alert-error">
  <svg>...</svg>
  <span>Error message!</span>
</div>

// Info alert
<div className="alert alert-info">
  <span>Info message!</span>
</div>
```

### Loading
```tsx
// Spinner
<span className="loading loading-spinner"></span>

// Large spinner
<span className="loading loading-spinner loading-lg"></span>

// In button
<button className="btn" disabled>
  <span className="loading loading-spinner"></span>
  Loading...
</button>
```

---

## 🎭 Animation Classes

### Fade Animations
```tsx
// Simple fade in
<div className="animate-fade-in">Content</div>

// Fade in from bottom
<div className="animate-fade-in-up">Content</div>

// Fade in from top
<div className="animate-fade-in-down">Content</div>
```

### Slide Animations
```tsx
// Slide from left
<div className="animate-slide-in-left">Content</div>

// Slide from right
<div className="animate-slide-in-right">Content</div>
```

### Scale Animation
```tsx
// Scale grow
<div className="animate-scale-in">Content</div>
```

### Stagger Delays
```tsx
// Sequential animations
<div className="animate-fade-in-up stagger-1">Item 1</div>
<div className="animate-fade-in-up stagger-2">Item 2</div>
<div className="animate-fade-in-up stagger-3">Item 3</div>

// Or with inline style
{items.map((item, index) => (
  <div 
    key={item.id}
    className="animate-fade-in-up"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {item.content}
  </div>
))}
```

---

## 🎨 Utility Classes

### Gradients
```tsx
// Primary gradient
<div className="bg-gradient-primary">Content</div>

// Accent gradient
<div className="bg-gradient-accent">Content</div>

// Custom gradient
<div className="bg-gradient-to-br from-primary via-primary-dark to-primary">
  Content
</div>
```

### Glass Effect
```tsx
<div className="glass-effect p-6 rounded-lg">
  Glassmorphism content
</div>
```

### Hover Effects
```tsx
// Hover lift
<div className="card hover-lift">Content</div>

// Hover scale
<button className="btn hover:scale-105 transition-transform">
  Click me
</button>

// Hover translate
<div className="hover:-translate-y-2 transition-all duration-300">
  Lift on hover
</div>
```

---

## 🖼️ Image Usage

### Hero Images
```tsx
import Image from "next/image";

<div className="relative h-[60vh]">
  <Image
    src="/images/banner.png"
    alt="Description"
    fill
    className="object-cover"
    priority // For above-the-fold images
  />
  <div className="absolute inset-0 bg-primary/80" /> {/* Overlay */}
</div>
```

### Card Images
```tsx
<div className="relative aspect-[16/9] overflow-hidden rounded-xl">
  <Image
    src="/images/resim1.png"
    alt="Description"
    fill
    className="object-cover transition-transform duration-500 group-hover:scale-110"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

---

## 🎯 Common Patterns

### Card with Hover Effect
```tsx
<div className="card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Animated Section
```tsx
<section className="section">
  <div className="container-custom">
    <div className="text-center animate-fade-in-up">
      <h2>Section Title</h2>
      <p>Description</p>
    </div>
    
    <div className="grid grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div 
          key={item.id}
          className="animate-fade-in-up"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <Card {...item} />
        </div>
      ))}
    </div>
  </div>
</section>
```

### Button Group
```tsx
<div className="flex gap-4">
  <button className="btn btn-accent btn-lg gap-2">
    <Icon className="h-5 w-5" />
    Primary Action
  </button>
  <button className="btn btn-outline btn-lg">
    Secondary Action
  </button>
</div>
```

### Status Badge
```tsx
const statusColors = {
  completed: "badge-success",
  inProgress: "badge-warning",
  planning: "badge-info",
};

<span className={`badge ${statusColors[status]}`}>
  {status}
</span>
```

---

## 📱 Responsive Patterns

### Mobile-First Grid
```tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Items */}
</div>
```

### Conditional Display
```tsx
{/* Hide on mobile, show on desktop */}
<div className="hidden lg:block">Desktop only</div>

{/* Show on mobile, hide on desktop */}
<div className="block lg:hidden">Mobile only</div>
```

---

## 🎨 Color Reference

```tsx
// Primary colors
text-primary         // #00436A (blue)
bg-primary
border-primary

// Accent colors
text-accent          // #C6A862 (gold)
bg-accent
border-accent

// Neutral colors
text-neutral         // #5A5A5A
text-neutral-dark    // Darker gray
text-neutral-light   // Lighter gray

// Opacity variants
bg-primary/80        // 80% opacity
bg-accent/10         // 10% opacity
```

---

## ⚡ Performance Tips

1. Use `animate-fade-in` classes instead of JavaScript animations
2. Add `priority` to above-the-fold images
3. Use proper `sizes` attribute for responsive images
4. Keep stagger delays under 0.3s per item
5. Use `transition-all` sparingly (prefer specific properties)

---

**ESGÜVENİR İnşaat - Kaliteli ve Modern Web Tasarımı**
