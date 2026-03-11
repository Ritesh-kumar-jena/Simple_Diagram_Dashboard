# Simple_Diagram_Dashboard

A React dashboard that allows users to upload a diagram image and view a list of circuit components.

## Features

- Upload diagram image (PNG/JPG)
- Preview uploaded image
- Display uploaded file name
- Replace uploaded image
- Zoom In / Zoom Out / Reset view
- Sidebar with components list
- Highlight selected component
- Responsive layout 

## Tech Stack

- React (Vite)
- React Hooks (useState, useEffect)
- Tailwind CSS
- Axios
- react-zoom-pan-pinch

## Folder Structure
```
src
├── components
│ ├── UploadBox.jsx
│ ├── DiagramViewer.jsx
│ └── ComponentList.jsx
├── pages
│ └── Dashboard.jsx
├── services
│ └── api.js
├── App.jsx
├── main.jsx
└── index.css
```
## Installation
```
Clone the repository
```
```bash
git clone https://github.com/Ritesh-kumar-jena/Simple_Diagram_Dashboard.git
```
```bash
Go to the project folder
```
```bash
cd diagram-dashboard
```
```
Install dependencies
```
```
npm install
```
```bash
Run the project

npm run dev
```

## Mock API Data
```bash
[
  { "id": 1, "name": "Resistor" },
  { "id": 2, "name": "Capacitor" },
  { "id": 3, "name": "Diode" },
  { "id": 4, "name": "Transistor" }
]
```

## 💼 Author

**Ritesh Kumar Jena**  
Frontend Developer & MERN Stack Enthusiast 
- Email: jenariteshkumar85@gmail.com  
[GitHub](https://github.com/Ritesh-kumar-jena) | [LinkedIn](http://www.linkedin.com/in/ritesh-kumar-jena-aa6407270)

---