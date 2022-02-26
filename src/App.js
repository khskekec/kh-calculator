import './App.css';
import {useMemo, useState} from "react";
import classname from 'classname';

function App() {
    const [carbonHydrates, setCarbonHydrates] = useState();
    const [weight, setWeight] = useState();
    const result = useMemo(() => carbonHydrates / 100 * weight, [carbonHydrates, weight]);

    return (
        <div className='d-flex'>
            <div className='container-fluid container-md mt-auto'>
                <h1 className='text-center mb-5 body-caption'>💖 Hi Jana 💖</h1>
                <div className="mb-5">
                    <label htmlFor="carbonhydratesInput" className="form-label fw-bold">Kohlenhydrate pro 100g</label>
                    <input type="number" className="form-control form-control-lg" id="carbonhydratesInput"
                           placeholder="Kohlenhydrate pro 100g" value={carbonHydrates}
                           onChange={e => setCarbonHydrates(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label htmlFor="weightInput" className="form-label fw-bold">Gewicht in Gramm</label>
                    <input type="number" className="form-control form-control-lg" id="weightInput"
                           placeholder="Gewicht in Gramm" value={weight} onChange={e => setWeight(e.target.value)}/>
                </div>
                <div className={classname('text-center badge bg-pink d-flex')}
                     style={{padding: 50}}>
                    <h1 className='mb-0 text-center w-100' style={{whiteSpace: 'normal'}}>{result ? result.toFixed(2).replace('.', ',') + ' gKH' : 'Bitte beide Felder ausfüllen!'}</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
