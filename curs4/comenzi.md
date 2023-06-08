```
npm i -g @vue/cli
vue --version

vue create frontend
 // select Vue 3
cd frontend
npm run serve

npm run build

npm install --save vue-router axios 
npm install --save bootstrap
npm install --save @popperjs/core

add in src/main.js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
```
# In src facem http-common.js
# Facem service: /services/UserService.js

# Facem componentele necesare
```
sudo npm install -g vue-generate-component
vgc –help
vgc -s src/components/Home
vgc -s src/components/AddUser
vgc -s src/components/Admin
vgc -s src/components/ProfilUser
vgc -s src/components/NavBar
vgc -s src/components/Footer
```

# In src facem router.js 
# Adaugam rutele in main.js
# modificam src/App.vue

