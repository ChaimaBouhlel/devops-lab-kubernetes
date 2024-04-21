# Utiliser une image de base Node.js
FROM node:14-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Exposer le port 3000 pour accéder à l'application
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
