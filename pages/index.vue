<template>
    <div class="competition">
      <h1>BRAINOBRAIN SKILL DEVELOPMENT </h1>
  
      <div class="competition-links">
        <h2><router-link :to="{ path: '/login', query: { competition: 1 } }">Competition 1</router-link></h2>
        <h2><router-link :to="{ path: '/login', query: { competition: 2 } }">Competition 2</router-link></h2>
        <h2><router-link :to="{ path: '/login', query: { competition: 3 } }">Competition 3</router-link></h2>
        <h2><router-link :to="{ path: '/login', query: { competition: 4 } }">Competition 4</router-link></h2>
        <h2><router-link :to="{ path: '/login', query: { competition: 5 } }">Competition 5</router-link></h2>
      </div>
    </div>
  </template>
  
  <style scoped>
  .competition {
    text-align: center;
    background-color: rgb(132, 94, 168);
    color: antiquewhite;
    padding: 40px;
    border-radius: 10px;
  }
  
  .competition-links h2 {
    margin: 20px 0;
  }
  
  .competition-links a {
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 5px;
    color: white;
    display: inline-block;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .competition-links a:nth-child(1) {
    background-color: #FF5733; /* Competition 1 color */
  }
  
  .competition-links a:nth-child(2) {
    background-color: #33FF57; /* Competition 2 color */
  }
  
  .competition-links a:nth-child(3) {
    background-color: #3357FF; /* Competition 3 color */
  }
  
  .competition-links a:nth-child(4) {
    background-color: #FF33A1; /* Competition 4 color */
  }
  
  .competition-links a:nth-child(5) {
    background-color: #FFC300; /* Competition 5 color */
  }
  
  .competition-links a:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }
  </style>
  