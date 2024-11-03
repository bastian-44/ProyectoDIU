import React from 'react'
import Acordeon from '../components/Acordeon'
import { NavLink } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>Preguntas Frecuentes</h1>

      <Acordeon title="Foro">
        <p>a</p>
      </Acordeon>

      <Acordeon title="Fechas">
        <p>- Control 1: xx/xx</p>
        <p>- Certamen 1: xx/xx</p>
        <p>- Control 2: xx/xx</p>
        <p>- Certamen 2: xx/xx</p>
        <p>- Control 3: xx/xx</p>
        <p>- Certamen 3: xx/xx</p>
      </Acordeon>

      <Acordeon title="Entregas">
        <p><NavLink to="/lightbulb" className="navlink">Entrega 1</NavLink></p>
        <p><NavLink to="/lightbulb" className="navlink">Entrega 2</NavLink></p>
        <p><NavLink to="/lightbulb" className="navlink">Entrega 3</NavLink></p>
      </Acordeon>

      <Acordeon title="Notas">
        <p>- Control 1</p>
        <ul>
          <li>Notas-Q1.xlsx</li>
        </ul>
        <p>- Certamen 1</p>
        <ul>
          <li>Notas-C1.xlsx</li>
        </ul>
      </Acordeon>

      <Acordeon title="Material">
        <Acordeon title="Certamen 1">
          <ul>
            <li>Material 1</li>
            <li>Material 2</li>
            <li>Material 3</li>
          </ul>
        </Acordeon>
        <Acordeon title="Certamen 2">
          <ul>
            <li>Material 1</li>
            <li>Material 2</li>
            <li>Material 3</li>
          </ul>
        </Acordeon>
        <Acordeon title="Certamen 3">
          <ul>
            <li>Material 1</li>
            <li>Material 2</li>
            <li>Material 3</li>
          </ul>
        </Acordeon>
      </Acordeon>
    </div>
  );
}

export default HomePage;