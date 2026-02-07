It is showing because of Next.js File-based Metadata.

Even though you removed the icons property from 
layout.tsx
, Next.js automatically looks for special files in your src/app/ directory and uses them if present.

I checked your project structure and found:

src/app/favicon.ico
src/app/icon.png
These files are automatically detected and served as your favicon. If you want to remove or change the favicon:



