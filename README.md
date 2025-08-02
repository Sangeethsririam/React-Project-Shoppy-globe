shoppy-globe/
│
├── public/
│ └── index.html
│
├── src/
│ ├── assets/  
│
│ ├── components/  
│ │ ├── CartItem.jsx
│ │ ├── CartItem.css
│ │ ├── Header.jsx
│ │ ├── Header.css
│ │ ├── ProductItem.jsx
│ │ └── ProductItem.css
│
│ ├── pages/  
│ │ ├── Home.jsx
│ │ ├── Home.css
│ │ ├── ProductDetail.jsx
│ │ ├── ProductDetail.css
│ │ ├── Checkout.jsx
│ │ ├── Cart.jsx
│ │ ├── Cart.css
│ │ ├── NotFound.jsx
│ │ └── NotFound.css
│
│ ├── redux/  
│ │ ├── store.js
│ │ ├── productSlice.js
│ │ └── cartSlice.js
│
│ ├── hooks/  
│ │ └── useFetchProducts.js
│
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
│
├── .gitignore
├── package-lock.json
├── package.json
├── vite.config.js
└── README.md

how to run open this folder
open the terminal type npm run dev

pushing to git

cd "C:\Users\sange\Desktop\React Project\shoppy-globe"

git init
git add .
git commit -m "Initial commit - ShoppyGlobe React project"

git remote add origin https://github.com/Sangeethsririam/React-Project-Shoppy-globe.git
git branch -M main
git push -u origin main
git push
