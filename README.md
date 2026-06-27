# MB MARININI - Fashion Store (React Project)

## პროექტის აღწერა

MB MARININI არის თანამედროვე ონლაინ fashion მაღაზიის ვებ აპლიკაცია, შექმნილი React-ის გამოყენებით. პროექტი წარმოადგენს LW Waikiki-ის ინსპირაციით შექმნილ e-commerce პლატფორმას, რომელიც უზრუნველყოფს მარტივ, ინტერაქტიულ და რესპონსიულ შოპინგ გამოცდილებას.

პროექტი შესრულებულია უნივერსიტეტის დავალების ფარგლებში და აკმაყოფილებს React-ის გამოყენებით ვებ აპლიკაციის აგების ძირითად მოთხოვნებს.

---

## გამოყენებული ტექნოლოგიები

* React (Functional Components)
* React Hooks (useState, useEffect, useContext, useMemo)
* React Router (ნავიგაცია გვერდებს შორის)
* Axios (API ინტეგრაცია)
* LocalStorage (კალათისა და თემის შენახვა)
* SessionStorage (ბოლო ნანახი გვერდი)
* Framer Motion (ანიმაციები და მოდალური ფანჯრები)
* SASS / SCSS (სტილიზაცია)
* Responsive Design (მობილური, ტაბლეტი, დესკტოპი)

---

## გვერდები

* მთავარი გვერდი (Home)
* ტანსაცმლის კატალოგი (Clothes Page)
* კალათა (Cart)
* ჩვენს შესახებ (About Us)
* 404 გვერდი (Not Found)

---

## ფუნქციონალი

* პროდუქციის მიღება API-დან (Axios)
* კალათაში დამატება და წაშლა
* კალათის შენახვა LocalStorage-ში
* Dark / Light Theme მხარდაჭერა
* ქართული და ინგლისური ენის მხარდაჭერა
* ბოლო ნანახი გვერდის შენახვა SessionStorage-ში
* ანიმაციები და მოდალური ფანჯრები Framer Motion-ის გამოყენებით
* სრულად რესპონსიული დიზაინი ყველა მოწყობილობაზე

---

## პროექტის სტრუქტურა

* src/App.jsx — მთავარი აპლიკაცია და routing კონფიგურაცია
* src/main.jsx — React entry point
* src/context — Theme, Language და Cart კონტექსტები
* src/hooks — Custom hooks (storage logic)
* src/services/api.js — Axios API client
* src/components — UI კომპონენტები (layout, cards, modals)
* src/pages — გვერდები (Home, Clothes, Cart, About, 404)
* src/styles — გლობალური SCSS სტილები

---

## გაშვების ინსტრუქცია

### დამოკიდებულებების ინსტალაცია

npm install

### დეველოპმენტის რეჟიმი

npm run dev

### production build

npm run build

---

## დეპლოიმენტი

პროექტი შესაძლებელია განთავსდეს შემდეგ პლატფორმებზე:

* Netlify
* Vercel
* GitHub Pages

პროექტი სრულად თავსებადია Vite + React სტატიკურ build-თან.

---

## მოთხოვნების შესრულება

* React functional components გამოყენებულია
* React Hooks გამოყენებულია
* React Router გამოყენებულია ნავიგაციისთვის
* API ინტეგრაცია შესრულებულია Axios-ით
* LocalStorage და SessionStorage გამოყენებულია
* პროექტი არის რესპონსიული
* ანიმაციები და მოდალური ფანჯრები გამოყენებულია

---

## ბონუს ქულები

* SASS/SCSS გამოყენება
* Dark / Light theme
* ქართული და ინგლისური ენის მხარდაჭერა
* Framer Motion ანიმაციები

---

## შენიშვნა

კალათა, თემა და ენა ინახება LocalStorage-ში, ხოლო ბოლო ნანახი გვერდი SessionStorage-ში, რათა მომხმარებლის გამოცდილება იყოს უფრო კომფორტული და მუდმივი.

---

## დასრულების თარიღი

27 ივნისი
