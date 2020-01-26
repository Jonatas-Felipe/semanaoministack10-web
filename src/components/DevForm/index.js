import React, { useEffect, useState } from 'react';
import './style.css';

function DevForm({ onSubmit }) {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGitHubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const {latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        );
      }, []);

    async function handleSubmit(e){
        e.preventDefault();

        onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGitHubUsername('');
        setTechs('');
    }

  return(
    <form onSubmit={handleSubmit}>
        <div className="inputBlock">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input type="text" name="github_username" id="github_username" onChange={e => setGitHubUsername(e.target.value)} required />
        </div>

        <div className="inputBlock">
        <label htmlFor="techs">Tecnologias</label>
        <input type="text" name="techs" id="techs" onChange={e => setTechs(e.target.value)} required />
        </div>

        <div className="inputGroup">
        <div className="inputBlock">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" name="latitude" id="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} required />
        </div>

        <div className="inputBlock">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" name="longitude" id="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} required />
        </div>
        </div>

        <button type="submit">Salvar</button>
    </form>
  );
}

export default DevForm;
