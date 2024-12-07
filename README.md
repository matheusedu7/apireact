# **Documentação do Projeto React Native com API Backend**

Este projeto consiste em um aplicativo desenvolvido em **React Native** utilizando o **Expo** no frontend, integrado a uma API REST desenvolvida em **Node.js** com o framework **Express** no backend. O objetivo principal do projeto é gerenciar itens com informações de localização.

> **Nota:** Esta aplicação é uma base funcional, mas ainda não está 100% completa. Algumas funcionalidades podem ser refinadas, como exibição mais avançada da localização ou validações mais robustas no frontend e backend.

---

## **1. Funcionalidades do Projeto**

### **Frontend (React Native)**
- **Exibição de Itens:** Lista de itens cadastrados exibidos com nome, descrição e localização (latitude e longitude).
- **Adição de Novos Itens:** Formulário para adicionar novos itens com captura automática da localização do dispositivo.
- **Integração com Backend:** Comunicação via API REST utilizando Axios.

### **Backend (Node.js)**
- **Rota `GET /items`:** Retorna todos os itens cadastrados.
- **Rota `POST /items`:** Permite adicionar um novo item com nome, descrição e localização.

---

## **2. Tecnologias Utilizadas**

### **Frontend**
- React Native
- Expo
- Axios
- Expo Location (para captura de localização)

### **Backend**
- Node.js
- Express
- CORS (para comunicação entre frontend e backend)

### **Gerenciamento de Código**
- Git
- GitHub

---

## **3. Estrutura do Projeto**

### **Frontend (React Native)**
```plaintext
app/
├── components/
│   ├── ItemForm.js       # Formulário para adicionar novos itens
│   ├── ItemList.js       # Lista de itens
├── services/
│   ├── api.js            # Configuração do Axios para comunicação com o backend
├── App.js                # Arquivo principal do app
├── app.json              # Configuração do Expo
├── package.json          # Dependências do projeto
