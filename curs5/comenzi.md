# Configurare React application

```
npm uninstall -g create-react-app

npm i create-react-app -g 

npm view react version

create-react-app demoapp
sau 
// npx -v 
// which npx   //verificam daca npx este instalat si unde 
//https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/
npx create-react-app demoapp
create-react-app demoapp

cd demoapp
npm start
```
### facem o componenta
```
function Welcome(props) {
  return <h1>Bine ai venit {props.name} la React</h1>
}
```
### Apoi o folosim 
```
 <Welcome name="Mihai" />
```

### La final
```
npm run build
```
### Adaugam rutele
```
npm i -D react-router-dom
sau sa facem upgrade
npm i -D react-router-dom@latest
```
#### Verificam pe pachete locle avem instalate
```
npm list --depth=0
```

### Facem un foldere pages in src
### in acest folder pages facem 5 componente
```
Layout.js
Home.js
Blog.js
Contact.js
NoPage.js
```

### in index.js adaugam
```
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


<BrowserRouter>
  <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route  path="/home" element={<Home />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

### in Layout 
```
import { Outlet, Link } from "react-router-dom";

<>
  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
  <Outlet />
</>
```
