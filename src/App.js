import './App.css';
import {useMemo, useState} from "react";
import classname from 'classname';

function App() {
    const [carbonhydrates, setCarbonHydrates] = useState();
    const [weight, setWeight] = useState();
    const result = useMemo(() => carbonhydrates / 100 * weight, [carbonhydrates, weight]);

    console.log({carbonhydrates, weight, result});
    return (
        <div className='d-flex'>
            <div className='container-fluid container-md mt-auto'>
                <div className="mb-5">
                    <label htmlFor="carbonhydratesInput" className="form-label fw-bold">Kohlenhydrate pro 100g</label>
                    <input type="number" className="form-control form-control-lg" id="carbonhydratesInput"
                           placeholder="Kohlenhydrate pro 100g" value={carbonhydrates}
                           onChange={e => setCarbonHydrates(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="weightInput" className="form-label fw-bold">Gewicht in Gramm</label>
                    <input type="number" className="form-control form-control-lg" id="weightInput"
                           placeholder="Gewicht in Gramm" value={weight} onChange={e => setWeight(e.target.value)}/>
                </div>
                <div className={classname('text-center badge bg-secondary d-flex', {'bg-danger': !result || result === 0})}
                     style={{whitespce: 'break-spaces', padding: 50}}>
                    <h1 className='mb-0 text-center w-100'>{result ? result.toLocaleString('de-DE', {minimumFractionDigits: 0}) + ' KH' : 'Bitte beide Felder ausfüllen!'}</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
