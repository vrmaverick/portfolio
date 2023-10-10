import React from 'react';
import './style.css'
import './index.css'
function Home() {
    return (
        <section id="home">
            <div className="animation"></div>
            <h2 className="mp">I am Vedant Ranade,</h2>
            <h2 className="mp">an enthusiastic programmer</h2>

            <main className="container mx-auto mt-8 px-4">
                <section className="bg-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
                    <p className="text-gray-600">
                        Welcome to my portfolio! I'm a passionate Learner and currently pursuing my Bachelors in 
                        <b>Artificial Intelligence and Data Science</b><br />
                        from <b>Mumbai University</b><br /><br />
                        Please feel free to contact me for any suggestions <br /> Do check out my :
                        <a href="https://www.example.com" className="text-blue-600 hover:underline">Github</a><br />
                        Also do connect on :
                        <a href="https://www.example.com" className="text-blue-600 hover:underline">LinkedIn</a>
                    </p>
                </section>
            </main>
        </section>
    );
}

export default Home;
