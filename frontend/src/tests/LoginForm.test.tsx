import * as ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { LoginForm } from '../components/LoginForm/LoginForm';
import '@testing-library/jest-dom';


describe('Login component tests', () => {
    let container:HTMLDivElement
    
    beforeEach(() =>{
        container=document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<Router>
            <LoginForm />
          </Router>, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
              <LoginForm />
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(2);
        expect(inputs[0].name).toBe('Email');
        expect(inputs[1].name).toBe('Password');

        const labels = container.querySelectorAll('label');
        expect(labels).toHaveLength(2);
    })


    

})



