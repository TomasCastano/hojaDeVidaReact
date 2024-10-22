import './App.css'

function App() {

    return (
        <>
                <header>
        <h1>Hoja de Vida</h1>
        <h3>Tomás Castaño Chica</h3>
    </header>
    <main>
        <section class="hobbies-section">
            <h3>Hobbies</h3>
            <ul>
                <li><b>Fútbol: </b>Disfruto mantenerse activo y competitivo a través del fútbol, lo que también me enseña a trabajar en equipo y a perseverar.</li>
                <li><b>Videojuegos: </b>Me apasiona explorar nuevos mundos y desafíos a través de los videojuegos, lo que alimenta mi creatividad y habilidades para la resolución de problemas.</li>
                <li><b>Programación Creativa: </b>Me encanta experimentar con nuevas ideas y proyectos de programación en mi tiempo libre, siempre buscando aprender y mejorar mis habilidades.</li>
                <li><b>Actualización en Desarrollo de Software: </b>Me mantengo al día con las últimas tendencias y noticias en el campo del desarrollo de software para asegurarme de estar siempre al tanto de las mejores prácticas y avances tecnológicos.</li>
                <li><b>Equilibrio Vida-Trabajo: </b>Valoro profundamente el tiempo que paso con mi familia y mis amigos, lo que me ayuda a mantener un equilibrio entre el trabajo y la vida personal.</li>
            </ul>
        </section>
        <section class="experience-section">
            <h3>Experiencia laboral</h3>
            <ol>
                <li>
                    <b>Auxiliar de Sistemas: </b><br />
                    <em>DATA 3000 SAS</em><br/>
                    2022 - 2023
                </li>
                <li>
                    <b>Desarrollador Front-End Jr: </b><br />
                    <em>DATA 3000 SAS</em><br/>
                    2024 - Actualmente
                </li>
            </ol>
        </section>
        <section class="academic-section">
            <h3>Experiencia Academica</h3>
            <ul>
                <li>
                    <b>Bachiller: </b><br/>
                    <em>Seminario Menor de Nuestra Señora del Rosario</em><br/>
                    2022
                </li>
                <li>
                    <b>Programación con Javascript: </b><br/>
                    <em>Coursera - Meta</em><br/>
                    2024
                </li>
                <li>
                    <b>React Basics: </b><br/>
                    <em>Coursera - Meta</em><br/>
                    2024
                </li>
                <li>
                    <b>Advanced React: </b><br/>
                    <em>Coursera - Meta</em><br/>
                    2024
                </li>
            </ul>
        </section>
        <section class="skills-section">
            <h3>Aptitudes</h3>
            <ul>
                <li><b>Inglés Intermedio</b></li>
                <li><b>Adaptabilidad</b></li>
                <li><b>Creatividad</b></li>
                <li><b>Trabajo en Equipo</b></li>
                <li><b>Formación Continua</b></li>
                <li><b>Desarrollo Web: </b>HTML, CSS, Javascript, React</li>
            </ul>
        </section>
    </main>
    <footer class="contact-section">
        <h3>Contáctame</h3>
        <form>
            <fieldset>
                <div class="sender-info">
                    <label for="name">Nombre:</label>
                    <input name="name" id="name" type="text" />
                    <label for="email">Correo Electrónico:</label>
                    <input name="email" id="email" type="Email" tabindex="2" />
                </div>
                <textarea name="message" id="message" placeholder="Asunto"></textarea>
            </fieldset>
            <input type="submit" value="Enviar"/>
        </form>
    </footer>
        </>
    )
}

export default App
