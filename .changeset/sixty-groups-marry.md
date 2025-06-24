---
"@cloudoperators/juno-ui-components": major
---

# Migration Guide: Tailwind CSS 4 Update

## 🚀 Major Changes

This release includes a **BREAKING CHANGE** migration to Tailwind CSS 4. Please follow this guide carefully to update your application.

## 📋 Required Changes

### 1. Remove JN Prefixes

**Remove all `jn-` and `jn:` prefixes** from your class names throughout your application.

```diff
- <div className="jn-bg-blue-500 jn:hover:bg-blue-600">
+ <div className="bg-blue-500 hover:bg-blue-600">

- <div className="jn-flex jn-items-center jn:md:flex-col">
+ <div className="flex items-center md:flex-col">
```

### 2. Update Tailwind Configuration

**Remove `tailwind.config.js`** entirely and replace it with a simple CSS import approach.

#### Before

```javascript
// tailwind.config.js - DELETE THIS FILE
module.exports = {
  // ... your config
}
```

#### After

Create or update your main `styles.css` file:

```css
/* styles.css */
@import "tailwindcss";
@import "@cloudoperators/juno-ui-components/theme.css";
```

### 3. Convert SCSS to CSS

**Rename and convert all `.scss` files to `.css`** files:

```diff
- styles.scss
+ styles.css

- components.scss  
+ components.css
```

Update your import statements:

```diff
- import './styles.scss'
+ import './styles.css'
```

### 4. Remove PostCSS Dependencies

**Remove the following packages** from your `package.json`:

```bash
npm uninstall autoprefixer postcss
```

```diff
{
  "devDependencies": {
-   "autoprefixer": "^10.x.x",
-   "postcss": "^8.x.x"
  }
}
```

### 5. Update Vite Configuration

**Install the new Tailwind Vite plugin:**

```bash
npm install -D @tailwindcss/vite@^4.1.7
```

**Update your `vite.config.js`:**

```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    // ... your other plugins
  ],
})
```

**Remove PostCSS configuration** if you have a `postcss.config.js`:

```diff
- // postcss.config.js - DELETE THIS FILE
- module.exports = {
-   plugins: {
-     tailwindcss: {},
-     autoprefixer: {},
-   },
- }
```

## 🔄 Migration Checklist

- [ ] Remove all `jn-` and `jn:` prefixes from class names
- [ ] Delete `tailwind.config.js`
- [ ] Create/update `styles.css` with required imports
- [ ] Convert all `.scss` files to `.css`
- [ ] Update import statements for renamed CSS files
- [ ] Uninstall `autoprefixer` and `postcss` packages
- [ ] Install `@tailwindcss/vite@^4.1.7`
- [ ] Update `vite.config.js` with new plugin
- [ ] Delete `postcss.config.js` (if exists)
- [ ] Test your application thoroughly

## ⚠️ Important Notes

- **This is a breaking change** - test thoroughly after migration
- **Update incrementally** - migrate one component/file at a time if needed
- **Check for any custom CSS** that might depend on the old configuration

## 🆘 Troubleshooting

If you encounter issues:

1. Ensure all `jn-` prefixes are removed
2. Verify your `styles.css` has the correct imports
3. Check that the Vite plugin is properly configured
4. Clear your build cache: `rm -rf node_modules/.vite`

## 📚 Additional Resources

- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS 4 Migration Guide](https://tailwindcss.com/docs/upgrade-guide)

---

For questions or issues with this migration, please refer to the project documentation or open an issue.
