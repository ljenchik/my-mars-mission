import * as ReactDom from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import '@testing-library/jest-dom';
import { AccountForm } from '../components/AccountForm/AccountForm';


describe('Login component tests', () => {
    let container:HTMLDivElement
    
    beforeEach(() =>{
        container=document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<Router>
            <AccountForm />
          </Router>, container)
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
              <AccountForm />
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(4);
    })


    

})
